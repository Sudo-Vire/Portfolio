// Inject CSS
if (typeof document !== "undefined" && !document.getElementById("tetris-style")) {
  const link = document.createElement("link");
  link.id = "tetris-style";
  link.rel = "stylesheet";
  link.href = "assets/functions/tetrisGame/tetrisGame.css";
  document.head.appendChild(link);
}

Object.assign(View, {
  renderTetrisIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    let step = 0;
    const interval = setInterval(() => {
      if (!document.body.contains(canvas)) {
        clearInterval(interval);
        return;
      }
      step++;
      const style = getComputedStyle(document.body);
      const ink = style.getPropertyValue('--ink').trim() || '#090b0a';
      const line = style.getPropertyValue('--line').trim() || '#1b221d';
      const cyan = style.getPropertyValue('--cyan').trim() || '#91f3a8';
      const greenDim = style.getPropertyValue('--green-dim').trim() || '#087d2a';

      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = line;
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += 8) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += 8) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      const sz = 8;
      // Bottom stationary pieces stack where Z fits (tertiary color: greenDim)
      const stack = [
        {x: 1, y: 5, color: greenDim},
        {x: 2, y: 5, color: greenDim},
        {x: 1, y: 6, color: greenDim},
        {x: 2, y: 6, color: greenDim},
        {x: 3, y: 6, color: greenDim},
        {x: 4, y: 6, color: greenDim},
        {x: 5, y: 5, color: greenDim},
        {x: 5, y: 6, color: greenDim}
      ];

      stack.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x * sz + 1, b.y * sz + 1, sz - 2, sz - 2);
      });

      // Z piece falling down to bottom
      const cycle = step % 28;
      const targetRow = 4;
      const currentRow = cycle < 20 ? Math.min(targetRow, Math.floor(cycle / 4)) : targetRow;
      const currentCol = 2;

      const zBlocks = [
        {x: currentCol + 0, y: currentRow + 0},
        {x: currentCol + 1, y: currentRow + 0},
        {x: currentCol + 1, y: currentRow + 1},
        {x: currentCol + 2, y: currentRow + 1}
      ];

      zBlocks.forEach(b => {
        ctx.fillStyle = cyan;
        ctx.shadowColor = cyan;
        ctx.shadowBlur = 4;
        ctx.fillRect(b.x * sz + 1, b.y * sz + 1, sz - 2, sz - 2);
        ctx.shadowBlur = 0;
      });
    }, 150);
  },

  openTetrisModal() {
    let overlay = document.querySelector(".tetris-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "tetris-modal-overlay";
      overlay.innerHTML = `
        <div class="tetris-modal-container">
          <div class="tetris-header">
            <h3 class="tetris-title">CYBER TETRIS // ARCADE</h3>
            <button class="tetris-close-btn" type="button">×</button>
          </div>
          <div class="tetris-stats">
            <span id="tetris-score">SCORE: 0</span>
            <span id="tetris-lines">LINES: 0</span>
            <span id="tetris-hi">HI: 0</span>
          </div>
          <div class="tetris-game-canvas-wrap">
            <canvas class="tetris-canvas" id="tetris-game-canvas" width="200" height="400"></canvas>
          </div>
          <p class="tetris-controls-hint">ARROWS/WASD: MOVE/ROTATE | DOWN: SOFT DROP | SPACE: HARD DROP</p>
          <div class="tetris-touch-pad">
            <button class="tetris-touch-btn" data-action="left">◀</button>
            <button class="tetris-touch-btn" data-action="rotate">↻</button>
            <button class="tetris-touch-btn" data-action="right">▶</button>
            <button class="tetris-touch-btn" data-action="drop">▼</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".tetris-close-btn").addEventListener("click", () => {
        this.closeTetrisModal();
      });
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeTetrisModal();
      });

      this.initTetrisEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.tetrisReset) this.tetrisReset();
  },

  closeTetrisModal() {
    const overlay = document.querySelector(".tetris-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.tetrisPause) this.tetrisPause();
  },

  initTetrisEngine(overlay) {
    const canvas = overlay.querySelector("#tetris-game-canvas");
    const ctx = canvas.getContext("2d");
    const scoreEl = overlay.querySelector("#tetris-score");
    const linesEl = overlay.querySelector("#tetris-lines");
    const hiEl = overlay.querySelector("#tetris-hi");

    const COLS = 10;
    const ROWS = 20;
    const BLOCK = 20;
    let grid = Array.from({length: ROWS}, () => Array(COLS).fill(0));
    let score = 0;
    let lines = 0;
    let hi = parseInt(localStorage.getItem("cyber_tetris_hi") || "0");
    hiEl.textContent = `HI: ${hi}`;

    let gameOver = false;
    let isPaused = false;
    let dropInterval = 500;
    let dropCounter = 0;
    let lastTime = 0;

    const SHAPES = [
      [],
      [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], // I
      [[2,0,0],[2,2,2],[0,0,0]], // J
      [[0,0,3],[3,3,3],[0,0,0]], // L
      [[4,4],[4,4]], // O
      [[0,5,5],[5,5,0],[0,0,0]], // S
      [[0,6,0],[6,6,6],[0,0,0]], // T
      [[7,7,0],[0,7,7],[0,0,0]]  // Z
    ];

    const COLORS = [
      null,
      '#91f3a8', // Cyan/Green
      '#20ef4f', // Green
      '#ffaa00', // Orange
      '#ffff00', // Yellow
      '#ff2244', // Red
      '#aa00ff', // Purple
      '#00ffff'  // Bright Cyan
    ];

    let player = {
      pos: {x: 0, y: 0},
      matrix: null,
      shapeId: 0
    };

    function spawnPiece() {
      const id = Math.floor(Math.random() * 7) + 1;
      player.matrix = SHAPES[id];
      player.shapeId = id;
      player.pos.y = 0;
      player.pos.x = Math.floor((COLS - player.matrix[0].length) / 2);
      if (checkCollision(player.matrix, player.pos)) {
        gameOver = true;
      }
    }

    function checkCollision(mat, pos) {
      for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {
          if (mat[r][c] !== 0) {
            let nx = pos.x + c;
            let ny = pos.y + r;
            if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
            if (ny >= 0 && grid[ny][nx] !== 0) return true;
          }
        }
      }
      return false;
    }

    function merge() {
      player.matrix.forEach((row, r) => {
        row.forEach((val, c) => {
          if (val !== 0) {
            let ny = player.pos.y + r;
            let nx = player.pos.x + c;
            if (ny >= 0 && ny < ROWS && nx >= 0 && nx < COLS) {
              grid[ny][nx] = player.shapeId;
            }
          }
        });
      });
    }

    function clearLines() {
      let rowCount = 0;
      outer: for (let r = ROWS - 1; r >= 0; r--) {
        for (let c = 0; c < COLS; c++) {
          if (grid[r][c] === 0) continue outer;
        }
        const row = grid.splice(r, 1)[0].fill(0);
        grid.unshift(row);
        r++;
        rowCount++;
      }
      if (rowCount > 0) {
        lines += rowCount;
        score += rowCount * 100 * rowCount;
        scoreEl.textContent = `SCORE: ${score}`;
        linesEl.textContent = `LINES: ${lines}`;
        if (score > hi) {
          hi = score;
          hiEl.textContent = `HI: ${hi}`;
          localStorage.setItem("cyber_tetris_hi", hi);
        }
        dropInterval = Math.max(150, 500 - (lines * 15));
      }
    }

    function rotate(mat) {
      const N = mat.length;
      let res = Array.from({length: N}, () => Array(N).fill(0));
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          res[c][N - 1 - r] = mat[r][c];
        }
      }
      return res;
    }

    function playerRotate() {
      let x = player.pos.x;
      let offset = 1;
      let oldMat = player.matrix;
      player.matrix = rotate(player.matrix);
      while (checkCollision(player.matrix, player.pos)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
          player.matrix = oldMat;
          player.pos.x = x;
          return;
        }
      }
    }

    function playerMove(dir) {
      player.pos.x += dir;
      if (checkCollision(player.matrix, player.pos)) {
        player.pos.x -= dir;
      }
    }

    function playerDrop() {
      player.pos.y++;
      if (checkCollision(player.matrix, player.pos)) {
        player.pos.y--;
        merge();
        clearLines();
        spawnPiece();
      }
      dropCounter = 0;
    }

    function playerHardDrop() {
      while (!checkCollision(player.matrix, player.pos)) {
        player.pos.y++;
      }
      player.pos.y--;
      merge();
      clearLines();
      spawnPiece();
      dropCounter = 0;
    }

    function draw() {
      ctx.fillStyle = '#090b0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = '#1b221d';
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += BLOCK) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += BLOCK) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Draw fixed grid
      grid.forEach((row, r) => {
        row.forEach((val, c) => {
          if (val !== 0) {
            ctx.fillStyle = COLORS[val];
            ctx.fillRect(c * BLOCK + 1, r * BLOCK + 1, BLOCK - 2, BLOCK - 2);
          }
        });
      });

      // Draw current piece
      if (player.matrix) {
        player.matrix.forEach((row, r) => {
          row.forEach((val, c) => {
            if (val !== 0) {
              ctx.fillStyle = COLORS[player.shapeId];
              ctx.fillRect((player.pos.x + c) * BLOCK + 1, (player.pos.y + r) * BLOCK + 1, BLOCK - 2, BLOCK - 2);
            }
          });
        });
      }

      if (gameOver) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.85)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ff2244";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("SYSTEM CRASH", canvas.width / 2, canvas.height / 2 - 10);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "11px monospace";
        ctx.fillText("PRESS ENTER TO RESTART", canvas.width / 2, canvas.height / 2 + 15);
      } else if (isPaused) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.75)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
      }
    }

    function update(time = 0) {
      if (!overlay.classList.contains("is-active")) return;
      if (!isPaused && !gameOver) {
        const delta = time - lastTime;
        lastTime = time;
        dropCounter += delta;
        if (dropCounter > dropInterval) {
          playerDrop();
        }
      } else {
        lastTime = time;
      }
      draw();
      requestAnimationFrame(update);
    }

    this.tetrisReset = () => {
      grid = Array.from({length: ROWS}, () => Array(COLS).fill(0));
      score = 0;
      lines = 0;
      scoreEl.textContent = `SCORE: ${score}`;
      linesEl.textContent = `LINES: ${lines}`;
      dropInterval = 500;
      gameOver = false;
      isPaused = false;
      spawnPiece();
    };

    this.tetrisPause = () => {
      isPaused = true;
    };

    const handleKey = (e) => {
      if (!overlay.classList.contains("is-active")) return;
      if (e.key === "ArrowLeft") { playerMove(-1); e.preventDefault(); }
      else if (e.key === "ArrowRight") { playerMove(1); e.preventDefault(); }
      else if (e.key === "ArrowDown") { playerDrop(); e.preventDefault(); }
      else if (e.key === "ArrowUp" || e.key === "x") { playerRotate(); e.preventDefault(); }
      else if (e.key === " ") { playerHardDrop(); e.preventDefault(); }
      else if (e.key === "p" || e.key === "P") { isPaused = !isPaused; e.preventDefault(); }
      else if (e.key === "Enter" && gameOver) { this.tetrisReset(); e.preventDefault(); }
    };

    window.addEventListener("keydown", handleKey);

    overlay.querySelectorAll(".tetris-touch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (gameOver) { this.tetrisReset(); return; }
        const act = btn.getAttribute("data-action");
        if (act === "left") playerMove(-1);
        else if (act === "right") playerMove(1);
        else if (act === "rotate") playerRotate();
        else if (act === "drop") playerDrop();
      });
    });

    this.tetrisReset();
    requestAnimationFrame(update);
  }
});

Object.assign(Controller, {
  openTetrisModal() {
    View.openTetrisModal();
  }
});
