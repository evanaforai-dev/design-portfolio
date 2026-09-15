import Link from "next/link";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Minimal persistent nav: wordmark (links home) on the left; the "about" link
 * and the dot mode-toggle on the right. No menu, no other links.
 */
export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-fg"
        >
          {site.wordmark}
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-muted transition-colors duration-300 ease-editorial hover:text-fg"
          >
            about
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
