import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="label">
          © {year} {site.name}
        </span>
        <nav className="flex flex-wrap gap-6">
          {site.nav.map((item) =>
            item.href.startsWith("mailto:") ? (
              <a key={item.label} href={item.href} className="label hover:text-fg">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="label hover:text-fg"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}
