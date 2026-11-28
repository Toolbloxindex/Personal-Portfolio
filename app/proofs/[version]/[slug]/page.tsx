import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import { getProofText, getReleases, proofRepository } from "@/lib/proofs";

export const revalidate = 60;

type Params = { version: string; slug: string };

export async function generateStaticParams() {
  return (await getReleases()).map(r => ({ version: r.version, slug: r.result }));
}

async function findRelease(params: Promise<Params>) {
  const { version, slug } = await params;
  const release = (await getReleases()).find(r => r.version === version && r.result === slug);
  if (!release) notFound();
  return release;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const release = await findRelease(params);
  return { title: release.title, description: release.summary };
}

export default async function ProofPage({ params }: { params: Promise<Params> }) {
  const release = await findRelease(params);
  const source = `${proofRepository}/tree/${release.version}/results/${release.result}`;
  const text = await getProofText(release);
  const doi = release.doi;
  return (
    <main id="main" className="main container">
      <Link className="crumb" href="/proofs">Mathematical results</Link>
      <header className="page-head">
        <p className="proof-meta">{[release.resultType, release.scope].filter(Boolean).join(" · ")} · <time dateTime={release.date}>{release.date}</time></p>
        <h1 className="page-title">{release.title}</h1>
        <p className="sub"><strong>What this settles</strong> {release.what_this_settles ?? release.summary}</p>
        <p className="sub"><strong>Verification.</strong> {release.verificationLabel}</p>
        <p className="sub"><strong>Palomar.</strong> {release.palomar.url
          ? <a href={release.palomar.url}>{release.palomar.status}{release.palomar.id && " · " + release.palomar.id}</a>
          : release.palomar.status}{release.palomar.status.startsWith("Preflight") && " · No public registration confirmed"}</p>
        {release.previous_version && <p><Link href={`/proofs/${release.previous_version}/${release.result}`}>Earlier written release</Link></p>}
        {doi && <p className="sub"><a className="project-action" href={`https://doi.org/${doi}`}>Cite this result · {doi}</a></p>}
        <a className="project-action" href={source}>Proof files and verification code ↗</a>
      </header>
      <article className="prose proof-text">
        {release.significance && release.why_it_matters && <section>
          <h2>Why it matters</h2>
          <p className="proof-meta">Significance · our assessment · {release.significance}</p>
          <p>{release.why_it_matters}</p>
          {release.significance_source?.startsWith("https://") && <p><a href={release.significance_source}>Independent source on significance</a></p>}
        </section>}
        {text ? <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={{
          a: ({ href, children }) => <a href={href && !href.startsWith("#") ? new URL(href, source + "/").href : href}>{children}</a>,
        }}>{text.replace(/^# [^\n]+\n/, "")}</Markdown> : <p>{release.summary}</p>}
        <h2>Reproduce the result</h2>
        <p>Use the sources pinned to {release.version}. The tagged note lists the toolchain
            and commands for checking this result. <a href={source.replace("/tree/", "/blob/") + "/README.md"}>Read the reproduction instructions</a>.</p>
      </article>
    </main>
  );
}
