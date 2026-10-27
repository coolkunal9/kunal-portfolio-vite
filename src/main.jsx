import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import "./index.css";
import App from "./App.jsx";

function AppRoot() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis;
    let frame;

    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = undefined;
      lenis?.destroy();
      lenis = undefined;
    };

    const start = () => {
      stop();
      if (motionPreference.matches) return;
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      const tick = (time) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    start();
    motionPreference.addEventListener("change", start);
    return () => {
      motionPreference.removeEventListener("change", start);
      stop();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>
);
