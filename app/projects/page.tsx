import type { Metadata } from "next";
import { ProjectList } from "@/components/ProjectList";
import { projects, projectsSub } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A timeline of what Tomás Correia has built: BookHero and Veblen.",
};

export default function Projects() {
  return (
    <main id="main" className="main container">
      <header className="page-head">
        <p className="eyebrow">
          Portfolio ⬩ {projects.length} projects
        </p>
        <h1 className="page-title">Projects</h1>
        <p className="sub">{projectsSub}</p>
      </header>
      <ProjectList items={projects} />
    </main>
  );
}
