import Link from "next/link";
import { site } from "@/data/site";

/** Minimal footer to match the two-page structure. All copy lowercase. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline">
      <div className="flex items-center justify-between px-6 py-8 md:px-8">
        <span className="text-xs text-muted">
          © {year} {site.name}
        </span>
        <Link
          href="/about"
          className="text-xs text-muted transition-colors duration-300 ease-editorial hover:text-fg"
        >
          about
        </Link>
      </div>
    </footer>
  );
}
