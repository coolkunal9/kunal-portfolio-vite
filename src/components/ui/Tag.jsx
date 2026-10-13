/**
 * Tag primitive for tech stacks and keywords.
 */
export default function Tag({ label, size = "sm", className = "" }) {
  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-xs"
      : "px-2.5 py-1 text-xs sm:text-sm";

  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] font-mono text-[var(--text-secondary)] transition-colors hover:border-[var(--border-interactive)] hover:text-[var(--text-primary)] ${sizeClasses} ${className}`}
    >
      {label}
    </span>
  );
}
