// ═══════════════════════════════════════════════════════════════
// content.js — Single source of truth for all portfolio text.
// Edit text here; never touch JSX to change copy.
// ═══════════════════════════════════════════════════════════════

// ── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Case Study", href: "#case-study" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ── Personal Info ───────────────────────────────────────────
export const PERSONAL = {
  name: "Kunal Prasad",
  location: "Jaipur, Rajasthan, India",
  tagline:
    "Frontend Developer building clean React interfaces and turning data into answers.",
  statusBadge: "Open to entry-level roles",
  email: "kunalprasad142@gmail.com",
  linkedin: "https://linkedin.com/in/kunalprasaddev",
  github: "https://github.com/coolkunal9",
  resumeUrl: "/resume.pdf",
};

// ── About ───────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "I'm a final-year B.Tech Information Technology student at Arya College of Engineering, Jaipur. I build frontend interfaces with React and analyse data with Excel, Google Sheets, and soon SQL and Python.",
    "I've completed four internships where I worked on full-stack features, API design, and cloud deployments. My strongest tools are React, JavaScript, Tailwind CSS, and spreadsheet-based data analysis.",
    "I'm looking for entry-level Frontend Developer or Data Analyst roles where I can write clean code, solve real problems, and keep learning.",
  ],
};

// ── Skills ──────────────────────────────────────────────────
export const SKILLS = {
  groups: [
    {
      title: "Frontend",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Data",
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
      title: "Backend & Tools",
      items: [
        "Express.js",
        "MongoDB",
        "Basic SQL (SELECT, filtering, GROUP BY, joins)",
        "Git / GitHub",
        "REST APIs",
        "Vite",
        "Vercel",
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
    problem:
      "No single platform curated stories and information about Indian states in an interactive, searchable format with community engagement.",
    description:
      "A full-stack web app for exploring Indian states — users can search for states, read curated content, sign up / log in, and leave comments on stories.",
    role: "Built the React frontend, designed and implemented the Express REST API, set up MongoDB models, added JWT-based authentication, and deployed to Vercel.",
    stack: ["React", "Express", "MongoDB", "JWT Auth", "REST APIs", "Tailwind CSS"],
    features: [
      "User authentication (signup, login, JWT tokens)",
      "Search and filter states by name",
      "Commenting system on individual state pages",
      "Responsive UI with state-wise content cards",
    ],
    github: "https://github.com/coolkunal9/state-stories",
    live: "https://state-stories.vercel.app/",
  },
  {
    id: "zomato-analysis",
    title: "Zomato Restaurant Analysis",
    category: "data",
    featured: true,
    problem:
      "[PLACEHOLDER: Business question — e.g. 'Which markets outside India are best for Zomato's next expansion?']",
    description:
      "Analysed 9,551 restaurants across 15 countries in Excel / Google Sheets. Cleaned raw data, applied lookups, built pivot tables, and created a dashboard to shortlist markets outside India.",
    role: "Sole analyst — performed all data cleaning, analysis, and dashboard creation.",
    stack: ["Excel", "Google Sheets", "Pivot Tables", "VLOOKUP", "Dashboard"],
    features: [
      "[PLACEHOLDER: Key finding 1 — e.g. 'Country X has the highest average rating among low-competition markets']",
      "[PLACEHOLDER: Key finding 2]",
      "[PLACEHOLDER: Key finding 3]",
      "[PLACEHOLDER: Recommendation — e.g. 'Recommend expanding to Country X based on rating density and competition gap']",
    ],
    github: null,
    live: "[PLACEHOLDER: Google Sheet link or dashboard URL]",
  },
  {
    id: "github-analyzer",
    title: "GitHub Profile Analyzer",
    category: "development",
    featured: false,
    problem:
      "Developers lack a quick, visual way to understand their GitHub activity, language distribution, and star count at a glance.",
    description:
      "A client-side dashboard that fetches the GitHub REST API and visualises a developer's language ratios, star counts, and repository activity with interactive charts.",
    role: "Built the entire frontend — API integration, data processing, Chart.js rendering, and responsive glassmorphic UI.",
    stack: ["React", "Vite", "GitHub REST API", "Chart.js", "Tailwind CSS"],
    features: [
      "Fetches and processes GitHub API data for any username",
      "Interactive Chart.js visualisations of language distribution",
      "Total star count and repository activity breakdown",
      "Glassmorphic responsive design with loading states",
    ],
    github: "https://github.com/coolkunal9/github-analyzer",
    live: "https://github-analyzer-dusky-six.vercel.app/",
  },
];

// ── Case Study: Zomato Analysis ─────────────────────────────
export const CASE_STUDY = {
  title: "Zomato Restaurant Analysis",
  subtitle: "Data analysis case study · Excel / Google Sheets",
  businessQuestion:
    "[PLACEHOLDER: State the core business question — e.g. 'Which international markets should Zomato prioritise for expansion beyond India?']",
  dataOverview: {
    records: "9,551 restaurants",
    countries: "15 countries",
    source: "[PLACEHOLDER: Where did this dataset come from? Kaggle? Zomato open data?]",
  },
  cleaningSteps: [
    "Removed duplicate entries and null values",
    "Standardised country names and currency codes",
    "Converted rating text categories into numeric scores",
    "[PLACEHOLDER: Add 1-2 more cleaning steps you actually performed]",
  ],
  method:
    "[PLACEHOLDER: Brief description of your analytical method — e.g. 'Grouped restaurants by country, calculated average rating, cost distribution, and online delivery availability. Built pivot tables to compare metrics across markets.']",
  keyFindings: [
    "[PLACEHOLDER: Finding 1 — most specific stat you discovered]",
    "[PLACEHOLDER: Finding 2]",
    "[PLACEHOLDER: Finding 3]",
    "[PLACEHOLDER: Finding 4 (optional)]",
    "[PLACEHOLDER: Finding 5 (optional)]",
  ],
  recommendation:
    "[PLACEHOLDER: Your recommendation — e.g. 'Expand to X and Y markets because of Z evidence from the data.']",
  tools: ["Excel", "Google Sheets", "Pivot Tables", "VLOOKUP / XLOOKUP", "Conditional Formatting"],
  screenshotPlaceholders: [
    "[PLACEHOLDER: Dashboard screenshot 1 — overview]",
    "[PLACEHOLDER: Dashboard screenshot 2 — key chart]",
  ],
  sheetLink: "[PLACEHOLDER: Link to Google Sheet or downloadable Excel file]",
  whatNext:
    "Redo this analysis in SQL and Python (pandas + matplotlib) to handle larger datasets and build reproducible visualisations.",
};

// ── Learning Roadmap ────────────────────────────────────────
export const LEARNING_ROADMAP = [
  {
    label: "SQL on real datasets",
    status: "in-progress",
    description: "Writing SELECT, GROUP BY, JOINs, and subqueries on practice datasets",
  },
  {
    label: "Python for data analysis",
    status: "next",
    description: "pandas, matplotlib, and Jupyter notebooks for exploratory analysis",
  },
  {
    label: "Statistics fundamentals",
    status: "planned",
    description: "Distributions, hypothesis testing, correlation, and regression basics",
  },
  {
    label: "Intro to machine learning",
    status: "planned",
    description: "Supervised learning basics — linear regression, classification, scikit-learn",
  },
];

// ── Experience ──────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Campus Mantri",
    org: "GeeksforGeeks",
    period: "Jan – Jun 2026",
    bullets: [
      "Led coding workshops, contests, and technical events on campus",
      "Mentored peers on data structures, algorithms, and web development roadmaps",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "CodeAlpha",
    period: "Oct – Nov 2025",
    bullets: [
      "Built end-to-end MERN features and deployed them to production",
      "Received a letter of recommendation for delivering quality work ahead of deadlines",
    ],
  },
  {
    role: "AI & Cloud Intern",
    org: "Edunet Foundation × AICTE × IBM SkillsBuild",
    period: "Jul – Aug 2025",
    bullets: [
      "Integrated IBM Cloud services into web applications for AI-powered features",
      "Earned two IBM SkillsBuild badges (Getting Started with AI, Journey to Cloud)",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    org: "Upflairs Pvt. Ltd.",
    period: "Jul – Aug 2024",
    bullets: [
      "Completed a 45-day offline program building web interfaces with HTML, CSS, JavaScript, and Node.js",
      "Participated in code reviews and sprint planning under senior guidance",
    ],
  },
];

// ── Education ───────────────────────────────────────────────
export const EDUCATION = {
  degree: "B.Tech Information Technology",
  school: "Arya College of Engineering & IT",
  location: "Jaipur, Rajasthan",
  period: "Sep 2022 – Jun 2026",
};

// ── Certifications ──────────────────────────────────────────
export const CERTIFICATIONS = [
  { name: "5-Day AI Agents Intensive", issuer: "Google" },
  { name: "Expert POTD Solver (GeekStreak)", issuer: "NPCI × GeeksforGeeks" },
  { name: "Getting Started with AI", issuer: "IBM SkillsBuild" },
  { name: "Journey to Cloud", issuer: "IBM SkillsBuild" },
  { name: "MongoDB Overview: Core Concepts and Architecture", issuer: "MongoDB" },
];
