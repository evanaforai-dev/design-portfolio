"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Minimal text toggle: shows the mode you'll switch TO.
 * Renders a stable label until mounted to avoid hydration mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`label transition-colors duration-300 ease-editorial hover:text-fg ${className}`}
    >
      {mounted ? (theme === "dark" ? "Light" : "Dark") : "Theme"}
    </button>
  );
}
