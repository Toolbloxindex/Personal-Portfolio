import type { ReactNode } from "react";

function splitBold(text: string): ReactNode[] {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export function RichText({ text }: { text: string }) {
  return <>{splitBold(text)}</>;
}