/**
 * Editorial Button primitive supporting variants, icon slots, and polymorphic links.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  href,
  download,
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5 rounded-[var(--radius-md)]",
    md: "px-4 py-2 text-sm gap-2 rounded-[var(--radius-md)]",
    lg: "px-5 py-2.5 text-base gap-2.5 rounded-[var(--radius-lg)]",
  }[size] || "px-4 py-2 text-sm gap-2 rounded-[var(--radius-md)]";

  const variantClasses = {
    primary:
      "bg-[var(--accent-base)] text-white hover:bg-[var(--accent-hover)] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-strong)] active:scale-[0.98]",
    outline:
      "bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-surface)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] active:scale-[0.98]",
  }[variant] || "";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : 16} />}
        {children}
        {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : 16} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : 16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : 16} />}
    </button>
  );
}
