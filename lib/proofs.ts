import { classify } from "./proof-catalogue";
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
  verification_method?: string;
  previous_version?: string;
  doi?: string;
  explainer?: string;
  significance?: "Focused contribution" | "Substantial advance" | "Major advance";
  why_it_matters?: string;
  significance_source?: string;
};

export function proofPath(release: ProofRelease) {
  return `/proofs/${release.version}/${release.result}`;
}

type LedgerEntry = { version: string; result: string; kind?: string; keywords?: string; subject?: string };

const rawSource = "https://raw.githubusercontent.com/Toolbloxindex/solved-problems";

async function loadManifest<T>(file: string, revision = "main"): Promise<T[]> {
  const response = await fetch(`${rawSource}/${revision}/${file}`, { next: { revalidate: 60 } });
  if (!response.ok) throw new Error(`Could not load ${file}`);
  return response.json();
}

export async function getReleases() {
  const [rows, ledger] = await Promise.all([
    loadManifest<ProofRelease>("portfolio.json"),
    loadManifest<LedgerEntry>("publications.json"),
  ]);
  const releases = await Promise.all(rows.map(async ({ version, result, title, date, summary, verification, verification_method, previous_version, doi, explainer, significance, why_it_matters, significance_source }) => {
    if (!/^v\d+\.\d+\.\d+$/.test(version) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(result))
      throw new Error("Invalid proof address");
    const matchesRelease = (row: LedgerEntry) => row.version === version && row.result === result;
    // The two main-branch manifests can refresh at different times after a release.
    const record = ledger.find(matchesRelease) ??
      (await loadManifest<LedgerEntry>("publications.json", version)).find(matchesRelease);
    if (!record) throw new Error(`Missing publication record for ${version}/${result}`);
    const classification = classify(result, record);
    const method = verification_method ?? (result === "wowii-138" ? "Written proof" : /\bLean\b/i.test(verification) ? "Lean-verified proof" : undefined);
    const verificationLabel = method && verification !== method && !verification.startsWith(method + " · ")
      ? method + " · " + verification : verification;
    return { ...classification, previous_version, verificationLabel, version, result, title, date, summary, verification, explainer, significance, why_it_matters, significance_source,
      doi: doi && /^10\.5281\/zenodo\.\d+$/.test(doi) ? doi : undefined };
  }));
  return releases.reverse();
}

export async function getProofText(release: ProofRelease) {
  if (release.explainer?.trim()) return release.explainer;
  try {
    return await readFile(path.join(process.cwd(), "content", proofPath(release) + ".md"), "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}
