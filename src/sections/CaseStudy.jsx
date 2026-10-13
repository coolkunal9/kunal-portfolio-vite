import ScrollReveal from "../components/ScrollReveal";
import { CASE_STUDY } from "../data/content";
import { BarChart3, Search, Lightbulb, ArrowRight, Image } from "lucide-react";

export default function CaseStudy() {
  const cs = CASE_STUDY;

  return (
    <section id="case-study" className="section">
      <ScrollReveal>
        <p className="section-label">Case Study</p>
        <h2 className="section-title">{cs.title}</h2>
        <p className="section-desc">{cs.subtitle}</p>
      </ScrollReveal>

      <div className="flex flex-col gap-8">
        {/* Business Question */}
        <ScrollReveal delay={0.1}>
          <div
            className="card rounded-2xl p-6"
            style={{ background: "var(--color-surface)" }}
          >
            <div className="mb-3 flex items-center gap-2">
              <Search size={16} style={{ color: "var(--color-accent)" }} />
              <h3
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--color-accent)" }}
              >
                Business Question
              </h3>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              {cs.businessQuestion}
            </p>
          </div>
        </ScrollReveal>

        {/* Data Overview & Cleaning */}
        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.15}>
            <div
              className="card h-full rounded-2xl p-6"
              style={{ background: "var(--color-surface)" }}
            >
              <h3
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Data Overview
              </h3>
              <div className="mb-3 flex flex-wrap gap-3">
                <span className="chip">{cs.dataOverview.records}</span>
                <span className="chip">{cs.dataOverview.countries}</span>
              </div>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Source: {cs.dataOverview.source}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              className="card h-full rounded-2xl p-6"
              style={{ background: "var(--color-surface)" }}
            >
              <h3
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Cleaning Steps
              </h3>
              <ul className="flex flex-col gap-2">
                {cs.cleaningSteps.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span
                      className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: "var(--color-accent)" }}
                    />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Method */}
        <ScrollReveal delay={0.25}>
          <div
            className="card rounded-2xl p-6"
            style={{ background: "var(--color-surface)" }}
          >
            <h3
              className="mb-3 font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Method
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {cs.method}
            </p>
          </div>
        </ScrollReveal>

        {/* Key Findings */}
        <ScrollReveal delay={0.3}>
          <div
            className="card rounded-2xl p-6"
            style={{ background: "var(--color-surface)" }}
          >
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 size={16} style={{ color: "var(--color-accent)" }} />
              <h3
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--color-accent)" }}
              >
                Key Findings
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              {cs.keyFindings.map((finding, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0 font-mono text-xs font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Recommendation */}
        <ScrollReveal delay={0.35}>
          <div
            className="card rounded-2xl p-6"
            style={{
              background: "var(--color-accent-soft)",
              borderColor: "var(--color-accent-border)",
            }}
          >
            <div className="mb-3 flex items-center gap-2">
              <Lightbulb size={16} style={{ color: "var(--color-accent)" }} />
              <h3
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--color-accent)" }}
              >
                Recommendation
              </h3>
            </div>
            <p className="text-sm leading-relaxed">{cs.recommendation}</p>
          </div>
        </ScrollReveal>

        {/* Screenshot Placeholders */}
        <ScrollReveal delay={0.4}>
          <div className="grid gap-4 sm:grid-cols-2">
            {cs.screenshotPlaceholders.map((ph, i) => (
              <div
                key={i}
                className="flex h-48 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                }}
              >
                <Image
                  size={24}
                  style={{ color: "var(--color-text-muted)" }}
                />
                <span
                  className="px-4 text-center font-mono text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {ph}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Tools + Links + What's Next */}
        <div className="grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0.45}>
            <div
              className="card h-full rounded-2xl p-6"
              style={{ background: "var(--color-surface)" }}
            >
              <h3
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Tools
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cs.tools.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div
              className="card h-full rounded-2xl p-6"
              style={{ background: "var(--color-surface)" }}
            >
              <h3
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                View the Data
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {cs.sheetLink}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <div
              className="card h-full rounded-2xl p-6"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="mb-3 flex items-center gap-2">
                <ArrowRight
                  size={14}
                  style={{ color: "var(--color-accent)" }}
                />
                <h3
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-accent)" }}
                >
                  What I'd do next
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {cs.whatNext}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
