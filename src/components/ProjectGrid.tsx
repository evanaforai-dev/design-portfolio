import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/**
 * Persistent architectural grid. A fixed rectangle of square cells is always
 * rendered — projects are objects placed into chosen cells, the rest stay
 * empty. Because every slot (occupied or not) is a real bordered cell, the
 * hairline grid lines continue across the ENTIRE project area, empty cells
 * included. There are no per-card borders.
 *
 * The slot count (12) is a multiple of the column counts (4 / 2 / 1), so the
 * grid stays a clean, gap-free rectangle at every breakpoint.
 *
 * Border technique (no doubled lines): the container draws the top + left
 * frame; each cell draws only its right + bottom line.
 */

// Which project sits in which cell. `null` = an intentionally empty cell.
// Laid out for the 4-column desktop reading:
//   villains   .          lipi       .
//   .          deep cuts  .          soundmap
//   .          .          kochi      .
const SLOTS: (string | null)[] = [
  "a-century-of-villains", null, "lipi", null,
  null, "deep-cuts", null, "soundmap",
  null, null, "kochi-water-metro", null,
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
      {SLOTS.map((slug, i) => {
        const project = slug ? bySlug.get(slug) : undefined;
        return (
          <div
            key={i}
            className="relative aspect-square border-b border-r border-hairline"
          >
            {project && <ProjectCard project={project} />}
          </div>
        );
      })}
    </div>
  );
}
