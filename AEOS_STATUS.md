# AEOS Status — Cabinet des Hérons

- **Active keyphrase:** Read the master strategy
- **Run ID:** cabinetcergy-2026-10-12-loop-005
- **Current loop:** LOOP 005 — source image migration and local asset wiring
- **State:** WAITING_FOR_CONTINUE
- **Working branch:** `aeos/loop-005-local-assets` (merged)
- **Default / promotion branch:** `main`
- **Latest main commit:** `6dfda6286b47ca2d5d4b8694cc84c73d71ab1a26`
- **Checkpoint PR:** [PR #4 — merged](https://github.com/teyyara/cabinetcergy/pull/4)
- **Website stack:** Astro 7.3.5 static output (Vite is managed internally by Astro)
- **Review URL:** https://cabinetcergy.vercel.app
- **CI on PR head:** PASS — [run 38296393083](https://github.com/teyyara/cabinetcergy/actions/runs/38296393083)
- **CI on merged main commit:** PASS — [run 38296509134](https://github.com/teyyara/cabinetcergy/actions/runs/38296509134)
- **Last updated:** 2026-10-12

## Loop 005 completed

Seven local WebP image assets were added to `public/images/`: the current source-site logo, three selected interior photos, and three practitioner portraits. The site header and footer use the local logo; the homepage and Le Cabinet page use locally served interior photographs; the homepage team cards and Équipe page use local practitioner portraits.

The original images were captured from successful image responses while the public Google Sites pages were rendered in Chromium. Direct requests to the Google Sites image gateway returned HTTP 403 in this environment, so the rendered-page capture path was used instead. Files were optimized to WebP and their source provenance, dimensions and sizes were recorded in `evidence/assets/source-assets.json`.

The build verifier now checks all seven local image assets exist and are non-empty, checks key local references in generated HTML, and fails if the output references `sites.google.com/sitesv-images-rt`.

## Preserved constraints

- The original Google Form URL and iframe integration are unchanged; no submissions were made and no private responses were accessed.
- The user-provided CPAM and MDPH Drive URLs and exact Street View iframe URL are unchanged.
- No backend, database, form replacement, analytics, custom storage, paid dependency or new third-party persistence was added.
- Diploma/certificate scans and child-activity imagery remain excluded pending owner approval.

## Validation boundaries

GitHub Actions passed both on the PR head and on the merged `main` commit. The static build and 14-route verifier ran; seven local files and their output references were checked, and no Google Sites image-gateway URL remained in the generated HTML.

A visual browser review of the new Astro site, full mobile/responsive and accessibility review, and runtime testing of the Form, Street View and PDF links have **not** been completed. The current Vercel deployment state was not rechecked after this merge; the review URL above is the existing project URL, not a claim that the newest assets have been visually verified in production.

## Next loop

Wait for standalone `CONTINUE`. Prioritize browser-based visual QA, responsive crops and the preserved Form/Street View/PDF integrations. Keep the existing static architecture and do not republish approval-sensitive scans without owner review.
