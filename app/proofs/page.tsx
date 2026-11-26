import type { Metadata } from "next";
import Link from "next/link";
import { catalogueName, classify, searchable } from "@/lib/proof-catalogue";
import { getReleases, proofPath, proofRepository } from "@/lib/proofs";

export const metadata: Metadata = {
  title: catalogueName,
  description: "Search mathematical proofs and counterexamples by conjecture, author, subject, or verification method.",
  alternates: { types: { "application/rss+xml": "/proofs/feed.xml" } },
};

type Filters = Record<string, string | string[] | undefined>;
const value = (param: Filters[string]) => typeof param === "string" ? param.trim() : "";

export default async function ProofDirectory({ searchParams }: { searchParams: Promise<Filters> }) {
  const [releases, params] = await Promise.all([getReleases(), searchParams]);
  const entries = releases.map(release => ({ ...classify(release.result), ...release }));
  const subjects = [...new Set(entries.map(entry => entry.subject).filter(Boolean))].sort();
  const kinds = [...new Set(entries.map(entry => entry.kind))].sort();
  const query = value(params.q);
  const subject = value(params.subject);
  const kind = value(params.kind);
  const terms = searchable(query).split(/\s+/);
  const matches = entries.filter(entry => {
    const index = searchable(Object.values(entry).join(" "));
    return (!subject || entry.subject === subject) && (!kind || entry.kind === kind) &&
      terms.every(term => index.includes(term));
  });

  return (
    <main id="main" className="main container proof-index">
      <Link className="crumb" href="/projects/solved-problems">About the project</Link>
      <header className="page-head">
        <h1 className="page-title">{catalogueName}</h1>
        <p className="sub">Research notes on published conjectures. Read the argument, inspect the code, or reproduce a check.</p>
      </header>
      <form action="/proofs" role="search" className="proof-filters" key={JSON.stringify([query, subject, kind])}>
        <label>Search notes<input name="q" type="search" defaultValue={query} placeholder="Conjecture, author, or keyword" /></label>
        <label>Subject<select name="subject" defaultValue={subject}><option value="">All subjects</option>{subjects.map(s => <option key={s}>{s}</option>)}</select></label>
        <label>Result type<select name="kind" defaultValue={kind}><option value="">All types</option>{kinds.map(k => <option key={k}>{k}</option>)}</select></label>
        <button type="submit">Search</button>
      </form>
      <div className="proof-count"><strong>{matches.length} {matches.length === 1 ? "note" : "notes"}</strong>
        {(query || subject || kind) && <Link href="/proofs">Clear search and filters</Link>}
      </div>
      {matches.length === 0 && <p className="proof-empty">No notes match this search. Try a broader term or clear the filters.</p>}
      <ul>{matches.map(entry => (
        <li className="proof-entry" key={proofPath(entry)}>
          <p className="proof-meta">{[entry.subject, entry.kind].filter(Boolean).join(" · ")}</p>
          <h2><Link href={proofPath(entry)}>{entry.title}</Link></h2>
          <p>{entry.summary}</p>
          <p className="proof-check"><strong>Verification</strong> {entry.verification}</p>
          <div className="proof-actions"><Link href={proofPath(entry)}>Read proof</Link>
            <a href={`${proofRepository}/tree/${entry.version}/results/${entry.result}`}>Verification files</a>
            <span><time dateTime={entry.date}>{entry.date}</time> · {entry.version}</span>
          </div>
        </li>
      ))}</ul>
      <div className="more-links"><a href="/proofs/feed.xml">Release feed (RSS)</a></div>
    </main>
  );
}
