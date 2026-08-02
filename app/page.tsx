import Link from "next/link";
import Image from "next/image";
import { ProjectList } from "@/components/ProjectList";
import { hero, now, portrait, projects } from "@/lib/data";

export default function Home() {
  return (
    <main id="main" className="main container">
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
            sizes="(max-width: 860px) 440px, 500px"
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
          <ProjectList items={projects} />
          <nav className="more-links" aria-label="More pages">
            <Link className="link-arrow" href="/projects">
              All projects <span aria-hidden="true">→</span>
            </Link>
            <Link className="link-arrow" href="/experience">
              Experience <span aria-hidden="true">→</span>
            </Link>
            <Link className="link-arrow" href="/contact">
              Contact <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
