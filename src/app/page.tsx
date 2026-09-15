import { ProjectGrid } from "@/components/ProjectGrid";
import { workProjects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-shell px-6 md:px-10">
      {/* Intro — name, role, one sentence. */}
      <section className="border-b border-hairline pb-16 pt-8 md:pb-24 md:pt-16">
        <p className="label mb-6">
          {site.name} — {site.role}
        </p>
        <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-fg md:text-5xl md:leading-[1.1]">
          {site.intro}
        </h1>
      </section>

      {/* Work grid */}
      <section className="py-16 md:py-20">
        <div className="mb-10 flex items-baseline justify-between md:mb-14">
          <h2 className="label">Selected Work</h2>
          <span className="font-mono text-xs font-light text-muted">
            {String(workProjects.length).padStart(2, "0")}
          </span>
        </div>
        <ProjectGrid projects={workProjects} />
      </section>
    </div>
  );
}
