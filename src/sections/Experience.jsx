import { EXPERIENCE } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import ScrollReveal from "../components/ScrollReveal";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Work History"
          title="Experience & Internships"
          description="Internship training programs and campus contributions."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {EXPERIENCE.map((exp, idx) => (
          <ScrollReveal key={`${exp.org}-${idx}`} delay={idx * 0.08}>
            <Card className="h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-[var(--accent-text)]">
                    {exp.period}
                  </span>
                </div>

                <p className="font-mono text-xs text-[var(--text-tertiary)] mb-4">
                  {exp.org}
                </p>

                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-[var(--accent-base)] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.credentialNote && (
                <div className="mt-4 border-t border-[var(--border-subtle)] pt-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[var(--accent-text)]">
                    Note: {exp.credentialNote}
                  </span>
                  {exp.credentialUrl && (
                    <a
                      href={exp.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline"
                    >
                      <span>View PDF</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              )}
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
