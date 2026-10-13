/**
 * Badge primitive for status indicators and micro metadata.
 */
export default function Badge({
  children,
  variant = "neutral",
  dot = false,
  dotColor,
  className = "",
}) {
  const variantClasses = {
    neutral:
      "bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)]",
    accent:
      "bg-[var(--accent-subtle)] text-[var(--accent-text)] border-[var(--accent-border)]",
    success:
      "bg-[var(--color-success-subtle)] text-[var(--color-success)] border-[var(--color-success)]/20",
  }[variant] || "";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium tracking-wide ${variantClasses} ${className}`}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            dotColor || (variant === "success" ? "bg-[var(--color-success)] animate-pulse" : "bg-[var(--accent-base)]")
          }`}
        />
      )}
      {children}
    </span>
  );
}
