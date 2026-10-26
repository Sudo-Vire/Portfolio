// Cyber Snake Game Module & Animated Interactive Icon in Juegos Folder
Object.assign(View, {
  renderSnakeIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    const loop = [
      {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1},
      {x: 5, y: 2}, {x: 5, y: 3}, {x: 5, y: 4}, {x: 5, y: 5},
      {x: 4, y: 5}, {x: 3, y: 5}, {x: 2, y: 5}, {x: 1, y: 5},
      {x: 1, y: 4}, {x: 1, y: 3}, {x: 1, y: 2}
    ];
    let step = 0;

    const interval = setInterval(() => {
      if (!document.body.contains(canvas)) {
        clearInterval(interval);
        return;
      }
      const style = getComputedStyle(document.body);
      const ink = style.getPropertyValue('--ink').trim() || '#090b0a';
      const line = style.getPropertyValue('--line').trim() || '#1b221d';
      const green = style.getPropertyValue('--green').trim() || '#20ef4f';
      const cyan = style.getPropertyValue('--cyan').trim() || '#91f3a8';

      step = (step + 1) % loop.length;

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

      const cellSize = 8;
      const appleX = 3 * cellSize;
      const appleY = 3 * cellSize;
      ctx.fillStyle = green;
      ctx.shadowColor = green;
      ctx.shadowBlur = 6;
      ctx.fillRect(appleX + 1, appleY + 1, cellSize - 2, cellSize - 2);
      ctx.shadowBlur = 0;

      ctx.fillStyle = cyan;
      ctx.fillRect(appleX + 3, appleY - 1, 2, 2);

      const snakeLength = 8;
      for (let i = 0; i < snakeLength; i++) {
        const ptIndex = (step - i + loop.length * 100) % loop.length;
        const pt = loop[ptIndex];
        const px = pt.x * cellSize;
        const py = pt.y * cellSize;

        if (i === 0) {
          ctx.fillStyle = cyan;
          ctx.shadowColor = cyan;
          ctx.shadowBlur = 5;
          ctx.fillRect(px + 1, py + 1, cellSize - 2, cellSize - 2);
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = green;
          ctx.shadowColor = green;
          ctx.shadowBlur = 2;
          ctx.fillRect(px + 1.5, py + 1.5, cellSize - 3, cellSize - 3);
          ctx.shadowBlur = 0;
        }
      }
    }, 120);
  }
});


Object.assign(Controller, {
  openSnakeModal() {
    let overlay = document.querySelector(".snake-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "snake-modal-overlay";
      overlay.innerHTML = `
        <div class="snake-modal-container">
          <div class="snake-header">
            <h3 class="snake-title">CYBER SNAKE // ARCADE</h3>
            <button class="snake-close-btn" type="button">×</button>
          </div>
          <div class="snake-stats">
            <span id="snake-score">SCORE: 0</span>
            <span id="snake-hi">HI: 0</span>
          </div>
          <div class="snake-game-canvas-wrap">
            <canvas class="snake-canvas" id="snake-game-canvas" width="448" height="448"></canvas>
          </div>
          <p class="snake-controls-hint">PRESS ARROW / WASD TO START IN THAT DIRECTION</p>
          <div class="snake-touch-pad">
            <button class="snake-touch-btn snake-btn-up" data-dir="UP">▲</button>
            <button class="snake-touch-btn snake-btn-left" data-dir="LEFT">◀</button>
            <button class="snake-touch-btn snake-btn-down" data-dir="DOWN">▼</button>
            <button class="snake-touch-btn snake-btn-right" data-dir="RIGHT">▶</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".snake-close-btn").addEventListener("click", () => {
        this.closeSnakeModal();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeSnakeModal();
      });

      this.initSnakeGameEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.snakeGameReset) this.snakeGameReset();
  },

  closeSnakeModal() {
    const overlay = document.querySelector(".snake-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.snakeGamePause) this.snakeGamePause();
  },

  initSnakeGameEngine(overlay) {
    const canvas = overlay.querySelector("#snake-game-canvas");
    const ctx = canvas.getContext("2d");
    const scoreEl = overlay.querySelector("#snake-score");
    const hiEl = overlay.querySelector("#snake-hi");
    const grid = 32;
    const tileCount = canvas.width / grid;

    let snake = [];
    let food = { x: 5, y: 5 };
    let dx = 0;
    let dy = 0;
    let score = 0;
    let hi = parseInt(localStorage.getItem("cyber_snake_hi") || "0", 10);
    hiEl.textContent = `HI: ${hi}`;
    let gameInterval = null;
    let gameState = "START";

    const resetGame = () => {
      snake = [
        { x: 7, y: 7 },
        { x: 6, y: 7 },
        { x: 5, y: 7 }
      ];
      dx = 1;
      dy = 0;
      score = 0;
      scoreEl.textContent = `SCORE: ${score}`;
      spawnFood();
    };

    const spawnFood = () => {
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
      if (snake.some(part => part.x === food.x && part.y === food.y)) {
        spawnFood();
      }
    };

    const sprites = {
      head: [
        ".............#....#.............",
        "..............#..#..............",
        "...............##...............",
        "...............##...............",
        ".............######.............",
        "............########............",
        "...........##..##..##...........",
        "..........##..####..##..........",
        "..........############..........",
        ".........##############.........",
        ".........##############.........",
        "........###..######..###........",
        ".......###...######...###.......",
        "......###....######....###......",
        ".....###..00.######.00..###.....",
        ".....##...00.######.00...##.....",
        "....###...00.######.00...###....",
        "...####....####..####....####...",
        "..#####...####....####...#####..",
        ".#######.####..##..####.#######.",
        ".###########..####..###########.",
        ".###...####..######..####...###.",
        "..####..##..##....##..##..####..",
        "...####....##..##..##....####...",
        "....####..####....####..####....",
        ".....###..############..###.....",
        ".....###..####....####..###.....",
        ".....###..###..##..###..###.....",
        ".....###..##..####..##..###.....",
        ".....###..###..##..###..###.....",
        ".....###..####....####..###.....",
        ".....###..############..###....."
      ],
      
      body: [
        ".....###..#####..#####..###.....",
        ".....###..####.##.####..###.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########....."
      ],
      tail: [
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        "......####################......",
        "......####################......",
        ".......##################.......",
        ".......##################.......",
        "........################........",
        "........################........",
        ".........##############.........",
        ".........##############.........",
        "..........############..........",
        "..........############..........",
        "...........##########...........",
        "...........##########...........",
        "............########............",
        "............########............",
        ".............######.............",
        ".............######.............",
        "..............####..............",
        "..............####..............",
        "...............##...............",
        "...............##...............",
        "................................",
        "................................",
        "................................",
        "................................"
      ],
      turn: [
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "...........#####################",
        ".........#######################",
        "........########################",
        ".......#########################",
        "......##########################",
        "......##########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....########################...",
        ".....#######################....",
        ".....######################.....",
        ".....######################.....",
        ".....######################.....",
      ],
      food: [
        "................................",
        "................................",
        "..........############..........",
        ".........##############.........",
        "........################........",
        ".......##################.......",
        "......####################......",
        ".....######################.....",
        ".....#####.OO.####.OO.#####.....",
        ".....#####.EE.####.EE.#####.....",
        ".....#######################....",
        ".....#######################....",
        "......#####################.....",
        "......#####################.....",
        ".......###################......",
        "........################........",
        "........################........",
        ".........##############.........",
        "..........############..........",
        "...........##########...........",
        "............########............",
        ".............######.............",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................"
      ]
    };

    const rotateSprite = (sprite, times) => {
      let grid = sprite.map(row => row.split(''));
      for (let t = 0; t < times; t++) {
        const n = grid.length;
        const rotated = Array.from({ length: n }, () => Array(n).fill('.'));
        for (let r = 0; r < n; r++) {
          for (let c = 0; c < n; c++) {
            rotated[c][n - 1 - r] = grid[r][c];
          }
        }
        grid = rotated;
      }
      return grid.map(row => row.join(''));
    };

    sprites.headUp = sprites.head;
    sprites.headRight = rotateSprite(sprites.head, 1);
    sprites.headDown = rotateSprite(sprites.head, 2);
    sprites.headLeft = rotateSprite(sprites.head, 3);

    sprites.tailDown = sprites.tail;
    sprites.tailRight = rotateSprite(sprites.tail, 1);
    sprites.tailUp = rotateSprite(sprites.tail, 2);
    sprites.tailLeft = rotateSprite(sprites.tail, 3);

    sprites.bodyVertical = sprites.body;
    sprites.bodyHorizontal = rotateSprite(sprites.body, 1);

    const makeTurn = (rotTimes) => {
      const mask = rotateSprite(sprites.turn, rotTimes).map(row => row.split(''));
      const vGrid = rotateSprite(sprites.body, rotTimes).map(row => row.split(''));
      const hGrid = rotateSprite(sprites.bodyHorizontal, rotTimes).map(row => row.split(''));
      const grid = Array.from({ length: 32 }, () => Array(32).fill('.'));
      for (let r = 0; r < 32; r++) {
        for (let c = 0; c < 32; c++) {
          if (mask[r][c] === '#') {
            let pV = vGrid[r][c];
            let pH = hGrid[r][c];
            if (pV !== '.') {
              grid[r][c] = pV;
            } else if (pH !== '.') {
              grid[r][c] = pH;
            } else {
              grid[r][c] = '.';
            }
          }
        }
      }
      return grid.map(row => row.join(''));
    };

    const makeTurnLeft = (rotTimes) => {
      const mirroredTurn = sprites.turn.map(row => row.split('').reverse().join(''));
      const mask = rotateSprite(mirroredTurn, rotTimes).map(row => row.split(''));
      const vGrid = rotateSprite(sprites.body, rotTimes).map(row => row.split(''));
      const hGrid = rotateSprite(sprites.bodyHorizontal, rotTimes).map(row => row.split(''));
      const grid = Array.from({ length: 32 }, () => Array(32).fill('.'));
      for (let r = 0; r < 32; r++) {
        for (let c = 0; c < 32; c++) {
          if (mask[r][c] === '#') {
            let pV = vGrid[r][c];
            let pH = hGrid[r][c];
            if (pV !== '.') {
              grid[r][c] = pV;
            } else if (pH !== '.') {
              grid[r][c] = pH;
            } else {
              grid[r][c] = '.';
            }
          }
        }
      }
      return grid.map(row => row.join(''));
    };

    sprites.turnRightUp = makeTurn(0);
    sprites.turnRightRight = makeTurn(1);
    sprites.turnRightDown = makeTurn(2);
    sprites.turnRightLeft = makeTurn(3);

    sprites.turnLeftUp = makeTurnLeft(0);
    sprites.turnLeftRight = makeTurnLeft(1);
    sprites.turnLeftDown = makeTurnLeft(2);
    sprites.turnLeftLeft = makeTurnLeft(3);

    const drawSprite = (ctx, sprite, x, y, size, color, glowColor) => {
      const px = size / sprite.length;
      ctx.save();
      if (glowColor) {
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 2;
      }
      for (let r = 0; r < sprite.length; r++) {
        for (let c = 0; c < sprite[r].length; c++) {
          const ch = sprite[r][c];
          if (ch === '#') {
            ctx.fillStyle = color;
            ctx.fillRect(x + c * px, y + r * px, px + 0.5, px + 0.5);
          } else if (ch === 'O' || ch === 'E') {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x + c * px, y + r * px, px + 0.5, px + 0.5);
          }
        }
      }
      ctx.restore();
    };

    const getThemeColors = () => {
      const style = getComputedStyle(document.body);
      return {
        ink: style.getPropertyValue('--ink').trim() || '#090b0a',
        line: style.getPropertyValue('--line').trim() || '#2b322d',
        green: style.getPropertyValue('--green').trim() || '#20ef4f',
        cyan: style.getPropertyValue('--cyan').trim() || '#91f3a8',
        paper: style.getPropertyValue('--paper').trim() || '#e9eee8'
      };
    };

    const draw = () => {
      const colors = getThemeColors();
      ctx.fillStyle = colors.ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < tileCount; i++) {
        ctx.beginPath(); ctx.moveTo(i * grid, 0); ctx.lineTo(i * grid, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i * grid); ctx.lineTo(canvas.width, i * grid); ctx.stroke();
      }

      drawSprite(ctx, sprites.food, food.x * grid, food.y * grid, grid, colors.cyan, colors.cyan);

      snake.forEach((part, index) => {
        const x = part.x * grid;
        const y = part.y * grid;
        if (index === 0) {
          let headSprite = sprites.headUp;
          if (dx === 1) headSprite = sprites.headRight;
          else if (dx === -1) headSprite = sprites.headLeft;
          else if (dy === 1) headSprite = sprites.headDown;
          else if (dy === -1) headSprite = sprites.headUp;
          drawSprite(ctx, headSprite, x, y, grid, "#1aa343", null);
        } else if (index === snake.length - 1) {
          const tail = part;
          const prev = snake[snake.length - 2];
          let tailSprite = sprites.tailDown;
          if (tail.y > prev.y) tailSprite = sprites.tailDown;
          else if (tail.y < prev.y) tailSprite = sprites.tailUp;
          else if (tail.x > prev.x) tailSprite = sprites.tailLeft;
          else if (tail.x < prev.x) tailSprite = sprites.tailRight;
          drawSprite(ctx, tailSprite, x, y, grid, "#158a36", null);
        } else {
          const prev = snake[index - 1];
          const next = snake[index + 1] || prev;
          const isHorizontal = prev.y === next.y;
          const isVertical = prev.x === next.x;
          let bodySprite = sprites.bodyVertical;
          if (isHorizontal) {
            bodySprite = sprites.bodyHorizontal;
          } else if (isVertical) {
            bodySprite = sprites.bodyVertical;
          } else {
            const v1 = { x: part.x - prev.x, y: part.y - prev.y };
            const v2 = { x: next.x - part.x, y: next.y - part.y };
            const dx1 = Math.sign(v1.x);
            const dy1 = Math.sign(v1.y);
            const dx2 = Math.sign(v2.x);
            const dy2 = Math.sign(v2.y);

            if (dy1 === -1) {
              if (dx2 === 1) bodySprite = sprites.turnRightUp;
              else if (dx2 === -1) bodySprite = sprites.turnLeftUp;
            } else if (dy1 === 1) {
              if (dx2 === -1) bodySprite = sprites.turnRightDown;
              else if (dx2 === 1) bodySprite = sprites.turnLeftDown;
            } else if (dx1 === -1) {
              if (dy2 === -1) bodySprite = sprites.turnRightLeft;
              else if (dy2 === 1) bodySprite = sprites.turnLeftLeft;
            } else if (dx1 === 1) {
              if (dy2 === 1) bodySprite = sprites.turnRightRight;
              else if (dy2 === -1) bodySprite = sprites.turnLeftRight;
            }
          }
          drawSprite(ctx, bodySprite, x, y, grid, "#1aa343", null);
        }
      });

      if (gameState === "START") {
        ctx.fillStyle = colors.ink + "dd";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.green;
        ctx.font = "14px 'DM Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("PRESS ARROW OR WASD TO START", canvas.width / 2, canvas.height / 2);
      } else if (gameState === "OVER") {
        ctx.fillStyle = colors.ink + "ee";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.cyan;
        ctx.font = "bold 20px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 15);
        ctx.fillStyle = colors.green;
        ctx.font = "13px 'DM Mono', monospace";
        ctx.fillText("PRESS ARROW / WASD TO RESTART", canvas.width / 2, canvas.height / 2 + 15);
      }
    };

    const update = () => {
      if (gameState !== "PLAYING") return;

      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
      }

      if (snake.some(part => part.x === head.x && part.y === head.y)) {
        gameOver();
        return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreEl.textContent = `SCORE: ${score}`;
        if (score > hi) {
          hi = score;
          hiEl.textContent = `HI: ${hi}`;
          localStorage.setItem("cyber_snake_hi", hi);
        }
        spawnFood();
      } else {
        snake.pop();
      }
    };

    const gameOver = () => {
      gameState = "OVER";
      clearInterval(gameInterval);
      draw();
    };

    const startWithDirection = (newDx, newDy) => {
      if (gameState === "START" || gameState === "OVER") {
        resetGame();
        gameState = "PLAYING";
        dx = newDx;
        dy = newDy;
        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(() => {
          update();
          draw();
        }, 100);
        return;
      }
      if (gameState !== "PLAYING") return;

      if (newDx !== 0 && dx === 0) { dx = newDx; dy = 0; }
      if (newDy !== 0 && dy === 0) { dx = 0; dy = newDy; }
    };

    this.snakeGamePause = () => {
      if (gameState === "PLAYING") {
        gameState = "PAUSED";
        clearInterval(gameInterval);
      }
    };

    this.snakeGameReset = () => {
      gameState = "START";
      if (gameInterval) clearInterval(gameInterval);
      resetGame();
      draw();
    };

    window.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("is-active")) return;
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "w", "a", "s", "d", "W", "A", "S", "D"].includes(e.key)) {
        e.preventDefault();
      }

      if (e.key === " ") {
        if (gameState === "PLAYING") this.snakeGamePause();
        else if (gameState === "PAUSED") {
          gameState = "PLAYING";
          gameInterval = setInterval(() => { update(); draw(); }, 100);
        }
        return;
      }

      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        startWithDirection(0, -1);
      } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        startWithDirection(0, 1);
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        startWithDirection(-1, 0);
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        startWithDirection(1, 0);
      }
    });

    overlay.querySelectorAll(".snake-touch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const dir = btn.dataset.dir;
        if (dir === "UP") startWithDirection(0, -1);
        if (dir === "DOWN") startWithDirection(0, 1);
        if (dir === "LEFT") startWithDirection(-1, 0);
        if (dir === "RIGHT") startWithDirection(1, 0);
      });
    });

    this.snakeGameReset();
  }
});


