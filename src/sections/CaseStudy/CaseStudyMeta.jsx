import { CASE_STUDY } from "../../data/content";
import Card from "../../components/ui/Card";
import Tag from "../../components/ui/Tag";
import ScrollReveal from "../../components/ScrollReveal";
import { Image, ArrowRight, AlertTriangle, ExternalLink } from "lucide-react";

export default function CaseStudyMeta() {
  const cs = CASE_STUDY;

  return (
    <div className="space-y-6">
      {/* Limitations Block */}
      {cs.limitations && cs.limitations.length > 0 && (
        <ScrollReveal delay={0.32}>
          <Card className="p-5 border-[var(--border-strong)]">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={15} className="text-amber-500" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Methodological Limitations
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              {cs.limitations.map((lim, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-amber-500 shrink-0" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>
      )}

      {/* Visual Placeholders (Only render if image assets actually exist) */}
      {cs.screenshotPlaceholders && cs.screenshotPlaceholders.length > 0 && (
        <ScrollReveal delay={0.35}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cs.screenshotPlaceholders.map((label, i) => (
              <div
                key={i}
                className="flex h-36 flex-col items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-dashed border-[var(--border-strong)] bg-[var(--bg-surface)] p-4 text-center"
              >
                <Image size={20} className="text-[var(--text-tertiary)]" />
                <span className="font-mono text-xs text-[var(--text-tertiary)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Tools, Sheet Link, and What Next */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ScrollReveal delay={0.4}>
          <Card className="h-full">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cs.tools.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <Card className="h-full">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
              Dataset Access
            </h3>
            <a
              href={cs.sheetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-text)] hover:underline"
            >
              <span>Google Sheet Screener</span>
              <ExternalLink size={13} />
            </a>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <Card className="h-full">
            <div className="flex items-center gap-1.5 mb-2">
              <ArrowRight size={14} className="text-[var(--accent-text)]" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)]">
                What I Would Do Next
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              {cs.whatNext}
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
