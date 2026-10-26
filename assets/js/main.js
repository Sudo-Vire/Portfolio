const MainApplication = {
  async init() {
    Controller.init();
    View.renderJuegos(Model.games);
  }
};

MainApplication.init();
