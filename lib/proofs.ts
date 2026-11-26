import { readFile } from "node:fs/promises";
import path from "node:path";

export const proofRepository = "https://github.com/Toolbloxindex/solved-problems";
const raw = "https://raw.githubusercontent.com/Toolbloxindex/solved-problems";

export type ProofRelease = {
  version: string;
  result: string;
  title: string;
  date: string;
  summary: string;
  verification: string;
};

export function proofPath(release: ProofRelease) {
  return `/proofs/${release.version}/${release.result}`;
}

export async function getReleases(): Promise<ProofRelease[]> {
  const response = await fetch(`${raw}/main/publications.json`, { next: { revalidate: 60 } });
  if (!response.ok) throw new Error("Cannot load the public proof directory");
  const releases: ProofRelease[] = await response.json();
  return releases.toReversed();
}

const typesetEditions: Record<string, () => Promise<string>> = {
  "/proofs/v1.0.0/first-column": () => readFile(path.join(process.cwd(), "content/proofs/v1.0.0/first-column.md"), "utf8"),
  "/proofs/v1.1.0/wowii-138": () => readFile(path.join(process.cwd(), "content/proofs/v1.1.0/wowii-138.md"), "utf8"),
};

export async function getProofText(release: ProofRelease) {
  const edition = typesetEditions[proofPath(release)];
  if (edition) return edition();

  const url = `${raw}/${release.version}/results/${release.result}/README.md`;
  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) throw new Error("Cannot load the tagged proof");
  return response.text();
}

export async function getProofDoi(release: ProofRelease): Promise<string | null> {
  const endpoint = `https://solved-problems.178-62-4-68.sslip.io/citations/${encodeURIComponent(release.result)}.json`;
  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return null;
    const record = await response.json();
    return record.version === release.version && typeof record.doi === "string"
      && /^10\.5281\/zenodo\.\d+$/.test(record.doi) ? record.doi : null;
  } catch {
    return null;
  }
}
