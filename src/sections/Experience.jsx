import ScrollReveal from "../components/ScrollReveal";
import { EXPERIENCE } from "../data/content";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <ScrollReveal>
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>
      </ScrollReveal>

      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="flex gap-4">
              {/* Timeline dot + line */}
              <div className="flex flex-col items-center pt-1">
                <div
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: "var(--color-accent-soft)",
                    border: "1px solid var(--color-accent-border)",
                  }}
                >
                  <Briefcase
                    size={14}
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
                {i < EXPERIENCE.length - 1 && (
                  <div
                    className="mt-2 w-px flex-1"
                    style={{ background: "var(--color-border)" }}
                  />
                )}
              </div>

              {/* Content card */}
              <div
                className="card mb-2 flex-1 rounded-xl p-5"
                style={{ background: "var(--color-surface)" }}
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold">{item.role}</h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {item.org}
                    </p>
                  </div>
                  <span
                    className="flex-shrink-0 font-mono text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {item.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-2 text-sm leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span
                        className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full"
                        style={{ background: "var(--color-accent)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
