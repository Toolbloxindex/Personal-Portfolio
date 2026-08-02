import type { Metadata } from "next";
import Image from "next/image";
import {
  aboutSite,
  aboutSub,
  bio,
  currentlyUsing,
  howIWork,
  photo,
  profile,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tomás Correia founded Veblen at sixteen and BookHero at seventeen; now studying Computer Science at TU Delft.",
};

export default function About() {
  return (
    <main id="main" className="main container">
      <header className="page-head">
        <h1 className="page-title">About</h1>
        <p className="sub">{aboutSub}</p>
      </header>
      <div className="about-grid">
        <div className="prose">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <aside className="about-side">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 860px) 100vw, 340px"
            className="about-photo"
          />
          <section>
            <h2 className="section-head">How I work</h2>
            <ul className="star-list">
              {howIWork.map((item) => (
                <li key={item.slice(0, 24)}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="section-head">Currently using</h2>
            <p className="text-line">{currentlyUsing.join(" · ")}</p>
          </section>
          <section>
            <h2 className="section-head">Elsewhere</h2>
            <ul className="plain-links">
              {profile.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                  >
                    <span>{social.label}</span>
                    <span className="handle">
                      {social.handle}
                      {social.external && (
                        <span className="ext" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
      <section className="split">
        <h2 className="split-label">About this site</h2>
        <p className="split-body">{aboutSite}</p>
      </section>
    </main>
  );
}
