import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { playgroundProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Playground",
  description: "Side projects, experiments, and studio practice.",
};

/**
 * Playground uses the same edge-to-edge, hover-reveal grid as the home page —
 * images first, no permanent labels. It opens directly into the grid too.
 */
export default function PlaygroundPage() {
  return <ProjectGrid projects={playgroundProjects} />;
}
