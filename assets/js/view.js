import { Model } from './model.js';
import { Controller } from './controller.js';

// Core view. Feature modules (orbs, virtualFolders, experience, contact) extend it with Object.assign.
export const View = {
  els: {},
  optionIndex: 0,

  init() {
    this.els = {
      screens: [...document.querySelectorAll(".screen")],
      routeLinks: [...document.querySelectorAll("[data-route]")],
      menuItems: [...document.querySelectorAll(".home-directory .menu-item")],
      optionCount: document.querySelector("#option-count"),
      routePage: document.querySelector("#route-page"),
      clock: document.querySelector("#clock"),
      skills: document.querySelector("#skills-body"),
      folderItems: document.querySelector("#folder-items"),
      folderPath: document.querySelector("#folder-path"),
      folderStatus: document.querySelector("#folder-status"),
      folderButtons: [...document.querySelectorAll("[data-folder]")],
      explorer: document.querySelector(".experience-explorer"),
      folderPanel: document.querySelector("#folder-panel"),
      contacts: document.querySelector("#contact-links"),
      email: document.querySelector("#contact-email"),
      audio: document.querySelector("#sfx-select"),
      themePicker: document.querySelector(".theme-picker"),
      themeChoices: [...document.querySelectorAll(".theme-choice")],
      themeCurrent: document.querySelector("#theme-current"),
      languagePicker: document.querySelector(".language-picker"),
      languageCurrent: document.querySelector("#language-current"),
      languageChoice: document.querySelector("#language-choice"),
      customThemePanel: document.querySelector("#custom-theme-panel"),
      customGreen: document.querySelector("#custom-color-green"),
      customCyan: document.querySelector("#custom-color-cyan"),
      customLine: document.querySelector("#custom-color-line"),
      customClose: document.querySelector("#custom-theme-close"),
      customReset: document.querySelector("#custom-theme-reset"),
    };

    this.renderSkills(Model.skills);
    this.renderJuegos(Model.games);
    this.collapseExperienceFolder();
    this.renderContacts(Model.contacts);
    this.initContact();
    this.initCustomTheme();
    this.setTheme(this.getSavedTheme(), false);
    this.updateThemeChoices(Model.state.theme);
    this.setLanguage(this.getSavedLanguage(), false);
    this.updateClock();
    window.setInterval(() => this.updateClock(), 1000);
  },

  showScreen(screenId) {
    this.els.screens.forEach((screen) => {
      const isActive = screen.dataset.screen === screenId;
      screen.classList.toggle("is-active", isActive);
      screen.setAttribute("aria-hidden", String(!isActive));
      if (isActive) screen.scrollTop = 0;
    });
    this.els.routeLinks.forEach((link) => {
      if (link.dataset.route === screenId) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    this.renderRoute(screenId);
    document.body.dataset.screen = screenId;
    this.setOptionIndex(0, false);
    this.getOptions().forEach((option) => option.classList.remove("is-option-selected", "is-selected"));
    if (screenId === "experience") this.collapseExperienceFolder();
    if (screenId === "juegos") this.renderJuegos(Model.games);
    this.typeScreenContent(screenId);
  },

  typeScreenContent(screenId = Model.state.screen) {
    const screenEl = document.querySelector(`.screen[data-screen="${screenId}"]`);
    if (!screenEl) return;

    if (this._typingTimers) {
      this._typingTimers.forEach(timer => window.clearInterval(timer));
    }
    this._typingTimers = [];

    const elementsToType = screenEl.querySelectorAll('h2[data-i18n], .quote span[data-i18n]');

    elementsToType.forEach(el => {
      const key = el.dataset.i18n;
      const fullHtml = Model.translations[Model.locale]?.[key];
      if (!fullHtml) return;

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = fullHtml;
      const plainText = tempDiv.textContent || fullHtml;

      el.textContent = "";
      let i = 0;
      const timer = window.setInterval(() => {
        if (i < plainText.length) {
          el.textContent += plainText.charAt(i);
          i++;
        } else {
          window.clearInterval(timer);
          el.innerHTML = fullHtml;
        }
      }, 25);
      this._typingTimers.push(timer);
    });
  },

  optionSelector(screenId = Model.state.screen) {
    return {
      home: ".home-directory .menu-item",
      about: "#screen-about .cv-link",
      skills: "#screen-skills .skill-group",
      experience: "#screen-experience .topic-folder",
      juegos: "#screen-juegos .folder-entry",
      contact: "#screen-contact .contact-chip, #screen-contact input:not(.honeypot), #screen-contact textarea, #screen-contact button[type='submit']",
    }[screenId] || "";
  },

  renderRoute(screenId, folderId = null) {
    this.els.routePage.replaceChildren();
    if (screenId === "home") return;

    const sectionLink = document.createElement("a");
    sectionLink.href = `#${Model.basePath}/${screenId}`;
    sectionLink.dataset.routeSection = screenId;
    const page = Model.pages.find((item) => item.id === screenId);
    sectionLink.textContent = `/${Model.locale === "es" ? page.labelEs.toLowerCase() : page.id}`;
    this.els.routePage.append(sectionLink);

    if (screenId === "experience" && folderId) {
      const separator = document.createElement("span");
      separator.setAttribute("aria-hidden", "true");
      separator.textContent = "/";
      const folderLink = document.createElement("a");
      folderLink.href = `#${Model.basePath}/experience/${folderId}`;
      folderLink.dataset.routeFolder = folderId;
      const folder = Model.experienceFolders.find((item) => item.id === folderId);
      folderLink.textContent = this.localizedFolderLabel(folder);
      folderLink.setAttribute("aria-current", "page");
      this.els.routePage.append(separator, folderLink);
    } else {
      sectionLink.setAttribute("aria-current", "page");
    }
  },

  getOptions(screenId = Model.state.screen) {
    const selector = this.optionSelector(screenId);
    return selector ? [...document.querySelectorAll(selector)] : [];
  },

  setOptionIndex(index, focus = true) {
    const options = this.getOptions();
    if (!options.length) {
      this.optionIndex = 0;
      return 0;
    }

    this.optionIndex = (index + options.length) % options.length;
    options.forEach((option, optionIndex) => {
      const selected = optionIndex === this.optionIndex;
      option.classList.toggle("is-option-selected", selected);
      if (Model.state.screen === "home") option.classList.toggle("is-selected", selected);
    });
    const current = options[this.optionIndex];
    if (focus) {
      current.focus({ preventScroll: true });
      current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    return this.optionIndex;
  },

  selectOption(option) {
    const index = this.getOptions().indexOf(option);
    if (index < 0 || (index === this.optionIndex && option.classList.contains("is-option-selected"))) return;
    this.setOptionIndex(index, false);
    Model.state.optionIndex = index;
    if (Model.state.screen === "home") Model.state.menuIndex = index;
  },

  setMenuSelection(index) {
    this.setOptionIndex(index, false);
  },

  renderSkills(groups) {
    const fragment = document.createDocumentFragment();
    groups.forEach((group) => {
      const section = document.createElement("section");
      section.className = "skill-group";
      section.tabIndex = -1;
      const heading = document.createElement("h3");
      heading.textContent = Model.locale === "es" ? group.groupEs : group.group;
      section.append(heading);

      group.items.forEach(([englishName, value, spanishName]) => {
        const name = Model.locale === "es" && spanishName ? spanishName : englishName;
        const row = document.createElement("div");
        row.className = "skill-row";
        const label = document.createElement("span");
        label.className = "skill-name";
        label.textContent = name;
        const bar = document.createElement("span");
        bar.className = "skill-bar";
        bar.setAttribute("role", "img");
        bar.setAttribute("aria-label", `${name}: ${value}%`);
        const fill = document.createElement("span");
        fill.className = "skill-fill";
        fill.style.setProperty("--skill-level", `${value}%`);
        bar.append(fill);
        const percent = document.createElement("span");
        percent.className = "skill-value";
        percent.textContent = `${value}%`;
        row.append(label, bar, percent);
        section.append(row);
      });

      fragment.appendChild(section);
    });
    this.els.skills.replaceChildren(fragment);
  },

  renderJuegos(games) {
    const container = document.getElementById("juegos-body");
    if (!container) return;
    const fragment = document.createDocumentFragment();

    games.forEach((item, index) => {
      if (item.id === "minesweeper") {
        const iconCard = document.createElement("div");
        iconCard.className = "minesweeper-app-icon-card";
        iconCard.style.setProperty("--entry-index", index);

        const iconBox = document.createElement("div");
        iconBox.className = "minesweeper-app-icon";
        const canvas = document.createElement("canvas");
        canvas.className = "minesweeper-icon-canvas";
        canvas.width = 56;
        canvas.height = 56;
        iconBox.appendChild(canvas);

        const label = document.createElement("h4");
        label.className = "minesweeper-icon-label";
        label.textContent = this.localized(item, "title");

        iconCard.append(iconBox, label);
        canvas.addEventListener("click", () => {
          if (Controller.openMinesweeperModal) Controller.openMinesweeperModal();
        });

        if (this.renderMinesweeperIconAnimation) {
          this.renderMinesweeperIconAnimation(canvas);
        }
        fragment.append(iconCard);
      } else if (item.id === "snake") {
        const iconCard = document.createElement("div");
        iconCard.className = "snake-app-icon-card";
        iconCard.style.setProperty("--entry-index", index);

        const iconBox = document.createElement("div");
        iconBox.className = "snake-app-icon";
        const canvas = document.createElement("canvas");
        canvas.className = "snake-icon-canvas";
        canvas.width = 56;
        canvas.height = 56;
        iconBox.appendChild(canvas);

        const label = document.createElement("h4");
        label.className = "snake-icon-label";
        label.textContent = this.localized(item, "title");

        iconCard.append(iconBox, label);
        canvas.addEventListener("click", () => {
          if (Controller.openSnakeModal) Controller.openSnakeModal();
        });

        if (this.renderSnakeIconAnimation) {
          this.renderSnakeIconAnimation(canvas);
        }
        fragment.append(iconCard);
      } else if (item.id === "tetris") {
        const iconCard = document.createElement("div");
        iconCard.className = "tetris-app-icon-card";
        iconCard.style.setProperty("--entry-index", index);

        const iconBox = document.createElement("div");
        iconBox.className = "tetris-app-icon";
        const canvas = document.createElement("canvas");
        canvas.className = "tetris-icon-canvas";
        canvas.width = 56;
        canvas.height = 56;
        iconBox.appendChild(canvas);

        const label = document.createElement("h4");
        label.className = "tetris-icon-label";
        label.textContent = this.localized(item, "title");

        iconCard.append(iconBox, label);
        canvas.addEventListener("click", () => {
          if (Controller.openTetrisModal) Controller.openTetrisModal();
        });

        if (this.renderTetrisIconAnimation) {
          this.renderTetrisIconAnimation(canvas);
        }
        fragment.append(iconCard);
      } else if (item.id === "pong") {
        const iconCard = document.createElement("div");
        iconCard.className = "pong-app-icon-card";
        iconCard.style.setProperty("--entry-index", index);

        const iconBox = document.createElement("div");
        iconBox.className = "pong-app-icon";
        const canvas = document.createElement("canvas");
        canvas.className = "pong-icon-canvas";
        canvas.width = 56;
        canvas.height = 56;
        iconBox.appendChild(canvas);

        const label = document.createElement("h4");
        label.className = "pong-icon-label";
        label.textContent = this.localized(item, "title");

        iconCard.append(iconBox, label);
        canvas.addEventListener("click", () => {
          if (Controller.openPongModal) Controller.openPongModal();
        });

        if (this.renderPongIconAnimation) {
          this.renderPongIconAnimation(canvas);
        }
        fragment.append(iconCard);
      } else {
        const entry = document.createElement(item.url ? "a" : "article");
        entry.className = "folder-entry";
        entry.style.setProperty("--entry-index", index);
        if (item.url) {
          entry.href = item.url;
          entry.target = "_blank";
          entry.rel = "noopener noreferrer";
        }

        const tag = document.createElement("span");
        tag.className = "card-tag";
        tag.textContent = this.localized(item, "tag");
        const title = document.createElement("h4");
        title.textContent = this.localized(item, "title");
        const description = document.createElement("p");
        description.textContent = this.localized(item, "desc");
        const meta = document.createElement("span");
        meta.className = "card-meta";
        meta.textContent = this.localized(item, "meta");
        entry.append(tag, title, description, meta);
        if (item.cta) {
          const cta = document.createElement("span");
          cta.className = "card-cta";
          cta.textContent = `${this.localized(item, "cta")} ↗`;
          entry.append(cta);
        }
        fragment.append(entry);
      }
    });
    container.replaceChildren(fragment);
  },

  t(key) {
    return Model.translations[Model.locale][key];
  },

  localized(item, property) {
    if (Model.locale === "es" && item.translations?.es?.[property]) return item.translations.es[property];
    return item[property];
  },

  localizedFolderLabel(folder) {
    return Model.locale === "es" ? folder.labelEs : folder.label;
  },

  updateClock() {
    this.els.clock.textContent = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  },

  soundEnabled() {
    try {
      return localStorage.getItem("portfolio-sound") !== "off";
    } catch {
      return true;
    }
  },

  setSound(enabled) {
    try {
      localStorage.setItem("portfolio-sound", enabled ? "on" : "off");
    } catch {}
  },

  playSelect() {
    if (!this.soundEnabled()) return;
    this.els.audio.currentTime = 0;
    this.els.audio.play().catch(() => {});
  },
};
