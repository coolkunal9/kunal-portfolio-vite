import { CERTIFICATIONS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import ScrollReveal from "../components/ScrollReveal";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <Section id="certifications">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Training"
          description="Verified course completions and program certifications."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, idx) => (
          <ScrollReveal key={`${cert.name}-${idx}`} delay={idx * 0.06}>
            <Card className="p-4 flex items-start gap-3 h-full">
              <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-subtle)] text-[var(--accent-text)] shrink-0">
                <Award size={16} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--text-tertiary)]">
                  {cert.issuer}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
