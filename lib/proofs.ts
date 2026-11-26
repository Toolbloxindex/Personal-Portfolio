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
  const response = await fetch(`${raw}/main/publications.json`, { next: { revalidate: 600 } });
  if (!response.ok) throw new Error("Cannot load the public proof directory");
  const releases: ProofRelease[] = await response.json();
  return releases.toReversed();
}

export async function getProofText(release: ProofRelease) {
  const url = `${raw}/${release.version}/results/${release.result}/README.md`;
  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) throw new Error("Cannot load the tagged proof");
  return response.text();
}
