import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/Gallery";
import { RichText } from "@/components/RichText";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <main id="main" className="main container">
      <Link href="/projects" className="crumb">
        ← All projects
      </Link>
      <article>
        <header className="page-head project-head">
          <div className="page-head-main">
            <p className="eyebrow">
              {project.year} ⬩ {project.role}
              {project.startup && <span className="tl-small"> ⬩ startup</span>}
              {project.small && <span className="tl-small"> ⬩ small project</span>}
            </p>
            <h1 className="page-title">{project.title}</h1>
            {project.icon && (
              <div className={`project-head-icon${project.icon.large ? " project-head-icon-large" : ""}`}>
                <Image
                  className={`project-icon${project.icon.large ? " project-icon-large" : ""}`}
                  src={project.icon.src}
                  alt={project.icon.alt}
                  width={project.icon.large ? 160 : 88}
                  height={project.icon.large ? 160 : 88}
                  sizes={project.icon.large ? "(max-width: 640px) 80px, 160px" : "(max-width: 640px) 44px, 88px"}
                />
              </div>
            )}
            <p className="sub">{project.summary}</p>
            {project.primaryLink && (
              <a className="project-action" href={project.primaryLink.href}>
                {project.primaryLink.label} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </header>
        <div className="article-grid">
          <div className="prose">
            {project.body.map((section) => (
              <section key={section.heading}>
                <h3>{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </section>
            ))}
          </div>
          <dl className="spec">
            {project.stack.length > 0 && (
              <div className="spec-row">
                <dt>Tools</dt>
                <dd className="spec-list">
                  {project.stack.map((item) => (
                    <span className="spec-item" key={item}>
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {project.skills && (
              <div className="spec-row">
                <dt>Skills</dt>
                <dd className="spec-list">
                  {project.skills.map((item) => (
                    <span className="spec-item" key={item}>
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {project.links.length > 0 && (
              <div className="spec-row">
                <dt>Links</dt>
              <dd>
                <span className="spec-links">
                  {project.links.map((link, i) => (
                    <span key={link.label}>
                      {i > 0 && " · "}
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                        {link.external && (
                          <span className="ext" aria-hidden="true">
                            ↗
                          </span>
                        )}
                      </a>
                    </span>
                  ))}
                </span>
              </dd>
            </div>
            )}
        </dl>
        </div>
        {(project.gallery || project.videos || project.youtube) && (
          <Gallery
            note={project.galleryNote}
            groups={project.gallery ?? []}
            videos={project.videos}
            videoBeforeImages={project.videoBeforeImages}
            youtube={project.youtube}
          />
        )}
        <nav className="page-nav" aria-label="Project navigation">
          {prev && (
            <Link href={`/projects/${prev.slug}`} className="nav-link prev">
              <span className="nav-label">← Previous</span>
              <span className="nav-title">{prev.title}</span>
            </Link>
          )}
          {next && (
            <Link href={`/projects/${next.slug}`} className="nav-link next">
              <span className="nav-label">Next →</span>
              <span className="nav-title">{next.title}</span>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
