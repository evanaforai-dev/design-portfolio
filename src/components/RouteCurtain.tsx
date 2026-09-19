"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const; // symmetrical: the sweep has no tail
const PANELS = 6;
const STAGGER = 0.025;
const COVER = 0.28;
const REVEAL = 0.32;
/** When the view underneath is fully hidden — cover plus the last panel's delay. */
export const COVERED_AT = COVER + STAGGER * (PANELS - 1);

/**
 * Page transition — the grid performs it.
 *
 * Six columns sweep down across the view, hold it while the route swaps, then
 * keep sweeping down and off. The panels are the page's own background with a
 * hairline on their trailing edge, so what you watch is the grid's column rule
 * travelling over the content: the view is erased column by column and redrawn
 * the same way. No colour is introduced and the motion never reverses.
 *
 * WHY AN EXPLICIT SEQUENCE. The obvious build — panels inside AnimatePresence
 * with an `exit` prop — silently does nothing: framer propagates animation
 * state to nested motion components through variants, not through exit props,
 * so the panels never animate and the route simply swaps. Driving them with
 * animation controls removes the guesswork: cover, then reveal, then a
 * teleport back above the fold while they are off-screen and unseen.
 *
 * Sits at z-40, under the fixed nav at z-50, so the chrome stays put while the
 * content changes beneath it. Skipped entirely under reduced motion, and never
 * runs on first load — landing on the site should not cost you a wipe.
 */
export function RouteCurtain() {
  const pathname = usePathname();
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const first = useRef(true);

  useEffect(() => {
    if (reduceMotion) return;
    if (first.current) {
      first.current = false;
      return;
    }
    let cancelled = false;
    (async () => {
      await controls.start((i: number) => ({
        y: "0%",
        transition: { duration: COVER, ease: EASE, delay: i * STAGGER },
      }));
      if (cancelled) return;
      await controls.start((i: number) => ({
        y: "100%",
        transition: { duration: REVEAL, ease: EASE, delay: i * STAGGER },
      }));
      if (cancelled) return;
      // Re-arm above the fold. Off-screen, so the jump is never seen.
      controls.set({ y: "-100%" });
    })();
    return () => {
      cancelled = true;
    };
  }, [pathname, controls, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 flex"
      style={{ contain: "strict" }}
    >
      {Array.from({ length: PANELS }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          initial={{ y: "-100%" }}
          className={`h-full flex-1 bg-bg ${
            i < PANELS - 1 ? "border-r border-hairline" : ""
          }`}
          style={{ willChange: "transform" }}
        />
      ))}
    </div>
  );
}
