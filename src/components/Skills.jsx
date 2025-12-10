import React from "react";

const skills = [
  {
    title: "Frontend",
    items: [
      "React.js (Hooks & Context)",
      "Redux",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Vite",
      "Chakra UI",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"],
  },
  { title: "Databases", items: ["MongoDB (Mongoose)", "MySQL"] },
  {
    title: "Other",
    items: ["C", "C++", "Python", "Git", "Postman", "IBM Cloud", "Gemini API"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section fade-up"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading">Skills</h2>

      <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
        {skills.map((s, idx) => (
          <div
            key={s.title}
            className="card"
            style={{
              paddingBottom: 14,
              marginBottom: idx === skills.length - 1 ? 0 : 12, // blank line between groups
            }}
          >
            {/* Category title on its own line */}
            <div>
              <strong>{s.title}:</strong>
            </div>

            {/* Technologies underneath as a comma-separated line (wraps on small screens) */}
            <div className="small" style={{ marginTop: 8 }}>
              {s.items.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
