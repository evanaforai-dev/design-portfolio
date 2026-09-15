import { ProjectGrid } from "@/components/ProjectGrid";
import { workProjects } from "@/data/projects";

/**
 * Home opens directly into the Work grid — no intro copy, no heading, no
 * framing text. Work speaks first; the nav is the only text outside the grid.
 */
export default function HomePage() {
  return <ProjectGrid projects={workProjects} />;
}
