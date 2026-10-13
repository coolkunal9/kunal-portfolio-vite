import ScrollReveal from "../components/ScrollReveal";
import { CERTIFICATIONS } from "../data/content";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <ScrollReveal>
        <p className="section-label">Certifications</p>
        <h2 className="section-title">Credentials</h2>
      </ScrollReveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <ScrollReveal key={cert.name} delay={i * 0.06}>
            <div
              className="card flex items-center gap-3 rounded-xl p-4"
              style={{ background: "var(--color-surface)" }}
            >
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                style={{
                  background: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-border)",
                }}
              >
                <Award
                  size={16}
                  style={{ color: "var(--color-accent)" }}
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-tight">
                  {cert.name}
                </p>
                <p
                  className="font-mono text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {cert.issuer}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
