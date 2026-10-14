import { writeFile } from "node:fs/promises";
import path from "node:path";

// Static, public build metadata makes it possible to confirm exactly which
// source commit a Vercel alias is serving. This is a generated file only:
// no server endpoint, request logging, user data, or persistent storage.
const buildInfo = {
  application: "cabinet-des-herons",
  formatVersion: 1,
  buildProvider: process.env.VERCEL
    ? "vercel"
    : process.env.GITHUB_ACTIONS
      ? "github-actions"
      : "local",
  commitSha:
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    "unavailable",
  branch:
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.GITHUB_REF_NAME ||
    "unavailable",
};

await writeFile(
  path.resolve("dist", "build-info.json"),
  `${JSON.stringify(buildInfo, null, 2)}\n`,
  "utf8",
);
