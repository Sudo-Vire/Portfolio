// Core controller. Feature modules extend it with Object.assign; main.js calls Controller.init().
window.Controller = {
  audioUnlocked: false,

  init() {
    if (this.redirectIfUnknownRoute()) return;
    View.init();
    this.bindBiosBoot();
    this.bindNavigation();
    this.bindVirtualFolders();
    this.bindHistory();
    this.bindContactForm();
    this.bindAudioUnlock();
    this.bindThemeMenu();
    this.bindLanguageMenu();
    this.bindFolderTileParallax();

    const requestedPage = this.screenFromLocation();
    Model.state.screen = requestedPage;
    Model.state.optionIndex = 0;
    View.showScreen(requestedPage);
    const requestedFolder = this.folderFromLocation();
    if (requestedFolder) View.renderExperienceFolder(requestedFolder, false);
    if (!window.location.hash) history.replaceState({}, "", `#${Model.basePath}`);
  },

  isKnownRoute() {
    const route = window.location.hash.slice(1).replace(/\/+$/, "");
    if (!route || route === Model.basePath) return true;
    const base = `${Model.basePath}/`;
    const parts = (route.startsWith(base) ? route.slice(base.length) : route).split("/");
    if (!Model.pages.some((page) => page.id === parts[0])) return false;
    if (parts.length === 1) return true;
    return parts[0] === "experience" && parts.length === 2 && Model.experienceFolders.some((folder) => folder.id === parts[1]);
  },

  redirectIfUnknownRoute() {
    if (this.isKnownRoute()) return false;
    window.location.replace(`404.html?from=${encodeURIComponent(window.location.hash)}`);
    return true;
  },

  screenFromLocation() {
    const route = window.location.hash.slice(1);
    if (route === Model.basePath || route === `${Model.basePath}/`) return "home";
    if (route.startsWith(`${Model.basePath}/`)) {
      const screenId = route.slice(Model.basePath.length + 1).split("/")[0];
      return Model.pages.some((page) => page.id === screenId) ? screenId : "home";
    }
    return Model.pages.some((page) => page.id === route) ? route : "home";
  },

  goTo(screenId, addHistory = true) {
    if (!Model.pages.some((page) => page.id === screenId)) return;
    if (screenId === Model.state.screen) return;

    Model.state.screen = screenId;
    Model.state.optionIndex = 0;
    View.showScreen(screenId);
    if (this.audioUnlocked) View.playSelect();
    if (addHistory) {
      const route = screenId === "home" ? Model.basePath : `${Model.basePath}/${screenId}`;
      history.pushState({ screen: screenId }, "", `#${route}`);
    }
  },

  bindNavigation() {
    document.addEventListener("click", (event) => {
      const folderRoute = event.target.closest("[data-route-folder]");
      if (folderRoute) {
        event.preventDefault();
        this.openExperienceFolderFromRoute(folderRoute);
        return;
      }

      const sectionRoute = event.target.closest("[data-route-section]");
      if (sectionRoute) {
        event.preventDefault();
        const screenId = sectionRoute.dataset.routeSection;
        if (screenId === Model.state.screen) {
          if (screenId === "experience" && Model.state.activeFolder) {
            View.collapseExperienceFolder();
            history.pushState({ screen: screenId }, "", sectionRoute.href);
          } else {
            window.location.reload();
          }
        } else {
          this.goTo(screenId);
        }
        return;
      }

      const routeControl = event.target.closest("[data-route]");
      if (routeControl) {
        event.preventDefault();
        this.goTo(routeControl.dataset.route);
      }
    });

    const syncSelection = (event) => {
      const option = event.target.closest?.(View.optionSelector());
      if (option) View.selectOption(option);
    };
    document.addEventListener("focusin", syncSelection);
    document.addEventListener("mouseover", syncSelection);
    document.addEventListener("mouseout", (event) => {
      const option = event.target.closest?.(View.optionSelector());
      if (!option || option.contains(event.relatedTarget)) return;
      option.classList.remove("is-option-selected");
      if (Model.state.screen === "home") option.classList.remove("is-selected");
    });

    View.els.menuItems.forEach((item, index) => {
      const selectItem = () => {
        Model.state.menuIndex = index;
        Model.state.optionIndex = index;
        View.setMenuSelection(index);
      };
      item.addEventListener("focus", selectItem);
      item.addEventListener("mouseenter", selectItem);
    });
  },

  bindHistory() {
    window.addEventListener("popstate", () => {
      if (this.redirectIfUnknownRoute()) return;
      Model.state.screen = this.screenFromLocation();
      Model.state.optionIndex = 0;
      View.showScreen(Model.state.screen);
      const folderId = this.folderFromLocation();
      if (folderId) View.renderExperienceFolder(folderId, false);
    });
  },

  bindAudioUnlock() {
    const unlock = () => {
      this.audioUnlocked = true;
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
  },

  bindBiosBoot() {
    const bios = document.querySelector("#bios-boot-screen");
    if (!bios) return;
    const dismiss = () => {
      bios.classList.add("is-hidden");
      document.removeEventListener("keydown", handleDismiss);
      bios.removeEventListener("click", handleDismiss);
    };
    const timer = setTimeout(dismiss, 7200);
    const handleDismiss = (e) => {
      clearTimeout(timer);
      dismiss();
    };
    document.addEventListener("keydown", handleDismiss, { once: true });
    bios.addEventListener("click", handleDismiss, { once: true });
  },

  bindFolderTileParallax() {
    document.querySelectorAll('.folder-tile, .topic-folder').forEach((tile) => {
      tile.addEventListener('mousemove', (e) => {
        if (tile.classList.contains('is-pressed') || tile.classList.contains('is-dragging') || tile.classList.contains('is-returning')) return;
        const rect = tile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = (x - xc) / xc;
        const dy = (y - yc) / yc;
        tile.style.transform = `perspective(600px) rotateY(${dx * 10}deg) rotateX(${dy * -10}deg) translateY(-4px)`;
      });
      tile.addEventListener('mousedown', () => {
        tile.classList.add('is-pressed');
      });
      tile.addEventListener('mouseup', () => {
        tile.classList.remove('is-pressed');
      });
      tile.addEventListener('mouseleave', () => {
        tile.classList.remove('is-pressed');
        if (!tile.classList.contains('is-dragging') && !tile.classList.contains('is-returning')) {
          tile.style.transform = '';
        }
      });
    });
  },
};
