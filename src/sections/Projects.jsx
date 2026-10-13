import { useState } from "react";
import { PROJECTS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";

const FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "Development", value: "development" },
  { label: "Data Analytics", value: "data" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <Section id="projects">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects"
            description="Technical development projects and structured analytical screeners."
            className="mb-0 sm:mb-0"
          />

          {/* Filter Pills */}
          <div className="inline-flex rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1 shrink-0">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                className={`rounded-[var(--radius-sm)] px-3 py-1.5 font-mono text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === f.value
                    ? "bg-[var(--accent-base)] text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((proj, idx) => (
          <ScrollReveal key={proj.id} delay={idx * 0.08}>
            <ProjectCard project={proj} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
