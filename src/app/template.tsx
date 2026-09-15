"use client";

import { motion } from "framer-motion";

/**
 * template.tsx re-mounts on every navigation, so a subtle fade here gives the
 * whole site a quiet page-transition. Minimal and precise — no big entrances.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
