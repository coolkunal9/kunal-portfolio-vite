import { CERTIFICATIONS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import ScrollReveal from "../components/ScrollReveal";
import { Award, ExternalLink } from "lucide-react";

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
            <Card className="p-4 flex flex-col justify-between h-full">
              <div className="flex items-start gap-3">
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
              </div>

              {cert.fileUrl && (
                <div className="mt-3 border-t border-[var(--border-subtle)] pt-2.5">
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--accent-text)] hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              )}
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
