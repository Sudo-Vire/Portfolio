window.TerminalFS = {
  slug(text) {
    return text.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  },

  bar(level) {
    const filled = Math.round(level / 10);
    return "█".repeat(filled) + "░".repeat(10 - filled);
  },

  dir(children) {
    return { type: "dir", children };
  },

  file(text, href = null) {
    return { type: "file", text, href };
  },

  describe(item) {
    const lines = [View.localized(item, "title"), `${View.localized(item, "tag")} · ${View.localized(item, "meta")}`, "", View.localized(item, "desc")];
    if (item.url) lines.push("", item.url);
    return lines.join("\n");
  },

  build() {
    const aboutText = [...document.querySelectorAll("#screen-about .about-copy p")].map((p) => p.textContent.trim()).join("\n\n");
    const cvName = "cv.pdf";
    const cvHref = Model.contacts.find((contact) => contact.download)?.href;
    const cvFile = this.file(`${cvName}\n\n${View.t("downloadCv")}`, cvHref);

    const skills = {};
    Model.skills.forEach((group) => {
      const title = Model.locale === "es" ? group.groupEs : group.group;
      const rows = group.items.map(([name, level, nameEs]) => {
        const label = Model.locale === "es" && nameEs ? nameEs : name;
        return `${label.padEnd(26)} ${this.bar(level)} ${String(level).padStart(3)}%`;
      });
      skills[`${this.slug(group.group)}.txt`] = this.file(`${title}\n\n${rows.join("\n")}`);
    });

    const experience = {};
    Model.experienceFolders.forEach((folder) => {
      const entries = {};
      Model[folder.source].forEach((item) => {
        entries[`${this.slug(item.title)}.txt`] = this.file(this.describe(item), item.url || null);
      });
      experience[folder.id] = this.dir(entries);
    });

    const juegos = {};
    Model.games.forEach((game) => {
      juegos[`${this.slug(game.title)}.txt`] = this.file(this.describe(game), game.url || null);
    });

    const contact = {};
    Model.contacts.filter((item) => !item.download).forEach((item) => {
      contact[`${this.slug(item.label)}.txt`] = this.file(`${item.label}\n${item.href}`, item.href);
    });
    contact["email.txt"] = this.file(`Email\n${Model.contactEmail}`, `mailto:${Model.contactEmail}`);
    contact[cvName] = cvFile;

    return this.dir({
      "readme.txt": this.file(`${View.t("intro")}\n\n${TerminalCommands.t("readmeHint")}`),
      ".easterEggs": this.file(TerminalCommands.t("easterEggs")),
      about: this.dir({ "about.txt": this.file(aboutText), [cvName]: cvFile }),
      skills: this.dir(skills),
      experience: this.dir(experience),
      juegos: this.dir(juegos),
      contact: this.dir(contact),
    });
  },

  walk(root, parts) {
    let node = root;
    for (const part of parts) {
      if (node.type !== "dir" || !Object.hasOwn(node.children, part)) return null;
      node = node.children[part];
    }
    return node;
  },

  // Returns the path segments relative to the portfolio root, or null if the input escapes it.
  resolve(cwd, input = "") {
    let path = input.trim();
    if (path === "") return [...cwd];

    let parts;
    if (path === "~" || path.startsWith("~/")) {
      parts = [];
      path = path.slice(1);
    } else if (path.startsWith("/")) {
      const base = Model.basePath;
      if (path !== base && !path.startsWith(`${base}/`)) return null;
      parts = [];
      path = path.slice(base.length);
    } else {
      parts = [...cwd];
    }

    for (const segment of path.split("/").filter(Boolean)) {
      if (segment === ".") continue;
      if (segment === "..") parts.pop();
      else parts.push(segment);
    }
    return parts;
  },

  // Yields [pathSegments, fileNode] for every file below a directory node.
  *files(node, parts = []) {
    for (const [name, child] of this.sorted(node)) {
      if (child.type === "dir") yield* this.files(child, [...parts, name]);
      else yield [[...parts, name], child];
    }
  },

  sorted(node, showHidden = false) {
    return Object.entries(node.children).filter(([name]) => showHidden || !name.startsWith(".")).sort(([nameA, a], [nameB, b]) => {
      if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
      return nameA.localeCompare(nameB);
    });
  },
};
