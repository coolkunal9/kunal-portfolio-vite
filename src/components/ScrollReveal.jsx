import { Children, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const VARIANTS = { fadeUp, scaleIn, stagger: staggerContainer };

/**
 * Shared scroll reveal wrapper with fadeUp, scaleIn, and stagger variants.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
  variant = "fadeUp",
}) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: Math.min(threshold, 1), margin: "0px 0px -80px 0px" });
  const reduceMotion = useReducedMotion();
  const selectedVariant = VARIANTS[variant] ? variant : "fadeUp";
  const revealState = visible || reduceMotion ? "visible" : "hidden";
  const childrenWithMotion =
    selectedVariant === "stagger"
      ? Children.toArray(children).map((child, index) => (
          <motion.div
            key={child.key ?? index}
            variants={staggerItem}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {child}
          </motion.div>
        ))
      : children;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={VARIANTS[selectedVariant]}
      initial={reduceMotion ? false : "hidden"}
      animate={revealState}
      transition={
        selectedVariant === "stagger"
          ? { delayChildren: reduceMotion ? 0 : delay, staggerChildren: reduceMotion ? 0 : 0.1 }
          : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {childrenWithMotion}
    </motion.div>
  );
}
