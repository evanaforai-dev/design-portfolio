import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

/**
 * Edge-to-edge contact-sheet grid: cells touch directly with zero gutter at
 * every breakpoint (3 columns desktop, 2 tablet, 1 mobile). A single hairline
 * frames the whole grid — there are no per-cell borders or gaps.
 *
 * No transforms are used on the cells, so the flush edges never shift or break
 * during animation.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 border border-hairline sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
