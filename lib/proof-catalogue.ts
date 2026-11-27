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

export function classify(result: string, record?: Partial<Classification>) {
  const subject = record?.subject || legacy[result]?.subject || "";
  const keywords = record?.keywords || legacy[result]?.keywords || "";
  const type = record?.kind || legacy[result]?.kind;
  // The combined Stirling paper is catalogued as a technical note and covers
  // special cases of Conjecture 7.5.
  const kind = result === "type-b-q-stirling-coefficients"
    ? "Partial result" : type || "Research note";
  let section: ResultSection = "Research notes";
  // A theorem may settle only a special case. The historical 392b entry
  // explicitly proves its source conjecture despite its generic kind.
  if (kind === "Proof" || kind === "Counterexample" ||
      (kind === "Theorem" && result === "graffiti-pc-392b-two-domination")) {
    section = "Proofs and counterexamples";
  }
  if (kind === "Partial result") section = "Progress on open problems";
  return { subject, keywords, kind, section };
}

export function searchable(text: string) {
  return text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
