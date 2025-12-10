import React from "react";

const projects = [
  {
    title: "Full Stack E-Commerce",
    desc: "E-commerce app with JWT auth, protected routes, cart, and order management.",
    repo: "https://github.com/coolkunal9/CodeAlpha_Ecommerce",
    live: null,
    stack: "React, Node.js, Express, MongoDB, JWT",
    bullets: [
      "Built secure REST APIs and JWT authentication (Node/Express, MongoDB).",
      "Role – Full Stack Developer (solo).",
      "Optimized product listing & API pagination for faster load times.",
    ],
  },
  {
    title: "Secure Blogging Platform Backend",
    desc: "Modular CRUD backend with token-protected routes and middleware.",
    repo: "https://github.com/coolkunal9/BlogPlatform",
    live: null,
    stack: "Node.js, Express, MongoDB, JWT",
    bullets: [
      "Designed modular routes with authorization and input validation.",
      "Role – Backend Developer.",
      "Improved security by adding role-based access controls.",
    ],
  },
  {
    title: "CareerGenie – AI Interview Prep",
    desc: "Multi-agent interview prep system integrated with Gemini API.",
    repo: "https://github.com/coolkunal9/CareerGenie-AI-Interview-Prep",
    live: null,
    stack: "React, Node.js, Gemini API, Multi-agent orchestration",
    bullets: [
      "Implemented multi-agent orchestration and resume analysis using Gemini.",
      "Role – Lead Developer.",
      "Built mock-interview flows and summarized feedback for users.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section fade-up">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article
            key={p.title}
            className="card"
            aria-labelledby={`proj-${p.title}`}
          >
            <h3 id={`proj-${p.title}`} style={{ margin: "0 0 6px 0" }}>
              {p.title}
            </h3>

            <small style={{ display: "block", marginBottom: 8 }}>
              {p.desc}
            </small>

            {/* Stack line (keeps content unchanged but adds clarity) */}
            <div className="small" style={{ marginBottom: 8 }}>
              <strong>Stack:</strong> {p.stack}
            </div>

            <ul style={{ marginTop: 8, marginBottom: 10 }}>
              {p.bullets.map((b, i) => (
                <li key={i} className="small" style={{ marginBottom: 6 }}>
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <a
                className="icon-btn"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              {p.live && (
                <a
                  className="icon-btn"
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
