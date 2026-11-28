"use client";

import Link from "next/link";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { resultSections, searchable, verificationMethods } from "@/lib/proof-catalogue";

const emptyFilters = { q: "", subject: "", kind: "", type: "", scope: "", significance: "", verification: "" };
type Filters = typeof emptyFilters;

type Note = {
  path: string;
  section: (typeof resultSections)[number];
  subject: string;
  kind: string;
  types: string[];
  scope?: string;
  verification: string[];
  significance?: string;
  searchIndex: string;
  card: ReactNode;
};

export default function ProofSearch({ initialFilters, notes, subjects, types, levels }: {
  initialFilters: Filters;
  notes: Note[];
  subjects: string[];
  types: string[];
  levels: string[];
}) {
  const [filters, setFilters] = useState(initialFilters);
  const terms = searchable(filters.q).split(/\s+/);
  const matches = notes.filter(note =>
    (!filters.subject || note.subject === filters.subject) &&
    (!filters.kind || note.kind === filters.kind) &&
    (!filters.type || note.types.includes(filters.type)) &&
    (!filters.verification || note.verification.includes(filters.verification)) &&
    (!filters.scope || note.scope === filters.scope) &&
    (!filters.significance || note.significance === filters.significance) &&
    terms.every(term => note.searchIndex.includes(term))
  );

  useEffect(() => {
    function restoreFilters() {
      if (window.location.pathname !== "/proofs") return;
      const params = new URLSearchParams(window.location.search);
      const read = (name: keyof Filters) => {
        const values = params.getAll(name);
        return values.length === 1 ? values[0].trim() : "";
      };
      setFilters({
        q: read("q"),
        subject: read("subject"),
        kind: read("kind"),
        type: read("type"),
        scope: read("scope"),
        verification: read("verification"),
        significance: read("significance"),
      });
    }

    window.addEventListener("popstate", restoreFilters);
    return () => window.removeEventListener("popstate", restoreFilters);
  }, []);

  function applyFilters(next: Filters) {
    setFilters(next);
    const params = new URLSearchParams();
    for (const [name, value] of Object.entries(next)) {
      if (value.trim()) params.set(name, value.trim());
    }
    const location = window.location;
    const query = params.size ? `?${params}` : "";
    if (query !== location.search) {
      window.history.replaceState(null, "", `${location.pathname}${query}${location.hash}`);
    }
  }

  return (
    <>
      <form action="/proofs" role="search" className="proof-filters" onSubmit={event => {
        event.preventDefault();
        applyFilters(filters);
      }}>
        <label>Search notes<input name="q" type="search" value={filters.q} placeholder="Conjecture, author, or keyword"
          onChange={event => applyFilters({ ...filters, q: event.target.value })} /></label>
        <label>Result type<select name="type" value={filters.type}
          onChange={event => applyFilters({ ...filters, type: event.target.value })}>
          <option value="">All types</option>{types.map(type => <option key={type}>{type}</option>)}
        </select></label>
        <label>Scope<select name="scope" value={filters.scope}
          onChange={event => applyFilters({ ...filters, scope: event.target.value })}>
          <option value="">Full and partial</option><option>Full</option><option>Partial</option><option>Supporting work</option>
        </select></label>
        <label>Subject<select name="subject" value={filters.subject}
          onChange={event => applyFilters({ ...filters, subject: event.target.value })}>
          <option value="">All subjects</option>{subjects.map(subject => <option key={subject}>{subject}</option>)}
        </select></label>
        <label>Significance · our assessment<select name="significance" value={filters.significance}
          onChange={event => applyFilters({ ...filters, significance: event.target.value })}>
          <option value="">All assessments</option>{levels.map(level => <option key={level}>{level}</option>)}
        </select></label>
        <label>Verification status<select name="verification" value={filters.verification}
          onChange={event => applyFilters({ ...filters, verification: event.target.value })}>
          <option value="">All verification methods</option>{[...new Set([...verificationMethods, ...notes.flatMap(n => n.verification)])].sort().map(v => <option key={v}>{v}</option>)}
        </select></label>
        {filters.kind && <input type="hidden" name="kind" value={filters.kind} />}
        <button type="submit">Search</button>
      </form>
      <div className="proof-count">
        <strong role="status">{matches.length} {matches.length === 1 ? "note" : "notes"}</strong>
        {Object.values(filters).some(Boolean) && <Link href="/proofs" prefetch={false} onNavigate={event => {
          event.preventDefault();
          applyFilters(emptyFilters);
        }}>Clear search and filters</Link>}
      </div>
      {matches.length === 0 && <p className="proof-empty">No notes match this search. Try a broader term or clear the filters.</p>}
      {resultSections.map(section => {
        const group = matches.filter(note => note.section === section);
        if (!group.length) return null;
        return (
          <section key={section} className="proof-group">
            <h2>{section}</h2>
            <ul>{group.map(note => <Fragment key={note.path}>{note.card}</Fragment>)}</ul>
          </section>
        );
      })}
    </>
  );
}
