import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

/**
 * Uniform gallery-wall grid: 3 columns desktop, 2 tablet, 1 mobile.
 * Consistent gutter, no asymmetric spans — used for both Work and Playground.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
