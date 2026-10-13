import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

/**
 * Wraps children in a fade-up reveal animation triggered on scroll.
 * Respects prefers-reduced-motion via the useReveal hook.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
}) {
  const [ref, visible] = useReveal(threshold);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
