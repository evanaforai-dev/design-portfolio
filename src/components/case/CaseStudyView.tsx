import Link from "next/link";
import type { CaseStudy } from "@/types/caseStudy";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { Media, Container } from "./Media";
import { renderSection } from "./Sections";
import { ProjectNavPreview } from "./ProjectNavPreview";

/**
 * Full case-study page: a powerful opening visual, a title/metadata band, the
 * art-directed section sequence, then quiet prev/next navigation.
 */
export function CaseStudyView({ study }: { study: CaseStudy }) {
  const idx = projects.findIndex((p) => p.slug === study.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const { hero, theme } = study;
  const launch = hero.mode === "launch";

  // A themed case study redefines the palette tokens for the whole document,
  // not just its own subtree: the fixed nav lives outside this component, and
  // a launch page with a pale bar across the top of its field is not a launch
  // page. Every text-fg and border-hairline on the route follows automatically,
  // because they all resolve through these variables.
  const themeCss = theme
    ? `:root{--bg:${theme.bg};--fg:${theme.fg};--muted:${theme.fg};` +
      `--hairline:${theme.hairline ?? `${theme.fg}29`};` +
      `--hairline-strong:${theme.hairline ?? `${theme.fg}1f`};color-scheme:dark}`
    : null;

  return (
    <article>
      {themeCss && <style dangerouslySetInnerHTML={{ __html: themeCss }} />}
      {/* Back to index */}
      <Container className="pt-4 md:pt-6">
        <Link href="/" className="label transition-colors hover:text-fg">
          ← index
        </Link>
      </Container>

      {/* Opening visual */}
      <div className={launch ? "mt-2 md:mt-4" : "mt-6 md:mt-8"}>
        {launch ? (
          // No frame, no container, no gutter: the object gets the viewport
          // and stands on its own ground. A hairline box around a product is
          // a specimen case, and a specimen is not a launch.
          <div className="flex min-h-[78vh] w-full items-center justify-center overflow-hidden px-6 py-10 md:min-h-[88vh] md:px-10">
            <Media
              asset={hero.media}
              fit="contain"
              className="max-h-[74vh] w-auto max-w-full md:max-h-[80vh]"
            />
          </div>
        ) : hero.mediaFit === "contain" ? (
          <Container>
            <div className="flex items-center justify-center border border-hairline py-12 md:py-20">
              <Media
                asset={hero.media}
                fit="contain"
                className="max-h-[74vh] w-auto max-w-full"
              />
            </div>
          </Container>
        ) : (
          <div className="h-[62vh] w-full overflow-hidden md:h-[82vh]">
            <Media
              asset={hero.media}
              fit="cover"
              position={hero.mediaPosition}
              className="h-full w-full"
            />
          </div>
        )}
      </div>

      {/* Title + metadata band */}
      <Container className="py-14 md:py-20">
        {hero.kicker && <p className="label mb-6">{hero.kicker}</p>}
        <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.05] tracking-tight text-fg md:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-[42rem] text-lg text-fg md:text-2xl md:leading-snug">
          {hero.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px border-t border-hairline sm:grid-cols-3 md:mt-16 lg:grid-cols-4">
          {hero.meta.map((m) => (
            <div key={m.label} className="border-b border-hairline py-5 pr-6">
              <dt className="label">{m.label}</dt>
              <dd className="mt-2 text-sm font-medium text-fg">{m.value}</dd>
            </div>
          ))}
        </div>

        {hero.links && hero.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-6">
            {hero.links.map((l) => {
              // An internal href is a route on this site: send it through Link
              // so it picks up the basePath. A raw <a> would resolve against
              // the domain root and 404 on a project-path host.
              const external = l.href.startsWith("http");
              const className =
                "text-sm text-fg underline-offset-4 hover:underline";
              return external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {l.label} ↗
                </a>
              ) : (
                <Link key={l.href} href={l.href} className={className}>
                  {l.label} →
                </Link>
              );
            })}
          </div>
        )}
      </Container>

      {/* Sections */}
      {study.sections.map((s, i) => renderSection(s, i))}

      {/* Prev / next — archive-style, with a static neighbour preview on hover */}
      <Reveal>
        <ProjectNavPreview prev={prev} next={next} />
      </Reveal>
    </article>
  );
}
