import type { NextConfig } from "next";

// GitHub Pages serves this repo at /Chicken-Delux---Randburg-/, not the
// domain root, so paths need that prefix when built by the Pages workflow.
const repoName = "Chicken-Delux---Randburg-";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubActions ? `${basePath}/` : "",
  env: {
    // next/image doesn't auto-prefix basePath onto plain string src values,
    // so components need this to build the logo path themselves.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
