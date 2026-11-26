import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: { "/proofs/**": ["./content/proofs/**/*.md"] },
};

export default nextConfig;
