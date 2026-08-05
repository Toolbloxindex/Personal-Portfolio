import type { Metadata } from "next";
import Link from "next/link";
import { ProofGallery } from "@/components/ProofGallery";
import {
  certifications,
  education,
  experienceSub,
  languages,
  profile,
  roles,
  skillGroups,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work, education and skills: what Tomás Correia has built, from Veblen to BookHero, and everything in between.",
};

export default function Experience() {
  return (
    <main id="main" className="main container">
      <header className="page-head">
        <h1 className="page-title">Experience</h1>
        <p className="sub">{experienceSub}</p>
      </header>

      <section className="exp-block">
        <h2 className="section-head">Work</h2>
        {roles.map((role) => (
          <article
            className="exp-article"
            key={`${role.company}-${role.period}`}
          >
            <div>
              <p className="exp-period">{role.period}</p>
              {role.startAge && (
                <p className="exp-age">started at {role.startAge}</p>
              )}
            </div>
            <div>
              <h3 className="exp-role">{role.title}</h3>
              <p className="exp-company">
                {role.company}
                <span className="exp-meta">
                  {" ⬩ "}
                  {role.location}
                </span>
              </p>
              <p className="exp-summary">{role.summary}</p>
              <ul className="exp-points">
                {role.highlights.map((point) => (
                  <li key={point.slice(0, 24)}>{point}</li>
                ))}
              </ul>
              <p className="exp-stack">{role.stack.join(" · ")}</p>
              {(role.links || role.proof) && (
                <p className="exp-project">
                  {role.links?.map((link) => (
                    <a
                      key={link.href}
                      className="link-arrow"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                  {role.proof && (
                    <>
                      {role.links && (
                        <span className="exp-sep">{" · "}</span>
                      )}
                      <ProofGallery
                        label={role.proof.label}
                        images={role.proof.images}
                      />
                    </>
                  )}
                </p>
              )}
              {role.project && (
                <p className="exp-project">
                  <Link
                    className="link-arrow"
                    href={`/projects/${role.project}`}
                  >
                    See the product <span aria-hidden="true">→</span>
                  </Link>
                </p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="exp-block">
        <h2 className="section-head">Education</h2>
        {education.map((row) => (
          <article className="exp-article" key={row.period}>
            <p className="exp-period">{row.period}</p>
            <div>
              <h3 className="exp-role">{row.title}</h3>
              <p className="exp-company">
                {row.company}
                <span className="exp-meta">
                  {" ⬩ "}
                  {row.location}
                </span>
              </p>
              <p className="exp-summary">{row.summary}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="exp-block" id="skills">
        <h2 className="section-head">Skills</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3 className="skill-group-cat">{group.category}</h3>
              <ul className="skill-grid">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="exp-block">
        <h2 className="section-head">Languages</h2>
        <dl className="spec">
          {languages.map((lang) => (
            <div className="spec-row" key={lang.language}>
              <dt>{lang.language}</dt>
              <dd>{lang.level}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="exp-block">
        <h2 className="section-head">Certifications</h2>
        <div className="cert-list">
          {certifications.map((cert) => (
            <div className="cert-row" key={cert.name}>
              <div className="cert-issuer">
                <span>{cert.issuer}</span>
                <span className="cert-date">
                  {cert.issued}
                  {cert.hours && <> ⬩ {cert.hours}</>}
                </span>
              </div>
              <div>
                <p className="cert-name">{cert.name}</p>
                <p className="cert-skills">{cert.skills}</p>
                {cert.credentialId && (
                  <p className="cert-credential">
                    credential {cert.credentialId}
                  </p>
                )}
                {cert.links && (
                  <p className="cert-links">
                    {cert.links.map((link, i) => (
                      <span key={link.href}>
                        {i > 0 && " · "}
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <span className="ext" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="exp-foot">
        <a
          className="link-arrow"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Full history on LinkedIn
          <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}
