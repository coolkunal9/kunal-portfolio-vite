// ═══════════════════════════════════════════════════════════════
// content.js — Single source of truth for all portfolio text.
// Strictly derived from verified facts. Zero unsupported claims.
// ═══════════════════════════════════════════════════════════════

// ── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ── Personal Info ───────────────────────────────────────────
export const PERSONAL = {
  name: "Kunal Prasad",
  location: "Jaipur, Rajasthan, India",
  tagline: "Frontend development and data analytics",
  role: "Frontend Developer",
  statusBadge: "Open to Relocation Across India",
  bio: "2026 B.Tech Information Technology graduate from Arya College of Engineering, Jaipur, interested in entry-level frontend development and data analytics roles. I build responsive React interfaces and use spreadsheets and basic SQL to explore structured data.",
  email: "kunalprasad142@gmail.com",
  linkedin: "https://www.linkedin.com/in/kunalprasad-dev/",
  github: "https://github.com/coolkunal9",
  portfolioRepo: "https://github.com/coolkunal9/kunal-portfolio-vite",
  resumeUrl: "/resume.pdf",
  proofChips: [
    "10 stories, full-stack MERN",
    "18 API integration tests",
    "9,551 raw / 9,542 cleaned records",
  ],
};

export const CONTACT_COPY = {
  eyebrow: "Hiring",
  heading: "Hiring for Frontend or Data Analytics?",
  description: "I am interested in entry-level frontend development and data analytics roles. Open to Relocation Across India. Email me directly or use the form.",
};

// ── About ───────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "I am a 2026 B.Tech IT graduate interested in frontend development and data analytics. I build with React and Tailwind, and use spreadsheets and basic SQL to clean and explain data.",
    "Recent work includes State Stories, a full-stack editorial app with an 18-test API suite, and a Google Sheets restaurant market screener.",
  ],
};

// ── Skills ──────────────────────────────────────────────────
export const SKILLS = {
  groups: [
    {
      title: "Frontend",
      sections: [
        {
          label: "Interface",
          items: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git"],
        },
        {
          label: "State Stories · application stack",
          items: ["Express.js", "MongoDB"],
        },
      ],
    },
    {
      title: "Data",
      sections: [
        {
          label: "Spreadsheets & analysis",
          items: ["Excel", "Google Sheets", "Data cleaning", "VLOOKUP", "Pivot tables", "Dashboards"],
        },
        {
          label: "Querying",
          items: ["Basic SQL"],
        },
      ],
    },
  ],
};

export const TECH_STACK = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Excel",
  "Google Sheets",
  "Basic SQL",
  "Express.js",
  "MongoDB",
];

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
      "Full-stack MERN editorial platform covering 10 Indian states. Built with React 19 frontend and Express 5 REST API layered into routes, services, and models, backed by MongoDB Atlas.",
    role: "Full-stack development, automated integration testing, and security self-audit & hardening.",
    stack: [
      "React 19",
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
      "Frontend: React 19, React Router v7, Tailwind, Framer Motion; debounced search (300ms) with AbortController cancellation; optimistic comment updates; protected profile page.",
      "Backend: Express 5 API with routes, services, and models layering; Joi validation; centralized error handler.",
      "Auth & Search: JWT (7-day expiry) + bcrypt (12 rounds); MongoDB $text search across title, state, and content; compound index on comments (article, createdAt).",
      "Testing: 18 API integration tests across auth, articles, and comments using Jest, Supertest, and MongoMemoryServer.",
      "Security self-audit and hardening: fail-fast JWT secret guard in production, CORS checks with Vercel preview suffix matching, auth rate limiting (10 req / 15 min), regex-escaping of state filter, capped pagination (max 50), Helmet headers, idempotent seed script with production guard.",
      "Deployment: Vercel (frontend and serverless Express backend) and MongoDB Atlas.",
    ],
    tradeoffs:
      "Tradeoffs: JWT in localStorage has no refresh/revocation; in-memory rate limiting is per serverless instance. AI tools and tutorials were used to debug and review parts of the backend; the architecture, tests, and security hardening were implemented and owned by me.",
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
      "Screener comparing 9,551 raw restaurant records across 15 countries. The cleaned analysis dataset contains 9,542 records; the workbook screens 14 international markets outside India for further diligence.",
    role: "Data cleaning, spreadsheet analysis, pivot tables, and descriptive market screening.",
    stack: [
      "Google Sheets",
      "Excel",
      "Pivot Tables",
      "VLOOKUP",
      "Data Cleaning",
      "Statistical Formulas",
    ],
    features: [
      "Dataset Scope: Raw data has 9,551 records across 15 countries (8,652 India records, 90.6%; 14 countries outside India): 7,403 rated and 2,148 not rated. Cleaned data has 9,542 records: 7,394 rated and 2,148 not rated. The nine-record difference is nine U.S. records with blank Cuisines, excluded by analyst decision because cuisine analysis requires a cuisine value; no records were removed as duplicates.",
      "Data Cleaning: Rating_Clean and a rating-status field were created; treating source ratings of 1.0 as not rated is an analysis assumption. Zero costs and coordinates were treated as missing, country names were standardized via lookup, and costs were converted to INR using fixed factors. Text and currency-label corrections are recorded in the cleaning log but were not rechecked cell by cell.",
      "Market Findings (cleaned dataset): Indonesia (21 listings, 772.10 average votes) and Turkey (34 listings, 431.47 average votes) led engagement outside India.",
      "City Screen: Jakarta (4.36 rating / 742.69 votes), Istanbul (4.29 / 860.21), Ankara (4.31 / 131.35), Doha (4.06 / 163.80), Colombo (3.87 / 146.45).",
      "Recommendation: Staged research plan prioritizing initial diligence in Indonesia and Turkey, comparing against Qatar and Sri Lanka.",
    ],
    tradeoffs:
      "Limitations: Historical snapshot without revenue, footfall, or rent data. Small samples (14-20 listings per city outside India); votes reflect engagement rather than market demand.",
    github: "https://github.com/coolkunal9/restaurant-expansion-screener",
    live: "https://docs.google.com/spreadsheets/d/e/2PACX-1vShjJaXHpAKQRjvNrDSSHYnelcwcL-ZKPluwVdYW0JfbqYQH-B-7fVR6jaYQyk-4VJPid_xZ3k2KAiV/pubhtml",
    caseStudyHref: "#case-study",
  },
];

// ── Case Study: Zomato Restaurant Expansion Screener ────────
export const CASE_STUDY = {
  title: "Zomato Restaurant Expansion Screener",
  subtitle: "Descriptive market screening in Google Sheets · 9,551 raw / 9,542 cleaned records across 15 countries",
  businessQuestion: "Where should a new restaurant brand look first outside India?",
  dataOverview: {
    records: "9,551 raw restaurant records across 15 countries",
    coverage: "Raw: 7,403 rated / 2,148 not rated. Cleaned: 7,394 rated / 2,148 not rated. Source rating 1.0 is treated as not rated as an analysis assumption.",
    source: "The cleaned analysis dataset has 9,542 records. The nine records present in Raw Data but absent from Cleaned Data are all U.S. records with blank Cuisines. They were excluded by analyst decision because cuisine analysis requires a cuisine value; no records were removed as duplicates. The dataset has no revenue, footfall, rent, or operating-cost data.",
  },
  dashboard: {
    metrics: [
      { label: "Raw records", value: 9551 },
      { label: "Rated (raw)", value: 7403 },
      { label: "Not rated (raw)", value: 2148 },
      { label: "Cleaned records", value: 9542 },
      { label: "Rated (cleaned)", value: 7394 },
      { label: "Not rated (cleaned)", value: 2148 },
      { label: "Countries", value: 15 },
    ],
    engagement: [
      { country: "Indonesia", listings: 21, averageVotes: 772.1 },
      { country: "Turkey", listings: 34, averageVotes: 431.47 },
    ],
    ratingsShare: [
      { country: "Turkey", share: 88.2 },
      { country: "Indonesia", share: 81.0 },
      { country: "Sri Lanka", share: 65.0 },
      { country: "Qatar", share: 55.0 },
    ],
    cityRatings: [
      { city: "Jakarta", rating: 4.36 },
      { city: "Istanbul", rating: 4.29 },
      { city: "Ankara", rating: 4.31 },
      { city: "Doha", rating: 4.06 },
      { city: "Colombo", rating: 3.87 },
    ],
  },
  cleaningSteps: [
    "Created Rating_Clean and a rating-status field; treating source rating 1.0 as not rated is an analysis assumption",
    "Treated zero costs and zero coordinates as missing data",
    "Standardised country names via lookup tables",
    "Recorded text and currency-label corrections in the cleaning log; these corrections were not rechecked cell by cell",
    "Converted costs to INR using fixed factors; the rate source/date and Turkish factor need validation",
    "Created helper fields for opening year, price label, and primary cuisine while preserving raw data on a separate sheet",
  ],
  method:
    "Google Sheets analysis utilizing TRIM, IF, VLOOKUP, MID/FIND/YEAR, pivot tables, COUNTIFS, AVERAGEIFS, CORREL, FILTER, charts, slicers, and conditional formatting.",
  findingsCaveat:
    "Findings below use the cleaned 9,542-record dataset. Samples outside India are small; results describe listings and vote engagement in this snapshot, not total consumer demand.",
  keyFindings: [
    {
      metric: "Engagement Leaders",
      detail:
        "Indonesia: 21 listings, 772.10 average votes. Turkey: 34 listings, 431.47 average votes (highest engagement outside India).",
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
        "Price-range/rating correlation was about 0.02 in the four-country comparison (price ranges 2–4; n=87 records with the required values). This describes a small sample and does not establish a general relationship.",
    },
  ],
  recommendation:
    "Staged research plan: Start diligence in Indonesia and Turkey; keep Qatar and Sri Lanka as comparison markets; test Indonesian, kebab/Turkish, and dessert concepts in small pilots; price around local medians; validate rent, footfall, and delivery economics locally.",
  limitations: [
    "The cleaned analysis dataset excludes nine U.S. records with blank Cuisines by analyst decision; cuisine-level results therefore omit those records.",
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

// ── Applied Focus ───────────────────────────────────────────
export const APPLIED_FOCUS = [
  {
    label: "SQL on practice datasets",
    status: "used",
    description:
      "Write SELECT, filters, grouping, and joins. Next step: redo the Zomato screener in SQL so the market screen is reproducible.",
  },
  {
    label: "LLMs & Retrieval-Augmented Generation (RAG)",
    status: "focus",
    description:
      "Topic focus: how retrieval-augmented generation supplies relevant external context to a language model for more grounded responses.",
  },
  {
    label: "AI & Cloud foundations",
    status: "completed",
    description:
      "Completed an Emerging Technologies program with Edunet Foundation, AICTE, and IBM SkillsBuild; earned badges in Getting Started with AI and Journey to Cloud.",
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
      "Campus representative for GeeksforGeeks: helped peers practise DSA fundamentals and stay consistent with daily coding problems.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "CodeAlpha",
    period: "Oct – Nov 2025 (1 month)",
    credentialNote: "Letter of Recommendation",
    credentialUrl: "/files/Code_Alpha.pdf",
    bullets: [
      "One-month virtual full-stack internship: built assigned web features and received a letter of recommendation for the work.",
    ],
  },
  {
    role: "AI & Cloud Intern",
    org: "Edunet Foundation × AICTE × IBM SkillsBuild",
    period: "Jul – Aug 2025 (4 weeks)",
    credentialNote: "IBM SkillsBuild Badges",
    credentialUrl: "/files/edunet_foundation.pdf",
    bullets: [
      "Four-week Emerging Technologies program covering AI and cloud foundations.",
      "Earned IBM SkillsBuild badges: Getting Started with AI and Journey to Cloud.",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    org: "Upflairs Pvt. Ltd.",
    period: "Jul – Aug 2024 (45 days)",
    credentialNote: "Certificate of Training (45 days)",
    credentialUrl: "/files/Upflairs.pdf",
    bullets: [
      "45-day offline training: built responsive pages in HTML, CSS, and JavaScript.",
      "Used Git and GitHub for version control on small training projects.",
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
