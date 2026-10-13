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
  linkedin: "https://linkedin.com/in/kunalprasaddev",
  github: "https://github.com/coolkunal9",
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
    "I am a B.Tech Information Technology graduate (Arya College of Engineering, Sep 2022 – Jun 2026), based in Jaipur, India. I am open to entry-level Frontend Developer and Data Analyst roles (Jaipur or remote).",
    "My development work centers on building React interfaces with clean component architectures, robust state handling, and integrated REST APIs. In data analytics, I perform structured data cleaning, lookup models, pivot table analyses, and dashboard reporting using Excel and Google Sheets.",
    "I focus on writing verifiable code with automated integration tests, defensive input validation, and clear documentation of architectural tradeoffs.",
  ],
};

// ── Skills ──────────────────────────────────────────────────
export const SKILLS = {
  groups: [
    {
      title: "Frontend (Strong)",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Git",
      ],
    },
    {
      title: "Data Analytics (Strong)",
      items: [
        "Excel",
        "Google Sheets",
        "Data Cleaning",
        "VLOOKUP / XLOOKUP",
        "Pivot Tables",
        "Dashboards",
      ],
    },
    {
      title: "Backend & Database (Working)",
      items: [
        "Express.js",
        "MongoDB",
        "Basic SQL (SELECT, filtering, GROUP BY, joins)",
      ],
    },
    {
      title: "Currently Learning",
      isLearning: true,
      items: [
        "SQL on real datasets",
        "Python for data analysis (pandas, matplotlib)",
        "Statistics fundamentals",
        "Intro to machine learning",
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
      "A full-stack MERN editorial platform covering 10 Indian states. Built with React 18 frontend and Express 5 REST API layered into routes -> services -> models, backed by MongoDB Atlas with Mongoose.",
    role: "Full-stack development, automated integration testing, and security self-audit & hardening.",
    stack: [
      "React 18",
      "React Router v7",
      "Express 5",
      "MongoDB Atlas",
      "Mongoose",
      "Tailwind CSS",
      "Framer Motion",
      "Jest / Supertest",
    ],
    features: [
      "Frontend: React 18, React Router v7, Tailwind, Framer Motion, dark mode, debounced search (300ms) with AbortController cancellation, optimistic comment updates, protected profile page.",
      "Backend: Express 5 REST API with routes -> services -> models layering, Mongoose, MongoDB Atlas, Joi validation, centralized error handler.",
      "Auth: JWT (7-day expiry) + bcrypt (12 rounds); token stored in localStorage.",
      "Search & Indexing: MongoDB $text index across title, state, content. Compound index on comments (article, createdAt).",
      "Security Self-Audit & Hardening: Fail-fast JWT secret guard in production, CORS allowlist without wildcards, auth rate limiting (10 req / 15 min), regex-escaping of state filter, capped pagination (max 50), Helmet headers, idempotent seed script with production guard.",
      "Automated Testing: 17 integration tests (Jest, Supertest, MongoMemoryServer) covering auth, articles, and comments.",
      "Deployment: Vercel (frontend + serverless Express backend) and MongoDB Atlas.",
    ],
    tradeoffs:
      "Tradeoffs: JWT in localStorage has no refresh/revocation; in-memory rate limiting is per serverless instance.",
    github: "[PLACEHOLDER: GitHub URL]",
    live: "[PLACEHOLDER: live URL]",
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
      "Dataset Scope: 9,551 restaurants, 15 countries (8,652 India listings / 90.6%; 14 countries outside India; 7,403 rated; 2,148 unrated treated as missing).",
      "Data Cleaning: Rating_Clean field created; zero costs and zero coordinates treated as missing; country names standardized via lookup; costs converted to INR.",
      "Market Findings: Indonesia (21 listings, ~772 avg votes) and Turkey (34 listings, ~432 avg votes) led engagement outside India.",
      "City Screen: Jakarta (4.36 rating / 742.69 votes), Istanbul (4.29 / 860.21), Ankara (4.31 / 131.35), Doha (4.06 / 163.80), Colombo (3.87 / 146.45).",
      "Recommendation: Staged research plan prioritizing initial diligence in Indonesia and Turkey, comparing against Qatar and Sri Lanka.",
    ],
    tradeoffs:
      "Limitations: Historical snapshot without revenue, footfall, or rent data. Small sample sizes outside India; votes reflect engagement rather than market demand.",
    github: null,
    live: "[PLACEHOLDER: Google Sheet link]",
  },
];

// ── Case Study: Zomato Restaurant Expansion Screener ────────
export const CASE_STUDY = {
  title: "Zomato Restaurant Expansion Screener",
  subtitle: "Market entry analysis using Google Sheets · 9,551 restaurants across 15 countries",
  businessQuestion: "Where should a new restaurant brand look first outside India?",
  dataOverview: {
    records: "9,551 restaurants (8,652 India listings / 90.6%; 14 countries outside India)",
    coverage: "7,403 rated listings; 2,148 unrated listings (rating 1.0 treated as not rated)",
    source: "Historical dataset snapshot [PLACEHOLDER: year/source]. No revenue, footfall, rent or cost data.",
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
    "Staged research plan (not an immediate launch): Start diligence in Indonesia and Turkey; maintain Qatar and Sri Lanka as comparison markets; test Indonesian, kebab/Turkish, and dessert concepts in small pilots; price around local medians; validate rent, footfall, and delivery economics locally.",
  limitations: [
    "Small sample sizes outside India (14–34 listings per candidate country).",
    "Vote counts reflect app engagement and tourist activity, not overall market demand.",
    "INR conversions require verified exchange rates [PLACEHOLDER: Turkey cost conversion verification and exchange-rate source/date].",
    "[PLACEHOLDER: Why was the Philippines (4.47 avg rating, 22 listings) not shortlisted? Write my own selection criteria.]",
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
  screenshotPlaceholders: [
    "[PLACEHOLDER: dashboard screenshot at 2x resolution — overview]",
    "[PLACEHOLDER: dashboard screenshot at 2x resolution — country & city breakdown]",
  ],
  sheetLink: "[PLACEHOLDER: Google Sheet link]",
  whatNext:
    "Redo the analysis in SQL and Python (pandas) for full pipeline reproducibility.",
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
    label: "Python for data analysis",
    status: "next",
    description:
      "pandas, matplotlib, and Jupyter notebooks for exploratory analysis.",
  },
  {
    label: "Statistics fundamentals",
    status: "planned",
    description:
      "Distributions, hypothesis testing, correlation, and regression basics.",
  },
  {
    label: "Intro to machine learning",
    status: "planned",
    description:
      "Supervised learning basics — linear regression, classification, scikit-learn.",
  },
];

// ── Experience ──────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Campus Mantri",
    org: "GeeksforGeeks",
    period: "Jan – Jun 2026",
    bullets: [
      "Appointed to help peers build fundamentals; encouraged participation in DSA and coding practice.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "CodeAlpha",
    period: "Oct – Nov 2025 (1 month)",
    bullets: [
      "Completed a one-month virtual internship; received a letter of recommendation.",
      "[PLACEHOLDER: 1-2 specific tasks I built]",
    ],
  },
  {
    role: "AI & Cloud Intern",
    org: "Edunet Foundation × AICTE × IBM SkillsBuild",
    period: "Jul – Aug 2025 (4 weeks)",
    bullets: [
      "Completed a 4-week program in Emerging Technologies.",
      "Earned two IBM SkillsBuild badges (Getting Started with AI; Journey to Cloud).",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    org: "Upflairs Pvt. Ltd.",
    period: "Jul – Aug 2024 (45 days)",
    bullets: [
      "Completed a 45-day offline training program.",
      "Practised HTML, CSS, JavaScript, Git/GitHub; built responsive pages and small projects.",
    ],
  },
];

// ── Education ───────────────────────────────────────────────
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
    name: "Getting Started with AI",
    issuer: "IBM SkillsBuild (via Edunet Foundation × AICTE)",
  },
  {
    name: "Journey to Cloud",
    issuer: "IBM SkillsBuild (via Edunet Foundation × AICTE)",
  },
  {
    name: "Letter of Recommendation",
    issuer: "CodeAlpha (Full Stack Developer Internship)",
  },
  {
    name: "Certificate of Training (Full Stack Web Development, 45 Days)",
    issuer: "Upflairs Pvt. Ltd.",
  },
  {
    name: "Campus Mantri Appointment",
    issuer: "GeeksforGeeks",
  },
];
