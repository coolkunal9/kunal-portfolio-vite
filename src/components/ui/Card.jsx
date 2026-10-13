/**
 * Card primitive with 1px border rule and optional hover elevation.
 */
export default function Card({
  children,
  className = "",
  interactive = false,
  as: Component = "div",
  ...props
}) {
  const interactiveClasses = interactive
    ? "transition-all duration-200 hover:border-[var(--border-interactive)] hover:bg-[var(--bg-surface-hover)] hover:-translate-y-0.5"
    : "";

  return (
    <Component
      className={`rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
