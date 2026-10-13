import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import ScrollReveal from "./ScrollReveal";

/**
 * Reusable project card with problem, description, role, stack, and links.
 */
export default function ProjectCard({ project, index = 0 }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <article
        className="card group flex h-full flex-col rounded-2xl p-6"
        style={{ background: "var(--color-surface)" }}
      >
        {/* Header row */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">
            {project.title}
          </h3>
          {project.featured && (
            <span
              className="flex-shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider"
              style={{
                color: "var(--color-accent)",
                background: "var(--color-accent-soft)",
                border: "1px solid var(--color-accent-border)",
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Category tag */}
        <p
          className="mb-3 font-mono text-xs uppercase tracking-wider"
          style={{ color: "var(--color-text-muted)" }}
        >
          {project.category === "data" ? "Data Analysis" : "Development"}
        </p>

        {/* Problem */}
        <p
          className="mb-2 text-sm font-medium"
          style={{ color: "var(--color-text)" }}
        >
          {project.problem}
        </p>

        {/* Description */}
        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          {project.description}
        </p>

        {/* Role */}
        <p
          className="mb-4 text-sm italic leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          <span className="not-italic font-medium" style={{ color: "var(--color-text)" }}>
            My role:
          </span>{" "}
          {project.role}
        </p>

        {/* Key features / findings */}
        {project.features && project.features.length > 0 && (
          <ul className="mb-5 flex flex-col gap-1.5">
            {project.features.map((feat, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                <span
                  className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
                {feat}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack chips */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Links — pushed to bottom */}
        <div className="mt-auto flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center"
              style={{ padding: "8px 12px", fontSize: "0.8125rem" }}
            >
              <Github size={14} />
              Code
            </a>
          )}
          {project.live && !project.live.startsWith("[") && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center"
              style={{ padding: "8px 12px", fontSize: "0.8125rem" }}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
}
