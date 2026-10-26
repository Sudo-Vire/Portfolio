import { Model } from '../../js/model.js';
import { View } from '../../js/view.js';
import { Controller } from '../../js/controller.js';

if (typeof document !== "undefined" && !document.getElementById("pong-style")) {
  const link = document.createElement("link");
  link.id = "pong-style";
  link.rel = "stylesheet";
  link.href = "assets/functions/pongGame/pongGame.css";
  document.head.appendChild(link);
}

Object.assign(View, {
  renderPongIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const interval = setInterval(() => {
      if (!document.body.contains(canvas)) {
        clearInterval(interval);
        return;
      }
      frame++;
      const style = getComputedStyle(document.body);
      const ink = style.getPropertyValue('--ink').trim() || '#090b0a';
      const line = style.getPropertyValue('--line').trim() || '#1b221d';
      const cyan = style.getPropertyValue('--cyan').trim() || '#91f3a8';
      const green = style.getPropertyValue('--green').trim() || '#20ef4f';

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
      // Paddle 1 (left): column 1, height 3 cells, vertical grid movement
      const p1Row = 1 + (Math.floor(frame / 2) % 3);
      ctx.fillStyle = cyan;
      ctx.fillRect(1 * sz + 1, p1Row * sz + 1, sz - 2, 3 * sz - 2);

      // Paddle 2 (right): column 5, height 3 cells, vertical grid movement
      const p2Row = 1 + (Math.floor((frame + 2) / 2) % 3);
      ctx.fillStyle = green;
      ctx.fillRect(5 * sz + 1, p2Row * sz + 1, sz - 2, 3 * sz - 2);

      // Ball: moving on grid cells
      const ballCols = [2, 3, 4, 3];
      const ballRows = [2, 3, 4, 3];
      const bIdx = frame % ballCols.length;
      ctx.fillStyle = cyan;
      ctx.fillRect(ballCols[bIdx] * sz + 1, ballRows[bIdx] * sz + 1, sz - 2, sz - 2);
    }, 120);
  },

  openPongModal() {
    let overlay = document.querySelector(".pong-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "pong-modal-overlay";
      overlay.innerHTML = `
        <div class="pong-modal-container">
          <div class="pong-header">
            <h3 class="pong-title" id="pong-modal-title">CYBER PONG</h3>
            <button class="pong-close-btn" type="button">X</button>
          </div>
          <div class="pong-mode-selector">
            <button class="pong-mode-btn is-active" data-mode="vs_ai">1J vs CPU</button>
            <button class="pong-mode-btn" data-mode="2p">2 JUGADORES</button>
          </div>
          <div class="pong-diff-selector" id="pong-diff-container">
            <button class="pong-diff-btn" data-diff="easy">EASY</button>
            <button class="pong-diff-btn is-active" data-diff="medium">MEDIUM</button>
            <button class="pong-diff-btn" data-diff="hard">HARD</button>
            <button class="pong-diff-btn" data-diff="impossible">IMPOSIBLE</button>
          </div>
          <div class="pong-stats">
            <span id="pong-p1-score">PLAYER 1: 0</span>
            <span id="pong-p2-score">CPU: 0</span>
          </div>
          <div class="pong-game-canvas-wrap">
            <canvas class="pong-canvas" id="pong-game-canvas" width="480" height="300"></canvas>
          </div>
          <p class="pong-controls-hint" id="pong-controls-hint">P1: W / S | P2: CPU | SPACE: PAUSE</p>
          <div class="pong-touch-pad" id="pong-touch-pad">
            <button class="pong-touch-btn" data-action="up">UP</button>
            <button class="pong-touch-btn" data-action="down">DOWN</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".pong-close-btn").addEventListener("click", () => {
        this.closePongModal();
      });
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closePongModal();
      });

      overlay.querySelectorAll(".pong-mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          overlay.querySelectorAll(".pong-mode-btn").forEach(b => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const mode = btn.getAttribute("data-mode");
          if (this.pongSetMode) this.pongSetMode(mode);
        });
      });

      overlay.querySelectorAll(".pong-diff-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          overlay.querySelectorAll(".pong-diff-btn").forEach(b => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const diff = btn.getAttribute("data-diff");
          if (this.pongSetDifficulty) this.pongSetDifficulty(diff);
        });
      });

      this.initPongEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.pongReset) this.pongReset();
  },

  closePongModal() {
    const overlay = document.querySelector(".pong-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.pongPause) this.pongPause();
  },

  initPongEngine(overlay) {
    const canvas = overlay.querySelector("#pong-game-canvas");
    const ctx = canvas.getContext("2d");
    const p1ScoreEl = overlay.querySelector("#pong-p1-score");
    const p2ScoreEl = overlay.querySelector("#pong-p2-score");
    const titleEl = overlay.querySelector("#pong-modal-title");
    const diffContainer = overlay.querySelector("#pong-diff-container");
    const controlsHintEl = overlay.querySelector("#pong-controls-hint");

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    let gameMode = "vs_ai";
    let p1Score = 0;
    let p2Score = 0;
    let difficulty = "medium";

    const paddleWidth = 10;
    const paddleHeight = 60;
    const ballSize = 8;

    let player1 = {
      x: 15,
      y: HEIGHT / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 0
    };

    let player2 = {
      x: WIDTH - 25,
      y: HEIGHT / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 0
    };

    let ball = {
      x: WIDTH / 2,
      y: HEIGHT / 2,
      vx: 4,
      vy: 3,
      speed: 5
    };

    let isPaused = false;
    let gameOver = false;

    this.pongSetMode = (mode) => {
      gameMode = mode;
      if (gameMode === "vs_ai") {
        titleEl.textContent = "CYBER PONG // VS CPU";
        diffContainer.classList.remove("is-hidden");
        controlsHintEl.textContent = "P1: W / S | P2: CPU | SPACE: PAUSE";
      } else {
        titleEl.textContent = "CYBER PONG // 2 PLAYERS";
        diffContainer.classList.add("is-hidden");
        controlsHintEl.textContent = "P1: W / S | P2: UP / DOWN ARROWS | SPACE: PAUSE";
      }
      this.pongReset();
    };

    this.pongSetDifficulty = (diff) => {
      difficulty = diff;
      this.pongReset();
    };

    this.pongReset = () => {
      p1Score = 0;
      p2Score = 0;
      p1ScoreEl.textContent = `PLAYER 1: ${p1Score}`;
      p2ScoreEl.textContent = gameMode === "vs_ai" ? `CPU: ${p2Score}` : `PLAYER 2: ${p2Score}`;
      resetBall();
      isPaused = false;
      gameOver = false;
    };

    this.pongPause = () => {
      isPaused = true;
    };

    function resetBall(servingToP1 = true) {
      ball.x = WIDTH / 2;
      ball.y = HEIGHT / 2;
      ball.speed = 5;
      const angle = (Math.random() * 0.6 - 0.3) * Math.PI;
      const dir = servingToP1 ? -1 : 1;
      ball.vx = dir * ball.speed * Math.cos(angle);
      ball.vy = ball.speed * Math.sin(angle);
    }

    function update() {
      if (!overlay.classList.contains("is-active") || isPaused || gameOver) return;

      player1.y += player1.dy;
      if (player1.y < 0) player1.y = 0;
      if (player1.y > HEIGHT - player1.height) player1.y = HEIGHT - player1.height;

      if (gameMode === "2p") {
        player2.y += player2.dy;
        if (player2.y < 0) player2.y = 0;
        if (player2.y > HEIGHT - player2.height) player2.y = HEIGHT - player2.height;
      } else {
        let aiSpeed = 3.2;
        let errorMargin = 25;

        if (difficulty === "easy") {
          aiSpeed = 2.5;
          errorMargin = 45;
        } else if (difficulty === "medium") {
          aiSpeed = 4.0;
          errorMargin = 20;
        } else if (difficulty === "hard") {
          aiSpeed = 5.8;
          errorMargin = 8;
        } else if (difficulty === "impossible") {
          aiSpeed = 8.5;
          errorMargin = 0;
        }

        let aiTarget = ball.y - player2.height / 2;
        if (Math.abs(player2.y - aiTarget) > 3) {
          if (player2.y < aiTarget + (Math.random() - 0.5) * errorMargin) {
            player2.y += aiSpeed;
          } else if (player2.y > aiTarget + (Math.random() - 0.5) * errorMargin) {
            player2.y -= aiSpeed;
          }
        }
        if (player2.y < 0) player2.y = 0;
        if (player2.y > HEIGHT - player2.height) player2.y = HEIGHT - player2.height;
      }

      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.y <= 0) {
        ball.y = 0;
        ball.vy *= -1;
      } else if (ball.y >= HEIGHT - ballSize) {
        ball.y = HEIGHT - ballSize;
        ball.vy *= -1;
      }

      if (
        ball.x <= player1.x + player1.width &&
        ball.x + ballSize >= player1.x &&
        ball.y + ballSize >= player1.y &&
        ball.y <= player1.y + player1.height
      ) {
        let hitPoint = (ball.y + ballSize / 2) - (player1.y + player1.height / 2);
        let normalizedHit = hitPoint / (player1.height / 2);
        let bounceAngle = normalizedHit * (Math.PI / 4);
        ball.speed = Math.min(ball.speed + 0.3, 11);
        ball.vx = ball.speed * Math.cos(bounceAngle);
        ball.vy = ball.speed * Math.sin(bounceAngle);
        ball.x = player1.x + player1.width;
      }

      if (
        ball.x + ballSize >= player2.x &&
        ball.x <= player2.x + player2.width &&
        ball.y + ballSize >= player2.y &&
        ball.y <= player2.y + player2.height
      ) {
        let hitPoint = (ball.y + ballSize / 2) - (player2.y + player2.height / 2);
        let normalizedHit = hitPoint / (player2.height / 2);
        let bounceAngle = normalizedHit * (Math.PI / 4);
        ball.speed = Math.min(ball.speed + 0.3, 11);
        ball.vx = -ball.speed * Math.cos(bounceAngle);
        ball.vy = ball.speed * Math.sin(bounceAngle);
        ball.x = player2.x - ballSize;
      }

      if (ball.x < 0) {
        p2Score++;
        p2ScoreEl.textContent = gameMode === "vs_ai" ? `CPU: ${p2Score}` : `PLAYER 2: ${p2Score}`;
        if (p2Score >= 5) {
          gameOver = true;
        } else {
          resetBall(false);
        }
      } else if (ball.x > WIDTH) {
        p1Score++;
        p1ScoreEl.textContent = `PLAYER 1: ${p1Score}`;
        if (p1Score >= 5) {
          gameOver = true;
        } else {
          resetBall(true);
        }
      }
    }

    function draw() {
      ctx.fillStyle = '#090b0a';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx.strokeStyle = '#1b221d';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(WIDTH / 2, 0);
      ctx.lineTo(WIDTH / 2, HEIGHT);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#91f3a8';
      ctx.shadowColor = '#91f3a8';
      ctx.shadowBlur = 8;
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

      ctx.fillStyle = '#20ef4f';
      ctx.shadowColor = '#20ef4f';
      ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

      ctx.fillStyle = '#ff2244';
      ctx.shadowColor = '#ff2244';
      ctx.fillRect(ball.x, ball.y, ballSize, ballSize);
      ctx.shadowBlur = 0;

      if (gameOver) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.85)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        let winText = p1Score >= 5 ? "PLAYER 1 WINS" : (gameMode === "vs_ai" ? "AI WINS // DEFEAT" : "PLAYER 2 WINS");
        ctx.fillStyle = p1Score >= 5 ? "#20ef4f" : "#ff2244";
        ctx.font = "bold 18px monospace";
        ctx.textAlign = "center";
        ctx.fillText(winText, WIDTH / 2, HEIGHT / 2 - 10);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "12px monospace";
        ctx.fillText("PRESS ENTER TO RESTART", WIDTH / 2, HEIGHT / 2 + 20);
      } else if (isPaused) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.75)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("PAUSED", WIDTH / 2, HEIGHT / 2);
      }
    }

    function loop() {
      update();
      draw();
      requestAnimationFrame(loop);
    }

    const handleKeyDown = (e) => {
      if (!overlay.classList.contains("is-active")) return;
      if (e.key === "w" || e.key === "W") {
        player1.dy = -6;
        e.preventDefault();
      } else if (e.key === "s" || e.key === "S") {
        player1.dy = 6;
        e.preventDefault();
      }

      if (gameMode === "2p") {
        if (e.key === "ArrowUp") {
          player2.dy = -6;
          e.preventDefault();
        } else if (e.key === "ArrowDown") {
          player2.dy = 6;
          e.preventDefault();
        }
      }

      if (e.key === " ") {
        isPaused = !isPaused;
        e.preventDefault();
      } else if (e.key === "Enter" && gameOver) {
        this.pongReset();
        e.preventDefault();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "w" || e.key === "W" || e.key === "s" || e.key === "S") {
        player1.dy = 0;
      }
      if (gameMode === "2p") {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          player2.dy = 0;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    overlay.querySelectorAll(".pong-touch-btn").forEach(btn => {
      const act = btn.getAttribute("data-action");
      btn.addEventListener("mousedown", () => { player1.dy = act === "up" ? -6 : 6; });
      btn.addEventListener("mouseup", () => { player1.dy = 0; });
      btn.addEventListener("touchstart", (e) => { e.preventDefault(); player1.dy = act === "up" ? -6 : 6; });
      btn.addEventListener("touchend", () => { player1.dy = 0; });
    });

    this.pongReset();
    requestAnimationFrame(loop);
  }
});

Object.assign(Controller, {
  openPongModal() {
    View.openPongModal();
  }
});
