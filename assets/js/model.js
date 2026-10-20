export const Model = {
  basePath: "/home/v1r3",
  themes: [
    { id: "hacker", label: "HACKER" },
    { id: "cyberpunk", label: "CYBERPUNK" },
    { id: "claude", label: "CLAUDE" },
    { id: "custom", label: "CUSTOM" },
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
      customThemeTitle: "THEME CUSTOMIZER", resetDefaults: "Reset defaults",
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
};