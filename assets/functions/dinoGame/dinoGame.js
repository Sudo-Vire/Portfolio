import { Model } from '../../js/model.js';

// Offline-dino style runner for the 404 page. Colours follow the active portfolio theme.
export const DinoGame = (() => {
  const canvas = document.getElementById("dino-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const GROUND = H - 40;
  const PX = 3;
  const GRAVITY = 0.62;
  const FAST_FALL = 1.4;
  const JUMP = -11.5;
  const PTERO_MIN_SCORE = 250;
  const t = document.documentElement.lang === "en"
    ? { start: "PRESS SPACE OR TAP TO START", over: "GAME OVER - SPACE / ENTER / TAP", hi: "HI" }
    : { start: "PULSA ESPACIO O TOCA PARA EMPEZAR", over: "GAME OVER - ESPACIO / ENTER / TOCA", hi: "HI" };

  const body = [
    ".........#####........",
    "........#######.......",
    ".......###.#####......",
    ".......#########......",
    ".......########.......",
    ".......####...........",
    "#......####...........",
    "#.....########........",
    "###..######..#........",
    ".##########...........",
    ".##########...........",
    "..#########...........",
    "...#######............",
    "....#####.............",
];

const legs = [
  [
    "....##.##.....",
    "....#..#......",
    "....#..##.....",
    "....##........",
  ],
  [
    "....##.##.....",
    "....#..#.....",
    "....##.#......",
    ".......##.....",
  ],
];

  const duckBody = [
"......................",
"......................",
"......................",
"...............#####..",
"..............#######.",
".............###.#####",
".............#########",
"###.........#########.",
"..###....#######......",
"...#############......",
"...###############....",
"....###########..#....",
".....########.........",
"......######..........",
];

const duckLegs = [
  [
    "....##.##.....",
    "....#..#......",
    "....#..##.....",
    "....##........",
  ],
  [
    "....##.##.....",
    "....#..#......",
    "....##.#......",
    ".......##.....",
  ],
];
  const ptero = [
    [
      ".............##..........",
      "...........#####.........",
      "..........######........",
      ".....#...########.......",
      "...###...##########....#..",
      "..####...############.##..",
      ".##.####.###############..",
      "#########.##############..",
      "..#####....############...",
      "...........#######........",
      "..........................",
      "..........................",
      "..........................",
      "..........................",
      "..........................",
      "..........................",
    ],
    [
      "..........................",
      "..........................",
      "..........................",
      ".....#....................",
      "...###....................",
      "..####..................#.",
      ".##.####...............##.",
      "#########.###############.",
      "..#####.################.",
      "........###############...",
      "........#############.....",
      "........###########.......",
      "........#########.........",
      ".........#######..........",
      "..........####............",
      "...........##.............",
    ],
  ];
  const CACTUS_HEIGHTS = [[42, 64], [36, 58], [32, 50]];
  const DINO_W = 16 * PX;
  const DINO_H = (body.length + 4) * PX;
  const DUCK_W = 22 * PX;
  const DUCK_H = (duckBody.length + 2) * PX;
  const PTERO_W = 26 * PX;
  const PTERO_H = 16 * PX;
  const PTERO_BODY_TOP = 5 * PX;
  const PTERO_BODY_H = 5 * PX;

  let colors, dino, obstacles, ground, speed, score, running, started, legFrame, legTick, spawnIn, last, wingTick;
  let best = 0;
  let duckHeld = false;

  function readColors() {
    const s = getComputedStyle(document.body);
    colors = {
      ink: s.getPropertyValue("--ink").trim() || "#090b0a",
      paper: s.getPropertyValue("--paper").trim() || "#e9eee8",
      muted: s.getPropertyValue("--muted").trim() || "#858c85",
      accent: s.getPropertyValue("--green").trim() || "#20ef4f",
      dead: s.getPropertyValue("--green-dim").trim() || "#087d2a",
    };
  }

  function reset() {
    dino = { x: 60, y: GROUND - DINO_H, vy: 0, onGround: true };
    obstacles = [];
    ground = [];
    for (let x = 0; x < W; x += 40) ground.push({ x, w: 6 + Math.random() * 18 });
    speed = 6;
    score = 0;
    running = true;
    legFrame = 0;
    legTick = 0;
    wingTick = 0;
    spawnIn = 60;
  }

  function isDucking() {
    return duckHeld && dino.onGround && running;
  }

  function jump() {
    if (!started) started = true;
    if (!running) return reset();
    if (dino.onGround && !duckHeld) {
      dino.vy = JUMP;
      dino.onGround = false;
    }
  }

  function spawn() {
    if (score >= PTERO_MIN_SCORE && Math.random() < 0.4) {
      // Low flyers are jumped, mid ones ducked, high ones pass over a standing dino.
      const bodyBottoms = [8, 45, 74];
      const bodyBottom = bodyBottoms[Math.floor(Math.random() * bodyBottoms.length)];
      const y = GROUND - bodyBottom - PTERO_BODY_TOP - PTERO_BODY_H;
      obstacles.push({ type: "ptero", x: W + 10, y, w: PTERO_W, h: PTERO_H });
    } else {
      const count = 1 + Math.floor(Math.random() * 3);
      const [min, max] = CACTUS_HEIGHTS[count - 1];
      const parts = Array.from({ length: count }, (_, i) => ({
        dx: i * 18,
        h: min + Math.floor(Math.random() * (max - min + 1)),
      }));
      obstacles.push({ type: "cactus", x: W + 10, y: 0, w: 18 * count - 4, h: 0, parts });
    }
    spawnIn = Math.max(30, 50 + Math.random() * 50 - speed * 1.2);
  }

  function drawSprite(rows, ox, oy) {
    rows.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        if (row[x] === "#") ctx.fillRect(ox + x * PX, oy + y * PX, PX, PX);
      }
    });
  }

  function drawCactus(c) {
    c.parts.forEach((part) => {
      const x = c.x + part.dx;
      const y = GROUND - part.h;
      ctx.fillRect(x + 4, y, 6, part.h);
      ctx.fillRect(x + 5, y - 2, 4, 2);
      const leftY = y + Math.round(part.h * 0.4);
      ctx.fillRect(x, leftY, 4, 4);
      ctx.fillRect(x, leftY - 8, 4, 10);
      const rightY = y + Math.round(part.h * 0.55);
      ctx.fillRect(x + 10, rightY, 4, 4);
      ctx.fillRect(x + 10, rightY - 10, 4, 12);
    });
  }

  function dinoBox() {
    if (isDucking()) return { x: dino.x + 6, y: GROUND - DUCK_H + 4, w: DUCK_W - 12, h: DUCK_H - 8 };
    return { x: dino.x + 8, y: dino.y + 4, w: DINO_W - 16, h: DINO_H - 8 };
  }

  function obstacleBoxes(o) {
    if (o.type === "ptero") return [{ x: o.x + 4 * PX, y: o.y + PTERO_BODY_TOP, w: 20 * PX, h: PTERO_BODY_H }];
    return o.parts.map((p) => ({ x: o.x + p.dx + 2, y: GROUND - p.h, w: 10, h: p.h }));
  }

  function hit() {
    const d = dinoBox();
    return obstacles.some((o) =>
      obstacleBoxes(o).some((b) => d.x < b.x + b.w && d.x + d.w > b.x && d.y < b.y + b.h && d.y + d.h > b.y),
    );
  }

  function update(k) {
    speed = Math.min(22, 6 + score / 250);
    score += speed * 0.1 * k;
    dino.vy += (GRAVITY + (!dino.onGround && duckHeld ? FAST_FALL : 0)) * k;
    dino.y += dino.vy * k;
    if (dino.y >= GROUND - DINO_H) {
      dino.y = GROUND - DINO_H;
      dino.vy = 0;
      dino.onGround = true;
    }
    legTick += k;
    if (legTick >= 6) {
      legTick = 0;
      legFrame = 1 - legFrame;
    }
    wingTick += k;
    spawnIn -= k;
    if (spawnIn <= 0) spawn();
    obstacles.forEach((o) => (o.x -= (speed + (o.type === "ptero" ? 1.5 : 0)) * k));
    obstacles = obstacles.filter((o) => o.x + o.w > -10);
    ground.forEach((g) => {
      g.x -= speed * k;
      if (g.x + g.w < 0) {
        g.x += W + 40;
        g.w = 6 + Math.random() * 18;
      }
    });
    if (hit()) {
      running = false;
      best = Math.max(best, Math.floor(score));
    }
  }

  function drawDino() {
    ctx.fillStyle = running ? colors.accent : colors.dead;
    if (isDucking()) {
      const y = GROUND - DUCK_H;
      drawSprite(duckBody, dino.x, y);
      drawSprite(duckLegs[legFrame], dino.x + 3 * PX, y + duckBody.length * PX);
      return;
    }
    drawSprite(body, dino.x, dino.y);
    drawSprite(dino.onGround && running ? legs[legFrame] : legs[0], dino.x, dino.y + body.length * PX);
  }

  function draw() {
    ctx.fillStyle = colors.ink;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = colors.muted;
    ctx.fillRect(0, GROUND, W, 1);
    ground.forEach((g) => ctx.fillRect(g.x, GROUND + 8 + (Math.floor(g.w) % 3) * 5, g.w, 2));
    ctx.fillStyle = colors.paper;
    obstacles.forEach((o) => {
      if (o.type === "cactus") drawCactus(o);
      else drawSprite(ptero[Math.floor(wingTick / 10) % 2], o.x, o.y);
    });
    drawDino();
    ctx.font = "bold 18px monospace";
    ctx.textAlign = "right";
    ctx.fillStyle = colors.muted;
    ctx.fillText(`${t.hi} ${String(best).padStart(5, "0")}`, W - 110, 30);
    ctx.fillStyle = colors.paper;
    ctx.fillText(String(Math.floor(score)).padStart(5, "0"), W - 20, 30);
    ctx.textAlign = "center";
    ctx.fillStyle = colors.accent;
    if (!started) ctx.fillText(t.start, W / 2, H / 2 - 20);
    else if (!running) ctx.fillText(t.over, W / 2, H / 2 - 20);
  }

  function frame(now) {
    const k = Math.min(3, (now - (last || now)) / 16.67);
    last = now;
    if (started && running) update(k);
    draw();
    requestAnimationFrame(frame);
  }

  window.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
      event.preventDefault();
      if (!event.repeat) jump();
    } else if (event.code === "ArrowDown") {
      event.preventDefault();
      duckHeld = true;
    } else if (event.code === "Enter" && !running && !event.target.closest("a")) {
      jump();
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowDown") duckHeld = false;
  });
  window.addEventListener("blur", () => (duckHeld = false));

  canvas.addEventListener("pointerdown", (event) => {
    const lowerHalf = event.offsetY > canvas.getBoundingClientRect().height / 2;
    if (started && running && lowerHalf) duckHeld = true;
    else jump();
  });
  window.addEventListener("pointerup", () => (duckHeld = false));
  window.addEventListener("pointercancel", () => (duckHeld = false));
  document.addEventListener("visibilitychange", () => (last = 0));

  readColors();
  reset();
  requestAnimationFrame(frame);

  return {
    reset,
    jump,
    hit
  };
})();
