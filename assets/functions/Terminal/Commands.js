import { Model } from '../../js/model.js';
import { View } from '../../js/view.js';
import { TerminalFS } from './Filesystem.js';
import { TerminalEffects } from './Effects.js';

export const TerminalCommands = {
  messages: {
    en: {
      welcome: "Victor Reguillo · portfolio shell (vsh)",
      welcomeHint: "Type 'help' to list commands. Tab completes, ↑/↓ browse history, Ctrl+L clears.",
      readmeHint: "Try: ls, cd about, cat about.txt, tree, theme claude",
      title: "terminal",
      close: "Close terminal",
      toggle: "terminal",
      inputLabel: "Terminal input",
      notFound: "vsh: command not found: {name} (try 'help')",
      noSuchFile: "{name}: no such file or directory",
      notDir: "{name}: not a directory",
      isDir: "{name}: is a directory",
      missingOperand: "{name}: missing operand",
      usage: "usage: {usage}",
      nothingToOpen: "{name}: nothing to open",
      opening: "opening {name}...",
      themeNow: "theme set to {name}",
      themeUnknown: "unknown theme '{name}'. available: {list}",
      themeCurrent: "current theme: {name} (available: {list})",
      langNow: "language set to {name}",
      langUnknown: "unknown language '{name}'. available: es, en",
      langCurrent: "current language: {name} (available: es, en)",
      sudoDenied: "guest is not in the sudoers file. This incident will be reported.",
      sudoHire: "Access granted. Opening a channel to {email}...",
      dirsFiles: "{dirs} directories, {files} files",
      helpHeader: "Available commands:",
      helpFooter: "Run 'help <command>' for details.",
      desc_help: "list commands or show usage",
      desc_ls: "list directory contents (-l details, -a hidden files)",
      desc_cd: "change directory (also navigates the website)",
      desc_pwd: "print the working directory",
      desc_cat: "print a file",
      desc_tree: "show the directory tree",
      desc_open: "open a link or file, or enter a directory",
      desc_theme: "show or change the theme",
      desc_lang: "show or change the language",
      desc_clear: "clear the screen",
      desc_echo: "print text",
      desc_whoami: "print the current user",
      desc_date: "print the current date (Madrid)",
      desc_history: "show the command history",
      desc_neofetch: "show system information",
      desc_sudo: "run a command as superuser (only 'hire' is allowed)",
      desc_hire: "get in touch with Victor",
      desc_rm: "remove files (try it, if you dare)",
      desc_exit: "close the terminal",
      rmDenied: "rm: cannot remove '{name}': Permission denied (guest is read-only)",
      rmOperand: "rm: missing operand",
      rmWarning: "rm: it is dangerous to operate recursively on '/'",
      rmWipe: "removed '{name}'",
      rmSystem: "removing system32... wait, wrong OS",
      rmReveal: "Just kidding: nothing was deleted. Restoring portfolio... done.",
      rmJoke: "Nice try though :)",
      matrixHint: "Wake up, guest... (Esc, Ctrl+C or click to exit)",
      easterEggs: "Hidden commands\n\nmatrix   digital rain (Esc, Ctrl+C or click to exit)",
      desc_grep: "search text in files (case-insensitive)",
      desc_man: "show the manual page of a command",
      desc_sound: "turn the interface sound on or off",
      grepNoMatch: "no matches for '{name}'",
      grepMatches: "{count} matches in {files} files",
      manName: "NAME",
      manSynopsis: "SYNOPSIS",
      manDescription: "DESCRIPTION",
      manExamples: "EXAMPLES",
      soundNow: "sound {state}",
      soundCurrent: "sound is {state}",
      soundOn: "on",
      soundOff: "off",
      soundUsage: "usage: sound [on|off]",
      unknownCommandHelp: "no such command: {name}",
      infoRole: "Full-stack developer",
      infoFocus: "Web apps · Cybersecurity",
      infoLocation: "Madrid, Spain",
      infoUptime: "{minutes} min",
      desc_scan: "run simulated vulnerability scan",
      scanStart: "[-] Initializing cybersecurity scanner v2.4...",
      scanPorts: "[+] Scanning open ports (80, 443, 22, 3306)... SECURE",
      scanHeaders: "[+] Checking HTTP security headers (CSP, HSTS)... PASSED",
      scanDeps: "[+] Auditing dependencies... 0 vulnerabilities found",
      scanDone: "[✔] Target is secure. No critical vectors detected.",
      scanTarget: "[*] Target: {target}",
      scanSsl: "[+] SSL/TLS Certificate: Valid (TLS 1.3, ECDSA)... SECURE",
      scanFuzz: "[+] Fuzzing inputs (XSS/SQLi): 0 vulnerabilities found",
      scanGrade: "[★] Final Security Score: A+ (Fortified Portfolio)",
    },
    es: {
      welcome: "Victor Reguillo · shell del portfolio (vsh)",
      welcomeHint: "Escribe 'help' para ver los comandos. Tab autocompleta, ↑/↓ recorren el historial, Ctrl+L limpia.",
      readmeHint: "Prueba: ls, cd about, cat about.txt, tree, theme claude",
      title: "terminal",
      close: "Cerrar terminal",
      toggle: "terminal",
      inputLabel: "Entrada del terminal",
      notFound: "vsh: comando no encontrado: {name} (prueba 'help')",
      noSuchFile: "{name}: no existe el archivo o directorio",
      notDir: "{name}: no es un directorio",
      isDir: "{name}: es un directorio",
      missingOperand: "{name}: falta un operando",
      usage: "uso: {usage}",
      nothingToOpen: "{name}: nada que abrir",
      opening: "abriendo {name}...",
      themeNow: "tema cambiado a {name}",
      themeUnknown: "tema desconocido '{name}'. disponibles: {list}",
      themeCurrent: "tema actual: {name} (disponibles: {list})",
      langNow: "idioma cambiado a {name}",
      langUnknown: "idioma desconocido '{name}'. disponibles: es, en",
      langCurrent: "idioma actual: {name} (disponibles: es, en)",
      sudoDenied: "guest no está en el archivo sudoers. Este incidente será reportado.",
      sudoHire: "Acceso concedido. Abriendo un canal a {email}...",
      dirsFiles: "{dirs} directorios, {files} archivos",
      helpHeader: "Comandos disponibles:",
      helpFooter: "Ejecuta 'help <comando>' para más detalles.",
      desc_help: "lista los comandos o muestra su uso",
      desc_ls: "lista el contenido de un directorio (-l detalles, -a archivos ocultos)",
      desc_cd: "cambia de directorio (también navega por la web)",
      desc_pwd: "muestra el directorio actual",
      desc_cat: "muestra un archivo",
      desc_tree: "muestra el árbol de directorios",
      desc_open: "abre un enlace o archivo, o entra en un directorio",
      desc_theme: "muestra o cambia el tema",
      desc_lang: "muestra o cambia el idioma",
      desc_clear: "limpia la pantalla",
      desc_echo: "imprime texto",
      desc_whoami: "muestra el usuario actual",
      desc_date: "muestra la fecha actual (Madrid)",
      desc_history: "muestra el historial de comandos",
      desc_neofetch: "muestra información del sistema",
      desc_sudo: "ejecuta un comando como superusuario (solo 'hire' está permitido)",
      desc_hire: "ponte en contacto con Victor",
      desc_rm: "borra archivos (pruébalo, si te atreves)",
      desc_exit: "cierra el terminal",
      rmDenied: "rm: no se puede borrar '{name}': Permiso denegado (guest es solo lectura)",
      rmOperand: "rm: falta un operando",
      rmWarning: "rm: es peligroso operar recursivamente sobre '/'",
      rmWipe: "borrado '{name}'",
      rmSystem: "borrando system32... espera, sistema equivocado",
      rmReveal: "Era broma: no se ha borrado nada. Restaurando portfolio... hecho.",
      rmJoke: "Buen intento :)",
      matrixHint: "Despierta, guest... (Esc, Ctrl+C o clic para salir)",
      easterEggs: "Comandos ocultos\n\nmatrix   lluvia digital (Esc, Ctrl+C o clic para salir)",
      desc_grep: "busca texto en los archivos (sin distinguir mayúsculas)",
      desc_man: "muestra el manual de un comando",
      desc_sound: "activa o desactiva el sonido de la interfaz",
      grepNoMatch: "sin coincidencias para '{name}'",
      grepMatches: "{count} coincidencias en {files} archivos",
      manName: "NOMBRE",
      manSynopsis: "SINOPSIS",
      manDescription: "DESCRIPCIÓN",
      manExamples: "EJEMPLOS",
      soundNow: "sonido {state}",
      soundCurrent: "el sonido está {state}",
      soundOn: "activado",
      soundOff: "desactivado",
      soundUsage: "uso: sound [on|off]",
      unknownCommandHelp: "comando inexistente: {name}",
      infoRole: "Desarrollador full-stack",
      infoFocus: "Aplicaciones web · Ciberseguridad",
      infoLocation: "Madrid, España",
      infoUptime: "{minutes} min",
      desc_scan: "ejecuta un escaneo de vulnerabilidades simulado",
      desc_theme_editor: "personaliza el color de acento personalizado",
      scanStart: "[-] Inicializando escáner de ciberseguridad v2.4...",
      scanPorts: "[+] Escaneando puertos abiertos (80, 443, 22, 3306)... SEGURO",
      scanHeaders: "[+] Comprobando cabeceras de seguridad HTTP... CORRECTO",
      scanDeps: "[+] Auditando dependencias... 0 vulnerabilidades encontradas",
      scanDone: "[✔] Objetivo seguro. No se detectaron vectores críticos.",
      themeEditorUsage: "uso: theme-editor <hex>|reset",
      themeEditorReset: "Color de acento restablecido por defecto.",
      themeEditorInvalid: "Color hex inválido: {arg}. Usa el formato #RRGGBB.",
      themeEditorApplied: "Color de acento actualizado correctamente a {color}.",
      scanTarget: "[*] Objetivo: {target}",
      scanSsl: "[+] Certificado SSL/TLS: Válido (TLS 1.3, ECDSA)... SEGURO",
      scanFuzz: "[+] Fondeo de entradas (XSS/SQLi): 0 vulnerabilidades halladas",
      scanGrade: "[★] Puntuación de Seguridad Final: A+ (Portfolio Blindado)",
    },
  },

  t(key, vars = {}) {
    const text = this.messages[Model.locale]?.[key] ?? this.messages.en[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  },

  displayPath(parts) {
    return parts.length ? `~/${parts.join("/")}` : "~";
  },

  // Resolves an argument to an existing node, printing the proper error when it cannot.
  lookup(ctx, input) {
    const parts = ctx.resolve(input);
    const node = parts && ctx.node(parts);
    if (!node) {
      ctx.print(this.t("noSuchFile", { name: input }), "err");
      return null;
    }
    return { parts, node };
  },

  examples: {
    ls: ["ls", "ls -la", "ls ~/skills"],
    cd: ["cd experience/work", "cd ..", "cd ~"],
    cat: ["cat about/about.txt", "cat ~/skills/languages.txt"],
    tree: ["tree", "tree experience"],
    open: ["open contact/github.txt", "open experience"],
    theme: ["theme claude", "theme"],
    lang: ["lang en", "lang es"],
    grep: ["grep angular", "grep java ~/skills", "grep full-stack ~"],
    sound: ["sound off", "sound on"],
    sudo: ["sudo hire"],
    hire: ["hire"],
    rm: ["rm -rf /"],
    man: ["man grep"],
  },

  registry: {
    help: {
      usage: "help [command]",
      run(ctx) {
        const T = TerminalCommands;
        const name = ctx.args[0];
        if (name) {
          const command = T.registry[name];
          if (!command) return ctx.print(T.t("unknownCommandHelp", { name }), "err");
          ctx.print(command.usage, "accent");
          return ctx.print(T.t(`desc_${name}`));
        }
        ctx.print(T.t("helpHeader"), "accent");
        Object.entries(T.registry).filter(([, command]) => !command.hidden).forEach(([key]) => {
          ctx.print([{ text: key.padEnd(10), cls: "dir" }, { text: T.t(`desc_${key}`) }]);
        });
        ctx.print(T.t("helpFooter"), "dim");
      },
    },

    ls: {
      usage: "ls [-la] [path]",
      run(ctx) {
        const T = TerminalCommands;
        const flags = ctx.args.filter((arg) => arg.startsWith("-")).join("");
        const long = flags.includes("l");
        const all = flags.includes("a");
        const targets = ctx.args.filter((arg) => !arg.startsWith("-"));
        if (!targets.length) targets.push("");

        targets.forEach((input, index) => {
          const found = T.lookup(ctx, input);
          if (!found) return;
          if (targets.length > 1) ctx.print(`${index ? "\n" : ""}${input}:`, "dim");
          const { node } = found;
          if (node.type === "file") return ctx.print(input);

          const entries = TerminalFS.sorted(node, all);
          if (long) {
            entries.forEach(([name, child]) => {
              const isDir = child.type === "dir";
              const size = isDir ? "-" : String(child.text.length);
              ctx.print([
                { text: `${isDir ? "drwxr-xr-x" : "-rw-r--r--"}  ${size.padStart(5)}  `, cls: "dim" },
                { text: isDir ? `${name}/` : name, cls: isDir ? "dir" : "" },
              ]);
            });
            return;
          }
          const parts = [];
          entries.forEach(([name, child]) => {
            const isDir = child.type === "dir";
            parts.push({ text: isDir ? `${name}/` : name, cls: isDir ? "dir" : "" }, { text: "   " });
          });
          if (parts.length) ctx.print(parts);
        });
      },
    },

    cd: {
      usage: "cd [path]",
      run(ctx) {
        const T = TerminalCommands;
        const input = ctx.args[0];
        const parts = input === undefined ? [] : ctx.resolve(input);
        const node = parts && ctx.node(parts);
        if (!node) return ctx.print(T.t("noSuchFile", { name: input }), "err");
        if (node.type !== "dir") return ctx.print(T.t("notDir", { name: input }), "err");
        ctx.navigate(parts);
      },
    },

    pwd: {
      usage: "pwd",
      run(ctx) {
        ctx.print([Model.basePath, ...ctx.cwd].join("/"));
      },
    },

    cat: {
      usage: "cat <file>",
      run(ctx) {
        const T = TerminalCommands;
        if (!ctx.args.length) return ctx.print(T.t("missingOperand", { name: "cat" }), "err");
        ctx.args.forEach((input) => {
          const found = T.lookup(ctx, input);
          if (!found) return;
          if (found.node.type === "dir") return ctx.print(T.t("isDir", { name: input }), "err");
          found.node.text.split("\n").forEach((line) => ctx.print(line));
        });
      },
    },

    tree: {
      usage: "tree [path]",
      run(ctx) {
        const T = TerminalCommands;
        const found = T.lookup(ctx, ctx.args[0] ?? "");
        if (!found) return;
        if (found.node.type !== "dir") return ctx.print(T.t("notDir", { name: ctx.args[0] }), "err");

        let dirs = 0;
        let files = 0;
        ctx.print({ text: found.parts.length ? found.parts.at(-1) : ".", cls: "dir" });
        const walk = (node, prefix) => {
          const entries = TerminalFS.sorted(node);
          entries.forEach(([name, child], index) => {
            const last = index === entries.length - 1;
            const isDir = child.type === "dir";
            if (isDir) dirs += 1;
            else files += 1;
            ctx.print([{ text: `${prefix}${last ? "└── " : "├── "}`, cls: "dim" }, { text: isDir ? `${name}/` : name, cls: isDir ? "dir" : "" }]);
            if (isDir) walk(child, `${prefix}${last ? "    " : "│   "}`);
          });
        };
        walk(found.node, "");
        ctx.print(`\n${T.t("dirsFiles", { dirs, files })}`, "dim");
      },
    },

    open: {
      usage: "open <file|directory>",
      run(ctx) {
        const T = TerminalCommands;
        const input = ctx.args[0];
        if (!input) return ctx.print(T.t("missingOperand", { name: "open" }), "err");
        const found = T.lookup(ctx, input);
        if (!found) return;
        if (found.node.type === "dir") return ctx.navigate(found.parts);
        if (!found.node.href) return ctx.print(T.t("nothingToOpen", { name: input }), "err");
        ctx.print(T.t("opening", { name: input }), "dim");
        window.open(found.node.href, "_blank", "noopener");
      },
    },

    theme: {
      usage: "theme [hacker|cyberpunk|claude]",
      run(ctx) {
        const T = TerminalCommands;
        const list = Model.themes.map((theme) => theme.id).join(", ");
        const name = ctx.args[0]?.toLowerCase();
        if (!name) return ctx.print(T.t("themeCurrent", { name: Model.state.theme, list }));
        if (!Model.themes.some((theme) => theme.id === name)) return ctx.print(T.t("themeUnknown", { name, list }), "err");
        View.setTheme(name);
        ctx.print(T.t("themeNow", { name }));
      },
    },

    lang: {
      usage: "lang [es|en]",
      run(ctx) {
        const T = TerminalCommands;
        const name = ctx.args[0]?.toLowerCase();
        if (!name) return ctx.print(T.t("langCurrent", { name: Model.locale }));
        if (name !== "es" && name !== "en") return ctx.print(T.t("langUnknown", { name }), "err");
        View.setLanguage(name);
        ctx.print(T.t("langNow", { name }));
      },
    },

    clear: {
      usage: "clear",
      run(ctx) {
        ctx.clear();
      },
    },

    echo: {
      usage: "echo [text]",
      run(ctx) {
        ctx.print(ctx.args.join(" "));
      },
    },

    whoami: {
      usage: "whoami",
      run(ctx) {
        ctx.print("guest");
      },
    },

    date: {
      usage: "date",
      run(ctx) {
        ctx.print(new Intl.DateTimeFormat(Model.locale === "es" ? "es-ES" : "en-GB", {
          timeZone: "Europe/Madrid",
          dateStyle: "full",
          timeStyle: "medium",
        }).format(new Date()));
      },
    },

    history: {
      usage: "history",
      run(ctx) {
        ctx.history.forEach((entry, index) => ctx.print(`${String(index + 1).padStart(4)}  ${entry}`));
      },
    },

    neofetch: {
      usage: "neofetch",
      run(ctx) {
        const T = TerminalCommands;
        const rows = [
          ["Role", T.t("infoRole")],
          ["Focus", T.t("infoFocus")],
          ["Location", T.t("infoLocation")],
          ["Theme", Model.state.theme],
          ["Language", Model.locale],
          ["Shell", "vsh"],
          ["Uptime", T.t("infoUptime", { minutes: Math.max(1, Math.round(performance.now() / 60000)) })],
        ];
        ctx.print([{ text: "guest", cls: "accent" }, { text: "@portfolio" }]);
        ctx.print("─".repeat(18), "dim");
        rows.forEach(([key, value]) => ctx.print([{ text: key.padEnd(10), cls: "accent" }, { text: value }]));
      },
    },

    hire: {
      usage: "hire [victor]",
      run(ctx) {
        const T = TerminalCommands;
        ctx.print(T.t("sudoHire", { email: Model.contactEmail }), "accent");
        window.setTimeout(() => { window.location.href = `mailto:${Model.contactEmail}`; }, 600);
      },
    },

    sudo: {
      usage: "sudo hire",
      run(ctx) {
        const T = TerminalCommands;
        // hire is the only command allowed to run with elevated privileges.
        if (ctx.args[0]?.toLowerCase() === "hire") return T.registry.hire.run({ ...ctx, args: ctx.args.slice(1) });
        ctx.print(T.t("sudoDenied"), "err");
      },
    },

    grep: {
      usage: "grep <text> [path]",
      run(ctx) {
        const T = TerminalCommands;
        if (!ctx.args.length) return ctx.print(T.t("missingOperand", { name: "grep" }), "err");

        // A trailing argument that resolves to an existing path scopes the search; otherwise everything is the pattern.
        let scope = { parts: ctx.cwd, node: ctx.node(ctx.cwd) };
        let words = ctx.args;
        if (ctx.args.length > 1) {
          const last = ctx.args.at(-1);
          const parts = ctx.resolve(last);
          const node = parts && ctx.node(parts);
          if (node) {
            scope = { parts, node };
            words = ctx.args.slice(0, -1);
          }
        }

        const pattern = words.join(" ");
        const needle = pattern.toLowerCase();
        const files = scope.node.type === "dir" ? [...TerminalFS.files(scope.node, scope.parts)] : [[scope.parts, scope.node]];
        let count = 0;
        const hitFiles = new Set();

        files.forEach(([parts, file]) => {
          if (parts.at(-1).endsWith(".pdf")) return;
          file.text.split("\n").forEach((line, index) => {
            const at = line.toLowerCase().indexOf(needle);
            if (at < 0) return;
            count += 1;
            hitFiles.add(parts.join("/"));
            ctx.print([
              { text: parts.join("/"), cls: "dir" },
              { text: `:${index + 1}: `, cls: "dim" },
              { text: line.slice(0, at) },
              { text: line.slice(at, at + needle.length), cls: "accent" },
              { text: line.slice(at + needle.length) },
            ]);
          });
        });

        if (!count) return ctx.print(T.t("grepNoMatch", { name: pattern }), "err");
        ctx.print(T.t("grepMatches", { count, files: hitFiles.size }), "dim");
      },
    },

    man: {
      usage: "man <command>",
      run(ctx) {
        const T = TerminalCommands;
        const name = ctx.args[0];
        if (!name) return ctx.print(T.t("missingOperand", { name: "man" }), "err");
        const command = Object.hasOwn(T.registry, name) ? T.registry[name] : null;
        if (!command) return ctx.print(T.t("unknownCommandHelp", { name }), "err");

        const section = (key) => ctx.print(T.t(key), "accent");
        section("manName");
        ctx.print(`    ${name} - ${T.t(`desc_${name}`)}`);
        ctx.print("");
        section("manSynopsis");
        ctx.print(`    ${command.usage}`);
        const examples = T.examples[name];
        if (examples) {
          ctx.print("");
          section("manExamples");
          examples.forEach((example) => ctx.print(`    $ ${example}`));
        }
      },
    },

    sound: {
      usage: "sound [on|off]",
      run(ctx) {
        const T = TerminalCommands;
        const state = (enabled) => T.t(enabled ? "soundOn" : "soundOff");
        const arg = ctx.args[0]?.toLowerCase();
        if (!arg) return ctx.print(T.t("soundCurrent", { state: state(View.soundEnabled()) }));
        if (arg !== "on" && arg !== "off") return ctx.print(T.t("soundUsage"), "err");
        View.setSound(arg === "on");
        ctx.print(T.t("soundNow", { state: state(arg === "on") }));
      },
    },

    rm: {
      usage: "rm [-rf] <path>",
      run(ctx) {
        const T = TerminalCommands;
        const flags = ctx.args.filter((arg) => arg.startsWith("-")).join("");
        const targets = ctx.args.filter((arg) => !arg.startsWith("-"));
        if (!targets.length) return ctx.print(T.t("rmOperand"), "err");

        const recursive = /r/i.test(flags);
        const force = /f/i.test(flags);
        const wipesAll = targets.some((target) => ["/", "/*", "~", "~/", "*", ".", "./", "../"].includes(target) || target === Model.basePath);
        if (!wipesAll) {
          targets.forEach((target) => ctx.print(T.t("rmDenied", { name: target }), "err"));
          return;
        }
        if (!recursive || !force) return ctx.print(T.t("rmWarning"), "err");

        const stage = document.querySelector("#stage");
        const steps = [...TerminalFS.files(ctx.node([]))]
          .filter(([, file]) => file.text)
          .map(([parts]) => ({ text: T.t("rmWipe", { name: `~/${parts.join("/")}` }), kind: "err", wait: 140 }));
        steps.unshift({ text: "", wait: 0 });
        steps.push({ text: T.t("rmSystem"), kind: "err", wait: 900 }, { text: T.t("rmReveal"), kind: "accent", wait: 400 }, { text: T.t("rmJoke"), kind: "dim", wait: 0 });
        stage.classList.add("is-wiping");
        ctx.play(steps, () => stage.classList.remove("is-wiping"));
      },
    },

    matrix: {
      hidden: true,
      usage: "matrix",
      run(ctx) {
        ctx.print(TerminalCommands.t("matrixHint"), "accent");
        ctx.matrix();
      },
    },

    scan: {
      usage: "scan [target]",
      run(ctx) {
        const T = TerminalCommands;
        const target = ctx.args[0] || "v1r3.dev";
        const steps = [
          { text: T.t("scanTarget", { target }), kind: "dim", wait: 200 },
          { text: T.t("scanStart"), kind: "dim", wait: 300 },
          { text: T.t("scanPorts"), kind: "default", wait: 400 },
          { text: T.t("scanSsl"), kind: "default", wait: 400 },
          { text: T.t("scanHeaders"), kind: "default", wait: 400 },
          { text: T.t("scanDeps"), kind: "default", wait: 400 },
          { text: T.t("scanFuzz"), kind: "default", wait: 400 },
          { text: T.t("scanDone"), kind: "accent", wait: 300 },
          { text: T.t("scanGrade"), kind: "accent", wait: 0 },
        ];
        ctx.play(steps);
      },
    },

    exit: {
      usage: "exit",
      run(ctx) {
        ctx.close();
      },
    },
  },
};
