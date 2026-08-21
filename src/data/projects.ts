export type ProjectStatus =
  | "capstone"
  | "solo"
  | "coursework"
  | "in-progress"
  | "fork"
  | "early"
  | "team"
  | "personal";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  status: ProjectStatus;
  statusLabel: string;
  /** Set when the GitHub repo is owned by a teammate, not Darrian. */
  externalOwner?: string;
  /** Set when the repo is private and shouldn't be linked publicly. */
  private?: boolean;
};

export const projects: Project[] = [
  {
    slug: "realestate",
    title: "RealEstate",
    description:
      "A microservices real-estate listing platform: appointment booking, catalog, identity/auth behind a Eureka service registry, notifications, an Ocelot API gateway, offers, and a viewing-cart service — all orchestrated with docker-compose across SQL Server, MongoDB, and Redis.",
    tech: ["C#", "ASP.NET", "Java", "Spring Boot", "Python", "Docker", "SQL Server", "MongoDB", "Redis"],
    repoUrl: "https://github.com/Xenny76/RealEstate",
    status: "capstone",
    statusLabel: "capstone",
  },
  {
    slug: "retro-video-game-exchange",
    title: "Retro Video Game Exchange",
    description:
      "A Kubernetes-orchestrated microservices platform for trading retro games from a distributed systems course — load-tested with k6, autoscaled via HPA, with a full observability stack (Prometheus, Grafana, Loki).",
    tech: ["Kubernetes", "Docker", "Kafka", "Nginx", "Prometheus", "Grafana", "k6", "Python"],
    repoUrl: "https://github.com/Xenny76/retro_video_game_exchange",
    status: "capstone",
    statusLabel: "capstone",
  },
  {
    slug: "ignibench-engine-simulator",
    title: "IgniBench Engine Simulator",
    description:
      "Generates a 3D engine from parameterized variables and runs a fluid + combustion simulation to predict torque, horsepower, efficiency, and thermal behavior.",
    tech: ["C#", ".NET"],
    repoUrl: "https://github.com/Xenny76/IgniBench-Engine-Simulator",
    status: "solo",
    statusLabel: "solo project",
  },
  {
    slug: "enginelab",
    title: "EngineLab",
    description:
      "Senior capstone: a .NET MAUI Blazor Hybrid app that models engine setups from parameterized specifications and renders simulated performance curves via ScottPlot for interactive comparison.",
    tech: ["C#", ".NET MAUI", "Blazor Hybrid", "ScottPlot"],
    repoUrl: "https://github.com/Xenny76/EngineLab",
    status: "capstone",
    statusLabel: "capstone",
  },
  {
    slug: "assembler",
    title: "ARM Assembler & Toy Kernel",
    description:
      "Parses ARM assembly into machine code and boots it as a kernel image on a Raspberry Pi. Covers data processing, branch, single/block data transfer, and mov-immediate instructions.",
    tech: ["C#", "ARM Assembly"],
    repoUrl: "https://github.com/Xenny76/Assembler",
    status: "in-progress",
    statusLabel: "in progress",
  },
  {
    slug: "db-persistence-exploration",
    title: "Simple Persistence, Four Backends",
    description:
      "The same employee/people persistence layer implemented from scratch, then re-implemented against MongoDB, Neo4j (with a bulk CSV import), and Redis to compare how each backend's data model shapes the same problem.",
    tech: ["Java", "MongoDB", "Neo4j", "Redis", "Maven"],
    repoUrl: "https://github.com/Xenny76/db-persistence-exploration",
    status: "coursework",
    statusLabel: "coursework",
  },
  {
    slug: "rsa-implementation",
    title: "RSA From Scratch",
    description:
      "RSA key generation using the Rabin-Miller primality test, plus a working encryption/decryption cipher — used to exchange real encrypted messages with classmates.",
    tech: ["Python"],
    repoUrl: "https://github.com/Xenny76/rsa-implementation",
    status: "coursework",
    statusLabel: "coursework",
  },
  {
    slug: "algorithms-csc252",
    title: "Classic Algorithms",
    description:
      "Three algorithm implementations, each with its own test project: a hand-rolled generic LinkedList, Dijkstra's shortest-path algorithm, and a minimum spanning tree algorithm.",
    tech: ["C#", "MSTest", "NUnit"],
    repoUrl: "https://github.com/Xenny76/algorithms-csc252",
    status: "coursework",
    statusLabel: "coursework",
  },
  {
    slug: "carblazor",
    title: "CarBlazor",
    description:
      "A three-project solution — CarAPI backend, CarBlazor Server UI, and a shared CarLib model library — demonstrating a layered ASP.NET/Blazor architecture.",
    tech: ["C#", "ASP.NET", "Blazor"],
    repoUrl: "https://github.com/Xenny76/CarBlazor",
    status: "coursework",
    statusLabel: "coursework",
  },
  {
    slug: "pro250chess",
    title: "PRO250 Chess",
    description:
      "Took an existing chess engine as a base and added Chess960 (Fischer Random) variant support on top of it.",
    tech: ["C#", "WinForms"],
    repoUrl: "https://github.com/Xenny76/PRO250Chess",
    status: "coursework",
    statusLabel: "coursework",
  },
  {
    slug: "conways-game-of-life",
    title: "Conway's Game of Life",
    description:
      "A refactor of Conway's Game of Life applying Factory, State, and other design patterns as a code kata exercise.",
    tech: ["C#", ".NET MAUI"],
    repoUrl: "https://github.com/Xenny76/CSC_360_Kata",
    status: "coursework",
    statusLabel: "coursework",
  },
  {
    slug: "csc360-final",
    title: "Entity Factory",
    description:
      "A final project building a simple entity-creation program to demonstrate the Factory, State, and Flyweight design patterns together.",
    tech: ["C#"],
    repoUrl: "https://github.com/Xenny76/CSC360_Final",
    status: "coursework",
    statusLabel: "coursework",
  },
  {
    slug: "early-java-games",
    title: "Pong, Shooter & Simon",
    description:
      "Three early Java Swing games. Shooter is the standout — a small custom engine (collision, RNG, keyboard input, window abstraction) driving a vertical space shooter with enemies and explosions.",
    tech: ["Java", "Swing"],
    repoUrl: "https://github.com/Xenny76/early-java-games",
    status: "early",
    statusLabel: "early coursework",
  },
  {
    slug: "myhome-pro250",
    title: "MyHome",
    description:
      "Forked an existing home finance manager and updated it for a PRO250 class exercise on working inside an existing codebase.",
    tech: ["C#", "WPF"],
    repoUrl: "https://github.com/Xenny76/MyHome---PRO250",
    status: "fork",
    statusLabel: "fork",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description:
      "My first personal portfolio site — a Command Prompt–themed terminal hero built with Next.js. Superseded by this site.",
    tech: ["Next.js", "JavaScript"],
    repoUrl: "https://github.com/Xenny76/MultimediaRhetoricPortfolio",
    status: "personal",
    statusLabel: "superseded",
  },

  // Team projects — GitHub repo owned by a teammate, credited accordingly.
  {
    slug: "website-game-launcher",
    title: "Website Game Launcher",
    description:
      "An interactive web gaming portal with custom idle games and a points-based economy, built as a team sprint project.",
    tech: ["Node.js", "Express", "JavaScript"],
    repoUrl: "https://github.com/tristancable/WebsiteGameLauncher",
    status: "team",
    statusLabel: "team project",
    externalOwner: "tristancable",
  },
  {
    slug: "blep-blip-blop",
    title: "Blep Blip Blop",
    description:
      "A goal tracker and planner with a calendar view for upcoming goals and configurable visibility levels, built as a team sprint project.",
    tech: ["Vue.js", "Node.js"],
    repoUrl: "https://github.com/tristancable/BlepBlipBlop",
    status: "team",
    statusLabel: "team project",
    externalOwner: "tristancable",
  },
  {
    slug: "notes-plus-plus",
    title: "Notes++",
    description:
      "A cross-platform, user-friendly note-taking app with folders, favoriting, and preset text formatting, built as a team project.",
    tech: ["C#", ".NET MAUI", "Blazor Hybrid"],
    repoUrl: "https://github.com/tristancable/NotesPlusPlus",
    status: "team",
    statusLabel: "team project",
    externalOwner: "tristancable",
  },
  {
    slug: "biscuit",
    title: "Biscuit — Digit Recognizer",
    description:
      "An AI-powered desktop app that identifies handwritten numbers in real time, built as a team project.",
    tech: ["C#", ".NET MAUI", "Machine Learning"],
    repoUrl: "https://github.com/tristancable/Biscuit",
    status: "team",
    statusLabel: "team project",
    externalOwner: "tristancable",
  },
  {
    slug: "uno-project",
    title: "UNO",
    description:
      "A full UNO card game implementation with house rules and action cards, built as a team project.",
    tech: ["Java"],
    repoUrl: "https://github.com/MasterDash5/UnoProject",
    status: "team",
    statusLabel: "team project",
    externalOwner: "MasterDash5",
  },
  {
    slug: "puzzletd",
    title: "PuzzleTD",
    description:
      "A tower-defense game where players strategically place shape-based towers to stop waves of enemies, built as a team project in Unity.",
    tech: ["Unity", "C#"],
    repoUrl: "https://github.com/Ezeklaw404/PuzzleTD",
    status: "team",
    statusLabel: "team project",
    externalOwner: "Ezeklaw404",
  },
  {
    slug: "automarket-watch",
    title: "AutoMarket Watch",
    description:
      "A full-stack automotive market tracking platform for enthusiasts to track vehicle valuations, curate watchlists, and connect with collectors, built as a team project.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    repoUrl: "https://github.com/tristancable/AutoMarketWatch",
    status: "team",
    statusLabel: "team project",
    externalOwner: "tristancable",
  },
  {
    slug: "choose-your-own-adventure",
    title: "Choose Your Own Adventure",
    description:
      "An interactive narrative web app built for a collaborative and interpersonal communications course, built as a team project.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    repoUrl:
      "https://github.com/Neumont-VictorKeeler/Collaborative-and-Interpersonal-communications-Group-2",
    status: "team",
    statusLabel: "team project",
    externalOwner: "Neumont-VictorKeeler",
  },
];
