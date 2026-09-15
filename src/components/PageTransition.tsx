"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Quiet spatial transition between views (work ↔ about ↔ case studies). Not a
 * cinematic page transition: the outgoing view recedes a few pixels and fades,
 * the incoming view rises a few pixels into place — two views of the same
 * visual system, ~300ms each way with the site's editorial easing.
 *
 * It lives in the persistent layout and is keyed on the pathname, so React
 * Router history, direct URL loads, and back/forward all keep working normally;
 * the animation is purely presentational. Disabled under reduced motion.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.32, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
