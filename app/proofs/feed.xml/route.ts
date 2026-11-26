import { catalogueName } from "@/lib/proof-catalogue";
import { getReleases, proofPath } from "@/lib/proofs";

const escapeXml = (s: string) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export async function GET() {
  const items = (await getReleases()).map(r => {
    const url = escapeXml("https://tomdco.com" + proofPath(r));
    return `<item><title>${escapeXml(r.title)}</title><link>${url}</link><guid>${url}</guid><description>${escapeXml(r.summary)}</description></item>`;
  });
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(catalogueName)}</title><link>https://tomdco.com/proofs</link><description>Published mathematical results</description>${items.join("")}</channel></rss>`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
