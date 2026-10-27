import { CASE_STUDY } from "../../data/content";
import Card from "../../components/ui/Card";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowRight, Sparkles } from "lucide-react";

const CLEANING_ROWS = [
  { field: "Rating", before: "1.0 or unrated", after: "Rating_Clean set to missing" },
  { field: "Cost", before: "Zero values", after: "Treated as missing" },
  { field: "Coordinates", before: "Zero coordinate values", after: "Treated as missing" },
  { field: "Country", before: "Source labels", after: "Standardized via lookup" },
  { field: "International costs", before: "Original currency", after: "Converted to INR" },
];

export default function CaseStudyCleaning() {
  const cs = CASE_STUDY;

  return (
    <ScrollReveal>
      <Card className="case-cleaning-panel overflow-hidden p-5 sm:p-7">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">Data preparation</p>
            <h3 className="mt-1 text-xl font-semibold text-[var(--text-primary)]">Before / after cleaning</h3>
          </div>
          <Sparkles size={18} className="text-[var(--accent-cyan)]" aria-hidden="true" />
        </div>

        <div className="case-cleaning-head hidden grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_24px_minmax(0,1fr)] gap-3 border-b border-[var(--border-subtle)] pb-3 sm:grid">
          <span>Field</span><span>Source value</span><span /><span>Cleaning treatment</span>
        </div>
        <div className="divide-y divide-[var(--border-subtle)]">
          {CLEANING_ROWS.map((row) => (
            <div key={row.field} className="case-cleaning-row grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_18px_minmax(0,1fr)] items-center gap-2 py-3 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_24px_minmax(0,1fr)] sm:gap-3">
              <strong className="text-xs font-semibold text-[var(--text-primary)]">{row.field}</strong>
              <span className="text-[11px] leading-snug text-[var(--text-tertiary)] sm:text-xs">{row.before}</span>
              <ArrowRight size={14} className="text-[var(--accent-text)]" aria-hidden="true" />
              <span className="text-[11px] font-medium leading-snug text-[var(--text-secondary)] sm:text-xs">{row.after}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 border-t border-[var(--border-subtle)] pt-3 text-xs leading-relaxed text-[var(--text-tertiary)]">Raw fields were preserved on a separate sheet while helper fields were used for analysis.</p>
        <p className="sr-only">{cs.cleaningSteps.join(". ")}</p>
      </Card>
    </ScrollReveal>
  );
}
