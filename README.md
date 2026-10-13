# Kunal Prasad — Portfolio

Personal portfolio for **Kunal Prasad**, built with React 18, Vite, Tailwind CSS v4, and Framer Motion.

## 🎯 Positioning
**Frontend Developer (React) who also analyses data** — targeting entry-level Frontend Developer and Data Analyst roles.

- **Location**: Jaipur, Rajasthan, India
- **Education**: B.Tech Information Technology, Arya College of Engineering (Sep 2022 – Jun 2026)
- **Email**: [kunalprasad142@gmail.com](mailto:kunalprasad142@gmail.com)
- **LinkedIn**: [linkedin.com/in/kunalprasad-dev/](https://www.linkedin.com/in/kunalprasad-dev/)
- **GitHub**: [github.com/coolkunal9](https://github.com/coolkunal9)

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS v4 with custom CSS variable design tokens
- **Motion**: Framer Motion with `prefers-reduced-motion` compliance
- **Icons**: Lucide React + custom inline SVGs
- **Build Tool**: Vite 7
- **Architecture**: Modular layout & UI primitives (`Container`, `Section`, `Button`, `Card`, `Badge`, `Tag`), with all content centralized in `src/data/content.js`.

---

## 📂 Featured Projects

### 1. State Stories (Full-Stack MERN)
- **Description**: Full-stack MERN editorial platform covering the culture and heritage of 10 Indian states.
- **Frontend**: React 18, React Router v7, Tailwind CSS, Framer Motion, debounced search (300ms) with AbortController cancellation, optimistic comment updates.
- **Backend**: Express 5 REST API layered into routes, services, and models; Joi validation; centralized error handling.
- **Auth & Database**: JWT (7-day expiry) + bcrypt (12 rounds); MongoDB $text search index across title, state, and content; compound index on comments.
- **Testing**: 17 integration tests using Jest, Supertest, and MongoMemoryServer.
- **Deployment**: Vercel + MongoDB Atlas.
- **Live**: [state-stories.vercel.app](https://state-stories.vercel.app/)
- **Repository**: [github.com/coolkunal9/state-stories](https://github.com/coolkunal9/state-stories)

### 2. Zomato Restaurant Expansion Screener (Data Analytics)
- **Description**: Screener analyzing 9,551 restaurants across 15 countries from a historical dataset snapshot to evaluate international market expansion outside India.
- **Tools**: Google Sheets, Excel, Pivot Tables, VLOOKUP, Statistical Formulas, Slicers, Conditional Formatting.
- **Findings**: Identifies engagement and high-score density leaders (Turkey, Indonesia, Qatar, Sri Lanka) with sample-size caveats and city-level breakdowns.
- **Google Sheet**: [View Published Analysis](https://docs.google.com/spreadsheets/d/e/2PACX-1vShjJaXHpAKQRjvNrDSSHYnelcwcL-ZKPluwVdYW0JfbqYQH-B-7fVR6jaYQyk-4VJPid_xZ3k2KAiV/pubhtml)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
git clone https://github.com/coolkunal9/kunal-portfolio-vite.git
cd kunal-portfolio-vite
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
