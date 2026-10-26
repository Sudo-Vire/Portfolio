Object.assign(View, {
  renderMinesweeperIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    let frame = 0;
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

      frame++;
      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const size = 12;
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
          ctx.strokeStyle = line;
          ctx.lineWidth = 1;
          ctx.strokeRect(c * size + 4, r * size + 4, size, size);

          if ((r + c + frame) % 5 === 0) {
            ctx.fillStyle = cyan;
            ctx.fillRect(c * size + 6, r * size + 6, size - 4, size - 4);
          } else if ((r * 3 + c + frame) % 7 === 0) {
            ctx.fillStyle = green;
            ctx.beginPath();
            ctx.arc(c * size + 10, r * size + 10, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }, 150);
  }
});

Object.assign(Controller, {
  openMinesweeperModal() {
    let overlay = document.querySelector(".minesweeper-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "minesweeper-modal-overlay";
      overlay.innerHTML = `
        <div class="minesweeper-modal-container">
          <div class="minesweeper-header">
            <h3 class="minesweeper-title">CYBER MINESWEEPER // ARCADE</h3>
            <button class="minesweeper-close-btn" type="button">×</button>
          </div>
          <div class="minesweeper-toolbar">
            <div class="minesweeper-stat" id="ms-mines">M: 10</div>
            <button class="minesweeper-face-btn" id="ms-face">[OK]</button>
            <div class="minesweeper-stat" id="ms-time">T: 000</div>
          </div>
          <div class="minesweeper-settings">
            <div class="ms-setting-row">
              <span>MAP SIZE:</span>
              <div class="ms-size-btns">
                <button class="ms-size-btn active" data-size="8">8x8</button>
                <button class="ms-size-btn" data-size="15">15x15</button>
                <button class="ms-size-btn" data-size="25">25x25</button>
                <button class="ms-size-btn" data-size="custom">CUSTOM</button>
              </div>
            </div>
            <div class="ms-custom-panel" id="ms-custom-panel">
              <div class="ms-custom-row">
                <span>ROWS (5-30):</span>
                <input type="number" class="ms-custom-input" id="ms-custom-rows" min="5" max="30" value="10">
              </div>
              <div class="ms-custom-row">
                <span>COLS (5-30):</span>
                <input type="number" class="ms-custom-input" id="ms-custom-cols" min="5" max="30" value="10">
              </div>
              <div class="ms-custom-row">
                <span>BOMBS:</span>
                <input type="number" class="ms-custom-input" id="ms-custom-bombs" min="1" max="500" value="15">
              </div>
              <button class="ms-custom-apply" id="ms-custom-apply">APPLY CUSTOM</button>
            </div>
            <div class="ms-setting-row" id="ms-slider-row">
              <span style="display:flex; align-items:center; gap:6px;">
                BOMBS:
                <button class="ms-mode-btn" id="ms-bomb-mode-btn" title="Toggle Count / Percentage">MODE: #</button>
              </span>
              <input type="range" class="ms-bombs-slider" id="ms-bombs-range" min="1" max="25" value="10">
              <span class="ms-bombs-val" id="ms-bombs-val">10</span>
            </div>
          </div>
          <div class="minesweeper-board-wrap">
            <div class="minesweeper-board" id="ms-board"></div>
          </div>
          <p class="minesweeper-controls-hint">LEFT CLICK: REVEAL // RIGHT CLICK: FLAG</p>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".minesweeper-close-btn").addEventListener("click", () => {
        this.closeMinesweeperModal();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeMinesweeperModal();
      });

      this.initMinesweeperEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.msResetGame) this.msResetGame();
  },

  closeMinesweeperModal() {
    const overlay = document.querySelector(".minesweeper-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.msStopTimer) this.msStopTimer();
  },

  initMinesweeperEngine(overlay) {
    const boardEl = overlay.querySelector("#ms-board");
    const minesEl = overlay.querySelector("#ms-mines");
    const timeEl = overlay.querySelector("#ms-time");
    const faceBtn = overlay.querySelector("#ms-face");
    const sizeBtns = overlay.querySelectorAll(".ms-size-btn");
    const bombsRange = overlay.querySelector("#ms-bombs-range");
    const bombsVal = overlay.querySelector("#ms-bombs-val");
    const bombModeBtn = overlay.querySelector("#ms-bomb-mode-btn");
    const customPanel = overlay.querySelector("#ms-custom-panel");
    const sliderRow = overlay.querySelector("#ms-slider-row");
    const customRowsInput = overlay.querySelector("#ms-custom-rows");
    const customColsInput = overlay.querySelector("#ms-custom-cols");
    const customBombsInput = overlay.querySelector("#ms-custom-bombs");
    const customApplyBtn = overlay.querySelector("#ms-custom-apply");

    let rows = 8;
    let cols = 8;
    let totalMines = 10;
    let bombMode = "count"; // "count" or "percent"

    let board = [];
    let gameOver = false;
    let gameWon = false;
    let firstClick = true;
    let timerId = null;
    let seconds = 0;
    let flagsCount = 0;

    const updateSliderBounds = () => {
      const totalCells = rows * cols;
      if (bombMode === "count") {
        const maxMines = Math.max(1, totalCells - 2);
        bombsRange.min = 1;
        bombsRange.max = maxMines;
        if (totalMines > maxMines) totalMines = maxMines;
        bombsRange.value = totalMines;
        bombsVal.textContent = totalMines;
      } else {
        // Percentage mode (1% to 80%)
        bombsRange.min = 1;
        bombsRange.max = 80;
        let pct = Math.round((totalMines / totalCells) * 100);
        if (pct < 1) pct = 1;
        if (pct > 80) pct = 80;
        bombsRange.value = pct;
        bombsVal.textContent = `${pct}%`;
      }
    };

    const stopTimer = () => {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    };
    this.msStopTimer = stopTimer;

    const startTimer = () => {
      if (timerId) return;
      timerId = setInterval(() => {
        seconds++;
        if (seconds > 999) seconds = 999;
        timeEl.textContent = `T: ${String(seconds).padStart(3, '0')}`;
      }, 1000);
    };

    const resetGame = () => {
      stopTimer();
      seconds = 0;
      timeEl.textContent = "T: 000";
      gameOver = false;
      gameWon = false;
      firstClick = true;
      flagsCount = 0;
      faceBtn.textContent = "[OK]";
      minesEl.textContent = `M: ${totalMines - flagsCount}`;

      board = [];
      for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            r, c,
            mine: false,
            revealed: false,
            flagged: false,
            count: 0
          });
        }
        board.push(row);
      }

      renderBoard();
    };
    this.msResetGame = resetGame;

    const placeMines = (safeR, safeC) => {
      let placed = 0;
      let targetMines = Math.min(totalMines, rows * cols - 1);
      while (placed < targetMines) {
        let rr = Math.floor(Math.random() * rows);
        let cc = Math.floor(Math.random() * cols);
        if (Math.abs(rr - safeR) <= 1 && Math.abs(cc - safeC) <= 1) continue;
        if (!board[rr][cc].mine) {
          board[rr][cc].mine = true;
          placed++;
        }
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (board[r][c].mine) continue;
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              let nr = r + dr;
              let nc = c + dc;
              if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].mine) {
                count++;
              }
            }
          }
          board[r][c].count = count;
        }
      }
    };

    const renderBoard = () => {
      let cellSize = cols > 20 ? 14 : (cols > 12 ? 18 : (cols > 8 ? 22 : 26));
      boardEl.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
      boardEl.innerHTML = "";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let cellData = board[r][c];
          let cellEl = document.createElement("div");
          cellEl.className = "ms-cell";
          cellEl.style.width = `${cellSize}px`;
          cellEl.style.height = `${cellSize}px`;
          cellEl.style.fontSize = `${Math.max(9, cellSize - 10)}px`;
          cellEl.dataset.r = r;
          cellEl.dataset.c = c;

          if (cellData.revealed) {
            cellEl.classList.add("revealed");
            if (cellData.mine) {
              cellEl.classList.add("mine");
              cellEl.textContent = "[X]";
            } else if (cellData.count > 0) {
              cellEl.textContent = cellData.count;
              cellEl.dataset.count = cellData.count;
            }
          } else if (cellData.flagged) {
            cellEl.classList.add("flagged");
            cellEl.textContent = "[F]";
          }

          cellEl.addEventListener("click", () => {
            if (gameOver || gameWon || cellData.flagged || cellData.revealed) return;
            if (firstClick) {
              firstClick = false;
              placeMines(r, c);
              startTimer();
            }
            revealCell(r, c);
          });

          cellEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            if (gameOver || gameWon || cellData.revealed) return;
            cellData.flagged = !cellData.flagged;
            flagsCount += cellData.flagged ? 1 : -1;
            minesEl.textContent = `M: ${totalMines - flagsCount}`;
            renderBoard();
          });

          boardEl.appendChild(cellEl);
        }
      }
    };

    const revealCell = (r, c) => {
      let cell = board[r][c];
      if (cell.revealed || cell.flagged) return;

      cell.revealed = true;

      if (cell.mine) {
        gameOver = true;
        stopTimer();
        faceBtn.textContent = "[X]";
        revealAllMines();
        renderBoard();
        return;
      }

      if (cell.count === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            let nr = r + dr;
            let nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
              if (!board[nr][nc].revealed && !board[nr][nc].flagged) {
                revealCell(nr, nc);
              }
            }
          }
        }
      }

      checkWin();
      renderBoard();
    };

    const revealAllMines = () => {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (board[r][c].mine) {
            board[r][c].revealed = true;
          }
        }
      }
    };

    const checkWin = () => {
      let won = true;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (!board[r][c].mine && !board[r][c].revealed) {
            won = false;
            break;
          }
        }
        if (!won) break;
      }

      if (won) {
        gameWon = true;
        stopTimer();
        faceBtn.textContent = "[WIN]";
      }
    };

    faceBtn.addEventListener("click", () => {
      resetGame();
    });

    bombModeBtn.addEventListener("click", () => {
      if (bombMode === "count") {
        bombMode = "percent";
        bombModeBtn.textContent = "MODE: %";
      } else {
        bombMode = "count";
        bombModeBtn.textContent = "MODE: #";
      }
      updateSliderBounds();
    });

    sizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const sz = btn.dataset.size;
        if (sz === "custom") {
          customPanel.classList.add("is-active");
          sliderRow.style.display = "none";
          return;
        } else {
          customPanel.classList.remove("is-active");
          sliderRow.style.display = "flex";
        }

        const dim = parseInt(sz, 10);
        rows = dim;
        cols = dim;
        if (dim === 8) totalMines = 10;
        else if (dim === 15) totalMines = 35;
        else if (dim === 25) totalMines = 99;
        updateSliderBounds();
        resetGame();
      });
    });

    bombsRange.addEventListener("input", () => {
      const val = parseInt(bombsRange.value, 10);
      if (bombMode === "count") {
        totalMines = val;
        bombsVal.textContent = totalMines;
      } else {
        // val is percentage
        totalMines = Math.round((val / 100) * (rows * cols));
        if (totalMines < 1) totalMines = 1;
        if (totalMines >= rows * cols) totalMines = rows * cols - 1;
        bombsVal.textContent = `${val}%`;
      }
      resetGame();
    });

    customApplyBtn.addEventListener("click", () => {
      let r = parseInt(customRowsInput.value, 10);
      let c = parseInt(customColsInput.value, 10);
      let b = parseInt(customBombsInput.value, 10);

      if (isNaN(r) || r < 5) r = 5;
      if (r > 30) r = 30;
      if (isNaN(c) || c < 5) c = 5;
      if (c > 30) c = 30;

      let maxB = Math.max(1, r * c - 2);
      if (isNaN(b) || b < 1) b = 1;
      if (b > maxB) b = maxB;

      customRowsInput.value = r;
      customColsInput.value = c;
      customBombsInput.value = b;

      rows = r;
      cols = c;
      totalMines = b;
      bombMode = "count";
      bombModeBtn.textContent = "MODE: #";
      updateSliderBounds();
      resetGame();
    });

    updateSliderBounds();
    resetGame();
  }
});
