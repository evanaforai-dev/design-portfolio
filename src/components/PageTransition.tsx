"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { COVERED_AT } from "./RouteCurtain";

/**
 * Holds the outgoing view until RouteCurtain has the screen covered, so the
 * swap itself is never visible. The duration is imported rather than repeated:
 * if the curtain's timing changes, this follows it.
 *
 * Keyed on pathname inside the persistent layout, so history, direct URL loads
 * and back/forward are untouched — the animation is purely presentational.
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
        transition={{ duration: COVERED_AT, ease: "linear" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
