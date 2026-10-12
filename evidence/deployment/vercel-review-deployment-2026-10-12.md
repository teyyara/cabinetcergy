# Vercel review deployment — 2026-10-12

## Verified Vercel API facts

- Project: `cabinetcergy` (`prj_BtttzMEh9f4SkBt2Z1IzUQ2NAenG`)
- Detected framework: `astro`
- Project Node.js version: `24.x`
- Latest observed deployment ID: `dpl_HyKbY9SeQu2oh9gS7Q6HPcnNCyau`
- Deployment state: `READY`
- Target: `production`
- Git source metadata: repository `teyyara/cabinetcergy`, ref `main`, commit `27ca11f1c8b519d4f9ae493b8a1ffeb9795b94e9`
- Stable domain: `https://cabinetcergy.vercel.app`; Vercel domain API reported `verified: true`
- Alias assignment had no reported alias error.

The preceding merged site checkpoint has successful GitHub Actions build and route verification evidence: [run 38285884813](https://github.com/teyyara/cabinetcergy/actions/runs/38285884813). The project package scripts expose `npm run build`; Astro's static output is `dist/`. Astro documentation identifies `npm run build` and `dist` as the standard deployment settings, and Vercel automatically detects/configures Astro for a Git-connected project:

- https://docs.astro.build/en/guides/deploy/
- https://docs.astro.build/en/guides/deploy/vercel/
- https://vercel.com/docs/builds

## Intended owner-review URL

Share the stable project alias: **https://cabinetcergy.vercel.app**

A per-deployment hostname is also reported by Vercel, but the stable project alias is the durable URL to use for review and later deployments.

## What this does and does not prove

**Verified:** Vercel built a deployment, marked it READY, assigned it to the production target, tied it to `main`, and reported the stable project domain as verified.

**Not verified:** A real anonymous browser session against the stable URL, rendered mobile layouts, the actual Google Street View iframe, PDF viewer/download behavior, and the image/CDN responses. The browser inspection tool could not retrieve the live site, so public browser accessibility must not be recorded as PASS until tested.

Vercel project information reported SSO protection enabled with scope `all_except_custom_domains`. If the stable review URL asks the boss to sign in, inspect this project's Deployment Protection configuration for the intended review access. Do not change account-wide security settings as a workaround.

## Vercel compatibility notes

- Keep the Astro framework preset: Astro already uses Vite internally and supplies this site's file-based routing/static generation.
- Node.js `24.x` is the currently reported Vercel project runtime; the code workflow validates on Node.js `22.12.0`.
- Expected build command: `npm run build`.
- Expected static output directory: `dist`.
- The current site is static-only; do not add a Vercel adapter, backend, database, API, data-storage service, analytics or form processor just to deploy it.
- With this Git connection, validated merges into the configured production branch can trigger Vercel production builds automatically. Continue to verify the resulting commit and deployment state after each checkpoint merge.
