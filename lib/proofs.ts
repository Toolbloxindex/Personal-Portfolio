import { readFile } from "node:fs/promises";
import path from "node:path";

export const proofRepository = "https://github.com/Toolbloxindex/solved-problems";
export type ProofRelease = {
  version: string;
  result: string;
  title: string;
  date: string;
  summary: string;
  verification: string;
  doi?: string;
};

export function proofPath(release: ProofRelease) {
  return `/proofs/${release.version}/${release.result}`;
}

const editions = new Set([
  "/proofs/v1.0.0/first-column",
  "/proofs/v1.1.0/wowii-138",
  "/proofs/v1.2.0/graffiti-pc-392b-two-domination",
]);

export async function getReleases(): Promise<ProofRelease[]> {
  const response = await fetch(
    "https://raw.githubusercontent.com/Toolbloxindex/solved-problems/main/portfolio.json",
    { next: { revalidate: 60 } },
  );
  if (!response.ok) throw new Error("Could not load the public proof catalogue");
  const rows: ProofRelease[] = await response.json();
  return rows.map(({ version, result, title, date, summary, verification, doi }) => {
    if (!/^v\d+\.\d+\.\d+$/.test(version) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(result))
      throw new Error("Invalid proof address");
    return { version, result, title, date, summary, verification,
      doi: doi && /^10\.5281\/zenodo\.\d+$/.test(doi) ? doi : undefined };
  }).reverse();
}

export function getProofText(release: ProofRelease) {
  if (!editions.has(proofPath(release))) return null;
  return readFile(path.join(process.cwd(), "content", proofPath(release) + ".md"), "utf8");
}
