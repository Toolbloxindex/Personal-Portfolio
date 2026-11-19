import type { Metadata } from "next";
import { ProjectList } from "@/components/ProjectList";
import { majorProjects, sideProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A timeline of what Tomás Correia has built: BookHero, Veblen, WHY NOT YOU?, Echoes of the Forgotten, Toolblox Labs and GFX Archive.",
};

export default function Projects() {
  return (
    <main id="main" className="main container">
      <header className="page-head">
        <h1 className="page-title">Projects</h1>
      </header>
      <section className="exp-block">
        <h2 className="section-head">Major Projects</h2>
        <ProjectList items={majorProjects} />
      </section>
      <section className="exp-block">
        <h2 className="section-head">Side Projects</h2>
        <ProjectList items={sideProjects} />
      </section>
    </main>
  );
}
