"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Minimal persistent nav: wordmark (links home) on the left; a single
 * contextual link and the dot mode-toggle on the right.
 *
 * The right-hand slot is one link whose label + destination flip by route:
 *   work / home  → "about"  → /about
 *   about        → "work"   → /
 */
export function Nav() {
  const pathname = usePathname();
  const onAbout = pathname === "/about";
  const label = onAbout ? "work" : "about";
  const href = onAbout ? "/" : "/about";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 md:px-8">
        <Link href="/" className="text-sm font-medium tracking-tight text-fg">
          {/* Leading Latin "e" replaced by the Malayalam letter ഇ, in electric
              magenta. Optically balanced against the Latin lowercase (size,
              weight, baseline, spacing) via .wordmark-initial so the two scripts
              read as one typographic signature. */}
          <span className="wordmark-initial">ഇ</span>
          {site.wordmark.replace(/^e/, "")}
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={href}
            className="text-sm text-muted transition-colors duration-300 ease-editorial hover:text-fg"
          >
            {label}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
