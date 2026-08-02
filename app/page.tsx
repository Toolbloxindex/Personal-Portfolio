import Link from "next/link";
import { ProjectList } from "@/components/ProjectList";
import { hero, now, projects } from "@/lib/data";

export default function Home() {
  return (
    <main id="main" className="main container">
      <section className="hero">
        <div>
          <h1 className="hero-name">{hero.name}</h1>
          <p className="hero-loc">
            {hero.location} ⬩ {hero.timezone}
          </p>
          <p className="hero-tagline">{hero.tagline}</p>
        </div>
        <div>
          <p className="hero-bio">{hero.bio}</p>
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
