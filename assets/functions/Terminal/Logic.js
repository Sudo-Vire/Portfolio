window.TerminalApp = {
  history: [],
  historyIndex: 0,
  draft: "",
  isOpen: false,
  welcomed: false,
  els: {},
  maxLines: 500,

  init() {
    this.build();
    this.bind();
    this.observeRoute();
    this.applyLocale();
    this.updatePrompt();
  },

  build() {
    const panel = document.createElement("section");
    panel.className = "terminal-panel";
    panel.id = "terminal-panel";
    panel.setAttribute("aria-hidden", "true");
    panel.inert = true;
    panel.innerHTML = `
      <header class="terminal-header">
        <span class="terminal-title"></span>
        <button class="terminal-close" type="button">×</button>
      </header>
      <div class="terminal-log" role="log" aria-live="polite"></div>
      <form class="terminal-form" autocomplete="off">
        <label class="terminal-prompt" for="terminal-input"></label>
        <input class="terminal-input" id="terminal-input" type="text" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" />
      </form>`;
    document.querySelector(".page-shell").append(panel);

    const toggle = document.createElement("button");
    toggle.className = "terminal-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-controls", panel.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<span aria-hidden="true">&gt;_</span> <span class="terminal-toggle-label"></span>';
    document.querySelector(".page-controls").append(toggle);

    this.els = {
      panel,
      toggle,
      title: panel.querySelector(".terminal-title"),
      close: panel.querySelector(".terminal-close"),
      log: panel.querySelector(".terminal-log"),
      form: panel.querySelector(".terminal-form"),
      prompt: panel.querySelector(".terminal-prompt"),
      input: panel.querySelector(".terminal-input"),
      toggleLabel: toggle.querySelector(".terminal-toggle-label"),
    };
  },

  bind() {
    const { toggle, close, form, input, log } = this.els;
    toggle.addEventListener("click", () => this.toggle());
    close.addEventListener("click", () => this.setOpen(false));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submit();
    });
    input.addEventListener("keydown", (event) => this.onKeydown(event));
    log.addEventListener("click", () => {
      if (!window.getSelection().toString()) input.focus();
    });
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.code === "Backquote") {
        event.preventDefault();
        this.toggle();
      }
    });
  },

  // The working directory is derived from the website state, so both stay in sync.
  get cwd() {
    const screen = Model.state.screen;
    if (screen === "home") return [];
    const folder = screen === "experience" ? Model.state.activeFolder : null;
    return folder ? [screen, folder] : [screen];
  },

  observeRoute() {
    const routePage = document.querySelector("#route-page");
    new MutationObserver(() => this.updatePrompt()).observe(routePage, { childList: true });
  },

  promptText(cwd = this.cwd) {
    return `guest@portfolio:${TerminalCommands.displayPath(cwd)}$`;
  },

  updatePrompt() {
    this.els.prompt.textContent = this.promptText();
  },

  applyLocale() {
    const T = TerminalCommands;
    this.els.title.textContent = `guest@portfolio — ${T.t("title")}`;
    this.els.close.setAttribute("aria-label", T.t("close"));
    this.els.close.title = T.t("close");
    this.els.toggleLabel.textContent = T.t("toggle");
    this.els.toggle.title = "Ctrl + `";
    this.els.input.setAttribute("aria-label", T.t("inputLabel"));
  },

  toggle() {
    this.setOpen(!this.isOpen);
  },

  setOpen(open) {
    this.isOpen = open;
    const { panel, toggle, input } = this.els;
    panel.classList.toggle("is-open", open);
    panel.setAttribute("aria-hidden", String(!open));
    panel.inert = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.classList.toggle("is-active", open);
    if (open) {
      this.applyLocale();
      if (!this.welcomed) {
        this.welcomed = true;
        this.print(TerminalCommands.t("welcome"), "accent");
        this.print(TerminalCommands.t("welcomeHint"), "dim");
      }
      input.focus({ preventScroll: true });
    } else if (panel.contains(document.activeElement)) {
      toggle.focus({ preventScroll: true });
    }
  },

  print(content, kind = "") {
    const line = document.createElement("div");
    line.className = `terminal-line${kind ? ` is-${kind}` : ""}`;
    const parts = typeof content === "string" ? [{ text: content }] : Array.isArray(content) ? content : [content];
    parts.forEach(({ text, cls }) => {
      const span = document.createElement("span");
      if (cls) span.className = `is-${cls}`;
      span.textContent = text;
      line.append(span);
    });
    this.els.log.append(line);
    while (this.els.log.childElementCount > this.maxLines) this.els.log.firstElementChild.remove();
    this.els.log.scrollTop = this.els.log.scrollHeight;
  },

  navigate(parts) {
    const [screen, folder] = parts;
    const target = screen || "home";
    if (Model.state.screen !== target) {
      Controller.goTo(target);
    } else if (!folder && Model.state.activeFolder) {
      View.collapseExperienceFolder();
      history.pushState({ screen: target }, "", `#${Model.basePath}/${target}`);
    }
    if (folder && Model.state.activeFolder !== folder) {
      View.renderExperienceFolder(folder);
      history.pushState({ screen: "experience", folder }, "", `#${Model.basePath}/experience/${folder}`);
    }
  },

  createContext(args) {
    const cwd = this.cwd;
    const root = TerminalFS.build();
    return {
      args,
      cwd,
      history: this.history,
      print: (content, kind) => this.print(content, kind),
      clear: () => { this.els.log.replaceChildren(); },
      close: () => this.setOpen(false),
      play: (steps, onEnd) => this.play(steps, onEnd),
      matrix: (duration) => this.matrix(duration),
      resolve: (input) => TerminalFS.resolve(cwd, input),
      node: (parts) => TerminalFS.walk(root, parts),
      navigate: (parts) => this.navigate(parts),
    };
  },

  echo(text) {
    this.print([{ text: `${this.promptText()} `, cls: "prompt" }, { text }]);
  },

  // Runs timed output; `onEnd` fires both when the sequence finishes and when it is cancelled.
  play(steps, onEnd = null) {
    let index = 0;
    this.begin(() => {
      window.clearTimeout(this.timer);
      onEnd?.();
    });
    const next = () => {
      if (index >= steps.length) return this.end();
      const step = steps[index];
      index += 1;
      if (step.text !== undefined) this.print(step.text, step.kind);
      this.timer = window.setTimeout(next, step.wait ?? 80);
    };
    next();
  },

  matrix(duration = 8000) {
    const stop = TerminalEffects.matrix(this.els.panel);
    const timer = window.setTimeout(() => this.end(), duration);
    this.begin(() => {
      window.clearTimeout(timer);
      stop();
    });
    this.els.panel.querySelector(".terminal-matrix").addEventListener("click", () => this.end());
  },

  begin(cleanup) {
    this.busy = true;
    this.cleanup = cleanup;
    this.els.form.classList.add("is-busy");
  },

  end() {
    if (!this.busy) return;
    this.busy = false;
    this.cleanup?.();
    this.cleanup = null;
    this.els.form.classList.remove("is-busy");
    this.updatePrompt();
    this.els.input.focus({ preventScroll: true });
  },

  submit() {
    if (this.busy) return;
    const { input } = this.els;
    const line = input.value.trim();
    this.echo(input.value);
    input.value = "";
    this.draft = "";
    if (!line) return;

    if (this.history.at(-1) !== line) this.history.push(line);
    this.historyIndex = this.history.length;

    const [name, ...args] = line.split(/\s+/);
    const command = Object.hasOwn(TerminalCommands.registry, name) ? TerminalCommands.registry[name] : null;
    if (!command) {
      this.print(TerminalCommands.t("notFound", { name }), "err");
      return;
    }
    try {
      command.run(this.createContext(args));
    } catch (error) {
      this.print(`${name}: ${error.message}`, "err");
    }
    this.updatePrompt();
    this.applyLocale();
  },

  onKeydown(event) {
    const { input } = this.els;
    if (this.busy) {
      event.preventDefault();
      if (event.key === "Escape" || (event.ctrlKey && event.key.toLowerCase() === "c")) this.end();
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      this.setOpen(false);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (this.historyIndex === this.history.length) this.draft = input.value;
      this.historyIndex = Math.max(0, this.historyIndex - 1);
      input.value = this.history[this.historyIndex] ?? "";
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      this.historyIndex = Math.min(this.history.length, this.historyIndex + 1);
      input.value = this.historyIndex === this.history.length ? this.draft : this.history[this.historyIndex];
    } else if (event.key === "Tab") {
      event.preventDefault();
      this.complete();
    } else if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      this.els.log.replaceChildren();
    } else if (event.ctrlKey && event.key.toLowerCase() === "c") {
      if (input.selectionStart !== input.selectionEnd) return;
      event.preventDefault();
      this.echo(`${input.value}^C`);
      input.value = "";
    }
  },

  complete() {
    const { input } = this.els;
    const value = input.value;
    const tokens = value.split(/\s+/);
    const last = tokens.pop();
    let dirInput = "";
    let candidates;

    if (!tokens.length) {
      candidates = Object.entries(TerminalCommands.registry).filter(([, command]) => !command.hidden).map(([name]) => name);
    } else {
      const slash = last.lastIndexOf("/");
      dirInput = slash >= 0 ? last.slice(0, slash + 1) : "";
      const parts = TerminalFS.resolve(this.cwd, dirInput);
      const node = parts && TerminalFS.walk(TerminalFS.build(), parts);
      if (!node || node.type !== "dir") return;
      const partialStartsHidden = last.slice(dirInput.length).startsWith(".");
      candidates = Object.entries(node.children).filter(([name]) => partialStartsHidden || !name.startsWith(".")).map(([name, child]) => (child.type === "dir" ? `${name}/` : name));
    }

    const partial = last.slice(dirInput.length);
    const matches = candidates.filter((name) => name.startsWith(partial));
    if (!matches.length) return;

    const prefix = `${tokens.join(" ")}${tokens.length ? " " : ""}${dirInput}`;
    if (matches.length === 1) {
      input.value = `${prefix}${matches[0]}${matches[0].endsWith("/") ? "" : " "}`;
      return;
    }

    let common = matches[0];
    matches.forEach((name) => {
      while (!name.startsWith(common)) common = common.slice(0, -1);
    });
    if (common.length > partial.length) {
      input.value = `${prefix}${common}`;
      return;
    }
    this.echo(value);
    this.print(matches.map((name) => ({ text: `${name}   `, cls: name.endsWith("/") ? "dir" : "" })));
  },
};
