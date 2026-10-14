# Cabinet des Hérons — Website Migration

This repository contains the static Astro implementation of the Cabinet des Hérons public informational website, migrated from the existing Google Sites source.

## Production review

- **Public URL:** https://cabinetcergy.vercel.app
- **Latest confirmed fingerprint at the start of Loop 007:** `7153f320dfd0533b2dfd04bc06d06319a94ca56b` on `main`.
- **Browser verification on 2026-10-14:** the static fingerprint matched that commit; all seven local WebP asset URLs returned HTTP 200 with `image/webp` content type.
- **Deployment ownership:** the site owner manages every Vercel deployment manually. This workflow does not create, promote or retry Vercel deployments.

The recorded fingerprint is a dated verification point; it should be rechecked after later commits are deployed. A `READY` deployment by itself is not proof of visual or functional QA.

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

A successful build or deployment does **not** replace real-browser QA. The 2026-10-14 browser audit exercised 13 content routes at desktop, 390px and 320px widths; checked rendered images and internal links; and confirmed that the existing Form, both Drive viewer links, Maps, Street View and Tamis responded. No form was submitted. Future deployments remain owner-managed.

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

The verifier checks 14 generated HTML files (13 content routes plus 404), French document language, titles and H1 presence, local image assets, the static build fingerprint, canonical/Open Graph URLs, the robots file, sitemap membership, and the preserved Form, CPAM/MDPH viewer links and Street View source. It never submits the Form.

## User-supplied sources integrated in Loop 003

- Aide exceptionnelle à la CPAM: https://drive.google.com/file/d/1msvVUC-UMOAHLfb6ggOwVt2cNfNjnqob/view
- Dossier MDPH / projet de vie: https://drive.google.com/file/d/1w2jvSMQVWMltH1D9XMiW7NSLr6LwlFHj/view
- Google Street View iframe src: https://www.google.com/maps/embed?pb=!4v1791825647154!6m8!1m7!1sDsd4mnK4aCy6rATid4JkwQ!2m2!1d49.04966665723625!2d2.022063723216358!3f194.6892389321645!4f-10.290917139043856!5f1.0839813137111003

PDF content/download behavior, real-browser Street View rendering, source image availability, anonymous public URL access, and full mobile/accessibility/performance audits remain open QA items.


## Locally hosted image assets

Loop 005 adds the source practice logo, three selected interior photographs and three practitioner portraits under `public/images/`. Astro copies these static files to the build output, so the new pages do not need the Google Sites image gateway for their header, home/gallery photography or team portraits. `npm run verify:build` checks all seven local assets and rejects a generated page that still references the Google Sites image-gateway host.

The migration deliberately excludes diploma/certificate scans and child-activity imagery pending owner review. The check verifies generated paths and file presence; it does not replace a visual browser review of responsive crops.


## Search discovery and canonical URLs

The build emits `/robots.txt` and `/sitemap.xml`. Canonical and Open Graph URL metadata point at the stable public hostname, and the legacy `/accueil/` and short `/questions/` aliases are marked `noindex` and canonicalized to their primary content routes. The custom 404 page is also marked `noindex`.


## Accessibility and content QA gate

The static verifier checks every generated route for one H1, one main landmark, image `alt` attributes, titled iframes, detectable link names, safe `rel=noopener` values for new-tab links, heading-level progression, and contrast ratios for key text/design-token pairs. These are automated regression checks, not a substitute for manual keyboard, screen-reader, visual or professional content approval.

For healthcare/business content, verify current fees, group schedules, practitioner information, availability notices and the exact PDF contents with the cabinet owner. Do not change the operational Google Form, submit test data or copy responses.
