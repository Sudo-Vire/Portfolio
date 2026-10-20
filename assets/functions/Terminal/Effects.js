
export const TerminalEffects = {
  // Full-panel "digital rain". Returns a function that stops and removes it.
  matrix(panel) {
    const style = getComputedStyle(document.body);
    const ink = style.getPropertyValue("--ink").trim() || "#000";
    const green = style.getPropertyValue("--green").trim() || "#20ef4f";
    const canvas = document.createElement("canvas");
    canvas.className = "terminal-matrix";
    panel.append(canvas);
    const ctx = canvas.getContext("2d");

    const size = 14;
    const glyphs = "アイウエオカキクケコサシスセソ0123456789<>/{}[]$#";
    let columns = 0;
    let drops = [];
    const resize = () => {
      canvas.width = panel.clientWidth;
      canvas.height = panel.clientHeight;
      columns = Math.ceil(canvas.width / size);
      drops = Array.from({ length: columns }, (_, i) => drops[i] ?? Math.random() * -30);
    };
    resize();

    const timer = window.setInterval(() => {
      ctx.globalAlpha = 0.14;
      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.fillStyle = green;
      ctx.font = `${size}px monospace`;
      drops.forEach((drop, i) => {
        ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], i * size, drop * size);
        drops[i] = drop * size > canvas.height && Math.random() > 0.97 ? 0 : drop + 1;
      });
    }, 45);

    window.addEventListener("resize", resize);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  },
};
