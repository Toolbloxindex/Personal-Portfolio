import type { Metadata } from "next";
import Link from "next/link";
import { catalogueName, searchable } from "@/lib/proof-catalogue";
import { getReleases, proofPath, proofRepository } from "@/lib/proofs";
import ProofSearch from "./ProofSearch";

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
  const levels = [...new Set(entries.map(entry => entry.significance).filter(level => level !== undefined))];
  const initialFilters = {
    q: value(params.q),
    subject: value(params.subject),
    kind: value(params.kind),
    type: value(params.type),
    scope: value(params.scope),
    significance: value(params.significance),
  };
  const notes = entries.map(entry => ({
    path: proofPath(entry),
    section: entry.section,
    subject: entry.subject,
    kind: entry.kind,
    type: entry.resultType,
    scope: entry.scope,
    significance: entry.significance,
    searchIndex: searchable(Object.values(entry).join(" ")),
    card: (
      <li className="proof-entry">
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
    ),
  }));

  return (
    <main id="main" className="main container proof-index">
      <Link className="crumb" href="/projects/solved-problems">About the project</Link>
      <header className="page-head">
        <h1 className="page-title">{catalogueName}</h1>
        <p className="sub">Browse resolutions of published conjectures and partial results on questions that remain open.</p>
      </header>
      <ProofSearch
        key={JSON.stringify(initialFilters)}
        initialFilters={initialFilters}
        notes={notes}
        subjects={subjects}
        types={types}
        levels={levels}
      />
      <div className="more-links"><a href="/proofs/feed.xml">Release feed (RSS)</a></div>
    </main>
  );
}
