import Container from "./Container";

/**
 * Standard semantic section with consistent vertical rhythm.
 */
export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  noContainer = false,
  ...props
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 lg:py-24 ${className}`}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
