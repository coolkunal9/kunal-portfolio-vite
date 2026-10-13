import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import Card from "./Card";
import Tag from "./Tag";
import Badge from "./Badge";

/**
 * Reusable editorial project card with role, problem, stack, features, tradeoffs, and links.
 */
export default function ProjectCard({ project }) {
  const isData = project.category === "data";
  const liveUrl = project.live?.startsWith("http") ? project.live : null;
  const githubUrl = project.github?.startsWith("http") ? project.github : null;

  return (
    <Card interactive className="flex h-full flex-col justify-between">
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant={isData ? "accent" : "neutral"}>
            {isData ? "Data Analytics" : "Development"}
          </Badge>
          <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
            {project.role}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="font-mono text-xs text-[var(--accent-text)] mt-0.5">
            {project.subtitle}
          </p>
        )}

        {/* Problem Statement */}
        <p className="mt-3 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] p-2.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
          <span className="text-[var(--accent-text)] font-semibold">Problem: </span>
          {project.problem}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Key Features */}
        <ul className="mt-4 space-y-2 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--text-secondary)]">
          {project.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-[var(--accent-base)] shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Tradeoffs */}
        {project.tradeoffs && (
          <p className="mt-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] p-2 font-mono text-[11px] text-[var(--text-tertiary)] leading-normal">
            {project.tradeoffs}
          </p>
        )}
      </div>

      {/* Footer: Tags & Action Links */}
      <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors"
            >
              <span>{isData ? "Google Sheet" : "Live Site"}</span>
              <ExternalLink size={13} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github size={14} />
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
