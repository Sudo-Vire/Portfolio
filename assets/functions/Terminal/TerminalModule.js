window.TerminalModule = {
  TerminalApp,
  TerminalCommands,
  TerminalFS,
  TerminalEffects
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => TerminalApp.init());
} else {
  TerminalApp.init();
}
