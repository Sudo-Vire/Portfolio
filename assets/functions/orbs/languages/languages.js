import { Model } from '../../../js/model.js';
import { View } from '../../../js/view.js';
import { Controller } from '../../../js/controller.js';

// Language orbs: persistence, translation of the page and picker behaviour.
Object.assign(View, {
  getSavedLanguage() {
    try {
      const savedLanguage = localStorage.getItem("portfolio-language");
      return savedLanguage === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  },

  startLanguageFade(language) {
    const fade = this.els.languagePicker.querySelector(".language-orb-fade");
    fade.dataset.fadeLanguage = language;
    fade.classList.add("is-fading");
  },

  updateLanguagePicker() {
    const translation = Model.translations[Model.locale];
    const fade = this.els.languagePicker.querySelector(".language-orb-fade");
    fade.classList.remove("is-fading");
    this.els.languageCurrent.textContent = translation.languageName;
    this.els.languageChoice.dataset.languageChoice = Model.locale === "en" ? "es" : "en";
    const otherLanguage = Model.locale === "en" ? translation.spanish : translation.english;
    this.els.languageChoice.setAttribute("aria-label", translation.switchLanguage.replace("{language}", otherLanguage));
    this.els.languageChoice.title = translation.switchLanguage.replace("{language}", otherLanguage);
    this.els.languagePicker.dataset.selectedLanguage = Model.locale;
  },

  setLanguage(language, persist = true, updatePicker = true) {
    Model.locale = language === "es" ? "es" : "en";
    const translation = Model.translations[Model.locale];
    this.updateThemeChoices(Model.state.theme);
    document.documentElement.lang = Model.locale;
    document.querySelector('meta[name="description"]').content = translation.metaDescription;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.innerHTML = translation[element.dataset.i18n];
    });
    if (Model.state.screen && typeof View.typeScreenContent === "function") {
      View.typeScreenContent(Model.state.screen);
    }
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", translation[element.dataset.i18nAria]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", translation[element.dataset.i18nAlt]);
    });
    document.querySelectorAll("[data-i18n-folder]").forEach((element) => {
      const folder = Model.experienceFolders.find((item) => item.id === element.dataset.i18nFolder);
      element.textContent = `${this.localizedFolderLabel(folder)}/`;
    });
    if (updatePicker) this.updateLanguagePicker();
    this.renderSkills(Model.skills);
    this.renderContacts(Model.contacts);
    this.renderJuegos(Model.games);
    this.els.clock.textContent = new Intl.DateTimeFormat(Model.locale === "es" ? "es-ES" : "en-GB", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
    if (Model.state.activeFolder) this.renderExperienceFolder(Model.state.activeFolder, false);
    else this.collapseExperienceFolder();
    if (persist) {
      try {
        localStorage.setItem("portfolio-language", Model.locale);
      } catch {}
    }
  },
});

Object.assign(Controller, {
  bindLanguageMenu() {
    const picker = View.els.languagePicker;
    const button = View.els.languageChoice;
    let dismissed = false;

    picker.addEventListener("mouseenter", () => {
      if (!dismissed) return;
      dismissed = false;
      picker.classList.remove("is-collapsed");
    });
    button.addEventListener("focus", () => {
      if (dismissed) return;
      picker.classList.remove("is-collapsed");
    });
    let pickerTimer = null;
    const finishCollapse = () => {
      window.clearTimeout(pickerTimer);
      View.updateLanguagePicker();
    };
    picker.addEventListener("transitionend", (event) => {
      if (event.target === picker && event.propertyName === "flex-basis" && picker.classList.contains("is-collapsed")) {
        finishCollapse();
      }
    });
    button.addEventListener("click", () => {
      View.startLanguageFade(button.dataset.languageChoice);
      View.setLanguage(button.dataset.languageChoice, true, false);
      dismissed = true;
      picker.classList.add("is-collapsed");
      window.clearTimeout(pickerTimer);
      pickerTimer = window.setTimeout(finishCollapse, 400);
    });
  },
});
