import type { Metadata } from "next";
import { contact, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tomás Correia about freelance projects, collaborations, or anything else.",
};

export default function Contact() {
  return (
    <main id="main" className="main container contact-main">
      <header className="page-head">
        <h1 className="display">{contact.title}</h1>
        <p className="sub">{contact.text}</p>
      </header>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact-socials">
        <ul className="contact-list">
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
    </main>
  );
}
