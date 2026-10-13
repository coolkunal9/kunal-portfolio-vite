import { ABOUT, EDUCATION } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <Section id="about">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Background"
          title="About Me"
          description="Bridging software engineering with analytical insights."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Bio Text */}
        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <div className="space-y-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {ABOUT.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </ScrollReveal>

        {/* Education Card */}
        <ScrollReveal delay={0.2} className="lg:col-span-5">
          <Card className="h-full flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)]">
                Education
              </span>
              <h3 className="mt-2 text-lg font-bold text-[var(--text-primary)]">
                {EDUCATION.degree}
              </h3>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                {EDUCATION.institution}
              </p>
              <p className="mt-1 font-mono text-xs text-[var(--text-tertiary)]">
                {EDUCATION.duration} &bull; {EDUCATION.location}
              </p>
            </div>

            <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
              <p className="text-xs text-[var(--text-secondary)]">
                Focus on software design, data systems, and web architecture.
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
}
