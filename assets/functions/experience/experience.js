import { Model } from '../../js/model.js';
import { View } from '../../js/view.js';
import { Controller } from '../../js/controller.js';

// Experience screen: folder contents rendering and folder routes.
Object.assign(View, {
  renderExperienceFolder(folderId, animate = true) {
    const folder = Model.experienceFolders.find((item) => item.id === folderId);
    if (!folder) return;
    Model.state.activeFolder = folderId;
    this.openFolder = folderId;
    this.els.explorer.classList.add("is-expanded");
    this.renderRoute("experience", folder.id);
    this.els.folderButtons.forEach((button) => {
      const isOpen = button.dataset.folder === folderId;
      button.classList.toggle("is-open", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
    });

    const fragment = document.createDocumentFragment();
    Model[folder.source].forEach((item, index) => {
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
    });

    this.els.folderItems.classList.remove("is-opening");
    window.clearTimeout(this.swapTimer);
    const swap = () => {
      this.els.folderPath.textContent = `/${this.localizedFolderLabel(folder)}`;
      this.els.folderStatus.textContent = this.t("accessGranted");
      this.els.folderItems.replaceChildren(fragment);
      this.els.folderItems.classList.add("is-opening");
    };
    this.els.explorer.classList.remove("is-opening");
    if (!animate) {
      swap();
      return;
    }
    void this.els.explorer.offsetWidth;
    this.els.explorer.classList.add("is-opening");
    this.swapTimer = window.setTimeout(swap, 350);
  },

  collapseExperienceFolder() {
    window.clearTimeout(this.swapTimer);
    this.openFolder = null;
    Model.state.activeFolder = null;
    this.els.explorer.classList.remove("is-expanded", "is-opening");
    this.els.folderItems.classList.remove("is-opening");
    this.els.folderButtons.forEach((button) => {
      button.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
    this.els.folderPath.textContent = "/";
    this.els.folderStatus.textContent = this.t("standby");
    this.els.folderItems.replaceChildren();
    if (Model.state.screen === "experience") this.renderRoute("experience");
  },
});

Object.assign(Controller, {
  folderFromLocation() {
    const route = window.location.hash.slice(1);
    if (!route.startsWith(`${Model.basePath}/experience/`)) return null;
    const folderId = route.slice(`${Model.basePath}/experience/`.length).split("/")[0];
    return Model.experienceFolders.some((folder) => folder.id === folderId) ? folderId : null;
  },

  openExperienceFolderFromRoute(link) {
    const folderId = link.dataset.routeFolder;
    const alreadyOpen = Model.state.screen === "experience" && Model.state.activeFolder === folderId;
    View.renderExperienceFolder(folderId);
    if (!alreadyOpen) history.pushState({ screen: "experience", folder: folderId }, "", link.href);
  },
});
