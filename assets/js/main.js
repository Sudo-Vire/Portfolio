import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';
import '../functions/orbs/themes/themes.js';
import '../functions/orbs/languages/languages.js';
import '../functions/virtualFolders/virtualFolders.js';
import '../functions/experience/experience.js';
import '../functions/contactForm/contactForm.js';
import '../functions/Terminal/TerminalModule.js';
import '../functions/snakeGame/snakeGame.js';
import '../functions/minesweeperGame/minesweeperGame.js';
import '../functions/tetrisGame/tetrisGame.js';
import '../functions/pongGame/pongGame.js';

export const MainApplication = {
  async init() {
    Controller.init();
    View.renderJuegos(Model.games);
  }
};

MainApplication.init();
