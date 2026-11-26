export const catalogueName = "Proofs & Counterexamples";

type Classification = { subject: string; kind: string; keywords: string };

const classifications: Record<string, Classification> = {
  "graffiti-pc-392b-two-domination": {
    subject: "Graph theory", kind: "Theorem", keywords: "Graffiti.pc Written on the Wall II DeLaViña 392b matching",
  },
  "first-column": {
    subject: "Algebraic combinatorics",
    kind: "Theorem",
    keywords: "Bruce Sagan Joshua Swanson Conjecture 7.5 type B polynomials",
  },
  "wowii-138": {
    subject: "Graph theory",
    kind: "Counterexample",
    keywords: "Ermelinda DeLaViña Written on the Wall II Graffiti.pc Conjecture 138",
  },
};

export function classify(result: string): Classification {
  return classifications[result] ?? { subject: "", kind: "Research note", keywords: "" };
}

export function searchable(text: string) {
  return text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
