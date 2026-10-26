// Auto-generated bundle for zero-server file:// execution
;

// --- FILE: assets/js/model.js ---
;
const Model = {
  basePath: "/home/v1r3",
  themes: [
    { id: "hacker", label: "HACKER" },
    { id: "cyberpunk", label: "CYBERPUNK" },
    { id: "claude", label: "CLAUDE" },
  ],
  locale: "es",
  translations: {
    en: {
      home: "Home", about: "About Victor", skills: "Skills", experience: "Experience and projects", contact: "Contact",
      metaDescription: "Victor Reguillo, full-stack developer focused on web applications and cybersecurity.",
      goHome: "Go to home", currentDirectory: "Current directory", portfolioSystem: "[ PORTFOLIO SYSTEM ]", madrid: "[ MADRID, SPAIN ]",
      folderAbout: "about/", folderSkills: "skills/", folderExperience: "experience/", folderContact: "contact/", folderJuegos: "juegos/", itemCount: "05 ITEMS",
      systemOnline: "SYSTEM ONLINE", available: "[ AVAILABLE FOR WORK ]", directoryContents: "DIRECTORY CONTENTS",
      profileFiles: "PROFILE FILES", technicalStack: "TECHNICAL STACK", workProjects: "WORK & PROJECTS", arcadeGames: "ARCADE & GAMES", openChannel: "OPEN CHANNEL",
      juegosEyebrow: "04 / ARCADE & GAMES", juegosTitle: "Interactive <span>games.</span>", juegosNote: "Play built-in arcade minigames and view repository projects.", playNow: "PLAY NOW",
      developer: "FULL-STACK DEVELOPER", analyst: "CYBERSECURITY ANALYST", webDeveloping: "WEB DEVELOPING", softwareEngineering: "SOFTWARE ENGINEERING",
      homeEyebrow: "FULL-STACK DEVELOPER <span>//</span> CYBERSECURITY ANALYST",
      heroRole: "WEB DEVELOPING <span>/</span> SOFTWARE ENGINEERING",
      intro: "Full-stack developer focused on web applications, backend systems, databases, and secure software. Currently studying a master's degree in cybersecurity.",
      aboutEyebrow: "01 / PROFILE", aboutTitle: "Behind the <span>terminal.</span>",
      quote: "“People are strange... they know nothing lasts forever, but still find time to laugh and cry and get upset, laboring over things.”",
      about1: "I'm Victor, a full-stack developer and Web Application Development graduate. I enjoy understanding how systems work beyond the surface and turning requirements into clean, secure and maintainable software.",
      about2: "My professional experience includes web applications for clients, using Angular on the frontend, C# and .NET on the backend, and SQL databases. I also work with Java, Git-based workflows, and Maven.",
      about3: "I'm currently pursuing a master's degree in cybersecurity, exploring ethical hacking, system hardening, and digital forensics.",
      downloadCv: "DOWNLOAD CV", skillsEyebrow: "02 / TOOLKIT", skillsTitle: "Technical <span>skills.</span>",
      skillsNote: "Technologies and tools from my current toolkit.", experienceEyebrow: "03 / CAREER LOG",
      experienceTitle: "Experience & <span>projects.</span>", chooseDirectory: "Choose a directory to inspect its contents.",
      experienceDirectories: "Experience directories", professionalExperience: "Professional experience",
      studiesCertifications: "Studies & certifications", selectedBuilds: "Selected builds", selectedDirectory: "Selected directory contents",
      accessGranted: "ACCESS GRANTED", standby: "STANDBY", juegosEyebrow: "04 / ARCADE", juegosTitle: "Arcade & <span>games.</span>", juegosNote: "Video games and interactive console projects.",
      contactEyebrow: "05 / OPEN CHANNEL",
      contactTitle: "Let's talk <span>projects.</span>", contactNote: "Open to software development roles and open-source collaborations.",
      findOnline: "FIND ME ONLINE", directChannel: "DIRECT CHANNEL", sendMessage: "SEND A MESSAGE",
      name: "Name", email: "Your email", message: "Message", sendButton: "SEND MESSAGE",
      theme: "Theme", language: "Language", switchTheme: "Switch to {theme} theme",
      switchLanguage: "Switch language to {language}", spanish: "Spanish", english: "English",
      languageName: "English", portfolioDirectories: "Portfolio directories", quoteAuthor: "— Mieko Kawakami",
      photoAlt: "Victor Reguillo", photoCaption: "VICTOR REGUILLO <span>//</span> MADRID",
      comingSoon: "Coming Soon", viewRepository: "VIEW REPOSITORY", downloadCvLabel: "Download CV",
      sending: "SENDING...", sent: "MESSAGE SENT. THANK YOU.", openingEmail: "OPENING YOUR EMAIL APP...", fillAllFields: "Please fill in all fields.",
      skillsGroups: ["Languages", "Frameworks & libraries", "Tools & platforms", "Databases", "Languages spoken"],
      spokenSkills: ["Spanish · Native", "English · B2 Cambridge", "Italian · A2"],
      folderLabels: { work: "work", education: "education", projects: "projects" }
    },
    es: {
      home: "Inicio", about: "Sobre Victor", skills: "Habilidades", experience: "Experiencia y proyectos", contact: "Contacto",
      metaDescription: "Victor Reguillo, desarrollador full-stack especializado en aplicaciones web y ciberseguridad.",
      goHome: "Ir al inicio", currentDirectory: "Directorio actual", portfolioSystem: "[ SISTEMA DEL PORTFOLIO ]", madrid: "[ MADRID, ESPAÑA ]",
      folderAbout: "sobre-mi/", folderSkills: "habilidades/", folderExperience: "experiencia/", folderContact: "contacto/", folderJuegos: "juegos/", itemCount: "05 ELEMENTOS",
      systemOnline: "SISTEMA ACTIVO", available: "[ DISPONIBLE PARA TRABAJAR ]", directoryContents: "CONTENIDO DEL DIRECTORIO",
      profileFiles: "PERFIL", technicalStack: "HABILIDADES TÉCNICAS", workProjects: "TRABAJO Y PROYECTOS", arcadeGames: "JUEGOS ARCADE", openChannel: "CONTACTO",
      juegosEyebrow: "04 / JUEGOS ARCADE", juegosTitle: "Juegos <span>interactivos.</span>", juegosNote: "Juega a minijuegos arcade integrados y proyectos de repositorios.", playNow: "JUGAR AHORA",
      developer: "DESARROLLADOR FULL-STACK", analyst: "ANALISTA DE CIBERSEGURIDAD", webDeveloping: "DESARROLLO WEB", softwareEngineering: "INGENIERÍA DEL SOFTWARE",
      homeEyebrow: "DESARROLLADOR FULL-STACK <span>//</span> ANALISTA DE CIBERSEGURIDAD",
      heroRole: "DESARROLLO WEB <span>/</span> INGENIERÍA DEL SOFTWARE",
      intro: "Desarrollador full-stack centrado en aplicaciones web, sistemas backend, bases de datos y software seguro. Actualmente curso un máster en ciberseguridad.",
      aboutEyebrow: "01 / PERFIL", aboutTitle: "Detrás del <span>terminal.</span>",
      quote: "“Las personas son extrañas... saben que nada dura para siempre, pero aun así encuentran tiempo para reír, llorar y preocuparse por las cosas.”",
      about1: "Soy Victor, desarrollador full-stack y titulado en Desarrollo de Aplicaciones Web. Me gusta entender cómo funcionan los sistemas y convertir requisitos en software limpio, seguro y fácil de mantener.",
      about2: "Mi experiencia profesional incluye aplicaciones web para clientes con Angular en el frontend, C# y .NET en el backend y bases de datos SQL. También trabajo con Java, Git workflows y Maven.",
      about3: "Actualmente curso un máster en ciberseguridad y profundizo en ethical hacking, bastionado de sistemas y análisis forense digital.",
      downloadCv: "DESCARGAR CV", skillsEyebrow: "02 / TECNOLOGÍAS", skillsTitle: "Habilidades <span>técnicas.</span>",
      skillsNote: "Tecnologías y herramientas de mi perfil actual.", experienceEyebrow: "03 / TRAYECTORIA",
      experienceTitle: "Experiencia y <span>proyectos.</span>", chooseDirectory: "Selecciona una carpeta para ver su contenido.",
      experienceDirectories: "Carpetas de experiencia", professionalExperience: "Experiencia profesional",
      studiesCertifications: "Estudios y certificaciones",       selectedBuilds: "Proyectos seleccionados", selectedDirectory: "Contenido de la carpeta seleccionada", folderJuegos: "juegos/", arcadeGames: "Juegos y arcade",
      accessGranted: "ACCESO CONCEDIDO", standby: "EN ESPERA",       juegosEyebrow: "04 / ARCADE", juegosTitle: "Arcade & <span>games.</span>", juegosNote: "Video games and interactive console projects.",
      contactEyebrow: "05 / OPEN CHANNEL",
      contactTitle: "Hablemos de <span>proyectos.</span>", contactNote: "Disponible para puestos de desarrollo de software y colaboraciones de código abierto.",
      findOnline: "ENCUÉNTRAME EN LÍNEA", directChannel: "CONTACTO DIRECTO", sendMessage: "ENVIAR UN MENSAJE",
      name: "Nombre", email: "Tu correo electrónico", message: "Mensaje", sendButton: "ENVIAR MENSAJE",
      theme: "Tema", language: "Idioma", switchTheme: "Cambiar al tema {theme}",
      switchLanguage: "Cambiar idioma a {language}", spanish: "Español", english: "Inglés",
      languageName: "Español", portfolioDirectories: "Directorios del portfolio", quoteAuthor: "— Mieko Kawakami",
      photoAlt: "Victor Reguillo", photoCaption: "VICTOR REGUILLO <span>//</span> MADRID",
      comingSoon: "Próximamente", viewRepository: "VER REPOSITORIO", downloadCvLabel: "Descargar CV",
      sending: "ENVIANDO...", sent: "MENSAJE ENVIADO. GRACIAS.", openingEmail: "ABRIENDO TU APLICACIÓN DE CORREO...", fillAllFields: "Por favor, completa todos los campos.",
      skillsGroups: ["Lenguajes", "Frameworks y librerías", "Herramientas y plataformas", "Bases de datos", "Idiomas"],
      spokenSkills: ["Español · Nativo", "Inglés · B2 Cambridge", "Italiano · A2"],
      folderLabels: { work: "trabajo", education: "estudios", projects: "proyectos" }
    }
  },

  state: {
    screen: "home",
    menuIndex: 0,
    optionIndex: 0,
    activeFolder: null,
    theme: "hacker",
  },

  pages: [
    { id: "home", label: "HOME", labelEs: "INICIO" },
    { id: "about", label: "ABOUT", labelEs: "SOBRE-MI" },
    { id: "skills", label: "SKILLS", labelEs: "HABILIDADES" },
    { id: "experience", label: "EXPERIENCE", labelEs: "EXPERIENCIA" },
    { id: "juegos", label: "GAMES", labelEs: "JUEGOS" },
    { id: "contact", label: "CONTACT", labelEs: "CONTACTO" },
  ],

  menu: [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE & PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ],

  experienceFolders: [
    { id: "work", label: "work", labelEs: "trabajo", source: "jobExperience" },
    { id: "education", label: "education", labelEs: "estudios", source: "studies" },
    { id: "projects", label: "projects", labelEs: "proyectos", source: "projects" },
  ],

  contactEmail: "victorreguillo@gmail.com",

  jobExperience: [
    {
      title: "Full-Stack Developer",
      tag: "Client web applications",
      meta: "ANGULAR · C# · .NET · SQL",
      desc: "Developed client-facing web applications with Angular on the frontend, C# with .NET on the backend, and SQL for relational data. Used Swagger and Postman for API documentation and testing.",
      translations: {
        es: {
          title: "Desarrollador full-stack",
          tag: "Aplicaciones web para clientes",
          desc: "Desarrollé aplicaciones web para clientes con Angular en el frontend, C# y .NET en el backend y SQL para datos relacionales. Utilicé Swagger y Postman para documentar y probar las API.",
        },
      },
    },
  ],

  studies: [
    {
      title: "Master's in Cybersecurity",
      tag: "Postgraduate studies",
      meta: "IN PROGRESS",
      desc: "Currently studying ethical hacking, system hardening, and digital forensics.",
      translations: {
        es: {
          title: "Máster en Ciberseguridad",
          tag: "Estudios de posgrado",
          meta: "EN CURSO",
          desc: "Actualmente estudio ethical hacking, bastionado de sistemas y análisis forense digital.",
        },
      },
    },
    {
      title: "Web Application Development",
      tag: "Higher vocational degree",
      meta: "GRADUATE",
      desc: "Training in software engineering, full-stack development, databases, and modern web technologies.",
      translations: {
        es: {
          tag: "Formación profesional superior",
          meta: "TITULADO",
          desc: "Formación en ingeniería del software, desarrollo full-stack, bases de datos y tecnologías web modernas.",
        },
      },
    },
  ],

  projects: [
    {
      title: "Vega",
      tag: "C# · SECURITY",
      meta: "PASSWORD MANAGER",
      desc: "A desktop password manager that encrypts credentials and stores them locally on your computer, without relying on a cloud service.",
      url: "https://github.com/Sudo-Vire/Vega",
      cta: "Coming Soon",
      translations: {
        es: {
          meta: "GESTOR DE CONTRASEÑAS",
          desc: "Gestor de contraseñas de escritorio que cifra las credenciales y las guarda localmente en el ordenador, sin depender de servicios en la nube.",
          cta: "Próximamente",
        },
      },
    },
    {
      title: "Java Poker",
      tag: "JAVA · MVC",
      meta: "TEXAS HOLD'EM GAME",
      desc: "A console-based Texas Hold'em game with a simple AI opponent, betting system, and hand evaluation.",
      url: "https://github.com/Sudo-Vire/Poker",
      cta: "VIEW REPOSITORY",
      translations: {
        es: {
          meta: "JUEGO DE TEXAS HOLD'EM",
          desc: "Juego de Texas Hold'em para consola, con un oponente de inteligencia artificial, sistema de apuestas y evaluación de manos.",
          cta: "VER REPOSITORIO",
        },
      },
    },
  ],

  games: [
    {
      id: "minesweeper",
      title: "Cyber Minesweeper",
      tag: "LOGIC · RETRO ARCADE",
      meta: "PLAYABLE MINIGAME",
      desc: "A cyber-themed Minesweeper game. Uncover clean nodes, avoid encrypted malware bombs, and flag suspicious sectors.",
      cta: "PLAY NOW",
      translations: {
        es: {
          title: "Cyber Minesweeper",
          tag: "LÓGICA · ARCADE RETRO",
          meta: "MINIJUEGO JUGABLE",
          desc: "Un Buscaminas de temática cibernética. Despeja nodos limpios, evita bombas de malware cifradas y marca sectores sospechosos.",
          cta: "JUGAR AHORA",
        },
      },
    },
    {
      id: "snake",
      title: "Cyber Snake",
      tag: "HTML5 · RETRO ARCADE",
      meta: "PLAYABLE MINIGAME",
      desc: "A cyber-themed Snake game built with HTML5 canvas. Eat data packets, grow longer, avoid walls and self-collision.",
      cta: "PLAY NOW",
      translations: {
        es: {
          title: "Cyber Snake",
          tag: "HTML5 · ARCADE RETRO",
          meta: "MINIJUEGO JUGABLE",
          desc: "Un juego de la serpiente con temática cibernética en Canvas HTML5. Come paquetes de datos, crece y evita colisiones.",
          cta: "JUGAR AHORA",
        },
      },
    },
    {
      id: "tetris",
      title: "Cyber Tetris",
      tag: "HTML5 · RETRO ARCADE",
      meta: "PLAYABLE MINIGAME",
      desc: "A cyber-themed Tetris game. Rotate falling neon blocks, clear complete lines, and achieve the highest score.",
      cta: "PLAY NOW",
      translations: {
        es: {
          title: "Cyber Tetris",
          tag: "HTML5 · ARCADE RETRO",
          meta: "MINIJUEGO JUGABLE",
          desc: "Un Tetris con temática cibernética. Rota bloques de neón que caen, completa líneas y consigue la mayor puntuación.",
          cta: "JUGAR AHORA",
        },
      },
    },
    {
      id: "pong",
      title: "Cyber Pong",
      tag: "HTML5 · ARCADE RETRO",
      meta: "PLAYABLE MINIGAME",
      desc: "Classic Pong arcade game against an AI machine. Choose from 4 difficulty levels: Easy, Medium, Hard, and Impossible.",
      cta: "PLAY NOW",
      translations: {
        es: {
          title: "Cyber Pong",
          tag: "HTML5 · ARCADE RETRO",
          meta: "MINIJUEGO JUGABLE",
          desc: "Clásico juego arcade de Pong contra la máquina. Elige entre 4 niveles de dificultad: Fácil, Medio, Difícil e Imposible.",
          cta: "JUGAR AHORA",
        },
      },
    },
    {
      title: "Java Poker",
      tag: "JAVA · CONSOLE GAME",
      meta: "TEXAS HOLD'EM",
      desc: "A console-based Texas Hold'em game featuring AI opponents, betting rounds, and poker hand evaluation logic.",
      url: "https://github.com/Sudo-Vire/Poker",
      cta: "VIEW REPOSITORY",
      translations: {
        es: {
          title: "Java Poker",
          tag: "JAVA · JUEGO DE CONSOLA",
          meta: "TEXAS HOLD'EM",
          desc: "Juego de Texas Hold'em para consola con oponentes de IA, rondas de apuestas y lógica de evaluación de manos de póker.",
          cta: "VER REPOSITORIO",
        },
      },
    },
  ],

  skills: [
    { group: "Languages", groupEs: "Lenguajes", items: [["HTML5", 100], ["CSS3", 90], ["JavaScript", 70], ["Java", 90], ["PHP", 40], ["C#", 90], ["SQL", 90], ["Bash", 55]] },
    { group: "Frameworks & libraries", groupEs: "Frameworks y librerías", items: [[".NET", 70], ["Angular", 40], ["Spring", 10]] },
    { group: "Tools & platforms", groupEs: "Herramientas y plataformas", items: [["Git", 80], ["GitHub", 70], ["Azure", 60], ["VS Code", 80], ["IntelliJ", 80], ["Postman", 40], ["Swagger", 50]] },
    { group: "Databases", groupEs: "Bases de datos", items: [["SQLDeveloper", 85],["MySQL", 85], ["MongoDB", 60]] },
    { group: "Languages spoken", groupEs: "Idiomas", items: [["Spanish · Native", 100, "Español · Nativo"], ["English · B2 Cambridge", 80, "Inglés · B2 Cambridge"], ["Italian · A2", 30, "Italiano · A2"]] },
  ],

  contacts: [
    { label: "GitHub", href: "https://github.com/Sudo-Vire", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/victor-reguillo", external: true },
    { label: "Instagram", href: "https://instagram.com/_.vire._", external: true },
    { label: "Download CV", labelEs: "Descargar CV", href: "assets/Vire-CV.pdf", download: "Victor-Reguillo-CV.pdf" },
  ],
};;

// --- FILE: assets/js/view.js ---
;


// Core view. Feature modules (orbs, virtualFolders, experience, contact) extend it with Object.assign.
const View = {
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
    };

    this.renderSkills(Model.skills);
    this.renderJuegos(Model.games);
    this.collapseExperienceFolder();
    this.renderContacts(Model.contacts);
    this.initContact();
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
        iconCard.addEventListener("click", () => {
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
        iconCard.addEventListener("click", () => {
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
        iconCard.addEventListener("click", () => {
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
        iconCard.addEventListener("click", () => {
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
;

// --- FILE: assets/js/controller.js ---
;


// Core controller. Feature modules extend it with Object.assign; main.js calls Controller.init().
const Controller = {
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
;

// --- FILE: assets/functions/orbs/themes/themes.js ---
;



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
;

// --- FILE: assets/functions/orbs/languages/languages.js ---
;



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
;

// --- FILE: assets/functions/virtualFolders/virtualFolders.js ---
;



// Virtual folders on the experience screen: click, drag-and-drop onto the stage and the return animation.
Object.assign(Controller, {
  bindVirtualFolders() {
    const stage = document.querySelector("#stage");
    View.els.folderButtons.forEach((button, index) => {
      let pointerId = null;
      let startX = 0;
      let startY = 0;
      let dragged = false;
      let suppressClick = false;
      let returnTimer = null;

      const openFolder = () => {
        Model.state.optionIndex = index;
        View.setOptionIndex(index, false);
        View.renderExperienceFolder(button.dataset.folder);
        history.pushState({ screen: "experience", folder: button.dataset.folder }, "", `#${Model.basePath}/experience/${button.dataset.folder}`);
      };

      const finishReturn = () => {
        window.clearTimeout(returnTimer);
        returnTimer = null;
        button.classList.remove("is-returning");
        button.style.removeProperty("--return-duration");
      };

      button.addEventListener("pointerdown", (event) => {
        if (!event.isPrimary || event.button !== 0) return;
        finishReturn();
        pointerId = event.pointerId;
        startX = event.clientX;
        startY = event.clientY;
        dragged = false;
        button.style.removeProperty("--return-duration");
        button.setPointerCapture(pointerId);
      });
      button.addEventListener("pointermove", (event) => {
        if (event.pointerId !== pointerId) return;
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        if (!dragged && Math.hypot(deltaX, deltaY) > 6) {
          dragged = true;
          button.classList.add("is-dragging");
        }
        if (dragged) {
          button.style.setProperty("--drag-x", `${deltaX}px`);
          button.style.setProperty("--drag-y", `${deltaY}px`);
        }
      });
      const finishDrag = (event) => {
        if (event.pointerId !== pointerId) return;
        if (dragged) {
          const stageBounds = stage.getBoundingClientRect();
          const droppedOnStage = event.type === "pointerup"
            && event.clientX >= stageBounds.left
            && event.clientX <= stageBounds.right
            && event.clientY >= stageBounds.top
            && event.clientY <= stageBounds.bottom;
          const distance = Math.hypot(event.clientX - startX, event.clientY - startY);
          const duration = Math.min(1400, 450 + distance * 1.2);
          button.style.setProperty("--return-duration", `${duration}ms`);
          button.classList.add("is-returning");
          suppressClick = true;
          window.setTimeout(() => {
            suppressClick = false;
          }, 0);
          button.classList.remove("is-dragging");
          button.style.removeProperty("--drag-x");
          button.style.removeProperty("--drag-y");
          returnTimer = window.setTimeout(finishReturn, duration + 50);
          if (droppedOnStage) openFolder();
        }
        pointerId = null;
        dragged = false;
      };
      button.addEventListener("pointerup", finishDrag);
      button.addEventListener("pointercancel", finishDrag);
      button.addEventListener("lostpointercapture", finishDrag);
      button.addEventListener("transitionend", (event) => {
        if (event.target !== button || event.propertyName !== "transform" || !button.classList.contains("is-returning")) return;
        finishReturn();
      });
      button.addEventListener("mouseleave", () => {
        button.classList.remove("is-option-selected");
        if (document.activeElement === button) button.blur();
      });
      button.addEventListener("click", (event) => {
        if (suppressClick && event.detail > 0) {
          suppressClick = false;
          return;
        }
        openFolder();
      });
    });
  },
});
;

// --- FILE: assets/functions/experience/experience.js ---
;



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
;

// --- FILE: assets/functions/contactForm/contactForm.js ---
;



// Contact screen: contact chips, email link and the contact form.
Object.assign(View, {
  initContact() {
    this.els.email.href = `mailto:${Model.contactEmail}`;
    this.els.email.firstChild.textContent = Model.contactEmail + " ";
  },

  renderContacts(contacts) {
    const fragment = document.createDocumentFragment();
    contacts.forEach((contact) => {
      const link = document.createElement("a");
      link.className = "contact-chip";
      link.href = contact.href;
      link.textContent = Model.locale === "es" ? (contact.labelEs || contact.label) : contact.label;
      if (contact.external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      if (contact.download) link.download = contact.download;
      fragment.appendChild(link);
    });
    this.els.contacts.replaceChildren(fragment);
  },
});

Object.assign(Controller, {
  bindContactForm() {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");
    const submitButton = form.querySelector("[type='submit']");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (data._honey) return;

      const name = (data.name || "").trim();
      const email = (data.email || "").trim();
      const message = (data.message || "").trim();
      
      if (!name || !email || !message) {
        status.textContent = View.t("fillAllFields") || "Please fill in all fields.";
        submitButton.disabled = false;
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        status.textContent = View.t("invalidEmail") || "Please enter a valid email address.";
        submitButton.disabled = false;
        return;
      }

      // Rate limiting / spam protection check (10s cooldown)
      const lastSubmit = window.__lastContactSubmit || 0;
      const now = Date.now();
      if (now - lastSubmit < 10000) {
        status.textContent = View.t("rateLimit") || "Please wait a few seconds before sending another message.";
        submitButton.disabled = false;
        return;
      }
      window.__lastContactSubmit = now;

      submitButton.disabled = true;
      status.textContent = View.t("sending");
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${Model.contactEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: `Portfolio message from ${data.name}`,
          }),
        });
        if (!response.ok) throw new Error("Contact relay unavailable");
        status.textContent = View.t("sent");
        form.reset();
      } catch {
        status.textContent = View.t("openingEmail");
        const subject = encodeURIComponent(`${Model.locale === "es" ? "Mensaje del portfolio de" : "Portfolio message from"} ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\nReply to: ${data.email}`);
        window.location.href = `mailto:${Model.contactEmail}?subject=${subject}&body=${body}`;
      } finally {
        submitButton.disabled = false;
      }
    });
  },
});
;

// --- FILE: assets/functions/Terminal/Effects.js ---
;

const TerminalEffects = {
  // Full-panel "digital rain". Returns a function that stops and removes it.
  matrix(panel) {
    const style = getComputedStyle(document.body);
    const ink = style.getPropertyValue("--ink").trim() || "#000";
    const green = style.getPropertyValue("--green").trim() || "#20ef4f";
    const canvas = document.createElement("canvas");
    canvas.className = "terminal-matrix";
    panel.append(canvas);
    const ctx = canvas.getContext("2d");

    const size = 14;
    const glyphs = "アイウエオカキクケコサシスセソ0123456789<>/{}[]$#";
    let columns = 0;
    let drops = [];
    const resize = () => {
      canvas.width = panel.clientWidth;
      canvas.height = panel.clientHeight;
      columns = Math.ceil(canvas.width / size);
      drops = Array.from({ length: columns }, (_, i) => drops[i] ?? Math.random() * -30);
    };
    resize();

    const timer = window.setInterval(() => {
      ctx.globalAlpha = 0.14;
      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.fillStyle = green;
      ctx.font = `${size}px monospace`;
      drops.forEach((drop, i) => {
        ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], i * size, drop * size);
        drops[i] = drop * size > canvas.height && Math.random() > 0.97 ? 0 : drop + 1;
      });
    }, 45);

    window.addEventListener("resize", resize);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  },
};
;

// --- FILE: assets/functions/Terminal/Filesystem.js ---
;



const TerminalFS = {
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
;

// --- FILE: assets/functions/Terminal/Commands.js ---
;




const TerminalCommands = {
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
;

// --- FILE: assets/functions/Terminal/Logic.js ---
;






const TerminalApp = {
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
;

// --- FILE: assets/functions/Terminal/TerminalModule.js ---
;




const TerminalModule = {
  TerminalApp,
  TerminalCommands,
  TerminalFS,
  TerminalEffects
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => TerminalApp.init());
} else {
  TerminalApp.init();
}
;

// --- FILE: assets/functions/dinoGame/dinoGame.js ---
;

// Offline-dino style runner for the 404 page. Colours follow the active portfolio theme.
const DinoGame = (() => {
  const canvas = document.getElementById("dino-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const GROUND = H - 40;
  const PX = 3;
  const GRAVITY = 0.62;
  const FAST_FALL = 1.4;
  const JUMP = -11.5;
  const PTERO_MIN_SCORE = 250;
  const t = document.documentElement.lang === "en"
    ? { start: "PRESS SPACE OR TAP TO START", over: "GAME OVER - SPACE / ENTER / TAP", hi: "HI" }
    : { start: "PULSA ESPACIO O TOCA PARA EMPEZAR", over: "GAME OVER - ESPACIO / ENTER / TOCA", hi: "HI" };

  const body = [
    ".........#####........",
    "........#######.......",
    ".......###.#####......",
    ".......#########......",
    ".......########.......",
    ".......####...........",
    "#......####...........",
    "#.....########........",
    "###..######..#........",
    ".##########...........",
    ".##########...........",
    "..#########...........",
    "...#######............",
    "....#####.............",
];

const legs = [
  [
    "....##.##.....",
    "....#..#......",
    "....#..##.....",
    "....##........",
  ],
  [
    "....##.##.....",
    "....#..#.....",
    "....##.#......",
    ".......##.....",
  ],
];

  const duckBody = [
"......................",
"......................",
"......................",
"...............#####..",
"..............#######.",
".............###.#####",
".............#########",
"###.........#########.",
"..###....#######......",
"...#############......",
"...###############....",
"....###########..#....",
".....########.........",
"......######..........",
];

const duckLegs = [
  [
    "....##.##.....",
    "....#..#......",
    "....#..##.....",
    "....##........",
  ],
  [
    "....##.##.....",
    "....#..#......",
    "....##.#......",
    ".......##.....",
  ],
];
  const ptero = [
    [
      ".............##..........",
      "...........#####.........",
      "..........######........",
      ".....#...########.......",
      "...###...##########....#..",
      "..####...############.##..",
      ".##.####.###############..",
      "#########.##############..",
      "..#####....############...",
      "...........#######........",
      "..........................",
      "..........................",
      "..........................",
      "..........................",
      "..........................",
      "..........................",
    ],
    [
      "..........................",
      "..........................",
      "..........................",
      ".....#....................",
      "...###....................",
      "..####..................#.",
      ".##.####...............##.",
      "#########.###############.",
      "..#####.################.",
      "........###############...",
      "........#############.....",
      "........###########.......",
      "........#########.........",
      ".........#######..........",
      "..........####............",
      "...........##.............",
    ],
  ];
  const CACTUS_HEIGHTS = [[42, 64], [36, 58], [32, 50]];
  const DINO_W = 16 * PX;
  const DINO_H = (body.length + 4) * PX;
  const DUCK_W = 22 * PX;
  const DUCK_H = (duckBody.length + 2) * PX;
  const PTERO_W = 26 * PX;
  const PTERO_H = 16 * PX;
  const PTERO_BODY_TOP = 5 * PX;
  const PTERO_BODY_H = 5 * PX;

  let colors, dino, obstacles, ground, speed, score, running, started, legFrame, legTick, spawnIn, last, wingTick;
  let best = 0;
  let duckHeld = false;

  function readColors() {
    const s = getComputedStyle(document.body);
    colors = {
      ink: s.getPropertyValue("--ink").trim() || "#090b0a",
      paper: s.getPropertyValue("--paper").trim() || "#e9eee8",
      muted: s.getPropertyValue("--muted").trim() || "#858c85",
      accent: s.getPropertyValue("--green").trim() || "#20ef4f",
      dead: s.getPropertyValue("--green-dim").trim() || "#087d2a",
    };
  }

  function reset() {
    dino = { x: 60, y: GROUND - DINO_H, vy: 0, onGround: true };
    obstacles = [];
    ground = [];
    for (let x = 0; x < W; x += 40) ground.push({ x, w: 6 + Math.random() * 18 });
    speed = 6;
    score = 0;
    running = true;
    legFrame = 0;
    legTick = 0;
    wingTick = 0;
    spawnIn = 60;
  }

  function isDucking() {
    return duckHeld && dino.onGround && running;
  }

  function jump() {
    if (!started) started = true;
    if (!running) return reset();
    if (dino.onGround && !duckHeld) {
      dino.vy = JUMP;
      dino.onGround = false;
    }
  }

  function spawn() {
    if (score >= PTERO_MIN_SCORE && Math.random() < 0.4) {
      // Low flyers are jumped, mid ones ducked, high ones pass over a standing dino.
      const bodyBottoms = [8, 45, 74];
      const bodyBottom = bodyBottoms[Math.floor(Math.random() * bodyBottoms.length)];
      const y = GROUND - bodyBottom - PTERO_BODY_TOP - PTERO_BODY_H;
      obstacles.push({ type: "ptero", x: W + 10, y, w: PTERO_W, h: PTERO_H });
    } else {
      const count = 1 + Math.floor(Math.random() * 3);
      const [min, max] = CACTUS_HEIGHTS[count - 1];
      const parts = Array.from({ length: count }, (_, i) => ({
        dx: i * 18,
        h: min + Math.floor(Math.random() * (max - min + 1)),
      }));
      obstacles.push({ type: "cactus", x: W + 10, y: 0, w: 18 * count - 4, h: 0, parts });
    }
    spawnIn = Math.max(30, 50 + Math.random() * 50 - speed * 1.2);
  }

  function drawSprite(rows, ox, oy) {
    rows.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        if (row[x] === "#") ctx.fillRect(ox + x * PX, oy + y * PX, PX, PX);
      }
    });
  }

  function drawCactus(c) {
    c.parts.forEach((part) => {
      const x = c.x + part.dx;
      const y = GROUND - part.h;
      ctx.fillRect(x + 4, y, 6, part.h);
      ctx.fillRect(x + 5, y - 2, 4, 2);
      const leftY = y + Math.round(part.h * 0.4);
      ctx.fillRect(x, leftY, 4, 4);
      ctx.fillRect(x, leftY - 8, 4, 10);
      const rightY = y + Math.round(part.h * 0.55);
      ctx.fillRect(x + 10, rightY, 4, 4);
      ctx.fillRect(x + 10, rightY - 10, 4, 12);
    });
  }

  function dinoBox() {
    if (isDucking()) return { x: dino.x + 6, y: GROUND - DUCK_H + 4, w: DUCK_W - 12, h: DUCK_H - 8 };
    return { x: dino.x + 8, y: dino.y + 4, w: DINO_W - 16, h: DINO_H - 8 };
  }

  function obstacleBoxes(o) {
    if (o.type === "ptero") return [{ x: o.x + 4 * PX, y: o.y + PTERO_BODY_TOP, w: 20 * PX, h: PTERO_BODY_H }];
    return o.parts.map((p) => ({ x: o.x + p.dx + 2, y: GROUND - p.h, w: 10, h: p.h }));
  }

  function hit() {
    const d = dinoBox();
    return obstacles.some((o) =>
      obstacleBoxes(o).some((b) => d.x < b.x + b.w && d.x + d.w > b.x && d.y < b.y + b.h && d.y + d.h > b.y),
    );
  }

  function update(k) {
    speed = Math.min(22, 6 + score / 250);
    score += speed * 0.1 * k;
    dino.vy += (GRAVITY + (!dino.onGround && duckHeld ? FAST_FALL : 0)) * k;
    dino.y += dino.vy * k;
    if (dino.y >= GROUND - DINO_H) {
      dino.y = GROUND - DINO_H;
      dino.vy = 0;
      dino.onGround = true;
    }
    legTick += k;
    if (legTick >= 6) {
      legTick = 0;
      legFrame = 1 - legFrame;
    }
    wingTick += k;
    spawnIn -= k;
    if (spawnIn <= 0) spawn();
    obstacles.forEach((o) => (o.x -= (speed + (o.type === "ptero" ? 1.5 : 0)) * k));
    obstacles = obstacles.filter((o) => o.x + o.w > -10);
    ground.forEach((g) => {
      g.x -= speed * k;
      if (g.x + g.w < 0) {
        g.x += W + 40;
        g.w = 6 + Math.random() * 18;
      }
    });
    if (hit()) {
      running = false;
      best = Math.max(best, Math.floor(score));
    }
  }

  function drawDino() {
    ctx.fillStyle = running ? colors.accent : colors.dead;
    if (isDucking()) {
      const y = GROUND - DUCK_H;
      drawSprite(duckBody, dino.x, y);
      drawSprite(duckLegs[legFrame], dino.x + 3 * PX, y + duckBody.length * PX);
      return;
    }
    drawSprite(body, dino.x, dino.y);
    drawSprite(dino.onGround && running ? legs[legFrame] : legs[0], dino.x, dino.y + body.length * PX);
  }

  function draw() {
    ctx.fillStyle = colors.ink;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = colors.muted;
    ctx.fillRect(0, GROUND, W, 1);
    ground.forEach((g) => ctx.fillRect(g.x, GROUND + 8 + (Math.floor(g.w) % 3) * 5, g.w, 2));
    ctx.fillStyle = colors.paper;
    obstacles.forEach((o) => {
      if (o.type === "cactus") drawCactus(o);
      else drawSprite(ptero[Math.floor(wingTick / 10) % 2], o.x, o.y);
    });
    drawDino();
    ctx.font = "bold 18px monospace";
    ctx.textAlign = "right";
    ctx.fillStyle = colors.muted;
    ctx.fillText(`${t.hi} ${String(best).padStart(5, "0")}`, W - 110, 30);
    ctx.fillStyle = colors.paper;
    ctx.fillText(String(Math.floor(score)).padStart(5, "0"), W - 20, 30);
    ctx.textAlign = "center";
    ctx.fillStyle = colors.accent;
    if (!started) ctx.fillText(t.start, W / 2, H / 2 - 20);
    else if (!running) ctx.fillText(t.over, W / 2, H / 2 - 20);
  }

  function frame(now) {
    const k = Math.min(3, (now - (last || now)) / 16.67);
    last = now;
    if (started && running) update(k);
    draw();
    requestAnimationFrame(frame);
  }

  window.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
      event.preventDefault();
      if (!event.repeat) jump();
    } else if (event.code === "ArrowDown") {
      event.preventDefault();
      duckHeld = true;
    } else if (event.code === "Enter" && !running && !event.target.closest("a")) {
      jump();
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowDown") duckHeld = false;
  });
  window.addEventListener("blur", () => (duckHeld = false));

  canvas.addEventListener("pointerdown", (event) => {
    const lowerHalf = event.offsetY > canvas.getBoundingClientRect().height / 2;
    if (started && running && lowerHalf) duckHeld = true;
    else jump();
  });
  window.addEventListener("pointerup", () => (duckHeld = false));
  window.addEventListener("pointercancel", () => (duckHeld = false));
  document.addEventListener("visibilitychange", () => (last = 0));

  readColors();
  reset();
  requestAnimationFrame(frame);

  return {
    reset,
    jump,
    hit
  };
})();
;

// --- FILE: assets/functions/snakeGame/snakeGame.js ---
;
﻿import { Model } from '../../js/model.js';


// Cyber Snake Game Module & Animated Interactive Icon in Juegos Folder
Object.assign(View, {
  renderSnakeIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    const loop = [
      {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1},
      {x: 5, y: 2}, {x: 5, y: 3}, {x: 5, y: 4}, {x: 5, y: 5},
      {x: 4, y: 5}, {x: 3, y: 5}, {x: 2, y: 5}, {x: 1, y: 5},
      {x: 1, y: 4}, {x: 1, y: 3}, {x: 1, y: 2}
    ];
    let step = 0;

    const interval = setInterval(() => {
      if (!document.body.contains(canvas)) {
        clearInterval(interval);
        return;
      }
      const style = getComputedStyle(document.body);
      const ink = style.getPropertyValue('--ink').trim() || '#090b0a';
      const line = style.getPropertyValue('--line').trim() || '#1b221d';
      const green = style.getPropertyValue('--green').trim() || '#20ef4f';
      const cyan = style.getPropertyValue('--cyan').trim() || '#91f3a8';

      step = (step + 1) % loop.length;

      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = line;
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += 8) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += 8) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      const cellSize = 8;
      const appleX = 3 * cellSize;
      const appleY = 3 * cellSize;
      ctx.fillStyle = green;
      ctx.shadowColor = green;
      ctx.shadowBlur = 6;
      ctx.fillRect(appleX + 1, appleY + 1, cellSize - 2, cellSize - 2);
      ctx.shadowBlur = 0;

      ctx.fillStyle = cyan;
      ctx.fillRect(appleX + 3, appleY - 1, 2, 2);

      const snakeLength = 8;
      for (let i = 0; i < snakeLength; i++) {
        const ptIndex = (step - i + loop.length * 100) % loop.length;
        const pt = loop[ptIndex];
        const px = pt.x * cellSize;
        const py = pt.y * cellSize;

        if (i === 0) {
          ctx.fillStyle = cyan;
          ctx.shadowColor = cyan;
          ctx.shadowBlur = 5;
          ctx.fillRect(px + 1, py + 1, cellSize - 2, cellSize - 2);
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = green;
          ctx.shadowColor = green;
          ctx.shadowBlur = 2;
          ctx.fillRect(px + 1.5, py + 1.5, cellSize - 3, cellSize - 3);
          ctx.shadowBlur = 0;
        }
      }
    }, 120);
  }
});


Object.assign(Controller, {
  openSnakeModal() {
    let overlay = document.querySelector(".snake-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "snake-modal-overlay";
      overlay.innerHTML = `
        <div class="snake-modal-container">
          <div class="snake-header">
            <h3 class="snake-title">CYBER SNAKE // ARCADE</h3>
            <button class="snake-close-btn" type="button">×</button>
          </div>
          <div class="snake-stats">
            <span id="snake-score">SCORE: 0</span>
            <span id="snake-hi">HI: 0</span>
          </div>
          <div class="snake-game-canvas-wrap">
            <canvas class="snake-canvas" id="snake-game-canvas" width="448" height="448"></canvas>
          </div>
          <p class="snake-controls-hint">PRESS ARROW / WASD TO START IN THAT DIRECTION</p>
          <div class="snake-touch-pad">
            <button class="snake-touch-btn snake-btn-up" data-dir="UP">▲</button>
            <button class="snake-touch-btn snake-btn-left" data-dir="LEFT">◀</button>
            <button class="snake-touch-btn snake-btn-down" data-dir="DOWN">▼</button>
            <button class="snake-touch-btn snake-btn-right" data-dir="RIGHT">▶</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".snake-close-btn").addEventListener("click", () => {
        this.closeSnakeModal();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeSnakeModal();
      });

      this.initSnakeGameEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.snakeGameReset) this.snakeGameReset();
  },

  closeSnakeModal() {
    const overlay = document.querySelector(".snake-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.snakeGamePause) this.snakeGamePause();
  },

  initSnakeGameEngine(overlay) {
    const canvas = overlay.querySelector("#snake-game-canvas");
    const ctx = canvas.getContext("2d");
    const scoreEl = overlay.querySelector("#snake-score");
    const hiEl = overlay.querySelector("#snake-hi");
    const grid = 32;
    const tileCount = canvas.width / grid;

    let snake = [];
    let food = { x: 5, y: 5 };
    let dx = 0;
    let dy = 0;
    let score = 0;
    let hi = parseInt(localStorage.getItem("cyber_snake_hi") || "0", 10);
    hiEl.textContent = `HI: ${hi}`;
    let gameInterval = null;
    let gameState = "START";

    const resetGame = () => {
      snake = [
        { x: 7, y: 7 },
        { x: 6, y: 7 },
        { x: 5, y: 7 }
      ];
      dx = 1;
      dy = 0;
      score = 0;
      scoreEl.textContent = `SCORE: ${score}`;
      spawnFood();
    };

    const spawnFood = () => {
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
      if (snake.some(part => part.x === food.x && part.y === food.y)) {
        spawnFood();
      }
    };

    const sprites = {
      head: [
        ".............#....#.............",
        "..............#..#..............",
        "...............##...............",
        "...............##...............",
        ".............######.............",
        "............########............",
        "...........##..##..##...........",
        "..........##..####..##..........",
        "..........############..........",
        ".........##############.........",
        ".........##############.........",
        "........###..######..###........",
        ".......###...######...###.......",
        "......###....######....###......",
        ".....###..00.######.00..###.....",
        ".....##...00.######.00...##.....",
        "....###...00.######.00...###....",
        "...####....####..####....####...",
        "..#####...####....####...#####..",
        ".#######.####..##..####.#######.",
        ".###########..####..###########.",
        ".###...####..######..####...###.",
        "..####..##..##....##..##..####..",
        "...####....##..##..##....####...",
        "....####..####....####..####....",
        ".....###..############..###.....",
        ".....###..####....####..###.....",
        ".....###..###..##..###..###.....",
        ".....###..##..####..##..###.....",
        ".....###..###..##..###..###.....",
        ".....###..####....####..###.....",
        ".....###..############..###....."
      ],
      
      body: [
        ".....###..#####..#####..###.....",
        ".....###..####.##.####..###.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########....."
      ],
      tail: [
        ".....###.######..######.###.....",
        ".....####.####.##.####.####.....",
        ".....#####.####..####.#####.....",
        ".....######.########.######.....",
        ".....#####.#.######.#.#####.....",
        ".....####.###.####.###.####.....",
        ".....###.#####....#####.###.....",
        ".....##########..##########.....",
        "......####################......",
        "......####################......",
        ".......##################.......",
        ".......##################.......",
        "........################........",
        "........################........",
        ".........##############.........",
        ".........##############.........",
        "..........############..........",
        "..........############..........",
        "...........##########...........",
        "...........##########...........",
        "............########............",
        "............########............",
        ".............######.............",
        ".............######.............",
        "..............####..............",
        "..............####..............",
        "...............##...............",
        "...............##...............",
        "................................",
        "................................",
        "................................",
        "................................"
      ],
      turn: [
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "...........#####################",
        ".........#######################",
        "........########################",
        ".......#########################",
        "......##########################",
        "......##########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....###########################",
        ".....########################...",
        ".....#######################....",
        ".....######################.....",
        ".....######################.....",
        ".....######################.....",
      ],
      food: [
        "................................",
        "................................",
        "..........############..........",
        ".........##############.........",
        "........################........",
        ".......##################.......",
        "......####################......",
        ".....######################.....",
        ".....#####.OO.####.OO.#####.....",
        ".....#####.EE.####.EE.#####.....",
        ".....#######################....",
        ".....#######################....",
        "......#####################.....",
        "......#####################.....",
        ".......###################......",
        "........################........",
        "........################........",
        ".........##############.........",
        "..........############..........",
        "...........##########...........",
        "............########............",
        ".............######.............",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................",
        "................................"
      ]
    };

    const rotateSprite = (sprite, times) => {
      let grid = sprite.map(row => row.split(''));
      for (let t = 0; t < times; t++) {
        const n = grid.length;
        const rotated = Array.from({ length: n }, () => Array(n).fill('.'));
        for (let r = 0; r < n; r++) {
          for (let c = 0; c < n; c++) {
            rotated[c][n - 1 - r] = grid[r][c];
          }
        }
        grid = rotated;
      }
      return grid.map(row => row.join(''));
    };

    sprites.headUp = sprites.head;
    sprites.headRight = rotateSprite(sprites.head, 1);
    sprites.headDown = rotateSprite(sprites.head, 2);
    sprites.headLeft = rotateSprite(sprites.head, 3);

    sprites.tailDown = sprites.tail;
    sprites.tailRight = rotateSprite(sprites.tail, 1);
    sprites.tailUp = rotateSprite(sprites.tail, 2);
    sprites.tailLeft = rotateSprite(sprites.tail, 3);

    sprites.bodyVertical = sprites.body;
    sprites.bodyHorizontal = rotateSprite(sprites.body, 1);

    const makeTurn = (rotTimes) => {
      const mask = rotateSprite(sprites.turn, rotTimes).map(row => row.split(''));
      const vGrid = rotateSprite(sprites.body, rotTimes).map(row => row.split(''));
      const hGrid = rotateSprite(sprites.bodyHorizontal, rotTimes).map(row => row.split(''));
      const grid = Array.from({ length: 32 }, () => Array(32).fill('.'));
      for (let r = 0; r < 32; r++) {
        for (let c = 0; c < 32; c++) {
          if (mask[r][c] === '#') {
            let pV = vGrid[r][c];
            let pH = hGrid[r][c];
            if (pV !== '.') {
              grid[r][c] = pV;
            } else if (pH !== '.') {
              grid[r][c] = pH;
            } else {
              grid[r][c] = '.';
            }
          }
        }
      }
      return grid.map(row => row.join(''));
    };

    const makeTurnLeft = (rotTimes) => {
      const mirroredTurn = sprites.turn.map(row => row.split('').reverse().join(''));
      const mask = rotateSprite(mirroredTurn, rotTimes).map(row => row.split(''));
      const vGrid = rotateSprite(sprites.body, rotTimes).map(row => row.split(''));
      const hGrid = rotateSprite(sprites.bodyHorizontal, rotTimes).map(row => row.split(''));
      const grid = Array.from({ length: 32 }, () => Array(32).fill('.'));
      for (let r = 0; r < 32; r++) {
        for (let c = 0; c < 32; c++) {
          if (mask[r][c] === '#') {
            let pV = vGrid[r][c];
            let pH = hGrid[r][c];
            if (pV !== '.') {
              grid[r][c] = pV;
            } else if (pH !== '.') {
              grid[r][c] = pH;
            } else {
              grid[r][c] = '.';
            }
          }
        }
      }
      return grid.map(row => row.join(''));
    };

    sprites.turnRightUp = makeTurn(0);
    sprites.turnRightRight = makeTurn(1);
    sprites.turnRightDown = makeTurn(2);
    sprites.turnRightLeft = makeTurn(3);

    sprites.turnLeftUp = makeTurnLeft(0);
    sprites.turnLeftRight = makeTurnLeft(1);
    sprites.turnLeftDown = makeTurnLeft(2);
    sprites.turnLeftLeft = makeTurnLeft(3);

    const drawSprite = (ctx, sprite, x, y, size, color, glowColor) => {
      const px = size / sprite.length;
      ctx.save();
      if (glowColor) {
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 2;
      }
      for (let r = 0; r < sprite.length; r++) {
        for (let c = 0; c < sprite[r].length; c++) {
          const ch = sprite[r][c];
          if (ch === '#') {
            ctx.fillStyle = color;
            ctx.fillRect(x + c * px, y + r * px, px + 0.5, px + 0.5);
          } else if (ch === 'O' || ch === 'E') {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x + c * px, y + r * px, px + 0.5, px + 0.5);
          }
        }
      }
      ctx.restore();
    };

    const getThemeColors = () => {
      const style = getComputedStyle(document.body);
      return {
        ink: style.getPropertyValue('--ink').trim() || '#090b0a',
        line: style.getPropertyValue('--line').trim() || '#2b322d',
        green: style.getPropertyValue('--green').trim() || '#20ef4f',
        cyan: style.getPropertyValue('--cyan').trim() || '#91f3a8',
        paper: style.getPropertyValue('--paper').trim() || '#e9eee8'
      };
    };

    const draw = () => {
      const colors = getThemeColors();
      ctx.fillStyle = colors.ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < tileCount; i++) {
        ctx.beginPath(); ctx.moveTo(i * grid, 0); ctx.lineTo(i * grid, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i * grid); ctx.lineTo(canvas.width, i * grid); ctx.stroke();
      }

      drawSprite(ctx, sprites.food, food.x * grid, food.y * grid, grid, colors.cyan, colors.cyan);

      snake.forEach((part, index) => {
        const x = part.x * grid;
        const y = part.y * grid;
        if (index === 0) {
          let headSprite = sprites.headUp;
          if (dx === 1) headSprite = sprites.headRight;
          else if (dx === -1) headSprite = sprites.headLeft;
          else if (dy === 1) headSprite = sprites.headDown;
          else if (dy === -1) headSprite = sprites.headUp;
          drawSprite(ctx, headSprite, x, y, grid, "#1aa343", null);
        } else if (index === snake.length - 1) {
          const tail = part;
          const prev = snake[snake.length - 2];
          let tailSprite = sprites.tailDown;
          if (tail.y > prev.y) tailSprite = sprites.tailDown;
          else if (tail.y < prev.y) tailSprite = sprites.tailUp;
          else if (tail.x > prev.x) tailSprite = sprites.tailLeft;
          else if (tail.x < prev.x) tailSprite = sprites.tailRight;
          drawSprite(ctx, tailSprite, x, y, grid, "#158a36", null);
        } else {
          const prev = snake[index - 1];
          const next = snake[index + 1] || prev;
          const isHorizontal = prev.y === next.y;
          const isVertical = prev.x === next.x;
          let bodySprite = sprites.bodyVertical;
          if (isHorizontal) {
            bodySprite = sprites.bodyHorizontal;
          } else if (isVertical) {
            bodySprite = sprites.bodyVertical;
          } else {
            const v1 = { x: part.x - prev.x, y: part.y - prev.y };
            const v2 = { x: next.x - part.x, y: next.y - part.y };
            const dx1 = Math.sign(v1.x);
            const dy1 = Math.sign(v1.y);
            const dx2 = Math.sign(v2.x);
            const dy2 = Math.sign(v2.y);

            if (dy1 === -1) {
              if (dx2 === 1) bodySprite = sprites.turnRightUp;
              else if (dx2 === -1) bodySprite = sprites.turnLeftUp;
            } else if (dy1 === 1) {
              if (dx2 === -1) bodySprite = sprites.turnRightDown;
              else if (dx2 === 1) bodySprite = sprites.turnLeftDown;
            } else if (dx1 === -1) {
              if (dy2 === -1) bodySprite = sprites.turnRightLeft;
              else if (dy2 === 1) bodySprite = sprites.turnLeftLeft;
            } else if (dx1 === 1) {
              if (dy2 === 1) bodySprite = sprites.turnRightRight;
              else if (dy2 === -1) bodySprite = sprites.turnLeftRight;
            }
          }
          drawSprite(ctx, bodySprite, x, y, grid, "#1aa343", null);
        }
      });

      if (gameState === "START") {
        ctx.fillStyle = colors.ink + "dd";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.green;
        ctx.font = "14px 'DM Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("PRESS ARROW OR WASD TO START", canvas.width / 2, canvas.height / 2);
      } else if (gameState === "OVER") {
        ctx.fillStyle = colors.ink + "ee";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.cyan;
        ctx.font = "bold 20px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 15);
        ctx.fillStyle = colors.green;
        ctx.font = "13px 'DM Mono', monospace";
        ctx.fillText("PRESS ARROW / WASD TO RESTART", canvas.width / 2, canvas.height / 2 + 15);
      }
    };

    const update = () => {
      if (gameState !== "PLAYING") return;

      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
      }

      if (snake.some(part => part.x === head.x && part.y === head.y)) {
        gameOver();
        return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreEl.textContent = `SCORE: ${score}`;
        if (score > hi) {
          hi = score;
          hiEl.textContent = `HI: ${hi}`;
          localStorage.setItem("cyber_snake_hi", hi);
        }
        spawnFood();
      } else {
        snake.pop();
      }
    };

    const gameOver = () => {
      gameState = "OVER";
      clearInterval(gameInterval);
      draw();
    };

    const startWithDirection = (newDx, newDy) => {
      if (gameState === "START" || gameState === "OVER") {
        resetGame();
        gameState = "PLAYING";
        dx = newDx;
        dy = newDy;
        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(() => {
          update();
          draw();
        }, 100);
        return;
      }
      if (gameState !== "PLAYING") return;

      if (newDx !== 0 && dx === 0) { dx = newDx; dy = 0; }
      if (newDy !== 0 && dy === 0) { dx = 0; dy = newDy; }
    };

    this.snakeGamePause = () => {
      if (gameState === "PLAYING") {
        gameState = "PAUSED";
        clearInterval(gameInterval);
      }
    };

    this.snakeGameReset = () => {
      gameState = "START";
      if (gameInterval) clearInterval(gameInterval);
      resetGame();
      draw();
    };

    window.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("is-active")) return;
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "w", "a", "s", "d", "W", "A", "S", "D"].includes(e.key)) {
        e.preventDefault();
      }

      if (e.key === " ") {
        if (gameState === "PLAYING") this.snakeGamePause();
        else if (gameState === "PAUSED") {
          gameState = "PLAYING";
          gameInterval = setInterval(() => { update(); draw(); }, 100);
        }
        return;
      }

      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        startWithDirection(0, -1);
      } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        startWithDirection(0, 1);
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        startWithDirection(-1, 0);
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        startWithDirection(1, 0);
      }
    });

    overlay.querySelectorAll(".snake-touch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const dir = btn.dataset.dir;
        if (dir === "UP") startWithDirection(0, -1);
        if (dir === "DOWN") startWithDirection(0, 1);
        if (dir === "LEFT") startWithDirection(-1, 0);
        if (dir === "RIGHT") startWithDirection(1, 0);
      });
    });

    this.snakeGameReset();
  }
});


;

// --- FILE: assets/functions/minesweeperGame/minesweeperGame.js ---
;
﻿import { Model } from '../../js/model.js';


Object.assign(View, {
  renderMinesweeperIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const interval = setInterval(() => {
      if (!document.body.contains(canvas)) {
        clearInterval(interval);
        return;
      }
      const style = getComputedStyle(document.body);
      const ink = style.getPropertyValue('--ink').trim() || '#090b0a';
      const line = style.getPropertyValue('--line').trim() || '#1b221d';
      const green = style.getPropertyValue('--green').trim() || '#20ef4f';
      const cyan = style.getPropertyValue('--cyan').trim() || '#91f3a8';

      frame++;
      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const size = 12;
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
          ctx.strokeStyle = line;
          ctx.lineWidth = 1;
          ctx.strokeRect(c * size + 4, r * size + 4, size, size);

          if ((r + c + frame) % 5 === 0) {
            ctx.fillStyle = cyan;
            ctx.fillRect(c * size + 6, r * size + 6, size - 4, size - 4);
          } else if ((r * 3 + c + frame) % 7 === 0) {
            ctx.fillStyle = green;
            ctx.beginPath();
            ctx.arc(c * size + 10, r * size + 10, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }, 150);
  }
});

Object.assign(Controller, {
  openMinesweeperModal() {
    let overlay = document.querySelector(".minesweeper-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "minesweeper-modal-overlay";
      overlay.innerHTML = `
        <div class="minesweeper-modal-container">
          <div class="minesweeper-header">
            <h3 class="minesweeper-title">CYBER MINESWEEPER // ARCADE</h3>
            <button class="minesweeper-close-btn" type="button">×</button>
          </div>
          <div class="minesweeper-toolbar">
            <div class="minesweeper-stat" id="ms-mines">M: 10</div>
            <button class="minesweeper-face-btn" id="ms-face">[OK]</button>
            <div class="minesweeper-stat" id="ms-time">T: 000</div>
          </div>
          <div class="minesweeper-settings">
            <div class="ms-setting-row">
              <span>MAP SIZE:</span>
              <div class="ms-size-btns">
                <button class="ms-size-btn active" data-size="8">8x8</button>
                <button class="ms-size-btn" data-size="15">15x15</button>
                <button class="ms-size-btn" data-size="25">25x25</button>
                <button class="ms-size-btn" data-size="custom">CUSTOM</button>
              </div>
            </div>
            <div class="ms-custom-panel" id="ms-custom-panel">
              <div class="ms-custom-row">
                <span>ROWS (5-30):</span>
                <input type="number" class="ms-custom-input" id="ms-custom-rows" min="5" max="30" value="10">
              </div>
              <div class="ms-custom-row">
                <span>COLS (5-30):</span>
                <input type="number" class="ms-custom-input" id="ms-custom-cols" min="5" max="30" value="10">
              </div>
              <div class="ms-custom-row">
                <span>BOMBS:</span>
                <input type="number" class="ms-custom-input" id="ms-custom-bombs" min="1" max="500" value="15">
              </div>
              <button class="ms-custom-apply" id="ms-custom-apply">APPLY CUSTOM</button>
            </div>
            <div class="ms-setting-row" id="ms-slider-row">
              <span style="display:flex; align-items:center; gap:6px;">
                BOMBS:
                <button class="ms-mode-btn" id="ms-bomb-mode-btn" title="Toggle Count / Percentage">MODE: #</button>
              </span>
              <input type="range" class="ms-bombs-slider" id="ms-bombs-range" min="1" max="25" value="10">
              <span class="ms-bombs-val" id="ms-bombs-val">10</span>
            </div>
          </div>
          <div class="minesweeper-board-wrap">
            <div class="minesweeper-board" id="ms-board"></div>
          </div>
          <p class="minesweeper-controls-hint">LEFT CLICK: REVEAL // RIGHT CLICK: FLAG</p>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".minesweeper-close-btn").addEventListener("click", () => {
        this.closeMinesweeperModal();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeMinesweeperModal();
      });

      this.initMinesweeperEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.msResetGame) this.msResetGame();
  },

  closeMinesweeperModal() {
    const overlay = document.querySelector(".minesweeper-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.msStopTimer) this.msStopTimer();
  },

  initMinesweeperEngine(overlay) {
    const boardEl = overlay.querySelector("#ms-board");
    const minesEl = overlay.querySelector("#ms-mines");
    const timeEl = overlay.querySelector("#ms-time");
    const faceBtn = overlay.querySelector("#ms-face");
    const sizeBtns = overlay.querySelectorAll(".ms-size-btn");
    const bombsRange = overlay.querySelector("#ms-bombs-range");
    const bombsVal = overlay.querySelector("#ms-bombs-val");
    const bombModeBtn = overlay.querySelector("#ms-bomb-mode-btn");
    const customPanel = overlay.querySelector("#ms-custom-panel");
    const sliderRow = overlay.querySelector("#ms-slider-row");
    const customRowsInput = overlay.querySelector("#ms-custom-rows");
    const customColsInput = overlay.querySelector("#ms-custom-cols");
    const customBombsInput = overlay.querySelector("#ms-custom-bombs");
    const customApplyBtn = overlay.querySelector("#ms-custom-apply");

    let rows = 8;
    let cols = 8;
    let totalMines = 10;
    let bombMode = "count"; // "count" or "percent"

    let board = [];
    let gameOver = false;
    let gameWon = false;
    let firstClick = true;
    let timerId = null;
    let seconds = 0;
    let flagsCount = 0;

    const updateSliderBounds = () => {
      const totalCells = rows * cols;
      if (bombMode === "count") {
        const maxMines = Math.max(1, totalCells - 2);
        bombsRange.min = 1;
        bombsRange.max = maxMines;
        if (totalMines > maxMines) totalMines = maxMines;
        bombsRange.value = totalMines;
        bombsVal.textContent = totalMines;
      } else {
        // Percentage mode (1% to 80%)
        bombsRange.min = 1;
        bombsRange.max = 80;
        let pct = Math.round((totalMines / totalCells) * 100);
        if (pct < 1) pct = 1;
        if (pct > 80) pct = 80;
        bombsRange.value = pct;
        bombsVal.textContent = `${pct}%`;
      }
    };

    const stopTimer = () => {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    };
    this.msStopTimer = stopTimer;

    const startTimer = () => {
      if (timerId) return;
      timerId = setInterval(() => {
        seconds++;
        if (seconds > 999) seconds = 999;
        timeEl.textContent = `T: ${String(seconds).padStart(3, '0')}`;
      }, 1000);
    };

    const resetGame = () => {
      stopTimer();
      seconds = 0;
      timeEl.textContent = "T: 000";
      gameOver = false;
      gameWon = false;
      firstClick = true;
      flagsCount = 0;
      faceBtn.textContent = "[OK]";
      minesEl.textContent = `M: ${totalMines - flagsCount}`;

      board = [];
      for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            r, c,
            mine: false,
            revealed: false,
            flagged: false,
            count: 0
          });
        }
        board.push(row);
      }

      renderBoard();
    };
    this.msResetGame = resetGame;

    const placeMines = (safeR, safeC) => {
      let placed = 0;
      let targetMines = Math.min(totalMines, rows * cols - 1);
      while (placed < targetMines) {
        let rr = Math.floor(Math.random() * rows);
        let cc = Math.floor(Math.random() * cols);
        if (Math.abs(rr - safeR) <= 1 && Math.abs(cc - safeC) <= 1) continue;
        if (!board[rr][cc].mine) {
          board[rr][cc].mine = true;
          placed++;
        }
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (board[r][c].mine) continue;
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              let nr = r + dr;
              let nc = c + dc;
              if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].mine) {
                count++;
              }
            }
          }
          board[r][c].count = count;
        }
      }
    };

    const renderBoard = () => {
      let cellSize = cols > 20 ? 14 : (cols > 12 ? 18 : (cols > 8 ? 22 : 26));
      boardEl.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
      boardEl.innerHTML = "";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let cellData = board[r][c];
          let cellEl = document.createElement("div");
          cellEl.className = "ms-cell";
          cellEl.style.width = `${cellSize}px`;
          cellEl.style.height = `${cellSize}px`;
          cellEl.style.fontSize = `${Math.max(9, cellSize - 10)}px`;
          cellEl.dataset.r = r;
          cellEl.dataset.c = c;

          if (cellData.revealed) {
            cellEl.classList.add("revealed");
            if (cellData.mine) {
              cellEl.classList.add("mine");
              cellEl.textContent = "[X]";
            } else if (cellData.count > 0) {
              cellEl.textContent = cellData.count;
              cellEl.dataset.count = cellData.count;
            }
          } else if (cellData.flagged) {
            cellEl.classList.add("flagged");
            cellEl.textContent = "[F]";
          }

          cellEl.addEventListener("click", () => {
            if (gameOver || gameWon || cellData.flagged || cellData.revealed) return;
            if (firstClick) {
              firstClick = false;
              placeMines(r, c);
              startTimer();
            }
            revealCell(r, c);
          });

          cellEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            if (gameOver || gameWon || cellData.revealed) return;
            cellData.flagged = !cellData.flagged;
            flagsCount += cellData.flagged ? 1 : -1;
            minesEl.textContent = `M: ${totalMines - flagsCount}`;
            renderBoard();
          });

          boardEl.appendChild(cellEl);
        }
      }
    };

    const revealCell = (r, c) => {
      let cell = board[r][c];
      if (cell.revealed || cell.flagged) return;

      cell.revealed = true;

      if (cell.mine) {
        gameOver = true;
        stopTimer();
        faceBtn.textContent = "[X]";
        revealAllMines();
        renderBoard();
        return;
      }

      if (cell.count === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            let nr = r + dr;
            let nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
              if (!board[nr][nc].revealed && !board[nr][nc].flagged) {
                revealCell(nr, nc);
              }
            }
          }
        }
      }

      checkWin();
      renderBoard();
    };

    const revealAllMines = () => {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (board[r][c].mine) {
            board[r][c].revealed = true;
          }
        }
      }
    };

    const checkWin = () => {
      let won = true;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (!board[r][c].mine && !board[r][c].revealed) {
            won = false;
            break;
          }
        }
        if (!won) break;
      }

      if (won) {
        gameWon = true;
        stopTimer();
        faceBtn.textContent = "[WIN]";
      }
    };

    faceBtn.addEventListener("click", () => {
      resetGame();
    });

    bombModeBtn.addEventListener("click", () => {
      if (bombMode === "count") {
        bombMode = "percent";
        bombModeBtn.textContent = "MODE: %";
      } else {
        bombMode = "count";
        bombModeBtn.textContent = "MODE: #";
      }
      updateSliderBounds();
    });

    sizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const sz = btn.dataset.size;
        if (sz === "custom") {
          customPanel.classList.add("is-active");
          sliderRow.style.display = "none";
          return;
        } else {
          customPanel.classList.remove("is-active");
          sliderRow.style.display = "flex";
        }

        const dim = parseInt(sz, 10);
        rows = dim;
        cols = dim;
        if (dim === 8) totalMines = 10;
        else if (dim === 15) totalMines = 35;
        else if (dim === 25) totalMines = 99;
        updateSliderBounds();
        resetGame();
      });
    });

    bombsRange.addEventListener("input", () => {
      const val = parseInt(bombsRange.value, 10);
      if (bombMode === "count") {
        totalMines = val;
        bombsVal.textContent = totalMines;
      } else {
        // val is percentage
        totalMines = Math.round((val / 100) * (rows * cols));
        if (totalMines < 1) totalMines = 1;
        if (totalMines >= rows * cols) totalMines = rows * cols - 1;
        bombsVal.textContent = `${val}%`;
      }
      resetGame();
    });

    customApplyBtn.addEventListener("click", () => {
      let r = parseInt(customRowsInput.value, 10);
      let c = parseInt(customColsInput.value, 10);
      let b = parseInt(customBombsInput.value, 10);

      if (isNaN(r) || r < 5) r = 5;
      if (r > 30) r = 30;
      if (isNaN(c) || c < 5) c = 5;
      if (c > 30) c = 30;

      let maxB = Math.max(1, r * c - 2);
      if (isNaN(b) || b < 1) b = 1;
      if (b > maxB) b = maxB;

      customRowsInput.value = r;
      customColsInput.value = c;
      customBombsInput.value = b;

      rows = r;
      cols = c;
      totalMines = b;
      bombMode = "count";
      bombModeBtn.textContent = "MODE: #";
      updateSliderBounds();
      resetGame();
    });

    updateSliderBounds();
    resetGame();
  }
});
;

// --- FILE: assets/functions/tetrisGame/tetrisGame.js ---
;



// Inject CSS
if (typeof document !== "undefined" && !document.getElementById("tetris-style")) {
  const link = document.createElement("link");
  link.id = "tetris-style";
  link.rel = "stylesheet";
  link.href = "assets/functions/tetrisGame/tetrisGame.css";
  document.head.appendChild(link);
}

Object.assign(View, {
  renderTetrisIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    let step = 0;
    const interval = setInterval(() => {
      if (!document.body.contains(canvas)) {
        clearInterval(interval);
        return;
      }
      step++;
      const style = getComputedStyle(document.body);
      const ink = style.getPropertyValue('--ink').trim() || '#090b0a';
      const line = style.getPropertyValue('--line').trim() || '#1b221d';
      const cyan = style.getPropertyValue('--cyan').trim() || '#91f3a8';
      const greenDim = style.getPropertyValue('--green-dim').trim() || '#087d2a';

      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = line;
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += 8) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += 8) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      const sz = 8;
      // Bottom stationary pieces stack where Z fits (tertiary color: greenDim)
      const stack = [
        {x: 1, y: 5, color: greenDim},
        {x: 2, y: 5, color: greenDim},
        {x: 1, y: 6, color: greenDim},
        {x: 2, y: 6, color: greenDim},
        {x: 3, y: 6, color: greenDim},
        {x: 4, y: 6, color: greenDim},
        {x: 5, y: 5, color: greenDim},
        {x: 5, y: 6, color: greenDim}
      ];

      stack.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x * sz + 1, b.y * sz + 1, sz - 2, sz - 2);
      });

      // Z piece falling down to bottom
      const cycle = step % 28;
      const targetRow = 4;
      const currentRow = cycle < 20 ? Math.min(targetRow, Math.floor(cycle / 4)) : targetRow;
      const currentCol = 2;

      const zBlocks = [
        {x: currentCol + 0, y: currentRow + 0},
        {x: currentCol + 1, y: currentRow + 0},
        {x: currentCol + 1, y: currentRow + 1},
        {x: currentCol + 2, y: currentRow + 1}
      ];

      zBlocks.forEach(b => {
        ctx.fillStyle = cyan;
        ctx.shadowColor = cyan;
        ctx.shadowBlur = 4;
        ctx.fillRect(b.x * sz + 1, b.y * sz + 1, sz - 2, sz - 2);
        ctx.shadowBlur = 0;
      });
    }, 150);
  },

  openTetrisModal() {
    let overlay = document.querySelector(".tetris-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "tetris-modal-overlay";
      overlay.innerHTML = `
        <div class="tetris-modal-container">
          <div class="tetris-header">
            <h3 class="tetris-title">CYBER TETRIS // ARCADE</h3>
            <button class="tetris-close-btn" type="button">×</button>
          </div>
          <div class="tetris-stats">
            <span id="tetris-score">SCORE: 0</span>
            <span id="tetris-lines">LINES: 0</span>
            <span id="tetris-hi">HI: 0</span>
          </div>
          <div class="tetris-game-canvas-wrap">
            <canvas class="tetris-canvas" id="tetris-game-canvas" width="200" height="400"></canvas>
          </div>
          <p class="tetris-controls-hint">ARROWS/WASD: MOVE/ROTATE | DOWN: SOFT DROP | SPACE: HARD DROP</p>
          <div class="tetris-touch-pad">
            <button class="tetris-touch-btn" data-action="left">◀</button>
            <button class="tetris-touch-btn" data-action="rotate">↻</button>
            <button class="tetris-touch-btn" data-action="right">▶</button>
            <button class="tetris-touch-btn" data-action="drop">▼</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".tetris-close-btn").addEventListener("click", () => {
        this.closeTetrisModal();
      });
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeTetrisModal();
      });

      this.initTetrisEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.tetrisReset) this.tetrisReset();
  },

  closeTetrisModal() {
    const overlay = document.querySelector(".tetris-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.tetrisPause) this.tetrisPause();
  },

  initTetrisEngine(overlay) {
    const canvas = overlay.querySelector("#tetris-game-canvas");
    const ctx = canvas.getContext("2d");
    const scoreEl = overlay.querySelector("#tetris-score");
    const linesEl = overlay.querySelector("#tetris-lines");
    const hiEl = overlay.querySelector("#tetris-hi");

    const COLS = 10;
    const ROWS = 20;
    const BLOCK = 20;
    let grid = Array.from({length: ROWS}, () => Array(COLS).fill(0));
    let score = 0;
    let lines = 0;
    let hi = parseInt(localStorage.getItem("cyber_tetris_hi") || "0");
    hiEl.textContent = `HI: ${hi}`;

    let gameOver = false;
    let isPaused = false;
    let dropInterval = 500;
    let dropCounter = 0;
    let lastTime = 0;

    const SHAPES = [
      [],
      [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], // I
      [[2,0,0],[2,2,2],[0,0,0]], // J
      [[0,0,3],[3,3,3],[0,0,0]], // L
      [[4,4],[4,4]], // O
      [[0,5,5],[5,5,0],[0,0,0]], // S
      [[0,6,0],[6,6,6],[0,0,0]], // T
      [[7,7,0],[0,7,7],[0,0,0]]  // Z
    ];

    const COLORS = [
      null,
      '#91f3a8', // Cyan/Green
      '#20ef4f', // Green
      '#ffaa00', // Orange
      '#ffff00', // Yellow
      '#ff2244', // Red
      '#aa00ff', // Purple
      '#00ffff'  // Bright Cyan
    ];

    let player = {
      pos: {x: 0, y: 0},
      matrix: null,
      shapeId: 0
    };

    function spawnPiece() {
      const id = Math.floor(Math.random() * 7) + 1;
      player.matrix = SHAPES[id];
      player.shapeId = id;
      player.pos.y = 0;
      player.pos.x = Math.floor((COLS - player.matrix[0].length) / 2);
      if (checkCollision(player.matrix, player.pos)) {
        gameOver = true;
      }
    }

    function checkCollision(mat, pos) {
      for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {
          if (mat[r][c] !== 0) {
            let nx = pos.x + c;
            let ny = pos.y + r;
            if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
            if (ny >= 0 && grid[ny][nx] !== 0) return true;
          }
        }
      }
      return false;
    }

    function merge() {
      player.matrix.forEach((row, r) => {
        row.forEach((val, c) => {
          if (val !== 0) {
            let ny = player.pos.y + r;
            let nx = player.pos.x + c;
            if (ny >= 0 && ny < ROWS && nx >= 0 && nx < COLS) {
              grid[ny][nx] = player.shapeId;
            }
          }
        });
      });
    }

    function clearLines() {
      let rowCount = 0;
      outer: for (let r = ROWS - 1; r >= 0; r--) {
        for (let c = 0; c < COLS; c++) {
          if (grid[r][c] === 0) continue outer;
        }
        const row = grid.splice(r, 1)[0].fill(0);
        grid.unshift(row);
        r++;
        rowCount++;
      }
      if (rowCount > 0) {
        lines += rowCount;
        score += rowCount * 100 * rowCount;
        scoreEl.textContent = `SCORE: ${score}`;
        linesEl.textContent = `LINES: ${lines}`;
        if (score > hi) {
          hi = score;
          hiEl.textContent = `HI: ${hi}`;
          localStorage.setItem("cyber_tetris_hi", hi);
        }
        dropInterval = Math.max(150, 500 - (lines * 15));
      }
    }

    function rotate(mat) {
      const N = mat.length;
      let res = Array.from({length: N}, () => Array(N).fill(0));
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          res[c][N - 1 - r] = mat[r][c];
        }
      }
      return res;
    }

    function playerRotate() {
      let x = player.pos.x;
      let offset = 1;
      let oldMat = player.matrix;
      player.matrix = rotate(player.matrix);
      while (checkCollision(player.matrix, player.pos)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
          player.matrix = oldMat;
          player.pos.x = x;
          return;
        }
      }
    }

    function playerMove(dir) {
      player.pos.x += dir;
      if (checkCollision(player.matrix, player.pos)) {
        player.pos.x -= dir;
      }
    }

    function playerDrop() {
      player.pos.y++;
      if (checkCollision(player.matrix, player.pos)) {
        player.pos.y--;
        merge();
        clearLines();
        spawnPiece();
      }
      dropCounter = 0;
    }

    function playerHardDrop() {
      while (!checkCollision(player.matrix, player.pos)) {
        player.pos.y++;
      }
      player.pos.y--;
      merge();
      clearLines();
      spawnPiece();
      dropCounter = 0;
    }

    function draw() {
      ctx.fillStyle = '#090b0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = '#1b221d';
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += BLOCK) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += BLOCK) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Draw fixed grid
      grid.forEach((row, r) => {
        row.forEach((val, c) => {
          if (val !== 0) {
            ctx.fillStyle = COLORS[val];
            ctx.fillRect(c * BLOCK + 1, r * BLOCK + 1, BLOCK - 2, BLOCK - 2);
          }
        });
      });

      // Draw current piece
      if (player.matrix) {
        player.matrix.forEach((row, r) => {
          row.forEach((val, c) => {
            if (val !== 0) {
              ctx.fillStyle = COLORS[player.shapeId];
              ctx.fillRect((player.pos.x + c) * BLOCK + 1, (player.pos.y + r) * BLOCK + 1, BLOCK - 2, BLOCK - 2);
            }
          });
        });
      }

      if (gameOver) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.85)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ff2244";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("SYSTEM CRASH", canvas.width / 2, canvas.height / 2 - 10);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "11px monospace";
        ctx.fillText("PRESS ENTER TO RESTART", canvas.width / 2, canvas.height / 2 + 15);
      } else if (isPaused) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.75)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
      }
    }

    function update(time = 0) {
      if (!overlay.classList.contains("is-active")) return;
      if (!isPaused && !gameOver) {
        const delta = time - lastTime;
        lastTime = time;
        dropCounter += delta;
        if (dropCounter > dropInterval) {
          playerDrop();
        }
      } else {
        lastTime = time;
      }
      draw();
      requestAnimationFrame(update);
    }

    this.tetrisReset = () => {
      grid = Array.from({length: ROWS}, () => Array(COLS).fill(0));
      score = 0;
      lines = 0;
      scoreEl.textContent = `SCORE: ${score}`;
      linesEl.textContent = `LINES: ${lines}`;
      dropInterval = 500;
      gameOver = false;
      isPaused = false;
      spawnPiece();
    };

    this.tetrisPause = () => {
      isPaused = true;
    };

    const handleKey = (e) => {
      if (!overlay.classList.contains("is-active")) return;
      if (e.key === "ArrowLeft") { playerMove(-1); e.preventDefault(); }
      else if (e.key === "ArrowRight") { playerMove(1); e.preventDefault(); }
      else if (e.key === "ArrowDown") { playerDrop(); e.preventDefault(); }
      else if (e.key === "ArrowUp" || e.key === "x") { playerRotate(); e.preventDefault(); }
      else if (e.key === " ") { playerHardDrop(); e.preventDefault(); }
      else if (e.key === "p" || e.key === "P") { isPaused = !isPaused; e.preventDefault(); }
      else if (e.key === "Enter" && gameOver) { this.tetrisReset(); e.preventDefault(); }
    };

    window.addEventListener("keydown", handleKey);

    overlay.querySelectorAll(".tetris-touch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (gameOver) { this.tetrisReset(); return; }
        const act = btn.getAttribute("data-action");
        if (act === "left") playerMove(-1);
        else if (act === "right") playerMove(1);
        else if (act === "rotate") playerRotate();
        else if (act === "drop") playerDrop();
      });
    });

    this.tetrisReset();
    requestAnimationFrame(update);
  }
});

Object.assign(Controller, {
  openTetrisModal() {
    View.openTetrisModal();
  }
});
;

// --- FILE: assets/functions/pongGame/pongGame.js ---
;



if (typeof document !== "undefined" && !document.getElementById("pong-style")) {
  const link = document.createElement("link");
  link.id = "pong-style";
  link.rel = "stylesheet";
  link.href = "assets/functions/pongGame/pongGame.css";
  document.head.appendChild(link);
}

Object.assign(View, {
  renderPongIconAnimation(canvas) {
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const interval = setInterval(() => {
      if (!document.body.contains(canvas)) {
        clearInterval(interval);
        return;
      }
      frame++;
      const style = getComputedStyle(document.body);
      const ink = style.getPropertyValue('--ink').trim() || '#090b0a';
      const line = style.getPropertyValue('--line').trim() || '#1b221d';
      const cyan = style.getPropertyValue('--cyan').trim() || '#91f3a8';
      const green = style.getPropertyValue('--green').trim() || '#20ef4f';

      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = line;
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += 8) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += 8) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      const sz = 8;
      // Paddle 1 (left): column 1, height 3 cells, vertical grid movement
      const p1Row = 1 + (Math.floor(frame / 2) % 3);
      ctx.fillStyle = cyan;
      ctx.fillRect(1 * sz + 1, p1Row * sz + 1, sz - 2, 3 * sz - 2);

      // Paddle 2 (right): column 5, height 3 cells, vertical grid movement
      const p2Row = 1 + (Math.floor((frame + 2) / 2) % 3);
      ctx.fillStyle = green;
      ctx.fillRect(5 * sz + 1, p2Row * sz + 1, sz - 2, 3 * sz - 2);

      // Ball: moving on grid cells
      const ballCols = [2, 3, 4, 3];
      const ballRows = [2, 3, 4, 3];
      const bIdx = frame % ballCols.length;
      ctx.fillStyle = cyan;
      ctx.fillRect(ballCols[bIdx] * sz + 1, ballRows[bIdx] * sz + 1, sz - 2, sz - 2);
    }, 120);
  },

  openPongModal() {
    let overlay = document.querySelector(".pong-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "pong-modal-overlay";
      overlay.innerHTML = `
        <div class="pong-modal-container">
          <div class="pong-header">
            <h3 class="pong-title" id="pong-modal-title">CYBER PONG</h3>
            <button class="pong-close-btn" type="button">X</button>
          </div>
          <div class="pong-mode-selector">
            <button class="pong-mode-btn is-active" data-mode="vs_ai">1J vs CPU</button>
            <button class="pong-mode-btn" data-mode="2p">2 JUGADORES</button>
          </div>
          <div class="pong-diff-selector" id="pong-diff-container">
            <button class="pong-diff-btn" data-diff="easy">EASY</button>
            <button class="pong-diff-btn is-active" data-diff="medium">MEDIUM</button>
            <button class="pong-diff-btn" data-diff="hard">HARD</button>
            <button class="pong-diff-btn" data-diff="impossible">IMPOSIBLE</button>
          </div>
          <div class="pong-stats">
            <span id="pong-p1-score">PLAYER 1: 0</span>
            <span id="pong-p2-score">CPU: 0</span>
          </div>
          <div class="pong-game-canvas-wrap">
            <canvas class="pong-canvas" id="pong-game-canvas" width="480" height="300"></canvas>
          </div>
          <p class="pong-controls-hint" id="pong-controls-hint">P1: W / S | P2: CPU | SPACE: PAUSE</p>
          <div class="pong-touch-pad" id="pong-touch-pad">
            <button class="pong-touch-btn" data-action="up">UP</button>
            <button class="pong-touch-btn" data-action="down">DOWN</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".pong-close-btn").addEventListener("click", () => {
        this.closePongModal();
      });
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closePongModal();
      });

      overlay.querySelectorAll(".pong-mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          overlay.querySelectorAll(".pong-mode-btn").forEach(b => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const mode = btn.getAttribute("data-mode");
          if (this.pongSetMode) this.pongSetMode(mode);
        });
      });

      overlay.querySelectorAll(".pong-diff-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          overlay.querySelectorAll(".pong-diff-btn").forEach(b => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const diff = btn.getAttribute("data-diff");
          if (this.pongSetDifficulty) this.pongSetDifficulty(diff);
        });
      });

      this.initPongEngine(overlay);
    }
    overlay.classList.add("is-active");
    if (this.pongReset) this.pongReset();
  },

  closePongModal() {
    const overlay = document.querySelector(".pong-modal-overlay");
    if (overlay) overlay.classList.remove("is-active");
    if (this.pongPause) this.pongPause();
  },

  initPongEngine(overlay) {
    const canvas = overlay.querySelector("#pong-game-canvas");
    const ctx = canvas.getContext("2d");
    const p1ScoreEl = overlay.querySelector("#pong-p1-score");
    const p2ScoreEl = overlay.querySelector("#pong-p2-score");
    const titleEl = overlay.querySelector("#pong-modal-title");
    const diffContainer = overlay.querySelector("#pong-diff-container");
    const controlsHintEl = overlay.querySelector("#pong-controls-hint");

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    let gameMode = "vs_ai";
    let p1Score = 0;
    let p2Score = 0;
    let difficulty = "medium";

    const paddleWidth = 10;
    const paddleHeight = 60;
    const ballSize = 8;

    let player1 = {
      x: 15,
      y: HEIGHT / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 0
    };

    let player2 = {
      x: WIDTH - 25,
      y: HEIGHT / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 0
    };

    let ball = {
      x: WIDTH / 2,
      y: HEIGHT / 2,
      vx: 4,
      vy: 3,
      speed: 5
    };

    let isPaused = false;
    let gameOver = false;

    this.pongSetMode = (mode) => {
      gameMode = mode;
      if (gameMode === "vs_ai") {
        titleEl.textContent = "CYBER PONG // VS CPU";
        diffContainer.classList.remove("is-hidden");
        controlsHintEl.textContent = "P1: W / S | P2: CPU | SPACE: PAUSE";
      } else {
        titleEl.textContent = "CYBER PONG // 2 PLAYERS";
        diffContainer.classList.add("is-hidden");
        controlsHintEl.textContent = "P1: W / S | P2: UP / DOWN ARROWS | SPACE: PAUSE";
      }
      this.pongReset();
    };

    this.pongSetDifficulty = (diff) => {
      difficulty = diff;
      this.pongReset();
    };

    this.pongReset = () => {
      p1Score = 0;
      p2Score = 0;
      p1ScoreEl.textContent = `PLAYER 1: ${p1Score}`;
      p2ScoreEl.textContent = gameMode === "vs_ai" ? `CPU: ${p2Score}` : `PLAYER 2: ${p2Score}`;
      resetBall();
      isPaused = false;
      gameOver = false;
    };

    this.pongPause = () => {
      isPaused = true;
    };

    function resetBall(servingToP1 = true) {
      ball.x = WIDTH / 2;
      ball.y = HEIGHT / 2;
      ball.speed = 5;
      const angle = (Math.random() * 0.6 - 0.3) * Math.PI;
      const dir = servingToP1 ? -1 : 1;
      ball.vx = dir * ball.speed * Math.cos(angle);
      ball.vy = ball.speed * Math.sin(angle);
    }

    function update() {
      if (!overlay.classList.contains("is-active") || isPaused || gameOver) return;

      player1.y += player1.dy;
      if (player1.y < 0) player1.y = 0;
      if (player1.y > HEIGHT - player1.height) player1.y = HEIGHT - player1.height;

      if (gameMode === "2p") {
        player2.y += player2.dy;
        if (player2.y < 0) player2.y = 0;
        if (player2.y > HEIGHT - player2.height) player2.y = HEIGHT - player2.height;
      } else {
        let aiSpeed = 3.2;
        let errorMargin = 25;

        if (difficulty === "easy") {
          aiSpeed = 2.5;
          errorMargin = 45;
        } else if (difficulty === "medium") {
          aiSpeed = 4.0;
          errorMargin = 20;
        } else if (difficulty === "hard") {
          aiSpeed = 5.8;
          errorMargin = 8;
        } else if (difficulty === "impossible") {
          aiSpeed = 8.5;
          errorMargin = 0;
        }

        let aiTarget = ball.y - player2.height / 2;
        if (Math.abs(player2.y - aiTarget) > 3) {
          if (player2.y < aiTarget + (Math.random() - 0.5) * errorMargin) {
            player2.y += aiSpeed;
          } else if (player2.y > aiTarget + (Math.random() - 0.5) * errorMargin) {
            player2.y -= aiSpeed;
          }
        }
        if (player2.y < 0) player2.y = 0;
        if (player2.y > HEIGHT - player2.height) player2.y = HEIGHT - player2.height;
      }

      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.y <= 0) {
        ball.y = 0;
        ball.vy *= -1;
      } else if (ball.y >= HEIGHT - ballSize) {
        ball.y = HEIGHT - ballSize;
        ball.vy *= -1;
      }

      if (
        ball.x <= player1.x + player1.width &&
        ball.x + ballSize >= player1.x &&
        ball.y + ballSize >= player1.y &&
        ball.y <= player1.y + player1.height
      ) {
        let hitPoint = (ball.y + ballSize / 2) - (player1.y + player1.height / 2);
        let normalizedHit = hitPoint / (player1.height / 2);
        let bounceAngle = normalizedHit * (Math.PI / 4);
        ball.speed = Math.min(ball.speed + 0.3, 11);
        ball.vx = ball.speed * Math.cos(bounceAngle);
        ball.vy = ball.speed * Math.sin(bounceAngle);
        ball.x = player1.x + player1.width;
      }

      if (
        ball.x + ballSize >= player2.x &&
        ball.x <= player2.x + player2.width &&
        ball.y + ballSize >= player2.y &&
        ball.y <= player2.y + player2.height
      ) {
        let hitPoint = (ball.y + ballSize / 2) - (player2.y + player2.height / 2);
        let normalizedHit = hitPoint / (player2.height / 2);
        let bounceAngle = normalizedHit * (Math.PI / 4);
        ball.speed = Math.min(ball.speed + 0.3, 11);
        ball.vx = -ball.speed * Math.cos(bounceAngle);
        ball.vy = ball.speed * Math.sin(bounceAngle);
        ball.x = player2.x - ballSize;
      }

      if (ball.x < 0) {
        p2Score++;
        p2ScoreEl.textContent = gameMode === "vs_ai" ? `CPU: ${p2Score}` : `PLAYER 2: ${p2Score}`;
        if (p2Score >= 5) {
          gameOver = true;
        } else {
          resetBall(false);
        }
      } else if (ball.x > WIDTH) {
        p1Score++;
        p1ScoreEl.textContent = `PLAYER 1: ${p1Score}`;
        if (p1Score >= 5) {
          gameOver = true;
        } else {
          resetBall(true);
        }
      }
    }

    function draw() {
      ctx.fillStyle = '#090b0a';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx.strokeStyle = '#1b221d';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(WIDTH / 2, 0);
      ctx.lineTo(WIDTH / 2, HEIGHT);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#91f3a8';
      ctx.shadowColor = '#91f3a8';
      ctx.shadowBlur = 8;
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

      ctx.fillStyle = '#20ef4f';
      ctx.shadowColor = '#20ef4f';
      ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

      ctx.fillStyle = '#ff2244';
      ctx.shadowColor = '#ff2244';
      ctx.fillRect(ball.x, ball.y, ballSize, ballSize);
      ctx.shadowBlur = 0;

      if (gameOver) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.85)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        let winText = p1Score >= 5 ? "PLAYER 1 WINS" : (gameMode === "vs_ai" ? "CPU WINS // DEFEAT" : "PLAYER 2 WINS");
        ctx.fillStyle = p1Score >= 5 ? "#20ef4f" : "#ff2244";
        ctx.font = "bold 18px monospace";
        ctx.textAlign = "center";
        ctx.fillText(winText, WIDTH / 2, HEIGHT / 2 - 10);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "12px monospace";
        ctx.fillText("PRESS ENTER TO RESTART", WIDTH / 2, HEIGHT / 2 + 20);
      } else if (isPaused) {
        ctx.fillStyle = "rgba(9, 11, 10, 0.75)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#91f3a8";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("PAUSED", WIDTH / 2, HEIGHT / 2);
      }
    }

    function loop() {
      update();
      draw();
      requestAnimationFrame(loop);
    }

    const handleKeyDown = (e) => {
      if (!overlay.classList.contains("is-active")) return;
      if (e.key === "w" || e.key === "W") {
        player1.dy = -6;
        e.preventDefault();
      } else if (e.key === "s" || e.key === "S") {
        player1.dy = 6;
        e.preventDefault();
      }

      if (gameMode === "2p") {
        if (e.key === "ArrowUp") {
          player2.dy = -6;
          e.preventDefault();
        } else if (e.key === "ArrowDown") {
          player2.dy = 6;
          e.preventDefault();
        }
      }

      if (e.key === " ") {
        isPaused = !isPaused;
        e.preventDefault();
      } else if (e.key === "Enter" && gameOver) {
        this.pongReset();
        e.preventDefault();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "w" || e.key === "W" || e.key === "s" || e.key === "S") {
        player1.dy = 0;
      }
      if (gameMode === "2p") {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          player2.dy = 0;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    overlay.querySelectorAll(".pong-touch-btn").forEach(btn => {
      const act = btn.getAttribute("data-action");
      btn.addEventListener("mousedown", () => { player1.dy = act === "up" ? -6 : 6; });
      btn.addEventListener("mouseup", () => { player1.dy = 0; });
      btn.addEventListener("touchstart", (e) => { e.preventDefault(); player1.dy = act === "up" ? -6 : 6; });
      btn.addEventListener("touchend", () => { player1.dy = 0; });
    });

    this.pongReset();
    requestAnimationFrame(loop);
  }
});

Object.assign(Controller, {
  openPongModal() {
    View.openPongModal();
  }
});
;

// --- FILE: assets/js/main.js ---
;













const MainApplication = {
  async init() {
    Controller.init();
    View.renderJuegos(Model.games);
  }
};

MainApplication.init();
