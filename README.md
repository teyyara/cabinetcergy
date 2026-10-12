# Cabinet des Hérons — Website Migration

This repository contains the static Astro implementation of the Cabinet des Hérons public informational website, migrated from the existing Google Sites source.

## Current review deployment

- **Review URL:** https://cabinetcergy.vercel.app
- **Vercel project:** `cabinetcergy`
- **Framework preset:** Astro
- **Current deployment:** Vercel reports `READY` on the `production` target
- **Deployed Git reference:** `main`
- **Deployed commit:** `a34acccef04c4b404b97366f3951059fe6c3fdf1`
- **Deployment ID:** `dpl_cnHgm4GgSADX38Gi3EUxraniBUjf`
- **Browser access:** Vercel's deployment API confirms the deployment and production alias; anonymous browser access and the embedded content have not yet been independently verified here.

Use the stable project domain above for owner review rather than a one-off deployment URL. If that URL asks for Vercel authentication, review the project's Deployment Protection settings before sharing it with the owner; do not change account-wide security settings as a workaround.

## Stack and Vercel settings

The site is built with **Astro 7.3.5**, which uses Vite internally. Keep Astro as the Vercel framework preset; replacing this with a plain Vite app would remove Astro's file-based routing and static-output setup.

The existing Git-connected Vercel project has detected the Astro framework and completed a production deployment. Expected Astro/Vercel defaults are:

- Node.js: Vercel project currently reports `24.x`
- Install: `npm install --no-audit --no-fund`
- Build: `npm run build`
- Static output: `dist/`
- Repository root: project root (no monorepo subdirectory is required)

No additional Vercel adapter is needed for this static-only output. No separate `vercel.json` override is needed while the project continues to autodetect Astro and the build succeeds.

## Local commands

Node.js 22.12.0 or newer is the target runtime.

```sh
npm install
npm run dev
npm run build
npm run verify:build
npm run preview
```

GitHub Actions workflow `.github/workflows/ci.yml` builds the static site and checks generated routes plus the preserved external integrations on pull requests and pushes to `main`.

## Main-branch deployment workflow

The repository's `main` branch is the validated promotion branch. The Vercel project is connected to this GitHub repository and has already produced a `READY` production-target deployment from `main`. For later loops, merge only validated checkpoints into `main`; the Git-connected Vercel project can then build the updated production branch automatically. If a merge does not trigger a build, inspect Vercel Project Settings → Git and ensure `main` is the Production Branch.

A successful deploy proves that Vercel built and assigned a deployment. It does **not** replace real-browser QA for the public URL, responsive layouts, embedded Google Form, Street View, Drive PDFs, or external images.

## Non-negotiable constraints

- Zero paid dependencies and no paid deployment features.
- Static-first informational website; no new backend, database, API, CMS, analytics store, patient-management system, appointment platform, or form-processing backend.
- Preserve the existing waiting-list Google Form exactly; do not recreate it, submit real test data, or access private responses.
- Preserve original Google Maps/Street View behavior, resources, downloads, phone/email links, and verified external destinations.
- Do not invent clinical claims, credentials, prices, availability, hours, testimonials, or other business facts.
- Flag outdated or uncertain source content for owner verification rather than silently changing it.
- Target WCAG 2.2 AA; support keyboard use, visible focus, readable contrast, responsive layouts, and reduced motion.

## Project and QA records

- Project brief: `evidence/project-master-strategy.md`
- Operating rulebook: `evidence/AEOS-RULEBOOK.md`
- Source audit: `evidence/source-audit-2026-10-12.md`
- Migration manifest: `evidence/migration-manifest.md`
- Vercel evidence: `evidence/deployment/vercel-review-deployment-2026-10-12.md`
- Current status: `AEOS_STATUS.md`

The verifier checks 14 generated HTML files (13 content routes plus 404), French document language, page titles and H1 presence, plus the original waiting-list Form endpoint, the user-supplied CPAM/MDPH PDF URLs, and the exact supplied Street View URL. It does not test actual browser rendering or submit the form.

## User-supplied sources integrated in Loop 003

- Aide exceptionnelle à la CPAM: https://drive.google.com/file/d/1msvVUC-UMOAHLfb6ggOwVt2cNfNjnqob/view
- Dossier MDPH / projet de vie: https://drive.google.com/file/d/1w2jvSMQVWMltH1D9XMiW7NSLr6LwlFHj/view
- Google Street View iframe src: https://www.google.com/maps/embed?pb=!4v1791825647154!6m8!1m7!1sDsd4mnK4aCy6rATid4JkwQ!2m2!1d49.04966665723625!2d2.022063723216358!3f194.6892389321645!4f-10.290917139043856!5f1.0839813137111003

PDF content/download behavior, real-browser Street View rendering, source image availability, anonymous public URL access, and full mobile/accessibility/performance audits remain open QA items.
