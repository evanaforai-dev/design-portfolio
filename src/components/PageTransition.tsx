"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const; // symmetrical in/out: the sweep has no tail
const PANELS = 6;
const STAGGER = 0.025;
const COVER = 0.28;
const REVEAL = 0.32;

/**
 * Page transition — the grid performs it.
 *
 * Six columns sweep down across the view, hold it for the swap, then keep
 * sweeping down and off. The panels are the page's own background with a
 * hairline on their trailing edge, so what you actually watch is the grid's
 * column rule travelling over the content: the view is erased column by column
 * and redrawn the same way. Nothing flashes, no colour is introduced, and the
 * motion never reverses.
 *
 * WHY TWO LAYERS. A single set of panels cannot do this. The cover and the
 * reveal both travel downward, so one element would have to jump back above
 * the fold between them. Instead COVER only ever animates on exit (resting off
 * the top) and REVEAL only ever animates on entry (resting off the bottom);
 * each keyed view brings a fresh pair, and the two halves read as one
 * continuous pass.
 *
 * It sits at z-40, below the fixed nav at z-50, so the chrome stays put while
 * the content changes underneath it.
 *
 * Keyed on pathname inside the persistent layout, so history, direct URL loads
 * and back/forward are untouched — the animation is purely presentational.
 * Skipped entirely under reduced motion.
 */
function Curtain({
  mode,
}: {
  /** "cover" animates on exit; "reveal" animates on entry. */
  mode: "cover" | "reveal";
}) {
  const cover = mode === "cover";
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 flex"
      style={{ contain: "strict" }}
    >
      {Array.from({ length: PANELS }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-full flex-1 bg-bg ${i < PANELS - 1 ? "border-r border-hairline" : ""}`}
          style={{ willChange: "transform" }}
          initial={{ y: cover ? "-100%" : "0%" }}
          animate={{ y: cover ? "-100%" : "100%" }}
          exit={{ y: cover ? "0%" : "100%" }}
          transition={{
            duration: cover ? COVER : REVEAL,
            ease: EASE,
            delay: i * STAGGER,
          }}
        />
      ))}
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname}>
        {/* The content itself only fades, and only enough to soften the swap
            happening behind the panels. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "linear" }}
        >
          {children}
        </motion.div>
        <Curtain mode="cover" />
        <Curtain mode="reveal" />
      </motion.div>
    </AnimatePresence>
  );
}
