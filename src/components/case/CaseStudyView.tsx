import Link from "next/link";
import type { CaseStudy } from "@/types/caseStudy";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { Media, Container } from "./Media";
import { renderSection } from "./Sections";
import { ProjectNavPreview } from "./ProjectNavPreview";

/**
 * Is a case study's own ground dark? Relative luminance of the hex, WCAG's
 * formula, with the usual 0.5-ish split. Used only to decide what to tell the
 * browser about the page (color-scheme) and which end of the accent to use.
 */
function isDarkGround(hex: string): boolean {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h.slice(0, 6);
  const channel = (i: number) => {
    const v = parseInt(full.slice(i * 2, i * 2 + 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const l = 0.2126 * channel(0) + 0.7152 * channel(1) + 0.0722 * channel(2);
  return l < 0.22;
}

/**
 * Full case-study page: a powerful opening visual, a title/metadata band, the
 * art-directed section sequence, then quiet prev/next navigation.
 */
export function CaseStudyView({ study }: { study: CaseStudy }) {
  /*
   * Walk the listed projects only. An `unlisted` project keeps its route and
   * drops off the index (ProjectGrid already filters it out), but this bar
   * used to walk the raw array, so a page that existed only as a link from
   * another case study still turned up at the foot of its neighbour as "next
   * project". That is how kai, which is a chapter of the airtribe ai skills
   * page, appeared underneath it as the thing to read next.
   */
  const ordered = projects.filter((p) => !p.unlisted);
  // An unlisted study is not in `ordered`; anchor it at the top of the list
  // rather than letting findIndex's -1 wrap into an arbitrary pair.
  const idx = Math.max(0, ordered.findIndex((p) => p.slug === study.slug));
  const prev = ordered[(idx - 1 + ordered.length) % ordered.length];
  const next = ordered[(idx + 1) % ordered.length];
  const { hero, theme } = study;
  const launch = hero.mode === "launch";

  // Literal class names, so Tailwind's content scan can see them.
  const metaCols =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
    }[Math.min(hero.meta.length, 5)] ?? "lg:grid-cols-4";

  // A themed case study redefines the palette tokens for the whole document,
  // not just its own subtree: the fixed nav lives outside this component, and
  // a launch page with a pale bar across the top of its field is not a launch
  // page. Every text-fg and border-hairline on the route follows automatically,
  // because they all resolve through these variables.
  //
  // color-scheme and the accent are read off the theme's own ground rather
  // than assumed. This used to declare `color-scheme: dark` for every themed
  // page, which is right for the launch register and wrong for kai, whose
  // ground is near-white: that page was handing the browser a dark scrollbar
  // to draw down the side of a white document. The accent follows the same
  // measurement, so the wordmark keeps its contrast either way.
  const dark = theme ? isDarkGround(theme.bg) : false;
  const themeCss = theme
    ? `:root{--bg:${theme.bg};--fg:${theme.fg};--muted:${theme.fg};` +
      `--hairline:${theme.hairline ?? `${theme.fg}29`};` +
      `--hairline-strong:${theme.hairline ?? `${theme.fg}1f`};` +
      `--accent:${dark ? "#fc0fc0" : "#d400a0"};` +
      `color-scheme:${dark ? "dark" : "light"}}`
    : null;

  return (
    <article>
      {themeCss && <style dangerouslySetInnerHTML={{ __html: themeCss }} />}
      {/* Back to the index. Says "work" because that is what the nav and the
          footer call it; "index" was a third word for one place. */}
      <Container className="pt-4 md:pt-6">
        <Link
          href="/"
          className="label underline-offset-4 transition-colors hover:underline"
        >
          ← all work
        </Link>
      </Container>

      {/* Opening visual */}
      <div className={launch ? "mt-2 md:mt-4" : "mt-6 md:mt-8"}>
        {launch ? (
          // No frame, no container, no gutter: the object gets the viewport
          // and stands on its own ground. A hairline box around a product is
          // a specimen case, and a specimen is not a launch.
          <div className="h-[70vh] w-full overflow-hidden md:h-screen">
            <Media
              asset={hero.media}
              fit="cover"
              position={hero.mediaPosition}
              className="h-full w-full"
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

        {/*
          One row, always. Fixed at four columns, a five-item band wrapped its
          last entry onto a row of its own under a rule that stopped a quarter
          of the way across: it read as unfinished rather than composed. The
          wide column count is now the item count, so the band divides exactly
          however many facts a project has. (Also a <dl>: dt/dd inside a plain
          div is not a description list to anything reading the page.)
        */}
        <dl
          className={`mt-12 grid grid-cols-2 gap-px border-t border-hairline sm:grid-cols-3 md:mt-16 ${metaCols}`}
        >
          {hero.meta.map((m) => (
            <div key={m.label} className="border-b border-hairline py-5 pr-6">
              <dt className="label">{m.label}</dt>
              <dd className="mt-2 text-sm font-medium text-fg">{m.value}</dd>
            </div>
          ))}
        </dl>

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
