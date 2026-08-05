import Link from "next/link";
import Image from "next/image";
import { ProjectList } from "@/components/ProjectList";
import { contact, hero, majorProjects, now, portrait, profile } from "@/lib/data";

export default function Home() {
  return (
    <main id="main" className="main home container">
      <section className="hero">
        <div>
          <h1 className="hero-name">{hero.name}</h1>
          <p className="hero-tagline">
            {hero.tagline}
            <br />
            {hero.motto}
          </p>
          <p className="hero-bio">{hero.bio}</p>
          <p className="hero-loc">
            {hero.location} ⬩ {hero.timezone}
          </p>
        </div>
        <div className="hero-photo">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            sizes="(max-width: 860px) 440px, 400px"
          />
        </div>
      </section>

      <section className="split">
        <h2 className="split-label">Now</h2>
        <ul className="star-list">
          {now.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong>
              {" · "}
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="split">
        <h2 className="split-label">Selected projects</h2>
        <div className="split-body">
          <ProjectList items={majorProjects} />
          <nav className="more-links" aria-label="More pages">
            <Link className="link-arrow" href="/projects">
              All projects <span aria-hidden="true">→</span>
            </Link>
            <Link className="link-arrow" href="/experience">
              Experience <span aria-hidden="true">→</span>
            </Link>
            <Link className="link-arrow" href="/about">
              About <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </section>

      <section className="split">
        <h2 className="split-label">Contact</h2>
        <div className="split-body">
          <p>{contact.text}</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="contact-list contact-list-home">
            {profile.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-label">{social.label}</span>
                  <span className="contact-sep"> · </span>
                  <span className="contact-handle">{social.handle}</span>
                  <span className="ext" aria-hidden="true">
                    {" "}↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
