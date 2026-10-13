import ScrollReveal from "../components/ScrollReveal";
import { ABOUT, EDUCATION } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="section-label">About</p>
        <h2 className="section-title">A bit about me</h2>
      </ScrollReveal>

      <div className="grid gap-12 md:grid-cols-3">
        {/* Text — spans 2 cols */}
        <ScrollReveal className="md:col-span-2" delay={0.1}>
          <div className="flex flex-col gap-4">
            {ABOUT.paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {text}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Education card */}
        <ScrollReveal delay={0.2}>
          <div
            className="card rounded-2xl p-6"
            style={{ background: "var(--color-surface)" }}
          >
            <p
              className="mb-3 font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--color-accent)" }}
            >
              Education
            </p>
            <h3 className="mb-1 text-sm font-semibold">{EDUCATION.degree}</h3>
            <p
              className="mb-1 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              {EDUCATION.school}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              {EDUCATION.location} · {EDUCATION.period}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
