import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="timeline">
      {items.map((project) => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}`} className="tl-row">
            <span className="tl-year">{project.year}</span>
            <span>
              <span className="tl-title-line">
                <span className="tl-title">{project.title}</span>
                <span className="tl-arrow" aria-hidden="true">
                  →
                </span>
              </span>
              <span className="tl-role">
                {project.role}
                {project.small && <span className="tl-small"> · small project</span>}
              </span>
              <span className="tl-summary">{project.summary}</span>
              <span className="tl-stack">{project.stack.join(" · ")}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
