import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

// Preserve Markdown code examples while translating TeX delimiters for remark-math.
function normalizeMath(text: string) {
  return text.replace(/(`+)[\s\S]*?\1|~~~[\s\S]*?~~~|\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g,
    (original, code, inline, block) => {
      if (code || original.startsWith("~~~")) return original;
      return block === undefined ? "$" + inline + "$" : "\n\n$$\n" + block + "\n$$\n\n";
    });
}

export default function ProofMarkdown({ children, inline = false, source }: {
  children: string; inline?: boolean; source?: string;
}) {
  return <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={{
    ...(inline ? { p: "span" as const } : {}),
    a: ({href, children}) => <a href={source && href && !href.startsWith("#") ? new URL(href, source + "/").href : href}>{children}</a>,
  }}>{normalizeMath(children)}</Markdown>;
}
