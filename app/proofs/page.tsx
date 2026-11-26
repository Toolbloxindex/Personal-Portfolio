import type { Metadata } from "next";
import Link from "next/link";
import { getReleases, proofPath } from "@/lib/proofs";

export const metadata: Metadata = {
  title: "Proof directory",
  description: "Published mathematical proofs and counterexamples, with verification code.",
  alternates: { types: { "application/rss+xml": "/proofs/feed.xml" } },
};

export default async function ProofDirectory() {
  const releases = await getReleases();
  return (
    <main id="main" className="main container">
      <Link className="crumb" href="/projects/solved-problems">← About the project</Link>
      <header className="page-head">
        <h1 className="page-title">Proof directory</h1>
        <p className="sub">Mathematical proofs and counterexamples, with their sources and verification code.</p>
      </header>
      <ul className="timeline">
        {releases.map(release => (
          <li key={release.version}>
            <Link className="tl-row" href={proofPath(release)}>
              <span className="tl-year">{release.date}</span>
              <span>
                <span className="tl-title-line"><span className="tl-title">{release.title}</span><span aria-hidden="true">→</span></span>
                <span className="tl-summary">{release.summary}</span>
                <span className="tl-role">{release.verification}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="more-links"><a className="link-arrow" href="/proofs/feed.xml">Release feed</a></div>
    </main>
  );
}
