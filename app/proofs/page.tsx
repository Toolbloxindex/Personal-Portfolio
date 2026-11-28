import type { Metadata } from "next";
import Link from "next/link";
import { catalogueName, resultSections, searchable } from "@/lib/proof-catalogue";
import { getReleases, proofPath, proofRepository } from "@/lib/proofs";

export const metadata: Metadata = {
  title: catalogueName,
  description: "Search proofs, counterexamples and progress on open problems by conjecture, author, subject, or verification method.",
  alternates: { types: { "application/rss+xml": "/proofs/feed.xml" } },
};

type Filters = Record<string, string | string[] | undefined>;
const value = (param: Filters[string]) => typeof param === "string" ? param.trim() : "";

export default async function ProofDirectory({ searchParams }: { searchParams: Promise<Filters> }) {
  const [entries, params] = await Promise.all([getReleases(), searchParams]);
  const subjects = [...new Set(entries.map(entry => entry.subject).filter(Boolean))].sort();
  const types = [...new Set(entries.map(entry => entry.resultType))].sort();
  const significance = value(params.significance);
  const levels = [...new Set(entries.map(entry => entry.significance).filter(Boolean))];
  const query = value(params.q);
  const subject = value(params.subject);
  const kind = value(params.kind);
  const type = value(params.type);
  const scope = value(params.scope);
  const terms = searchable(query).split(/\s+/);
  const matches = entries.filter(entry => {
    const index = searchable(Object.values(entry).join(" "));
    return (!subject || entry.subject === subject) && (!kind || entry.kind === kind) &&
      (!type || entry.resultType === type) && (!scope || entry.scope === scope) &&
      (!significance || entry.significance === significance) && terms.every(term => index.includes(term));
  });

  return (
    <main id="main" className="main container proof-index">
      <Link className="crumb" href="/projects/solved-problems">About the project</Link>
      <header className="page-head">
        <h1 className="page-title">{catalogueName}</h1>
        <p className="sub">Browse resolutions of published conjectures and partial results on questions that remain open.</p>
      </header>
      <form action="/proofs" role="search" className="proof-filters" key={JSON.stringify([query, subject, kind, type, scope, significance])}>
        <label>Search notes<input name="q" type="search" defaultValue={query} placeholder="Conjecture, author, or keyword" /></label>
        <label>Subject<select name="subject" defaultValue={subject}><option value="">All subjects</option>{subjects.map(s => <option key={s}>{s}</option>)}</select></label>
        <label>Result type<select name="type" defaultValue={type}><option value="">All types</option>{types.map(k => <option key={k}>{k}</option>)}</select></label>
        <label>Scope<select name="scope" defaultValue={scope}><option value="">Full and partial</option><option>Full</option><option>Partial</option></select></label>
        <label>Significance · our assessment<select name="significance" defaultValue={significance}><option value="">All assessments</option>{levels.map(level => <option key={level}>{level}</option>)}</select></label>
        <button type="submit">Search</button>
      </form>
      <div className="proof-count"><strong>{matches.length} {matches.length === 1 ? "note" : "notes"}</strong>
        {(query || subject || kind || type || scope || significance) && <Link href="/proofs">Clear search and filters</Link>}
      </div>
      {matches.length === 0 && <p className="proof-empty">No notes match this search. Try a broader term or clear the filters.</p>}
      {resultSections.map(section => {
        const group = matches.filter(entry => entry.section === section);
        if (!group.length) return null;
        return (
          <section key={section} className="proof-group">
            <h2>{section}</h2>
            <ul>{group.map(entry => (
              <li className="proof-entry" key={proofPath(entry)}>
                <p className="proof-meta">{[entry.subject, entry.resultType, entry.scope].filter(Boolean).join(" · ")} · <time dateTime={entry.date}>{entry.date}</time></p>
                <h3><Link href={proofPath(entry)}>{entry.title}</Link></h3>
                <p>{entry.summary}</p>
                {entry.significance && <p className="proof-check"><strong>Significance · our assessment</strong> {entry.significance}</p>}
                <p className="proof-check"><strong>Verification</strong> {entry.verification}</p>
                <div className="proof-actions">
                  <Link href={proofPath(entry)}>Read note</Link>
                  <a href={`${proofRepository}/tree/${entry.version}/results/${entry.result}`}>Verification files</a>
                  <span>{entry.version}</span>
                </div>
              </li>
            ))}</ul>
          </section>
        );
      })}
      <div className="more-links"><a href="/proofs/feed.xml">Release feed (RSS)</a></div>
    </main>
  );
}
