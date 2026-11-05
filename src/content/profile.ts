// Imports relatifs uniquement : ce fichier est aussi lu par vite.config.ts.
import type { Lang } from "../lib/i18n";

export type L = { fr: string; en: string };
export type Link = { label: string; url: string };
export type Item = { text: L; link?: Link };

export type CaseStudy = {
  slug: string;
  period: Text;
  sector: L;
  title: L;
  summary: L;
  context: L;
  role: L;
  missions: Item[];
  challenge: L;
  method?: Item[];
  result: L;
  tags: string[];
  media?: { video: string; poster: string; caption: L };
};

export type Text = string | L;

export const loc = (v: Text, lang: Lang) => (typeof v === "string" ? v : v[lang]);

export const profile = {
  meta: {
    title: { fr: "Gilles DOFFE · Architecte Linux embarqué", en: "Gilles DOFFE · Embedded Linux Architect" },
    description: {
      fr: "Gilles DOFFE, architecte Linux embarqué et tech lead : Yocto, Buildroot, bootloaders, noyau, Secure Boot, mise à jour sécurisée, industrialisation et encadrement d'équipes.",
      en: "Gilles DOFFE, embedded Linux architect and tech lead: Yocto, Buildroot, bootloaders, kernel, Secure Boot, secure updates, build industrialization and team leadership.",
    },
  },

  hero: {
    kicker: { fr: "Architecte Linux embarqué · Tech Lead · Bretagne", en: "Embedded Linux Architect · Tech Lead · Brittany, France" },
    name: "Gilles DOFFE",
    tagline: {
      fr: "Du bootloader à l'équipe qui le maintient.",
      en: "From the bootloader to the team that maintains it.",
    },
    intro: {
      fr: "Depuis 2006, je conçois et je maintiens des socles Linux embarqués pour des produits industriels : distributions Yocto et Buildroot, chaîne de démarrage, noyau et drivers, mise à jour sécurisée. J'encadre les équipes qui les font vivre et je forme celles qui les reprennent.",
      en: "Since 2006, I have been designing and maintaining embedded Linux platforms for industrial products: Yocto and Buildroot distributions, boot chain, kernel and drivers, secure updates. I lead the teams that keep them alive and train those who take them over.",
    },
    navLabel: { fr: "Sections de la page", en: "Page sections" },
    portraitAlt: { fr: "Portrait illustré de Gilles DOFFE devant le logo MaenSkill", en: "Illustrated portrait of Gilles DOFFE in front of the MaenSkill logo" },
    ctaContact: { fr: "Me contacter", en: "Contact me" },
  },

  stats: [
    { value: "20", unit: { fr: "ans", en: "years" }, label: { fr: "de Linux embarqué, depuis 2006", en: "of embedded Linux, since 2006" } },
    { value: "10+", unit: { fr: "BSP", en: "BSPs" }, label: { fr: "Yocto et Buildroot livrés, du médical au spatial", en: "Yocto and Buildroot delivered, from medical to space" } },
    { value: "6", unit: { fr: "développeurs", en: "developers" }, label: { fr: "encadrés sur un produit robotique", en: "led on a robotics product" } },
    { value: "13", unit: { fr: "ans", en: "years" }, label: { fr: "à former des équipes au Linux embarqué, depuis 2013", en: "training teams in embedded Linux, since 2013" } },
  ],

  expertise: {
    title: { fr: "Domaines d'expertise", en: "Areas of expertise" },
    subtitle: {
      fr: "Un socle Linux embarqué se conçoit pour durer : plusieurs cartes, plusieurs générations de produits, plusieurs équipes.",
      en: "An embedded Linux platform is built to last: several boards, several product generations, several teams.",
    },
    blocks: [
      {
        title: { fr: "Architecture", en: "Architecture" },
        text: {
          fr: "Choix du SoC et du matériel, répartition entre Linux et RTOS, chaîne de démarrage, partitionnement et stratégie de mise à jour, arbitrages entre performance, sûreté et maintenabilité.",
          en: "SoC and hardware selection, split between Linux and RTOS, boot chain, partitioning and update strategy, trade-offs between performance, safety and maintainability.",
        },
      },
      {
        title: { fr: "Transmission", en: "Knowledge transfer" },
        text: {
          fr: "Tech lead, revues d'architecture, formation Yocto et Linux embarqué, documentation d'architecture et guides livrés avec le code.",
          en: "Tech lead, architecture reviews, Yocto and embedded Linux training, architecture documentation and guides shipped with the code.",
        },
      },
      {
        title: { fr: "Socle de distribution", en: "Distribution platform" },
        text: {
          fr: "Layers, machines et distros Yocto, migrations de version (Rocko, Warrior, Dunfell, Kirkstone, Scarthgap), Buildroot, distributions Debian et Ubuntu sur mesure.",
          en: "Yocto layers, machines and distros, release migrations (Rocko, Warrior, Dunfell, Kirkstone, Scarthgap), Buildroot, custom Debian and Ubuntu distributions.",
        },
      },
      {
        title: { fr: "Démarrage et sécurité", en: "Boot chain and security" },
        text: {
          fr: "U-Boot, barebox, GRUB, Secure Boot, partitionnement et mise à jour A/B signée avec retour arrière (RAUC, SWUpdate).",
          en: "U-Boot, barebox, GRUB, Secure Boot, partitioning and signed A/B updates with rollback (RAUC, SWUpdate).",
        },
      },
      {
        title: { fr: "Noyau et BSP", en: "Kernel and BSP" },
        text: {
          fr: "Device tree, drivers (I2C, SPI, PWM, DSA), bring-up de cartes sur mesure, PREEMPT_RT, debug sur cible avec JTAG, openocd et GDB.",
          en: "Device tree, drivers (I2C, SPI, PWM, DSA), custom board bring-up, PREEMPT_RT, on-target debugging with JTAG, openocd and GDB.",
        },
      },
      {
        title: { fr: "Industrialisation", en: "Industrialization" },
        text: {
          fr: "CI Jenkins avec Gerrit, GitLab CI, kas et cache sstate partagé, builds reproductibles, tests système sur cible.",
          en: "Jenkins CI with Gerrit, GitLab CI, kas and shared sstate cache, reproducible builds, on-target system tests.",
        },
      },
    ],
    archTitle: { fr: "Plateformes", en: "Platforms" },
    arch: ["i.MX6 / 6ULL", "i.MX8M Plus", "Rockchip", "STM32MP1", "BCM2711 / CM3", "Zynq-7000", "Cyclone V", "x86_64", "MIPS", "Coldfire"],
  },

  now: {
    title: { fr: "En ce moment", en: "Right now" },
    items: [
      {
        fr: "Fondateur de MaenSkill : conseil en Linux embarqué et tech lead pour des équipes R&D.",
        en: "Founder of MaenSkill: embedded Linux consulting and tech lead for R&D teams.",
      },
      {
        fr: "Chaîne de démarrage sécurisée sur SoC Rockchip, secteur drone.",
        en: "Secure boot chain on a Rockchip SoC, drone industry.",
      },
      {
        fr: "Ajout du support du STM32H5 à RIOT-OS.",
        en: "Adding STM32H5 support to RIOT-OS.",
      },
      {
        fr: "Affichage dynamique sur i.MX8M Plus : environnement de build kas reproductible avec cache sstate partagé (Yocto Scarthgap).",
        en: "Digital signage on i.MX8M Plus: reproducible kas build environment with a shared sstate cache (Yocto Scarthgap).",
      },
    ],
  },

  casesTitle: { fr: "Réalisations", en: "Selected work" },
  casesSubtitle: {
    fr: "Quelques projets représentatifs. Les clients ne sont pas nommés, seulement leur secteur.",
    en: "A few representative projects. Clients are not named, only their industry.",
  },
  readMore: { fr: "Lire le cas", en: "Read the case" },
  back: { fr: "Retour", en: "Back" },
  labels: {
    context: { fr: "Contexte", en: "Context" },
    role: { fr: "Mon rôle", en: "My role" },
    missions: { fr: "Périmètre technique", en: "Technical scope" },
    challenge: { fr: "Enjeu technique", en: "Key challenge" },
    method: { fr: "Méthode", en: "Method" },
    result: { fr: "Résultat", en: "Outcome" },
    tech: { fr: "Technologies", en: "Technologies" },
    other: { fr: "Autres réalisations", en: "Other work" },
  },

  contributions: {
    title: { fr: "Contributions et conférences", en: "Contributions and talks" },
    navLabel: { fr: "Contributions", en: "Contributions" },
    subtitle: {
      fr: "Il n'y a pas de progrès sans partage. Une partie de ce que j'apprends en mission retourne en amont, relue publiquement par les mainteneurs.",
      en: "There is no progress without sharing. Part of what I learn on assignments goes back upstream, publicly reviewed by maintainers.",
    },
    riot: {
      title: { fr: "RIOT-OS", en: "RIOT-OS" },
      stat: { fr: "12 pull requests fusionnées depuis 2018", en: "12 merged pull requests since 2018" },
      text: {
        fr: "Système d'exploitation temps réel open source pour microcontrôleurs. Portages de SoC, drivers et périphériques simulés pour tester sans matériel.",
        en: "Open source real-time operating system for microcontrollers. SoC ports, drivers and mocked peripherals for hardware-free testing.",
      },
      all: { label: { fr: "Toutes mes PR RIOT", en: "All my RIOT PRs" }, url: "https://github.com/RIOT-OS/RIOT/pulls?q=is%3Apr+author%3Agdoffe+is%3Amerged" },
      prs: [
        { year: "2025", num: 20429, text: { fr: "Refonte du driver de moteurs à courant continu", en: "DC motor driver rework" } },
        { year: "2025", num: 20430, text: { fr: "Bus I2C simulé sur l'architecture native", en: "Mocked I2C bus on the native architecture" } },
        { year: "2025", num: 20428, text: { fr: "Support CAN FD pour STM32G4 et l'architecture native", en: "CAN FD support for STM32G4 and the native architecture" } },
        { year: "2024", num: 20431, text: { fr: "GPIO simulés sur l'architecture native", en: "Mocked GPIOs on the native architecture" } },
        { year: "2020", num: 14691, text: { fr: "Portage de RIOT-OS sur STM32MP1 (cœur Cortex-M4)", en: "RIOT-OS port to STM32MP1 (Cortex-M4 core)" } },
        { year: "2019", num: 10290, text: { fr: "Driver de pont en H pour moteurs à courant continu", en: "H-bridge driver for DC motors" } },
        { year: "2018", num: 9411, text: { fr: "Support du STM32F405RG", en: "STM32F405RG support" } },
        { year: "2018", num: 8482, text: { fr: "Interface de driver pour décodeur en quadrature", en: "Quadrature decoder driver interface" } },
      ],
    },
    cogip: {
      title: { fr: "Robotique COGIP", en: "COGIP robotics" },
      stat: { fr: "Membre depuis 2016", en: "Member since 2016" },
      text: {
        fr: "Association qui conçoit chaque année un robot autonome pour la Coupe de France de robotique. Je contribue au firmware de pilotage sur RIOT-OS (plus de 75 pull requests) et aux outils Python et C++ associés.",
        en: "Association building an autonomous robot every year for the French Robotics Cup. I contribute to the RIOT-OS control firmware (over 75 pull requests) and the related Python and C++ tools.",
      },
      link: { label: "github.com/cogip", url: "https://github.com/cogip" },
    },
    talks: {
      title: { fr: "Conférences", en: "Talks" },
      items: [
        {
          year: "2026",
          event: "RIOT Summit",
          text: { fr: "Robots mobiles multi-MCU sous RIOT (avec Mathis Lecrivain)", en: "Multi MCU mobile robots running RIOT (with Mathis Lecrivain)" },
          url: "https://youtu.be/b-zIozau1Rk",
        },
        {
          year: "2022",
          event: "RIOT Summit",
          text: { fr: "RIOT-OS et la robotique mobile", en: "RIOT OS and mobile robotics" },
          url: "https://youtu.be/GZtuHdbfl-c",
        },
        {
          year: "2020",
          event: "RIOT Summit",
          text: { fr: "Portage de RIOT-OS sur STM32MP1, un SoC bi-architecture Cortex-A7 et Cortex-M4", en: "Porting RIOT-OS to STM32MP1, a dual-architecture Cortex-A7 and Cortex-M4 SoC" },
          url: "https://youtu.be/XnvLKiama40",
        },
      ],
    },
  },

  method: {
    title: { fr: "Ma méthode", en: "How I work" },
    subtitle: {
      fr: "Un produit embarqué tient dans la durée quand l'équipe qui le construit va bien. Je cherche un rythme tenable, des rôles clairs et une rigueur technique qui protège plutôt qu'elle ne pèse.",
      en: "An embedded product lasts when the team building it is doing well. I aim for a sustainable pace, clear roles and technical rigor that protects rather than weighs down.",
    },
    items: [
      {
        title: { fr: "Un management immersif", en: "Hands-on, immersive management" },
        text: {
          fr: "Je reste dans l'équipe, au plus près du code et des personnes. Je relis, je participe aux choix, je vois les difficultés au moment où elles apparaissent plutôt qu'en réunion de suivi.",
          en: "I stay inside the team, close to the code and to the people. I review, I take part in decisions, I see difficulties as they arise rather than in status meetings.",
        },
      },
      {
        title: { fr: "Chacun à sa juste place", en: "Everyone in the right place" },
        text: {
          fr: "J'aime accompagner, comprendre ce qui motive chacun et le placer dans les meilleures conditions possibles. Un collaborateur qui se sent bien dans son rôle progresse et fait progresser les autres.",
          en: "I like to support people, understand what drives each of them and put them in the best possible conditions. Someone who feels at home in their role grows and helps others grow.",
        },
      },
      {
        title: { fr: "Kanban, un rythme maîtrisé", en: "Kanban, a controlled pace" },
        text: {
          fr: "Je travaille en Kanban : un flux visible, des priorités claires, pas de course de fin de sprint. Le but est une vélocité constante dans la durée et une équipe qui travaille sereinement.",
          en: "I work with Kanban: a visible flow, clear priorities, no end-of-sprint rush. The goal is steady velocity over time and a team that works with peace of mind.",
        },
      },
      {
        title: { fr: "Faire le lien, démocratiser", en: "Building bridges, sharing context" },
        text: {
          fr: "Je crée du liant avec les équipes commerciales, le management, les RH ou le marketing, j'explique à ma propre équipe les enjeux de chacun. Comprendre pourquoi une demande arrive fluidifie les échanges bien plus qu'une consigne.",
          en: "I build ties with sales, management, HR or marketing, and I explain everyone's stakes to my own team. Understanding why a request comes in smooths collaboration far more than an instruction does.",
        },
      },
      {
        title: { fr: "Une rigueur qui protège l'équipe", en: "Rigor that protects the team" },
        text: {
          fr: "Revue d'architecture avant le code, intégration continue bloquante (règles de code et de commit, relecture, build sur cible) et builds reproductibles. Chaque nouveau développement est vérifié, personne ne porte seul la qualité.",
          en: "Architecture review before code, blocking continuous integration (code and commit rules, review, target build) and reproducible builds. Every new development is checked, no one carries quality alone.",
        },
      },
      {
        title: { fr: "Une équipe autonome", en: "An autonomous team" },
        text: {
          fr: "Documenter le savoir pour se concentrer sur le savoir-faire. Architecture, procédures et choix techniques sont écrits et livrés avec le code : personne n'a à tout retenir, et chacun consacre son énergie à ce qui demande vraiment son expertise.",
          en: "Document the knowledge to focus on the know-how. Architecture, procedures and technical decisions are written down and shipped with the code: no one has to remember everything, and everyone spends their energy where their expertise really matters.",
        },
      },
    ],
  },

  timeline: {
    title: { fr: "Parcours", en: "Career" },
    items: [
      {
        period: { fr: "2026 · auj.", en: "2026 · now" },
        role: { fr: "Fondateur, consultant Linux embarqué et tech lead", en: "Founder, embedded Linux consultant and tech lead" },
        org: "MaenSkill",
        text: {
          fr: "Architecture, BSP et accompagnement d'équipes : affichage dynamique, drone, robotique.",
          en: "Architecture, BSP and team support: digital signage, drones, robotics.",
        },
      },
      {
        period: "2021 · 2025",
        role: { fr: "Responsable technique, directeur de projets robotique", en: "Technical leader, robotics project director" },
        org: "Rtone (groupe ABMI)",
        text: {
          fr: "Produits IoT et robotiques de bout en bout avec les équipes hardware, firmware et mécanique. Refonte de BSP Yocto, tech lead de l'équipe logicielle d'un robot de tri autonome.",
          en: "End-to-end IoT and robotics products with hardware, firmware and mechanical teams. Yocto BSP overhaul, tech lead of the software team behind an autonomous sorting robot.",
        },
      },
      {
        period: "2017 · 2021",
        role: { fr: "Responsable technique, directeur de projet, formateur", en: "Technical leader, project director, trainer" },
        org: "Savoir-faire Linux",
        text: {
          fr: "BSP Yocto de la conception à l'industrialisation : médical, microbiologie, robotique, comptage, multimédia. Formateur Yocto et Linux embarqué.",
          en: "Yocto BSPs from design to industrialization: medical, microbiology, robotics, counting systems, multimedia. Yocto and embedded Linux trainer.",
        },
      },
      {
        period: "2016 · 2017",
        role: { fr: "Leader technique Linux embarqué", en: "Embedded Linux technical leader" },
        org: "Ausy",
        text: {
          fr: "Défense et spatial : socle Linux sur SoC FPGA Zynq-7000 et Cyclone V, Ubuntu pour le développement, Buildroot pour la production. Imagerie : étude Docker pour le déploiement de caméras, formation des équipes.",
          en: "Defense and space: Linux platform on Zynq-7000 and Cyclone V FPGA SoCs, Ubuntu for development, Buildroot for production. Imaging: Docker study for camera software deployment, team training.",
        },
      },
      {
        period: "2013 · 2015",
        role: { fr: "Ingénieur systèmes embarqués, formateur", en: "Embedded systems engineer, trainer" },
        org: "Eurogiciel",
        text: {
          fr: "Ferroviaire : Linux temps réel pour des automatismes de portes. Broadcast : distribution Ubuntu sur mesure pour serveurs vidéo. Ateliers de formation Linux embarqué, débutant et avancé.",
          en: "Rail: real-time Linux for door automation. Broadcast: custom Ubuntu distribution for video servers. Beginner and advanced embedded Linux training workshops.",
        },
      },
      {
        period: "2006 · 2013",
        role: { fr: "Développeur et intégrateur embarqué", en: "Embedded developer and integrator" },
        org: { fr: "TV numérique, télécoms, défense", en: "Digital TV, telecoms, defense" },
        text: {
          fr: "Décodeurs TV et box internet sur MIPS, SH et ARM : intégration, profilage du démarrage, tests de non-régression chez l'opérateur. Simulateur multi-agents pour la défense.",
          en: "Set-top boxes and internet gateways on MIPS, SH and ARM: integration, boot profiling, non-regression testing at the operator. Multi-agent simulator for defense.",
        },
      },
    ],
    education: [
      { period: "2003 · 2006", text: { fr: "Diplôme d'ingénieur en informatique, ENIB Brest", en: "Computer science engineering degree, ENIB Brest" } },
      { period: "2002 · 2003", text: { fr: "DUT Informatique en année spéciale, IUT d'Amiens", en: "Accelerated one-year computer science degree (DUT), IUT Amiens" } },
      { period: "2000 · 2002", text: { fr: "DUT Génie électrique et informatique industrielle, IUT de Soissons-Cuffies", en: "Two-year degree in electrical engineering and industrial computing (DUT), IUT Soissons-Cuffies" } },
    ],
    languages: { fr: "Anglais professionnel, projets menés en contexte international", en: "Professional English, projects run in an international context" },
  },

  contact: {
    links: [
      { label: "LinkedIn", url: "https://fr.linkedin.com/in/gilles-doffe-070102a9" },
      { label: "GitHub", url: "https://github.com/gdoffe" },
    ],
  },
} as const;

// Du plus récent au plus ancien.
export const cases: CaseStudy[] = [
  {
    slug: "robot-de-tri",
    period: "2023 · 2026",
    sector: { fr: "Intralogistique · robotique mobile", en: "Intralogistics · mobile robotics" },
    title: { fr: "Tech lead de l'équipe logicielle d'un robot de tri", en: "Tech lead of a sorting robot software team" },
    summary: {
      fr: "Du proof of concept au produit en deux ans et cinq mois, avec une équipe de 4 à 6 développeurs, en anglais.",
      en: "From proof of concept to product in two years and five months, with a team of 4 to 6 developers, in English.",
    },
    context: {
      fr: "Robots mobiles autonomes pour le tri de colis en entrepôt. Ils naviguent sans rail ni marquage au sol, se localisent et recalculent leur trajectoire à bord. Projet mené en anglais, dans un contexte international.",
      en: "Autonomous mobile robots for parcel sorting in warehouses. They navigate without rails or floor markings, localize themselves and replan their path on board. Project run in English, in an international context.",
    },
    role: { fr: "Responsable technique et architecte logiciel", en: "Technical lead and software architect" },
    missions: [
      { text: { fr: "Encadrement d'une équipe de 4 à 6 développeurs, participation au recrutement.", en: "Led a team of 4 to 6 developers, took part in hiring." } },
      { text: { fr: "Architecture logicielle embarquée sur STM32H5 et Zephyr : sûreté, contrôle de mouvement, suivi de trajectoire.", en: "Embedded software architecture on STM32H5 and Zephyr: safety, motion control, path following." } },
      { text: { fr: "C++ sans allocation dynamique (ETL, EmbeddedProto) pour une mémoire bornée et un comportement déterministe.", en: "C++ without dynamic allocation (ETL, EmbeddedProto) for bounded memory and deterministic behavior." } },
      { text: { fr: "Intégration du capteur de localisation visuelle sur sa carte Linux ARM64 : passerelle C++ UDP et protobuf.", en: "Integration of the visual localization sensor on its ARM64 Linux board: C++ UDP and protobuf gateway." } },
      { text: { fr: "Simulation multi-robots sous Docker, branchée sur la supervision de flotte.", en: "Multi-robot simulation under Docker, connected to fleet supervision." } },
      { text: { fr: "Arbitrages techniques avec le client et coordination avec l'électronique, la mécanique et l'exploitation.", en: "Technical trade-offs with the client and coordination with electronics, mechanics and operations." } },
    ],
    challenge: {
      fr: "Faire tenir sûreté, contrôle de mouvement et suivi de trajectoire dans le budget CPU et mémoire d'un microcontrôleur, sans processeur applicatif.",
      en: "Fitting safety, motion control and path following into the CPU and memory budget of a microcontroller, with no application processor.",
    },
    method: [
      { text: { fr: "Pipeline GitLab bloquant : règles de code et de commit, revue, build réussi pour la cible et pour la simulation.", en: "Blocking GitLab pipeline: code and commit rules, review, green build for both target and simulation." } },
      { text: { fr: "Plusieurs centaines de merge requests, aussi atomiques que possible, revues sous deux à trois jours.", en: "Several hundred merge requests, as atomic as possible, reviewed within two to three days." } },
      { text: { fr: "Assistants IA introduits sur la dernière phase, sous la même revue et le même pipeline que le reste du code.", en: "AI assistants introduced in the final phase, under the same review and pipeline as the rest of the code." } },
    ],
    result: {
      fr: "Robot sorti en avril 2026, après deux ans et sept mois de mission.",
      en: "Robot released in April 2026, after a two-year-seven-month engagement.",
    },
    tags: ["Zephyr", "STM32H5", "C++", "ETL", "GitLab CI", "Docker", "Tech lead"],
    media: {
      video: "portfolio/robot-tri.mp4",
      poster: "portfolio/robot-tri-poster.webp",
      caption: {
        fr: "Simulation de navigation : chaque position à l'écran sort du solveur, rien n'est animé à la main.",
        en: "Navigation simulation: every position on screen comes from the solver, nothing is hand-animated.",
      },
    },
  },
  {
    slug: "bsp-energie",
    period: "2022 · 2024",
    sector: { fr: "Énergie · passerelle industrielle", en: "Energy · industrial gateway" },
    title: { fr: "Refonte complète d'un BSP Yocto", en: "Complete overhaul of a Yocto BSP" },
    summary: {
      fr: "Un module industriel, un BSP en retard de plusieurs versions et une dette technique accumulée. Un an pour remettre le socle à niveau.",
      en: "An industrial module, a BSP several releases behind and accumulated technical debt. One year to bring the platform back up to standard.",
    },
    context: {
      fr: "Passerelle industrielle du secteur de l'énergie, construite sur un module à base de Raspberry Pi CM3. Le BSP Yocto existant avait pris du retard sur les versions et cumulait des correctifs difficiles à maintenir.",
      en: "Industrial gateway in the energy sector, built on a Raspberry Pi CM3 based module. The existing Yocto BSP had fallen behind on releases and piled up patches that were hard to maintain.",
    },
    role: { fr: "Ingénieur systèmes embarqués, en charge du BSP", en: "Embedded systems engineer, owner of the BSP" },
    missions: [
      { text: { fr: "Migration vers Yocto Kirkstone (LTS) et résorption de la dette technique.", en: "Migration to Yocto Kirkstone (LTS) and technical debt cleanup." } },
      { text: { fr: "Bootloader barebox et mise à jour OTA A/B avec RAUC.", en: "barebox bootloader and A/B OTA updates with RAUC." } },
      { text: { fr: "Switch Ethernet KSZ8795 via le sous-système DSA du noyau, avec VLAN.", en: "KSZ8795 Ethernet switch through the kernel DSA subsystem, with VLANs." } },
      { text: { fr: "Services systemd, Azure IoT Edge, Modbus.", en: "systemd services, Azure IoT Edge, Modbus." } },
      { text: { fr: "Wi-Fi en point d'accès et client simultanés.", en: "Concurrent Wi-Fi access point and client modes." } },
    ],
    challenge: {
      fr: "Changer en même temps la version Yocto, le bootloader et le mécanisme de mise à jour d'un produit existant, sans repartir de zéro.",
      en: "Changing the Yocto release, the bootloader and the update mechanism of an existing product at the same time, without starting from scratch.",
    },
    result: {
      fr: "Un BSP sur une version LTS, déployé chez 50 000 clients finaux, mis à jour à distance en A/B, et une base assainie pour les évolutions suivantes.",
      en: "A BSP on an LTS release, deployed at 50,000 end customers, updated remotely in A/B, and a clean base for the next iterations.",
    },
    tags: ["Yocto Kirkstone", "barebox", "RAUC", "DSA", "systemd", "Azure IoT Edge"],
    media: {
      video: "portfolio/passerelle-energie.mp4?v=5",
      poster: "portfolio/passerelle-energie-poster.webp",
      caption: {
        fr: "Vue schématique : le boîtier dans la maison, la nouvelle pile logicielle, le réseau et la mise à jour A/B.",
        en: "Schematic view: the gateway in the home, the new software stack, the network and the A/B update.",
      },
    },
  },
  {
    slug: "studio-audio",
    period: "2020",
    sector: { fr: "Multimédia · studio audio portable", en: "Multimedia · portable audio studio" },
    title: { fr: "BSP Yocto d'un studio audio sur i.MX6ULL", en: "Yocto BSP for an i.MX6ULL audio studio" },
    summary: {
      fr: "Un produit audio portable, connecté en Wi-Fi et Bluetooth, sur un module i.MX6ULL à mémoire NAND : du layer Yocto aux tests système.",
      en: "A portable audio product with Wi-Fi and Bluetooth, on an i.MX6ULL module with NAND flash: from the Yocto layer to system tests.",
    },
    context: {
      fr: "Un client concevait un studio audio portable sur un module Colibri i.MX6ULL. Il fallait un BSP complet et l'applicatif embarqué.",
      en: "A client was building a portable audio studio on a Colibri i.MX6ULL module. It needed a complete BSP and the embedded application.",
    },
    role: { fr: "Directeur de projet et ingénieur systèmes embarqués", en: "Project director and embedded systems engineer" },
    missions: [
      { text: { fr: "Layer, machine et distro Yocto dédiés au produit.", en: "Product-specific Yocto layer, machine and distro." } },
      { text: { fr: "Noyau mainline 5.4 et device tree de la carte.", en: "Mainline 5.4 kernel and board device tree." } },
      { text: { fr: "U-Boot sur NAND et installation en production avec Toradex Easy Installer.", en: "U-Boot on NAND and production flashing with Toradex Easy Installer." } },
      { text: { fr: "Wi-Fi et Bluetooth Marvell en SDIO (BlueZ 5).", en: "Marvell Wi-Fi and Bluetooth over SDIO (BlueZ 5)." } },
      { text: { fr: "Partie audio (codecs, PulseAudio) réalisée par un spécialiste de l'audio sous Linux.", en: "Audio part (codecs, PulseAudio) handled by a Linux audio specialist." } },
      { text: { fr: "Tests système sur cible avec Cukinia.", en: "On-target system tests with Cukinia." } },
      { text: { fr: "Gestion de projet et relation client.", en: "Project management and client relationship." } },
    ],
    challenge: {
      fr: "Faire cohabiter le Wi-Fi, le Bluetooth et la chaîne audio sur un SoC modeste, avec un stockage NAND qui impose ses contraintes au bootloader et au flash.",
      en: "Running Wi-Fi, Bluetooth and the audio pipeline side by side on a modest SoC, with NAND storage that constrains the bootloader and flashing.",
    },
    result: {
      fr: "Un BSP sur noyau mainline, installable en production et couvert par des tests système automatisés.",
      en: "A mainline-kernel BSP, flashable in production and covered by automated system tests.",
    },
    tags: ["i.MX6ULL", "Yocto", "Kernel 5.4", "U-Boot NAND", "BlueZ", "Cukinia"],
  },
  {
    slug: "robot-agricole",
    period: "2020",
    sector: { fr: "Robotique agricole · manutention autonome", en: "Agricultural robotics · autonomous handling" },
    title: { fr: "Premier BSP Yocto d'un robot agricole", en: "First Yocto BSP for a farm robot" },
    summary: {
      fr: "Un robot électrique qui déplace seul des matières en vrac dans la cour de ferme. Conception du BSP Linux de sa première version.",
      en: "An electric robot that moves bulk material across the farmyard on its own. Design of the Linux BSP for its first version.",
    },
    context: {
      fr: "Un constructeur de robots de manutention agricole autonomes démarrait son produit sur i.MX6. Il lui fallait un BSP Yocto, mis à jour à distance comme sur site, et un canal de communication commun aux applications.",
      en: "A maker of autonomous farm handling robots was starting its product on i.MX6. It needed a Yocto BSP, updatable remotely as well as on site, and a shared communication channel for its applications.",
    },
    role: { fr: "Directeur de projet et ingénieur systèmes embarqués", en: "Project director and embedded systems engineer" },
    missions: [
      { text: { fr: "Création du premier BSP Yocto Warrior du robot.", en: "Creation of the robot's first Yocto Warrior BSP." } },
      { text: { fr: "Mise à jour à distance et par clé USB, A/B avec SWUpdate et retour arrière.", en: "Remote and USB stick updates, A/B with SWUpdate and rollback." } },
      { text: { fr: "Bibliothèque de communication inter-processus en C sur D-Bus (GLib).", en: "Inter-process communication library in C over D-Bus (GLib)." } },
      { text: { fr: "Migration du BSP vers Yocto Dunfell, flash SD et eMMC, documentation.", en: "BSP migration to Yocto Dunfell, SD and eMMC flashing, documentation." } },
    ],
    challenge: {
      fr: "Poser le socle d'un robot encore en développement, avec une mise à jour qui ne laisse jamais la machine hors service à la ferme.",
      en: "Laying the foundation of a robot still under development, with updates that never leave the machine out of service on the farm.",
    },
    result: {
      fr: "Un BSP sur une version maintenue de Yocto, mis à jour à distance ou sur site avec retour arrière, et documenté pour l'équipe du client.",
      en: "A BSP on a maintained Yocto release, updated remotely or on site with rollback, and documented for the client's team.",
    },
    tags: ["i.MX6", "Yocto Warrior / Dunfell", "SWUpdate", "D-Bus", "C"],
    media: {
      video: "portfolio/robot-agricole.mp4?v=3",
      poster: "portfolio/robot-agricole-poster.webp",
      caption: {
        fr: "Vue schématique : le robot dans la cour de ferme, le BSP, la communication D-Bus et la mise à jour A/B avec retour arrière.",
        en: "Schematic view: the robot in the farmyard, the BSP, D-Bus communication and the A/B update with rollback.",
      },
    },
  },
  {
    slug: "bsp-robot-logistique",
    period: "2020",
    sector: { fr: "Robotique mobile · logistique", en: "Mobile robotics · logistics" },
    title: { fr: "BSP temps réel complet d'un robot logistique", en: "Complete real-time BSP for a logistics robot" },
    summary: {
      fr: "Un BSP complet sur i.MX6 : noyau PREEMPT_RT, layer constructeur remplacé par un layer sur mesure, switch Ethernet en DSA et mise à jour A/B signée.",
      en: "A complete BSP on i.MX6: PREEMPT_RT kernel, vendor layer replaced by a custom one, Ethernet switch in DSA and signed A/B updates.",
    },
    context: {
      fr: "Un client en robotique logistique construisait son calculateur sur un module i.MX6 et avait besoin d'un BSP fiable, maintenable et mis à jour à distance.",
      en: "A logistics robotics client was building its computer on an i.MX6 module and needed a reliable, maintainable, remotely updatable BSP.",
    },
    role: { fr: "Directeur de projet et ingénieur systèmes embarqués", en: "Project director and embedded systems engineer" },
    missions: [
      { text: { fr: "BSP Yocto Warrior complet sur module Phytec i.MX6.", en: "Complete Yocto Warrior BSP on a Phytec i.MX6 module." } },
      { text: { fr: "Migration du layer du constructeur vers un layer sur mesure, plus optimisé.", en: "Migration from the vendor layer to a leaner custom layer." } },
      { text: { fr: "Noyau temps réel PREEMPT_RT.", en: "PREEMPT_RT real-time kernel." } },
      { text: { fr: "Intégration et mise au point d'un switch Ethernet KSZ8795 dans le sous-système DSA du noyau.", en: "Integration and bring-up of a KSZ8795 Ethernet switch in the kernel DSA subsystem." } },
      { text: { fr: "Bootloader barebox, flash par TFTP.", en: "barebox bootloader, flashing over TFTP." } },
      { text: { fr: "Mise à jour A/B signée avec RAUC, documentation.", en: "Signed A/B updates with RAUC, documentation." } },
    ],
    challenge: {
      fr: "Quitter le layer du constructeur sans perdre le support de la carte, garder le temps réel, faire entrer un switch Ethernet embarqué dans le modèle DSA du noyau et livrer une mise à jour à distance dont l'intégrité est vérifiée.",
      en: "Leaving the vendor layer without losing board support, keeping real-time behavior, fitting an on-board Ethernet switch into the kernel DSA model and delivering remote updates whose integrity is verified.",
    },
    result: {
      fr: "Un BSP temps réel maîtrisé de bout en bout, sur une version maintenue, mis à jour à distance avec signature, et documenté pour l'équipe du client.",
      en: "A real-time BSP owned end to end, on a maintained release, remotely updated with signed bundles, and documented for the client's team.",
    },
    tags: ["i.MX6", "Yocto Warrior", "PREEMPT_RT", "DSA", "barebox", "RAUC"],
    media: {
      video: "portfolio/robot-logistique.mp4?v=2",
      poster: "portfolio/robot-logistique-poster.webp",
      caption: {
        fr: "Vue schématique : le robot dans l'entrepôt, le BSP temps réel, le switch Ethernet en DSA et la mise à jour A/B signée.",
        en: "Schematic view: the robot in the warehouse, the real-time BSP, the Ethernet switch in DSA and the signed A/B update.",
      },
    },
  },
  {
    slug: "microbiologie",
    period: "2018 · 2019",
    sector: { fr: "Microbiologie · R&D", en: "Microbiology · R&D" },
    title: { fr: "Linux et RTOS pour la détection bactérienne rapide", en: "Linux and an RTOS for rapid bacterial detection" },
    summary: {
      fr: "Un prototype de R&D pour la détection bactérienne rapide : Linux pour l'applicatif, RIOT-OS pour la mesure temps réel.",
      en: "An R&D prototype for rapid bacterial detection: Linux for the application, RIOT-OS for real-time measurement.",
    },
    context: {
      fr: "Une société de microbiologie développait un instrument de détection bactérienne rapide et avait besoin de toute la partie logicielle embarquée, de la mise à jour au pilotage de la mesure.",
      en: "A microbiology company was developing a rapid bacterial detection instrument and needed the whole embedded software, from updates to measurement control.",
    },
    role: { fr: "Directeur de projet et ingénieur systèmes embarqués", en: "Project director and embedded systems engineer" },
    missions: [
      { text: { fr: "BSP Yocto avec U-Boot.", en: "Yocto BSP with U-Boot." } },
      { text: { fr: "Mise à jour à distance et par clé USB avec SWUpdate.", en: "Remote and USB stick updates with SWUpdate." } },
      { text: { fr: "Pilotage temps réel de la mesure (ADC et photodiodes) sous RIOT-OS.", en: "Real-time measurement control (ADC and photodiodes) on RIOT-OS." } },
      { text: { fr: "Gestion de projet et relation client.", en: "Project management and client relationship." } },
    ],
    challenge: {
      fr: "Répartir le travail entre Linux et RIOT-OS : garder la mesure déterministe sans renoncer à Linux pour l'applicatif et la mise à jour.",
      en: "Splitting the work between Linux and RIOT-OS: keeping measurement deterministic without giving up Linux for the application and updates.",
    },
    result: {
      fr: "Une architecture logicielle complète pour le prototype : socle Linux, mesure temps réel isolée sous RIOT-OS, mise à jour à distance et par clé USB.",
      en: "A complete software architecture for the prototype: Linux platform, real-time measurement isolated on RIOT-OS, remote and USB updates.",
    },
    tags: ["Yocto", "U-Boot", "SWUpdate", "RIOT-OS", "Temps réel"],
  },
  {
    slug: "bsp-industriels",
    period: "2018 · 2019",
    sector: { fr: "Médical et comptage", en: "Medical and counting systems" },
    title: { fr: "Deux BSP industriels en série", en: "Two industrial BSPs in a row" },
    summary: {
      fr: "Un dispositif médical sur i.MX6 et un compteur de passages sur x86_64 : deux produits, la même exigence de mise à jour fiable.",
      en: "A medical device on i.MX6 and an x86_64 traffic counter: two products, the same need for reliable updates.",
    },
    context: {
      fr: "Des missions courtes et rapprochées pour des clients qui industrialisaient leur produit. Chacune demandait un BSP prêt pour la production, mis à jour sur le terrain.",
      en: "Short back-to-back assignments for clients industrializing their product. Each needed a production-ready BSP, updatable in the field.",
    },
    role: { fr: "Directeur de projet et ingénieur systèmes embarqués", en: "Project director and embedded systems engineer" },
    missions: [
      { text: { fr: "Médical, moniteur sans fil de signes vitaux sur i.MX6 : migration Yocto de Rocko vers Warrior, mise à jour à distance et par clé USB avec SWUpdate, impression sans pilote (CUPS).", en: "Medical, wireless vital signs monitor on i.MX6: Yocto migration from Rocko to Warrior, remote and USB updates with SWUpdate, driverless printing (CUPS)." } },
      { text: { fr: "Comptage de piétons et de cyclistes sur x86_64 : BSP Yocto, GRUB, partitionnement et mise à jour SWUpdate, connectivité 4G et Wi-Fi.", en: "Pedestrian and cyclist counting on x86_64: Yocto BSP, GRUB, partitioning and SWUpdate updates, 4G and Wi-Fi connectivity." } },
    ],
    challenge: {
      fr: "Livrer vite sur deux architectures et deux métiers différents, sans transiger sur le partitionnement et la mise à jour, qui sont difficiles à corriger une fois les produits déployés.",
      en: "Delivering fast across two architectures and two industries, without compromising on partitioning and updates, which are hard to fix once products are deployed.",
    },
    result: {
      fr: "Deux produits industrialisés en capitalisant d'une mission à l'autre, à commencer par un schéma de mise à jour éprouvé.",
      en: "Two products industrialized by building on each assignment, starting with a proven update scheme.",
    },
    tags: ["Yocto", "i.MX6", "x86_64", "GRUB", "SWUpdate", "4G"],
  },
  {
    slug: "defense-spatial",
    period: "2016 · 2017",
    sector: { fr: "Défense et spatial · radiocommunication", en: "Defense and space · radio communications" },
    title: { fr: "Socle Linux sur SoC FPGA pour la défense et le spatial", en: "Linux platform on FPGA SoCs for defense and space" },
    summary: {
      fr: "20 mois de leadership technique Linux embarqué sur Zynq-7000 et Cyclone V, au contact des équipes hardware et RF.",
      en: "20 months of embedded Linux technical leadership on Zynq-7000 and Cyclone V, alongside hardware and RF teams.",
    },
    context: {
      fr: "Pour un spécialiste des radiocommunications de défense et spatiales qui concevait des cartes sur mesure autour de SoC FPGA Xilinx et Altera.",
      en: "For a defense and space radio communications specialist designing custom boards around Xilinx and Altera FPGA SoCs.",
    },
    role: { fr: "Leader technique Linux embarqué", en: "Embedded Linux technical leader" },
    missions: [
      { text: { fr: "Mise en place du système Linux de base sur Altera Cyclone V et Xilinx Zynq-7000.", en: "Base Linux system bring-up on Altera Cyclone V and Xilinx Zynq-7000." } },
      { text: { fr: "Deux BSP complets : Ubuntu pour le développement, Buildroot pour la production.", en: "Two complete BSPs: Ubuntu for development, Buildroot for production." } },
      { text: { fr: "Noyau, U-Boot et intégration d'ADC et de DAC complexes.", en: "Kernel, U-Boot and integration of complex ADCs and DACs." } },
      { text: { fr: "Coopération étroite avec les équipes hardware et RF, formation des équipes.", en: "Close cooperation with hardware and RF teams, team training." } },
    ],
    challenge: {
      fr: "Démarrer des cartes neuves où matériel, FPGA et logiciel évoluaient en même temps, en servant à la fois les développeurs et la production.",
      en: "Bringing up new boards where hardware, FPGA and software were evolving at the same time, serving both developers and production.",
    },
    result: {
      fr: "Un socle Linux opérationnel sur les deux familles de SoC, avec un environnement de développement et une image de production distincts.",
      en: "A working Linux platform on both SoC families, with separate development and production images.",
    },
    tags: ["Zynq-7000", "Cyclone V", "Buildroot", "Ubuntu", "U-Boot", "Bring-up"],
  },
  {
    slug: "broadcast",
    period: "2014 · 2015",
    sector: { fr: "Broadcast · vidéo sur réseaux mobiles", en: "Broadcast · video over mobile networks" },
    title: { fr: "Distribution Ubuntu sur mesure pour serveurs de télévision", en: "Custom Ubuntu distribution for TV servers" },
    summary: {
      fr: "Une distribution Debian/Ubuntu générée par script, des builds uniformisés sous Docker et une installation automatisée.",
      en: "A script-generated Debian/Ubuntu distribution, Docker-based uniform builds and automated installation.",
    },
    context: {
      fr: "Pour une société spécialisée dans l'agrégation de liens 3G/4G, qui transmet de la vidéo haute qualité en direct via les réseaux mobiles. Ses serveurs de télévision numérique tournaient sous Linux.",
      en: "For a company specializing in 3G/4G link aggregation, streaming high-quality live video over mobile networks. Its digital TV servers ran Linux.",
    },
    role: { fr: "Intégrateur système, pendant 12 mois", en: "System integrator, for 12 months" },
    missions: [
      { text: { fr: "Définition et spécification des systèmes Linux des serveurs.", en: "Definition and specification of the servers' Linux systems." } },
      { text: { fr: "Création et maintenance d'une distribution Ubuntu Server personnalisée, avec scripts de génération d'images.", en: "Creation and maintenance of a custom Ubuntu Server distribution, with image generation scripts." } },
      { text: { fr: "Optimisation du rootfs avec make_deb_distro.", en: "Rootfs optimization with make_deb_distro." } },
      { text: { fr: "Environnement de build uniformisé sous Docker, services déployés en conteneurs.", en: "Uniform Docker-based build environment, services deployed in containers." } },
      { text: { fr: "Installation automatisée, gestion de configuration (gitolite), support aux équipes d'intégration.", en: "Automated installation, configuration management (gitolite), support to integration teams." } },
    ],
    challenge: {
      fr: "Rendre reproductible l'installation de serveurs jusque-là configurés à la main.",
      en: "Making the installation of servers that used to be configured by hand reproducible.",
    },
    result: {
      fr: "Une distribution maîtrisée, générée et installée automatiquement, et des builds identiques pour toute l'équipe.",
      en: "A controlled distribution, generated and installed automatically, and identical builds for the whole team.",
    },
    tags: ["Ubuntu", "Debian", "Docker", "Shell", "make_deb_distro"],
  },
  {
    slug: "ferroviaire",
    period: "2014 · 2015",
    sector: { fr: "Ferroviaire · automatisme de portes", en: "Rail · door automation" },
    title: { fr: "Linux temps réel pour des portes palières de métro", en: "Real-time Linux for metro platform doors" },
    summary: {
      fr: "Une étude de faisabilité PREEMPT_RT sur Coldfire, devenue une distribution Buildroot en service sur une ligne du métro parisien.",
      en: "A PREEMPT_RT feasibility study on Coldfire that became a Buildroot distribution in service on a Paris metro line.",
    },
    context: {
      fr: "Un équipementier ferroviaire voulait savoir si Linux temps réel pouvait piloter ses automatismes de portes de train et de métro, ainsi que leur vidéosurveillance.",
      en: "A rail equipment maker wanted to know whether real-time Linux could drive its train and metro door automation, along with its video surveillance.",
    },
    role: { fr: "Ingénieur systèmes embarqués et gestion de projet, dans une équipe de 2 puis 4 personnes", en: "Embedded systems engineer and project management, in a team of 2, then 4" },
    missions: [
      { text: { fr: "Proof of concept d'un noyau PREEMPT_RT sur Coldfire MCF5441X.", en: "Proof of concept of a PREEMPT_RT kernel on Coldfire MCF5441X." } },
      { text: { fr: "Gestion de projet et relation client.", en: "Project management and client relationship." } },
      { text: { fr: "Toolchain, intégration Buildroot et U-Boot.", en: "Toolchain, Buildroot and U-Boot integration." } },
      { text: { fr: "Drivers U-Boot (I2C, EEPROM) et noyau (I2C, PWM).", en: "U-Boot drivers (I2C, EEPROM) and kernel drivers (I2C, PWM)." } },
      {
        text: { fr: "Correctif de la glibc pour garder le support des Coldfire sans unité flottante.", en: "glibc patch to keep support for Coldfire parts without a floating point unit." },
        link: { label: "sourceware.org", url: "https://sourceware.org/ml/libc-help/2014-03/msg00022.html" },
      },
    ],
    challenge: {
      fr: "Une architecture peu courante, m68k sans FPU, que la chaîne de compilation standard ne couvrait plus entièrement.",
      en: "An uncommon architecture, m68k without an FPU, that the standard toolchain no longer fully covered.",
    },
    result: {
      fr: "Le succès de l'étude a lancé le projet de distribution. Elle équipe les portes palières d'une ligne du métro parisien.",
      en: "The study's success launched the distribution project. It runs the platform doors of a Paris metro line.",
    },
    tags: ["Buildroot", "PREEMPT_RT", "U-Boot", "Coldfire", "Drivers noyau", "glibc"],
  },
];

export const caseSlugs = cases.map((c) => c.slug);
