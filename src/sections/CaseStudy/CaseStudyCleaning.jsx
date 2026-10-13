import { CASE_STUDY } from "../../data/content";
import Card from "../../components/ui/Card";
import ScrollReveal from "../../components/ScrollReveal";
import { Search } from "lucide-react";

export default function CaseStudyCleaning() {
  const cs = CASE_STUDY;

  return (
    <div className="space-y-6">
      {/* Business Question */}
      <ScrollReveal delay={0.1}>
        <Card>
          <div className="mb-2 flex items-center gap-2">
            <Search size={16} className="text-[var(--accent-text)]" />
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)]">
              Core Business Question
            </h3>
          </div>
          <p className="text-base font-semibold text-[var(--text-primary)]">
            "{cs.businessQuestion}"
          </p>
        </Card>
      </ScrollReveal>

      {/* Dataset Overview & Cleaning */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ScrollReveal delay={0.15}>
          <Card className="h-full flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                Dataset Overview
              </h3>
              <div className="space-y-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                <p>
                  <strong className="text-[var(--text-primary)]">Records:</strong>{" "}
                  {cs.dataOverview.records}
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Coverage:</strong>{" "}
                  {cs.dataOverview.coverage}
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Source &amp; Scope:</strong>{" "}
                  {cs.dataOverview.source}
                </p>
              </div>
            </div>

            {cs.method && (
              <div className="mt-4 border-t border-[var(--border-subtle)] pt-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] block mb-1">
                  Analytical Methodology
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {cs.method}
                </p>
              </div>
            )}
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Card className="h-full">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
              Data Cleaning Process
            </h3>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
              {cs.cleaningSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-mono font-bold text-[var(--accent-text)]">
                    0{i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
