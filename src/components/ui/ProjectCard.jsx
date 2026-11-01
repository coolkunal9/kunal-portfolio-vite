import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Card from "./Card";
import Tag from "./Tag";
import Badge from "./Badge";

/**
 * Reusable editorial project card with role, problem, stack, features, tradeoffs, and links.
 */
export default function ProjectCard({ project, onOpen }) {
  const isData = project.category === "data";
  const reduceMotion = useReducedMotion();
  const [tiltEnabled, setTiltEnabled] = useState(false);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 220, damping: 24, mass: 0.6 });
  const rotateY = useSpring(tiltY, { stiffness: 220, damping: 24, mass: 0.6 });

  useEffect(() => {
    const pointerQuery = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)",
    );
    const updateTiltAvailability = () => {
      setTiltEnabled(pointerQuery.matches && !reduceMotion);
    };

    updateTiltAvailability();
    pointerQuery.addEventListener("change", updateTiltAvailability);
    return () => pointerQuery.removeEventListener("change", updateTiltAvailability);
  }, [reduceMotion]);

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 7);
    tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 9);
  };
  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.article
      layoutId={`project-shell-${project.id}`}
      className="project-card-shell h-full"
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" } : undefined}
      onPointerMove={tiltEnabled ? handlePointerMove : undefined}
      onPointerLeave={tiltEnabled ? resetTilt : undefined}
    >
      <Card className="project-card-surface flex h-full min-h-[24rem] flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="mb-5 flex items-center justify-between gap-3">
          <Badge variant={isData ? "accent" : "neutral"}>
            {isData ? "Data Analytics" : "Development"}
          </Badge>
            {project.featured && <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Featured</span>}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-1 font-mono text-xs text-[var(--accent-text)]">
              {project.subtitle}
            </p>
          )}

          <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>

          <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] p-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Project question</span>
            <p className="mt-1 text-sm font-medium leading-relaxed text-[var(--text-primary)]">{project.problem}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => <Tag key={tech} label={tech} />)}
          </div>
        </div>

        <div className="mt-7">
          {project.caseStudyHref ? (
            <a href={project.caseStudyHref} className="project-card-action inline-flex min-h-11 w-full items-center justify-between rounded-lg border border-[var(--border-subtle)] px-4 text-left text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] focus-visible:outline-none">
              <span>Read the full case study</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <button type="button" onClick={() => onOpen(project)} className="project-card-action inline-flex min-h-11 w-full items-center justify-between rounded-lg border border-[var(--border-subtle)] px-4 text-left text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] focus-visible:outline-none">
              <span>Explore project details</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          )}
        </div>
      </Card>
    </motion.article>
  );
}
