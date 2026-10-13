// ═══════════════════════════════════════════════════════════════
// content.js — Single source of truth for all portfolio text.
// Strictly derived from verified facts. Zero unsupported claims.
// ═══════════════════════════════════════════════════════════════

// ── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Case Study", href: "#case-study" },
  { label: "Roadmap", href: "#learning" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ── Personal Info ───────────────────────────────────────────
export const PERSONAL = {
  name: "Kunal Prasad",
  location: "Jaipur, Rajasthan, India",
  tagline: "Frontend Developer (React) who also analyses data",
  statusBadge: "Open to entry-level roles (Jaipur or remote)",
  bio: "B.Tech IT graduate from Arya College of Engineering, Jaipur. Focused on building responsive React applications and conducting structured data analysis in spreadsheets and SQL.",
  email: "kunalprasad142@gmail.com",
  linkedin: "https://www.linkedin.com/in/kunalprasad-dev/",
  github: "https://github.com/coolkunal9",
  portfolioRepo: "https://github.com/coolkunal9/kunal-portfolio-vite",
  resumeUrl: "/resume.pdf",
  proofChips: [
    "10 stories, full-stack MERN",
    "17 integration tests",
    "9,551-row Zomato analysis",
  ],
};

// ── About ───────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "B.Tech Information Technology graduate from Arya College of Engineering, Jaipur, with a frontend focus in React and Tailwind CSS alongside spreadsheet and SQL data analysis.",
    "Built State Stories, a full-stack MERN application with 17 integration tests, and the Zomato international expansion screener analyzing 9,551 records.",
    "Looking for entry-level Frontend Developer or Data Analyst roles in Jaipur or remote.",
  ],
};

// ── Skills ──────────────────────────────────────────────────
export const SKILLS = {
  groups: [
    {
      title: "Frontend",
      items: [
        "React.js",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Git",
      ],
    },
    {
      title: "Data Analytics",
      items: [
        "Excel",
        "Google Sheets",
        "Data cleaning",
        "VLOOKUP",
        "Pivot tables",
        "Dashboards",
        "Basic SQL",
      ],
    },
    {
      title: "Backend & Database",
      items: [
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "Currently learning",
      isLearning: true,
      items: [
        "SQL on real datasets",
        "Statistics fundamentals",
      ],
    },
  ],
};

// ── Projects ────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "state-stories",
    title: "State Stories",
    category: "development",
    featured: true,
    subtitle: "Full-Stack MERN Editorial Platform",
    problem:
      "Curating culture and heritage across 10 Indian states with performant search, optimistic user interactions, and tested backend security.",
    description:
      "Full-stack MERN editorial platform covering 10 Indian states. Built with React 18 frontend and Express 5 REST API layered into routes, services, and models, backed by MongoDB Atlas.",
    role: "Full-stack development, automated integration testing, and security self-audit & hardening.",
    stack: [
      "React 18",
      "React Router v7",
      "Tailwind CSS",
      "Framer Motion",
      "Express 5",
      "MongoDB Atlas",
      "Mongoose",
      "Joi",
      "Jest / Supertest",
    ],
    features: [
      "10 state stories curated across culture and heritage.",
      "Frontend: React 18, React Router v7, Tailwind, Framer Motion; debounced search (300ms) with AbortController cancellation; optimistic comment updates; protected profile page.",
      "Backend: Express 5 API with routes, services, and models layering; Joi validation; centralized error handler.",
      "Auth & Search: JWT (7-day expiry) + bcrypt (12 rounds); MongoDB $text search across title, state, and content; compound index on comments (article, createdAt).",
      "Testing: 17 integration tests across auth, articles, and comments using Jest, Supertest, and MongoMemoryServer.",
      "Security self-audit and hardening: fail-fast JWT secret guard in production, CORS allowlist without wildcards, auth rate limiting (10 req / 15 min), regex-escaping of state filter, capped pagination (max 50), Helmet headers, idempotent seed script with production guard.",
      "Deployment: Vercel (frontend and serverless Express backend) and MongoDB Atlas.",
    ],
    tradeoffs:
      "Tradeoffs: JWT in localStorage has no refresh/revocation; in-memory rate limiting is per serverless instance.",
    github: "https://github.com/coolkunal9/state-stories",
    live: "https://state-stories.vercel.app/",
  },
  {
    id: "zomato-screener",
    title: "Zomato Restaurant Expansion Screener",
    category: "data",
    featured: true,
    subtitle: "International Market Expansion Screening",
    problem:
      "Where should a new restaurant brand look first outside India?",
    description:
      "Screener analyzing 9,551 restaurants across 15 countries from a historical dataset snapshot. Evaluated 14 international markets outside India using Google Sheets to shortlist initial diligence targets.",
    role: "Sole data analyst — data cleaning, formula modeling, pivot tables, and market scoring.",
    stack: [
      "Google Sheets",
      "Excel",
      "Pivot Tables",
      "VLOOKUP",
      "Data Cleaning",
      "Statistical Formulas",
    ],
    features: [
      "Dataset Scope: 9,551 restaurants across 15 countries (8,652 India listings, 90.6%; 14 countries outside India; 7,403 rated; 2,148 unrated treated as missing).",
      "Data Cleaning: Rating_Clean field created; zero costs and zero coordinates treated as missing; country names standardized via lookup; costs converted to INR.",
      "Market Findings: Indonesia (21 listings, ~772 avg votes) and Turkey (34 listings, ~432 avg votes) led engagement outside India.",
      "City Screen: Jakarta (4.36 rating / 742.69 votes), Istanbul (4.29 / 860.21), Ankara (4.31 / 131.35), Doha (4.06 / 163.80), Colombo (3.87 / 146.45).",
      "Recommendation: Staged research plan prioritizing initial diligence in Indonesia and Turkey, comparing against Qatar and Sri Lanka.",
    ],
    tradeoffs:
      "Limitations: Historical snapshot without revenue, footfall, or rent data. Small samples (14-20 listings per city outside India); votes reflect engagement rather than market demand.",
    github: null,
    live: "https://docs.google.com/spreadsheets/d/e/2PACX-1vShjJaXHpAKQRjvNrDSSHYnelcwcL-ZKPluwVdYW0JfbqYQH-B-7fVR6jaYQyk-4VJPid_xZ3k2KAiV/pubhtml",
  },
];

// ── Case Study: Zomato Restaurant Expansion Screener ────────
export const CASE_STUDY = {
  title: "Zomato Restaurant Expansion Screener",
  subtitle: "Market entry analysis using Google Sheets · 9,551 restaurants across 15 countries",
  businessQuestion: "Where should a new restaurant brand look first outside India?",
  dataOverview: {
    records: "9,551 restaurants across 15 countries",
    coverage: "7,403 rated listings; 2,148 unrated listings (rating 1.0 treated as not rated)",
    source: "Historical dataset snapshot; 90.6% of records are India listings (no revenue, footfall, rent or cost data).",
  },
  cleaningSteps: [
    "Created Rating_Clean field, treating rating 1.0 and unrated entries as missing",
    "Treated zero costs and zero coordinates as missing data",
    "Standardised country names via lookup tables",
    "Converted international costs to INR using conversion rates",
    "Created helper fields for opening year, price label, and primary cuisine while preserving raw data on a separate sheet",
  ],
  method:
    "Google Sheets analysis utilizing TRIM, IF, VLOOKUP, MID/FIND/YEAR, pivot tables, COUNTIFS, AVERAGEIFS, CORREL, FILTER, charts, slicers, and conditional formatting.",
  findingsCaveat:
    "Note: Sample sizes outside India are small. Findings reflect listings and vote engagement in this dataset snapshot, not total consumer demand.",
  keyFindings: [
    {
      metric: "Engagement Leaders",
      detail:
        "Indonesia: 21 listings, ~772 avg votes. Turkey: 34 listings, ~432 avg votes (highest engagement outside India).",
    },
    {
      metric: "High-Score Density",
      detail:
        "Share of rated restaurants scoring 4.0+: Turkey 88.2%, Indonesia 81.0%, Sri Lanka 65.0%, Qatar 55.0%.",
    },
    {
      metric: "City Screen (14–20 listings each)",
      detail:
        "Jakarta 4.36 rating / 742.69 votes; Istanbul 4.29 / 860.21; Ankara 4.31 / 131.35; Doha 4.06 / 163.80; Colombo 3.87 / 146.45.",
    },
    {
      metric: "Cuisine Indications (Small Samples)",
      detail:
        "Indonesian 4.51 (n=7), Kebab 4.38 (n=10), Turkish Pizza 4.33 (n=8).",
    },
    {
      metric: "Price vs Rating Correlation",
      detail:
        "Price tier does not consistently predict rating in the shortlist (pooled correlation ~0.02).",
    },
  ],
  recommendation:
    "Staged research plan: Start diligence in Indonesia and Turkey; keep Qatar and Sri Lanka as comparison markets; test Indonesian, kebab/Turkish, and dessert concepts in small pilots; price around local medians; validate rent, footfall, and delivery economics locally.",
  limitations: [
    "Small samples (14–20 listings per city outside India).",
    "Votes reflect app engagement rather than total market demand.",
    "Dataset contains no revenue, footfall, or rent data.",
    "Conversion of costs to INR not independently verified.",
  ],
  tools: [
    "Google Sheets",
    "Pivot Tables",
    "VLOOKUP",
    "COUNTIFS / AVERAGEIFS",
    "CORREL",
    "FILTER",
    "Conditional Formatting",
  ],
  screenshotPlaceholders: [], // No images exist; kept empty so no placeholder renders
  sheetLink:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vShjJaXHpAKQRjvNrDSSHYnelcwcL-ZKPluwVdYW0JfbqYQH-B-7fVR6jaYQyk-4VJPid_xZ3k2KAiV/pubhtml",
  whatNext:
    "Redo the analysis in SQL for reproducibility and to practise joins and aggregation.",
};

// ── Learning Roadmap ────────────────────────────────────────
export const LEARNING_ROADMAP = [
  {
    label: "SQL on real datasets",
    status: "in-progress",
    description:
      "Writing SELECT, GROUP BY, JOINs, and subqueries on practice datasets.",
  },
  {
    label: "Statistics fundamentals",
    status: "planned",
    description:
      "Distributions, hypothesis testing, correlation, and regression basics.",
  },
];

// ── Experience ──────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Campus Mantri",
    org: "GeeksforGeeks",
    period: "Jan – Jun 2026",
    credentialNote: "Campus Mantri Appointment",
    bullets: [
      "Appointed to help peers build fundamentals; encouraged participation in DSA and coding practice.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "CodeAlpha",
    period: "Oct – Nov 2025 (1 month)",
    credentialNote: "Letter of Recommendation",
    credentialUrl: "/files/Code_Alpha.pdf",
    bullets: [
      "Completed a one-month virtual Full Stack Development internship; received a letter of recommendation.",
    ],
  },
  {
    role: "AI & Cloud Intern",
    org: "Edunet Foundation × AICTE × IBM SkillsBuild",
    period: "Jul – Aug 2025 (4 weeks)",
    credentialNote: "IBM SkillsBuild Badges",
    credentialUrl: "/files/edunet_foundation.pdf",
    bullets: [
      "Completed a 4-week program in Emerging Technologies.",
      "Earned two IBM SkillsBuild badges (Getting Started with AI; Journey to Cloud).",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    org: "Upflairs Pvt. Ltd.",
    period: "Jul – Aug 2024 (45 days)",
    credentialNote: "Certificate of Training (45 days)",
    credentialUrl: "/files/Upflairs.pdf",
    bullets: [
      "Completed a 45-day offline training program.",
      "Practised HTML, CSS, JavaScript, Git/GitHub; built responsive pages and small projects.",
    ],
  },
];

// ── Education & Training ────────────────────────────────────
export const EDUCATION = {
  degree: "B.Tech Information Technology",
  institution: "Arya College of Engineering",
  location: "Jaipur, Rajasthan, India",
  duration: "Sep 2022 – Jun 2026",
  status: "Graduate",
  training: "Newton School Data Analytics: in progress (Excel and Google Sheets completed, SQL in progress)",
};

// ── Certifications ──────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    name: "5-Day AI Agents Intensive",
    issuer: "Google",
  },
  {
    name: "Expert POTD Solver (GeekStreak)",
    issuer: "NPCI × GeeksforGeeks",
  },
  {
    name: "Getting Started with AI",
    issuer: "IBM SkillsBuild",
    fileUrl: "/files/IBMDesign20251101-32-axuoi5.pdf",
  },
  {
    name: "Journey to Cloud",
    issuer: "IBM SkillsBuild",
    fileUrl: "/files/IBMDesign20251101-32-m5e5zp.pdf",
  },
  {
    name: "MongoDB Overview: Core Concepts and Architecture",
    issuer: "MongoDB",
  },
];
