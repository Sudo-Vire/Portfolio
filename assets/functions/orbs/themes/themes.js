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
    if (persist) {
      this.els.themePicker.dataset.selectedTheme = theme.id;
      if (updateChoices) this.updateThemeChoices(theme.id);
      try {
        localStorage.setItem("portfolio-theme", theme.id);
      } catch {}
    }
  },

  updateThemeChoices(themeId) {
    this.els.themePicker.dataset.selectedTheme = themeId;
    const choices = Model.themes.filter((theme) => theme.id !== themeId);
    this.els.themeChoices.forEach((button, index) => {
      const theme = choices[index];
      button.dataset.themeChoice = theme.id;
      const localizedTheme = Model.locale === "es"
        ? ({ HACKER: "Hacker", CYBERPUNK: "Cyberpunk", CLAUDE: "Claude" })[theme.label]
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
