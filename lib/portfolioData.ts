export type CardData = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  metrics?: string[];
  link?: string;
};

export type PortfolioBeat = {
  id: string;
  title: string;
  subtitle?: string;
  cards: CardData[];
};

export const portfolioData: Record<string, PortfolioBeat> = {
  hero: {
    id: "hero",
    title: "Calvin Fisher",
    subtitle: "Junior | B.E. Computer Engineering | Hardware & Software",
    cards: []
  },

  // ── Scroll animation beats ──────────────────────────────
  gpu: {
    id: "gpu",
    title: "AI & Intelligence",
    subtitle: "Driven By Statistical Modeling",
    cards: [
      {
        id: "dive-lab",
        title: "Texas A&M DIVE Lab",
        subtitle: "Undergraduate Research Assistant · Fall 2024 – Spring 2025",
        description: "Conducted deep learning research under Dr. Shuiwang Ji, tackling real-world challenges in biology and medicine. Collaborated with graduate students on model development and experimental design.",
        tags: ["Deep Learning", "PyTorch", "Research"],
      },
      {
        id: "stat-211",
        title: "The Math Behind the Code",
        subtitle: "STAT 211: Principles of Statistics",
        description: "An intensive overview of probability, inference, and statistical data structuring. This mathematical bedrock enables rigorous processing and verification algorithms across complex engineering applications.",
        tags: ["Statistics", "Data Structures", "Probability"],
      }
    ]
  },
  cpu: {
    id: "cpu",
    title: "The Logic Core",
    subtitle: "Hardware & Electrical Circuitry",
    cards: [
      {
        id: "academics-sys",
        title: "Computer Engineering Base",
        description: "Building the physical bridge between raw electricity and software execution. Extensive background in constructing sequential logic gates, utilizing Verilog, and calculating complex electrical circuitry limits.",
        tags: ["Verilog", "Digital Logic", "Circuits", "Calculus"],
        metrics: [
          "ECEN 214: Electrical Circuit Theory (Current)",
          "ECEN 248: Digital System Design (A)",
          "PHYS 207: Electromagnetism (B)",
          "MATH 151, 152, 251: Calculus Sequence (A's)"
        ]
      }
    ]
  },
  ram: {
    id: "ram",
    title: "Memory & Algorithms",
    subtitle: "Lightning Fast Processing",
    cards: [
      {
        id: "algos",
        title: "Stack Allocation & Speed",
        subtitle: "3.931 Overall GPA",
        description: "Hardware capabilities demand highly optimized software orchestration. Focused extensively on writing robust C++ to solve algorithmic bottlenecks, master memory management, and execute flawless logic routines.",
        tags: ["C++", "Memory Management", "Pointers"],
        metrics: [
          "CSCE 120: Program Design & Concepts (A)",
          "CSCE 221: Data Structures and Algorithms (Current)",
          "CSCE 222: Discrete Structures in Computing (A)",
          "ENGR 102: Engineering Lab I - Computation (A)"
        ]
      }
    ]
  },
  storage: {
    id: "storage",
    title: "Software at Scale",
    subtitle: "Production Systems",
    cards: [
      {
        id: "cloud-arch",
        title: "Cloud & Backend Architecture",
        description: "Designing and deploying production-grade cloud systems across internships. Leveraging AWS (EC2, S3, DynamoDB, SQS) for real-time audio/video pipelines and AI-driven automation backends.",
        tags: ["AWS", "Flask", "Real-time AI"],
      }
    ]
  },
  code: {
    id: "code",
    title: "Synthesis & Application",
    subtitle: "Bringing it all together",
    cards: [
      {
        id: "engineering-labs",
        title: "Broader Engineering Foundation",
        description: "A solid engineering foundation requires hands-on experimental practice across multiple physical domains, ensuring a well-rounded approach to technical problem-solving.",
        tags: ["Mechanics", "Chemistry", "Physics Labs"],
        metrics: [
          "ENGR 216: Experimental Physics & Engr Lab II - Mechanics (A)",
          "ENGR 217: Experimental Physics & Engr Lab III - Elec & Magn (A)",
          "CHEM 107/117: Gen Chemistry for Engineers & Lab (A)"
        ]
      }
    ]
  },

  // ── Standalone sections ─────────────────────────────────
  exploded: {
    id: "exploded",
    title: "Let's Build the Future.",
    subtitle: "Available for Opportunities",
    cards: []
  }
};

// Separate typed arrays for standalone sections
export const experienceCards: CardData[] = [
  {
    id: "jobberwalkee",
    title: "JOBberWALKee",
    subtitle: "Software Engineer Intern · Summer 2025",
    description: "Architected a highly scalable Flask backend for an AI interviewer platform. Leveraged the AWS ecosystem (EC2, S3, DynamoDB, SQS) to seamlessly and securely process real-time audio and video across the web.",
    tags: ["Flask", "AWS", "Real-time AI"],
  },
  {
    id: "xr-q",
    title: "XrQ Corp",
    subtitle: "Software Engineer Intern · Summer 2024 – Present",
    description: "Designed an AI-driven automation pipeline that reduced operational overhead by ~$800K. Integrated AWS and Selenium, fine-tuning predictive models to enable hyper-accurate project bidding.",
    tags: ["AWS", "AI Models", "Selenium", "$800K Savings"],
  },
];

export const projectCards: CardData[] = [
  {
    id: "personal-website",
    title: "Personal Portfolio — This Site",
    subtitle: "You're looking at it",
    description: "Designed and built this portfolio from scratch — 192-frame scroll-driven PC build animation, animated hero with blob gradients, glassmorphism nav with smooth-scroll anchors, and a full responsive layout. The site you're on right now.",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    link: "https://github.com/CalvinTFisher",
  },
  {
    id: "chess",
    title: "GPT-4 Chess Engine",
    subtitle: "AI meets deterministic logic",
    description: "A comprehensive project bridging abstract AI with deterministic logic bounds. Built a continuously running Python engine that formally validates logic constraints and game-states against OpenAI's models.",
    tags: ["Python", "LLMs", "Algorithms"],
    link: "https://github.com/CalvinTFisher",
  },
];
