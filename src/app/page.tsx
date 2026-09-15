import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

/**
 * Home = one combined grid of ALL projects (work + playground mixed), no
 * category separation. Opens directly into the grid.
 */
export default function HomePage() {
  return <ProjectGrid projects={projects} />;
}
