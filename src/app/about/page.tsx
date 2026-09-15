import type { Metadata } from "next";
import { about, site } from "@/data/site";

export const metadata: Metadata = {
  title: "about",
  description: about.headline,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-shell px-6 md:px-10">
      <section className="border-b border-hairline pb-16 pt-8 md:pb-24 md:pt-16">
        <p className="label mb-6">about</p>
        <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-fg md:text-5xl md:leading-[1.1]">
          {about.headline}
        </h1>
      </section>

      <div className="grid grid-cols-1 gap-16 py-16 md:grid-cols-12 md:gap-10 md:py-20">
        {/* Bio */}
        <div className="md:col-span-7 md:col-start-1">
          <h2 className="label mb-6">bio</h2>
          <div className="max-w-2xl space-y-5">
            {about.bio.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-fg/90">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Meta rail */}
        <aside className="flex flex-col gap-12 md:col-span-4 md:col-start-9">
          <div>
            <h2 className="label mb-4">background</h2>
            <ul className="flex flex-col">
              {about.background.map((item) => (
                <li
                  key={item.period}
                  className="flex flex-col gap-1 border-t border-hairline py-4"
                >
                  <span className="font-mono text-xs font-light text-muted">
                    {item.period}
                  </span>
                  <span className="text-sm font-medium text-fg">
                    {item.role}
                  </span>
                  <span className="text-sm text-muted">{item.place}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label mb-4">tools &amp; practice</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {about.tools.map((tool) => (
                <li key={tool} className="text-sm text-fg/80">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label mb-4">elsewhere</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-fg underline-offset-4 hover:underline"
                >
                  résumé (pdf) ↗
                </a>
              </li>
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-sm text-fg underline-offset-4 hover:underline"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
