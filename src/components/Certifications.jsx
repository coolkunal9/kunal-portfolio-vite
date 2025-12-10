import React, { useState } from "react";

const allCerts = [
  { title: "Deloitte Technology Job Simulation", file: "Deloitte.pdf" },
  {
    title: "Full Stack Programming Course — Udemy",
    file: "full Stack programming course.pdf",
  },
  {
    title: "Journey to Cloud: Envisioning Your Solution — IBM SkillsBuild",
    file: "edunet_foundation.pdf",
  },
  {
    title: "Getting Started with Artificial Intelligence — IBM SkillsBuild",
    file: "IBMDesign20251101-32-axuoi5.pdf",
  },
  {
    title: "JavaScript From Scratch (Beginner) — Udemy",
    file: "javaScript.pdf",
  },
  {
    title: "Retrieval Augmented Generation with LangChain — IBM SkillsBuild",
    file: "IBMDesign20251101-32-m5e5zp.pdf",
  },
  { title: "Full Stack Development — Upflairs", file: "Upflairs.pdf" },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const display = showAll ? allCerts : allCerts.slice(0, 5);

  return (
    <section
      id="certifications"
      className="section fade-up"
      aria-labelledby="certifications-heading"
    >
      <h2 id="certifications-heading">Certifications</h2>

      {/* vertical list: each certification on its own line with View / Download */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {display.map((c, i) => (
          <div
            key={i}
            className="card small"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div>
              <strong>{c.title}</strong>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span className="small" style={{ color: "var(--muted)" }}>
                PDF —
              </span>

              <a
                href={`/files/${encodeURIComponent(c.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
                style={{ marginRight: 8 }}
              >
                View
              </a>

              <a
                href={`/files/${encodeURIComponent(c.file)}`}
                download
                className="cert-download"
                title={`Download ${c.title}`}
              >
                ⤓
              </a>
            </div>
          </div>
        ))}
      </div>

      {allCerts.length > 5 && (
        <div style={{ marginTop: 12 }}>
          <button className="cta" onClick={() => setShowAll((s) => !s)}>
            {showAll ? "Show less" : "Show all"}
          </button>
        </div>
      )}
    </section>
  );
}
