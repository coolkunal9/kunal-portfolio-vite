/**
 * Form Textarea primitive with accessible labels and error handling.
 */
export default function Textarea({
  id,
  name,
  label,
  rows = 4,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = "",
  ...props
}) {
  const textareaId = id || name;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]"
        >
          {label}
          {required && <span className="text-[var(--color-error)] ml-0.5">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={`w-full rounded-[var(--radius-md)] border bg-[var(--bg-canvas)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors focus:border-[var(--accent-base)] resize-y ${
          error ? "border-[var(--color-error)]" : "border-[var(--border-strong)]"
        }`}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="text-xs text-[var(--color-error)] mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}
