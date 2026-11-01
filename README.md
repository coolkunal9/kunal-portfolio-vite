# Kunal Prasad — Portfolio

Portfolio for a 2026 B.Tech Information Technology graduate interested in frontend development and data analytics. Built with React 19 and Vite, with project details and case-study content maintained in `src/data/content.js`.

- **Live portfolio:** https://kunal-portfolio-vite.vercel.app/
- **GitHub:** https://github.com/coolkunal9
- **LinkedIn:** https://www.linkedin.com/in/kunalprasad-dev/

## Highlights

- Responsive portfolio sections for about, skills, experience, projects, and contact
- Project detail dialogs with Escape-to-close, focus handling, and keyboard navigation
- Light/dark theme toggle and reduced-motion support
- Zomato restaurant expansion case study with data-cleaning notes, findings, and sample-size limitations
- Contact form validation, delivery status, and mail-app fallback

## Featured projects

- **[State Stories](https://github.com/coolkunal9/state-stories)** — Full-stack editorial application with a React client, Express API, MongoDB, search, authentication, and reader comments. [Live application](https://state-stories.vercel.app/)
- **[Restaurant Expansion Screener](https://github.com/coolkunal9/restaurant-expansion-screener)** — Google Sheets analysis of a historical restaurant dataset using data cleaning, formulas, pivot tables, and descriptive market comparisons. [Published workbook view](https://docs.google.com/spreadsheets/d/e/2PACX-1vShjJaXHpAKQRjvNrDSSHYnelcwcL-ZKPluwVdYW0JfbqYQH-B-7fVR6jaYQyk-4VJPid_xZ3k2KAiV/pubhtml)

## Technology

React 19, JavaScript (ES modules), Vite 7, Tailwind CSS 4, Framer Motion, Lenis, Lucide React, and Fontsource.

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/coolkunal9/kunal-portfolio-vite.git
cd kunal-portfolio-vite
npm install
npm run dev
```

Vite prints the local development URL in the terminal. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/       # Shared layout and UI components
├── data/content.js   # Portfolio copy, links, project data, and case study
├── hooks/            # Theme and active-section hooks
├── sections/         # Hero, about, projects, experience, contact, case study
└── styles/           # Design tokens
public/               # Resume, images, favicon, and credential files
```

## Contact form

The form posts to FormSubmit using the public contact email in `src/data/content.js`. If delivery fails, it offers a `mailto:` fallback. A successful local production build does not verify the external form service or live deployment.

## Project notes

- The Zomato case study describes a historical dataset snapshot and is a screening analysis, not proof of market demand or profitability.
- Update personal links and project facts in `src/data/content.js`; update the page metadata in `index.html` when the canonical site URL changes.
- Do not commit `.env` files, credentials, or private data.
