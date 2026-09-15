import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { Reveal } from "@/components/Reveal";

// Statically generate every case study at build time.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Next project (wraps around) for the footer link.
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    project.role && { label: "Role", value: project.role },
    project.client && { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    project.duration && { label: "Timeline", value: project.duration },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article>
      <div className="mx-auto max-w-shell px-6 md:px-10">
        {/* Header */}
        <header className="pt-8 md:pt-16">
          <Link href={project.category === "playground" ? "/playground" : "/"} className="label hover:text-fg">
            ← {project.category === "playground" ? "Playground" : "Work"}
          </Link>

          <h1 className="mt-8 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl md:leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fg/80 md:text-xl">
            {project.summary}
          </p>

          {/* Meta rail */}
          <dl className="mt-12 grid grid-cols-2 gap-px border-t border-hairline md:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="border-b border-hairline py-5 md:border-b-0 md:pr-6">
                <dt className="label">{m.label}</dt>
                <dd className="mt-2 text-sm font-medium text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Cover */}
        <Reveal className="mt-12 md:mt-16">
          <div className="w-full overflow-hidden border border-hairline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.cover} alt={project.title} className="w-full" />
          </div>
        </Reveal>

        {/* Body blocks */}
        <div className="mt-20 md:mt-28">
          <BlockRenderer blocks={project.caseStudyBlocks} />
        </div>
      </div>

      {/* Next project */}
      <div className="mt-32 border-t border-hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <Link href={`/work/${next.slug}`} className="group flex flex-col gap-3 py-12 md:py-16">
            <span className="label">Next</span>
            <span className="text-3xl font-medium tracking-tight text-fg transition-colors duration-300 ease-editorial group-hover:text-muted md:text-5xl">
              {next.title} →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
