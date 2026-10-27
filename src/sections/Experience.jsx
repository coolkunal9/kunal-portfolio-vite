import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { EXPERIENCE } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import ScrollReveal from "../components/ScrollReveal";
import { ExternalLink } from "lucide-react";

function TimelineEntry({ experience, index }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.45 });
  const reduceMotion = useReducedMotion();
  const visible = inView || reduceMotion;

  return (
    <article ref={nodeRef} className="timeline-entry relative pl-7 sm:pl-9">
      <motion.span
        aria-hidden="true"
        className="timeline-node absolute left-0 top-7 z-10 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg-canvas)] bg-[var(--accent-cyan)]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={visible ? { opacity: 1, scale: [0.5, 1.2, 1] } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      />
      <Card className="timeline-card p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-bold text-[var(--text-primary)]">{experience.role}</h3>
          <span className="font-mono text-xs text-[var(--accent-text)]">{experience.period}</span>
        </div>
        <p className="mb-4 mt-1 font-mono text-xs text-[var(--text-tertiary)]">{experience.org}</p>
        <ul className="space-y-2 text-xs leading-relaxed text-[var(--text-secondary)]">
          {experience.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex items-start gap-2">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-base)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {experience.credentialNote && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3">
            <span className="font-mono text-[11px] text-[var(--accent-text)]">{experience.credentialNote}</span>
            {experience.credentialUrl && (
              <a href={experience.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">
                <span>View PDF</span><ExternalLink size={11} />
              </a>
            )}
          </div>
        )}
      </Card>
    </article>
  );
}

export default function Experience() {
  const timelineRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 72%", "end 38%"] });

  return (
    <Section id="experience">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Work History"
          title="Experience & Internships"
          description="Internship programs and campus contributions."
        />
      </ScrollReveal>

      <div ref={timelineRef} className="experience-timeline relative">
        <div aria-hidden="true" className="timeline-track absolute bottom-3 left-[6px] top-3 w-px bg-[var(--border-strong)]" />
        <motion.div aria-hidden="true" className="timeline-progress absolute bottom-3 left-[6px] top-3 w-px origin-top" style={{ scaleY: reduceMotion ? 1 : scrollYProgress }} />
        <ScrollReveal variant="stagger" className="space-y-5 sm:space-y-6">
          {EXPERIENCE.map((experience, index) => (
            <TimelineEntry key={`${experience.org}-${index}`} experience={experience} index={index} />
          ))}
        </ScrollReveal>
      </div>
    </Section>
  );
}
