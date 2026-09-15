import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { playgroundProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Playground",
  description: "Side projects, experiments, and studio practice.",
};

export default function PlaygroundPage() {
  return (
    <div className="mx-auto max-w-shell px-6 md:px-10">
      <section className="border-b border-hairline pb-16 pt-8 md:pb-24 md:pt-16">
        <p className="label mb-6">Playground</p>
        <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-fg md:text-5xl md:leading-[1.1]">
          Experiments, tools, and studio practice — looser than the work, and
          all the better for it.
        </h1>
      </section>

      <section className="py-16 md:py-20">
        <div className="mb-10 flex items-baseline justify-between md:mb-14">
          <h2 className="label">Side Projects</h2>
          <span className="font-mono text-xs font-light text-muted">
            {String(playgroundProjects.length).padStart(2, "0")}
          </span>
        </div>
        <ProjectGrid projects={playgroundProjects} />
      </section>
    </div>
  );
}
