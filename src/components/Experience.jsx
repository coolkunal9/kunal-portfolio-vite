import React from "react";

const items = [
  {
    role: "MERN Intern",
    org: "Codec Technologies",
    period: "Oct 2025 – Nov 2025 (Remote)",
    bullets: [
      "Built REST APIs in Express and integrated with MongoDB using Mongoose.",
      "Implemented authentication flows (JWT) and helped set up CI pipelines.",
    ],
  },
  {
    role: "Full Stack Intern",
    org: "CodeAlpha",
    period: "Oct 2025 – Nov 2025 (Remote)",
    bullets: [
      "Developed responsive React components and connected them to backend APIs.",
      "Improved UI responsiveness and documented components for the team.",
    ],
  },
  {
    role: "AI & Cloud Intern",
    org: "IBM SkillsBuild / Edunet Foundation",
    period: "Jul 2025 – Aug 2025 (Remote)",
    bullets: [
      "Deployed cloud-based demo apps on IBM Cloud and integrated AI services.",
      "Wrote deployment guides and monitored app performance.",
    ],
  },
];

// helper: detect duplicate periods
function findDuplicatePeriods(list) {
  const counts = list.reduce((acc, it) => {
    acc[it.period] = (acc[it.period] || 0) + 1;
    return acc;
  }, {});
  return new Set(Object.keys(counts).filter((k) => counts[k] > 1));
}

export default function Experience() {
  const dupPeriods = findDuplicatePeriods(items);

  return (
    <section id="experience" className="section fade-up">
      <h2>Experience</h2>
      <div className="timeline">
        {items.map((it) => (
          <div className="timeline-item card" key={it.role}>
            <strong>{it.role}</strong>
            <div className="small">
              {it.org} · {it.period}
            </div>

            {/* If this period duplicates another entry, show a neutral note */}
            {dupPeriods.has(it.period) && (
              <div
                className="small"
                style={{ marginTop: 8, color: "var(--muted)" }}
              >
                Note: this date range overlaps with another internship —
                consider clarifying (part-time / project).
              </div>
            )}

            <ul style={{ marginTop: 8 }}>
              {it.bullets.map((b, i) => (
                <li key={i} className="small" style={{ marginBottom: 6 }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
