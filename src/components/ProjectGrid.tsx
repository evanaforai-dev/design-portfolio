import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

/**
 * Square-cell grid with explicit, visible hairline grid lines, like graph
 * paper. 4 columns desktop, 2 tablet, 1 mobile.
 *
 * Border technique avoids doubled lines: the container draws the top + left
 * frame, and every cell draws only its right + bottom line. Adjacent cells
 * therefore share a single 1px hairline, and there is no outer gutter beyond
 * the line itself.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <div key={project.slug} className="border-b border-r border-hairline">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
