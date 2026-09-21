"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Minimal persistent nav: wordmark (links home) on the left; the site's two
 * destinations and the dot mode-toggle on the right.
 *
 * This used to be one link that flipped by route — "about" on the index,
 * "work" on about. It reads well on those two pages and breaks on the ten it
 * does not cover: from a case study the slot says "about", and the only route
 * back to the work is the wordmark, which a visitor has to guess is a link.
 * Both destinations are now always present; the one you are on is dimmed and
 * carries aria-current rather than disappearing.
 */
export function Nav() {
  const pathname = usePathname();
  const onAbout = pathname === "/about";
  const onIndex = pathname === "/";

  const items: { label: string; href: string; current: boolean }[] = [
    { label: "work", href: "/", current: onIndex },
    { label: "about", href: "/about", current: onAbout },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-fg"
          aria-label={`${site.name}, home`}
        >
          {/* Leading Latin "e" replaced by the Malayalam letter ഇ, in electric
              magenta. Optically balanced against the Latin lowercase (size,
              weight, baseline, spacing) via .wordmark-initial so the two scripts
              read as one typographic signature. */}
          <span className="wordmark-initial">ഇ</span>
          {site.wordmark.replace(/^e/, "")}
        </Link>

        <nav aria-label="primary" className="flex items-center gap-5 md:gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`text-sm transition-colors duration-300 ease-editorial hover:text-fg ${
                item.current ? "text-fg opacity-40" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
