import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Badge from "./Badge";
import { Github } from "./Icons";
import Tag from "./Tag";

export default function ProjectDetailsModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose]);

  const isData = project.category === "data";

  return (
    <motion.div
      className="project-modal-backdrop fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.div
        ref={dialogRef}
        layoutId={`project-shell-${project.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        className="project-modal-panel max-h-[90svh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-5 shadow-2xl sm:p-8"
        transition={{ layout: { type: "spring", stiffness: 280, damping: 30 }, opacity: { duration: 0.2 } }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge variant={isData ? "accent" : "neutral"}>{isData ? "Data Analytics" : "Development"}</Badge>
            <h2 id={`project-title-${project.id}`} className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              {project.title}
            </h2>
            {project.subtitle && <p className="mt-1 font-mono text-xs text-[var(--accent-text)]">{project.subtitle}</p>}
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project details" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none">
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] p-4 sm:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-text)]">Project question</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-primary)]">{project.problem}</p>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] p-4 sm:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">Overview</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] p-4 sm:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">Role</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{project.role}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Project details</h3>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.tradeoffs && <p className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] p-4 text-xs leading-relaxed text-[var(--text-tertiary)]">{project.tradeoffs}</p>}

        <div className="mt-6 border-t border-[var(--border-subtle)] pt-5">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">{project.stack.map((item) => <Tag key={item} label={item} />)}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.live?.startsWith("http") && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--accent-base)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]">
                {isData ? "Open Google Sheet" : "Open live project"}<ExternalLink size={14} />
              </a>
            )}
            {project.github?.startsWith("http") && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border-strong)] px-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-border)]">
                <Github size={15} /> Repository <ExternalLink size={13} />
              </a>
            )}
            {project.caseStudyHref && (
              <a href={project.caseStudyHref} onClick={onClose} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border-strong)] px-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-border)]">
                Read the case study <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
