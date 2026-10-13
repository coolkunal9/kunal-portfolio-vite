import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/content";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Development", value: "development" },
  { label: "Data", value: "data" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const displayed =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <ScrollReveal>
        <p className="section-label">Projects</p>
        <h2 className="section-title">What I've built</h2>
      </ScrollReveal>

      {/* Filter toggle */}
      <ScrollReveal delay={0.1}>
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className="rounded-lg px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider transition-all"
              style={{
                background:
                  filter === f.value
                    ? "var(--color-accent-soft)"
                    : "transparent",
                border: "1px solid",
                borderColor:
                  filter === f.value
                    ? "var(--color-accent-border)"
                    : "var(--color-border)",
                color:
                  filter === f.value
                    ? "var(--color-accent)"
                    : "var(--color-text-muted)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {displayed.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
