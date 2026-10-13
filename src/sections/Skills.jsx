import ScrollReveal from "../components/ScrollReveal";
import { SKILLS } from "../data/content";
import { BookOpen } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <ScrollReveal>
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.groups.map((group, gi) => (
          <ScrollReveal key={group.title} delay={gi * 0.1}>
            <div
              className="card h-full rounded-2xl p-6"
              style={{ background: "var(--color-surface)" }}
            >
              {/* Group header */}
              <div className="mb-4 flex items-center gap-2">
                {group.isLearning && (
                  <BookOpen
                    size={14}
                    style={{ color: "var(--color-accent)" }}
                  />
                )}
                <h3
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{
                    color: group.isLearning
                      ? "var(--color-accent)"
                      : "var(--color-text-muted)",
                  }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Skill items */}
              <ul className="flex flex-col gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span
                      className="inline-block h-1 w-1 flex-shrink-0 rounded-full"
                      style={{
                        background: group.isLearning
                          ? "var(--color-accent)"
                          : "var(--color-text-muted)",
                      }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
