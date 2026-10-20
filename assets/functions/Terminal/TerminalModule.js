import { TerminalApp } from './Logic.js';
import { TerminalCommands } from './Commands.js';
import { TerminalFS } from './Filesystem.js';
import { TerminalEffects } from './Effects.js';

export const TerminalModule = {
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
