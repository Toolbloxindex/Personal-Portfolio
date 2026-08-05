import { profile } from "@/lib/data";

const socialLink = (id: string) => profile.socials.find((s) => s.id === id)?.href;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <span>&copy; 2026 {profile.name} ⬩ {profile.location} ⬩ {profile.timezone}</span>
        <nav className="footer-links" aria-label="Footer">
          <a
            href={socialLink("github")}
            target="_blank"
            rel="noopener noreferrer"
          >
            github
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </a>
          <a
            href={socialLink("linkedin")}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </a>
          <a href={profile.source} target="_blank" rel="noopener noreferrer">
            source of this site
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
