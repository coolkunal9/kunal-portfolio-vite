import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CASE_STUDY } from "../../data/content";
import Card from "../../components/ui/Card";
import ScrollReveal from "../../components/ScrollReveal";
import { BarChart3, CircleDot, TrendingUp } from "lucide-react";

const format = (value) => value.toLocaleString("en-IN");

function useChartVisible() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  return { ref, ready: inView || reduceMotion, reduceMotion };
}

function KpiCards() {
  return (
    <ScrollReveal variant="stagger" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {CASE_STUDY.dashboard.metrics.map((metric, index) => (
        <Card key={metric.label} className="case-kpi-card border-[var(--border-subtle)] p-4 sm:p-5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">0{index + 1} / {metric.label}</span>
          <strong className="mt-3 block font-mono text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {format(metric.value)}
          </strong>
        </Card>
      ))}
    </ScrollReveal>
  );
}

function EngagementChart() {
  const { ref, ready, reduceMotion } = useChartVisible();
  const entries = CASE_STUDY.dashboard.engagement;
  const max = Math.max(...entries.map((entry) => entry.averageVotes));
  const engagementSummary = entries
    .map(({ country, averageVotes, listings }) =>
      `${country} has approximately ${averageVotes.toFixed(1)} average votes across ${listings} listings`,
    )
    .join("; ");

  return (
    <Card className="h-full p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">Market snapshot</p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">Average votes per listing</h3>
        </div>
        <BarChart3 size={18} className="text-[var(--accent-cyan)]" aria-hidden="true" />
      </div>
      <div ref={ref} className="mt-6 space-y-5" role="img" aria-label={engagementSummary}>
        {entries.map((entry, index) => (
          <div key={entry.country}>
            <div className="mb-2 flex items-baseline justify-between gap-3 text-xs">
              <span className="font-medium text-[var(--text-primary)]">{entry.country}</span>
              <span className="font-mono text-[var(--text-tertiary)]">{entry.approximate ? "~" : ""}{format(entry.averageVotes)} avg · {format(entry.listings)} listings</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[var(--bg-surface-hover)]">
              <motion.div
                className="case-bar-fill h-full rounded-full"
                initial={{ scaleX: reduceMotion ? 1 : 0 }}
                animate={{ scaleX: ready ? 1 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: `${(entry.averageVotes / max) * 100}%`, originX: 0 }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 border-t border-[var(--border-subtle)] pt-3 text-xs leading-relaxed text-[var(--text-tertiary)]">Votes indicate listing engagement in this dataset, not total market demand.</p>
    </Card>
  );
}

function RatingShareChart() {
  const { ref, ready, reduceMotion } = useChartVisible();
  const shares = CASE_STUDY.dashboard.ratingsShare;
  const leadingShare = shares[0];

  return (
    <Card className="h-full p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">Rated restaurants</p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">Share rated 4.0+</h3>
        </div>
        <CircleDot size={18} className="text-[var(--accent-cyan)]" aria-hidden="true" />
      </div>
      <div ref={ref} className="mt-5 flex items-center gap-5 sm:gap-7">
        <svg className="h-28 w-28 shrink-0" viewBox="0 0 120 120" role="img" aria-label={`${leadingShare.country}: ${leadingShare.share}% of rated restaurants scored 4.0 or higher`}>
          <defs>
            <linearGradient id="rating-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent-base)" />
              <stop offset="100%" stopColor="var(--accent-cyan)" />
            </linearGradient>
          </defs>
          <g transform="rotate(-90 60 60)">
            <circle cx="60" cy="60" r="46" fill="none" stroke="var(--bg-surface-hover)" strokeWidth="10" />
            <motion.circle
              cx="60" cy="60" r="46" fill="none" stroke="url(#rating-ring)" strokeWidth="10" strokeLinecap="round"
              pathLength={1}
              initial={{ pathLength: reduceMotion ? leadingShare.share / 100 : 0 }}
              animate={{ pathLength: ready ? leadingShare.share / 100 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeOut" }}
            />
          </g>
        </svg>
        <div>
          <strong className="font-mono text-3xl font-semibold text-[var(--text-primary)]">{leadingShare.share}%</strong>
          <p className="mt-1 text-sm leading-snug text-[var(--text-secondary)]">{leadingShare.country} restaurants rated 4.0 or higher</p>
        </div>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--border-subtle)] pt-4 text-xs">
        {shares.map((item) => (
          <li key={item.country} className="flex items-center justify-between gap-2 text-[var(--text-secondary)]">
            <span>{item.country}</span><span className="font-mono text-[var(--text-primary)]">{item.share}%</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function CityRatingsChart() {
  const { ref, ready, reduceMotion } = useChartVisible();
  const ratings = CASE_STUDY.dashboard.cityRatings;
  const points = useMemo(() => {
    const min = 3.5;
    const max = 4.5;
    return ratings.map((item, index) => ({
      ...item,
      x: 52 + index * 98,
      y: 27 + ((max - item.rating) / (max - min)) * 120,
    }));
  }, [ratings]);
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

  return (
    <Card className="p-5 sm:p-6 md:col-span-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">City screen</p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">Average restaurant rating</h3>
        </div>
        <TrendingUp size={18} className="text-[var(--accent-cyan)]" aria-hidden="true" />
      </div>
      <div ref={ref} className="mt-4 overflow-hidden">
        <svg viewBox="0 0 500 205" className="w-full" role="img" aria-label={ratings.map((point) => `${point.city}: ${point.rating}`).join(". ")}>
          {[27, 87, 147].map((y, index) => (
            <g key={y}>
              <line x1="42" y1={y} x2="472" y2={y} stroke="var(--border-subtle)" strokeDasharray="3 5" />
              <text x="2" y={y + 4} fill="var(--text-tertiary)" fontSize="10">{(4.5 - index * 0.5).toFixed(1)}</text>
            </g>
          ))}
          <motion.path d={path} fill="none" stroke="url(#city-line)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: reduceMotion ? 1 : 0 }} animate={{ pathLength: ready ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeInOut" }} />
          <defs>
            <linearGradient id="city-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--accent-base)" />
              <stop offset="100%" stopColor="var(--accent-cyan)" />
            </linearGradient>
          </defs>
          {points.map((point) => (
            <g key={point.city}>
              <motion.circle cx={point.x} cy={point.y} r="4.5" fill="var(--bg-surface)" stroke="var(--accent-cyan)" strokeWidth="2.5" initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : 0.8 }} />
              <text x={point.x} y="177" textAnchor="middle" fill="var(--text-tertiary)" fontSize="10">{point.city}</text>
              <text x={point.x} y={point.y - 11} textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">{point.rating.toFixed(2)}</text>
            </g>
          ))}
        </svg>
      </div>
    </Card>
  );
}

export default function DashboardCharts() {
  return (
    <div className="space-y-5">
      <KpiCards />
      <ScrollReveal variant="stagger" className="grid gap-5 lg:grid-cols-2">
        <EngagementChart />
        <RatingShareChart />
      </ScrollReveal>
      <ScrollReveal><CityRatingsChart /></ScrollReveal>
    </div>
  );
}
