import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import { getProofText, getReleases, proofRepository } from "@/lib/proofs";

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
  return (
    <main id="main" className="main container">
      <Link className="crumb" href="/proofs">Proof catalogue</Link>
      <header className="page-head">
        <h1 className="page-title">{release.title}</h1>
        <p className="sub"><strong>Verification.</strong> {release.verification}</p>
        <a className="project-action" href={source}>Proof files and verification code ↗</a>
      </header>
      <article className="prose proof-text">
        <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={{
          a: ({ href, children }) => <a href={href && !href.startsWith("#") ? new URL(href, source + "/").href : href}>{children}</a>,
        }}>{text.replace(/^# [^\n]+\n/, "")}</Markdown>
      </article>
    </main>
  );
}
