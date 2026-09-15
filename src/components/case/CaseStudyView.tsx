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
  const { hero } = study;

  return (
    <article>
      {/* Back to index */}
      <Container className="pt-4 md:pt-6">
        <Link href="/" className="label transition-colors hover:text-fg">
          ← index
        </Link>
      </Container>

      {/* Opening visual */}
      <div className="mt-6 md:mt-8">
        {hero.mediaFit === "contain" ? (
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
        <p className="mt-6 max-w-[42rem] text-lg text-fg/80 md:text-2xl md:leading-snug">
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
            {hero.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-sm text-fg underline-offset-4 hover:underline"
              >
                {l.label} ↗
              </a>
            ))}
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
