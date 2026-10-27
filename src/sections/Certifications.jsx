import { motion, useReducedMotion } from "framer-motion";
import { CERTIFICATIONS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import ScrollReveal from "../components/ScrollReveal";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="certifications">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Training"
          description="Verified course completions and program certifications."
        />
      </ScrollReveal>

      <div className="cert-scroller" role="list" aria-label="Certificates and training" tabIndex={0}>
        {CERTIFICATIONS.map((cert, index) => (
          <motion.article
            key={cert.name}
            role="listitem"
            className="cert-card"
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="flex h-full min-h-40 flex-col justify-between p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-subtle)] text-[var(--accent-text)]">
                  <Award size={16} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)]">{cert.name}</h3>
                  <p className="mt-1 font-mono text-xs text-[var(--text-tertiary)]">{cert.issuer}</p>
                </div>
              </div>
              {cert.fileUrl && (
                <div className="mt-3 border-t border-[var(--border-subtle)] pt-2.5">
                  <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1 font-mono text-[11px] text-[var(--accent-text)] hover:underline">
                    <span>View Certificate</span><ExternalLink size={11} />
                  </a>
                </div>
              )}
            </Card>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
