"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Transition between views (work ↔ about ↔ case studies). Deliberately not a
 * "designed" page transition: no vertical slide, no travel — the outgoing view
 * simply crossfades to the incoming one. You feel the smoothness without ever
 * watching a move, which is what keeps it from reading as a gimmick. Opacity
 * only, ~140ms.
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.14, ease: "linear" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
