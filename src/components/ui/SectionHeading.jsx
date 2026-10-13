/**
 * Standard section heading with category eyebrow, main title, and description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignmentClass =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <header className={`mb-10 sm:mb-14 flex flex-col ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
