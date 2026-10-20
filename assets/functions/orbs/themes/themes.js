import { Model } from '../../../js/model.js';
import { View } from '../../../js/view.js';
import { Controller } from '../../../js/controller.js';

// Theme orbs: persistence, preview-on-hover and picker behaviour.
Object.assign(View, {
  getSavedTheme() {
    try {
      const storedTheme = localStorage.getItem("portfolio-theme");
      const savedTheme = storedTheme === "solar" ? "claude" : storedTheme;
      return Model.themes.some((theme) => theme.id === savedTheme) ? savedTheme : "hacker";
    } catch {
      return "hacker";
    }
  },

  setTheme(themeId, persist = true, updateChoices = true) {
    const theme = Model.themes.find((item) => item.id === themeId) || Model.themes[0];
    Model.state.theme = theme.id;
    document.body.dataset.theme = theme.id;
    this.els.themeCurrent.textContent = theme.label;
    
    if (theme.id === "custom") {
      this.loadCustomColors();
    } else {
      this.clearCustomColors();
    }

    if (persist) {
      this.els.themePicker.dataset.selectedTheme = theme.id;
      if (updateChoices) this.updateThemeChoices(theme.id);
      try {
        localStorage.setItem("portfolio-theme", theme.id);
      } catch {}
    }
  },

  initCustomTheme() {
    if (this.els.customGreen) {
      const update = () => {
        this.saveCustomColors(
          this.els.customGreen.value,
          this.els.customCyan.value,
          this.els.customLine.value
        );
      };
      this.els.customGreen.addEventListener("input", update);
      this.els.customCyan.addEventListener("input", update);
      this.els.customLine.addEventListener("input", update);
    }

    if (this.els.customClose) {
      this.els.customClose.addEventListener("click", () => {
        this.setTheme("hacker", true);
      });
    }

    if (this.els.customReset) {
      this.els.customReset.addEventListener("click", () => {
        const defaults = { green: "#20ef4f", cyan: "#37f495", line: "#164220" };
        this.saveCustomColors(defaults.green, defaults.cyan, defaults.line);
        if (this.els.customGreen) this.els.customGreen.value = defaults.green;
        if (this.els.customCyan) this.els.customCyan.value = defaults.cyan;
        if (this.els.customLine) this.els.customLine.value = defaults.line;
      });
    }

    if (this.getSavedTheme() === "custom") {
      this.loadCustomColors();
    }
  },

  loadCustomColors() {
    try {
      const saved = JSON.parse(localStorage.getItem("portfolio-custom-colors")) || { green: "#20ef4f", cyan: "#37f495", line: "#164220" };
      document.documentElement.style.setProperty("--green", saved.green);
      document.documentElement.style.setProperty("--cyan", saved.cyan);
      document.documentElement.style.setProperty("--line", saved.line);
      if (this.els.customGreen) this.els.customGreen.value = saved.green;
      if (this.els.customCyan) this.els.customCyan.value = saved.cyan;
      if (this.els.customLine) this.els.customLine.value = saved.line;
    } catch {}
  },

  clearCustomColors() {
    document.documentElement.style.removeProperty("--green");
    document.documentElement.style.removeProperty("--cyan");
    document.documentElement.style.removeProperty("--line");
  },

  saveCustomColors(green, cyan, line) {
    document.documentElement.style.setProperty("--green", green);
    document.documentElement.style.setProperty("--cyan", cyan);
    document.documentElement.style.setProperty("--line", line);
    try {
      localStorage.setItem("portfolio-custom-colors", JSON.stringify({ green, cyan, line }));
    } catch {}
  },

  updateThemeChoices(themeId) {
    this.els.themePicker.dataset.selectedTheme = themeId;
    const choices = Model.themes.filter((theme) => theme.id !== themeId);
    this.els.themeChoices.forEach((button, index) => {
      const theme = choices[index];
      button.dataset.themeChoice = theme.id;
      const localizedTheme = Model.locale === "es"
        ? ({ HACKER: "Hacker", CYBERPUNK: "Cyberpunk", CLAUDE: "Claude", CUSTOM: "Personalizado" })[theme.label]
        : theme.label;
      const label = this.t("switchTheme").replace("{theme}", localizedTheme);
      button.setAttribute("aria-label", label);
      button.title = label;
    });
  },
});

Object.assign(Controller, {
  committedTheme: null,
  previewTheme: null,
  dismissedThemeButton: null,

  bindThemeMenu() {
    this.committedTheme = Model.state.theme;
    View.els.themePicker.addEventListener("transitionend", (event) => {
      if (event.target === View.els.themePicker && event.propertyName === "flex-basis" &&
          View.els.themePicker.classList.contains("is-collapsed")) {
        View.updateThemeChoices(Model.state.theme);
      }
    });
    View.els.themePicker.addEventListener("mouseenter", () => {
      if (!this.dismissedThemeButton) return;
      this.dismissedThemeButton = null;
      View.els.themePicker.classList.remove("is-collapsed");
    });
    View.els.themeChoices.forEach((button) => {
      const previewTheme = () => {
        if (this.dismissedThemeButton) return;
        View.els.themePicker.classList.remove("is-collapsed");
        this.previewTheme = button.dataset.themeChoice;
        View.setTheme(this.previewTheme, false);
      };
      const restoreTheme = (event) => {
        const nextTarget = event.relatedTarget;
        if (nextTarget && View.els.themePicker.contains(nextTarget) && nextTarget.closest(".theme-choice")) return;
        if (!this.previewTheme) return;
        this.previewTheme = null;
        View.setTheme(this.committedTheme, false);
      };

      button.addEventListener("mouseenter", previewTheme);
      button.addEventListener("mouseleave", restoreTheme);
      button.addEventListener("focus", () => {
        if (this.dismissedThemeButton === button) return;
        this.dismissedThemeButton = null;
        previewTheme();
      });
      button.addEventListener("blur", restoreTheme);
      button.addEventListener("click", () => {
        this.committedTheme = button.dataset.themeChoice;
        this.previewTheme = null;
        this.dismissedThemeButton = button;
        View.setTheme(this.committedTheme, true, false);
        View.els.themePicker.classList.add("is-collapsed");
      });
    });
  },
});
