export const verificationMethods = ["Written proof", "Computer-assisted proof", "Lean-verified proof"];
export const leanStatuses = ["Formalized stated result", "Partial formalization", "Not formalized"];

export function releaseLeanStatus(version: string, result: string, method?: string, reported?: string) {
  if (reported && leanStatuses.includes(reported)) return reported;
  if (version === "v1.13.0" && result === "armstrong-odd-two-ribbons") return "Partial formalization";
  if (method === "Lean-verified proof") return "Formalized stated result";
  if (method === "Written proof" || method === "Computer-assisted proof") return "Not formalized";
  return undefined;
}

export function verificationChecks(method: string | undefined, evidence: string) {
  const checks = method ? [method] : [];
  if (evidence.includes("independent AI mathematical review")) checks.push("Independent AI review");
  if (evidence.includes("independent exact computation")) checks.push("Independent exact computation");
  if (evidence.includes("exhaustive check of the")) checks.push("Exhaustive check");
  if (evidence.includes("finite state checks on")) checks.push("Finite-case check");
  return [...new Set(checks)];
}

export const catalogueName = "Mathematical results";
export const resultSections = ["Proofs and counterexamples", "Progress on open problems", "Research notes"] as const;

type ResultSection = (typeof resultSections)[number];
type Classification = { subject: string; kind: string; keywords: string };

// The first two tagged releases predate the catalogue classification fields.
const legacy: Record<string, Classification> = {
  "first-column": {
    subject: "Algebraic combinatorics", kind: "Partial result",
    keywords: "Bruce Sagan Joshua Swanson Conjecture 7.5 type B polynomials",
  },
  "wowii-138": {
    subject: "Graph theory", kind: "Counterexample",
    keywords: "Ermelinda DeLaViña Written on the Wall II Graffiti.pc Conjecture 138",
  },
};

const contributions: Record<string, string[]> = {
  "nineteen-letter-subsequence-cover": ["Proof", "New proof of a known result"],
  "unicyclic-independence-breaks": ["Proof", "Construction"],
  "moll-signed-real-periods": ["Counterexample", "Corrected theorem"],
  "consecutive-231-stack-delay": ["Proof", "Improved bound"],
  "sparsity-of-integral-arctangent-sums": ["Proof", "Improved bound"],
  "armstrong-six-ribbons": ["Proof", "Special case"],
  "armstrong-odd-two-ribbons": ["Proof", "Special case"],
};

export function classify(result: string, record?: Partial<Classification>) {
  const subject = record?.subject || legacy[result]?.subject || "";
  const keywords = record?.keywords || legacy[result]?.keywords || "";
  const type = record?.kind || legacy[result]?.kind;
  // The combined Stirling paper is catalogued as a technical note and covers
  // special cases of Conjecture 7.5.
  const kind = result === "type-b-q-stirling-coefficients"
    ? "Partial result" : type || "Research note";
  const partial = ["Partial result", "Partial proof", "Partial counterexample"].includes(kind);
  const baseType = kind === "Counterexample" || kind === "Partial counterexample" ? "Counterexample"
    : partial || kind === "Proof" || kind === "Theorem" ? "Proof" : kind;
  const types = contributions[result] ?? [baseType];
  const resultType = types.join(" · ");
  const scope = partial ? "Partial" : ["Proof", "Counterexample"].includes(baseType) ? "Full" : "Supporting work";
  const section: ResultSection = scope === "Partial" ? "Progress on open problems"
    : scope === "Full" ? "Proofs and counterexamples" : "Research notes";
  return { subject, keywords, kind, section, resultType, types, scope };
}

export function searchable(text: string) {
  return text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
