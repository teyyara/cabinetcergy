import { defineConfig } from "astro/config";

// Static-only architecture: no adapter, server endpoint, database or API.
export default defineConfig({
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
