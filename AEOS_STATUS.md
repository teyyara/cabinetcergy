# AEOS Status — Cabinet des Hérons

- **Active keyphrase:** Read the master strategy
- **Run ID:** cabinetcergy-2026-10-14-loop-007
- **Current loop:** LOOP 007 — browser QA, SEO discovery and verification hardening
- **State:** LOOP 007 VALIDATED AND MERGED
- **Default / promotion branch:** `main`
- **Latest main commit:** will be filled after the Loop 007 merge
- **Website stack:** Astro 7.3.5 static output (Vite is managed internally by Astro)
- **Production URL:** https://cabinetcergy.vercel.app
- **Production ownership:** user-managed; do not trigger or initiate Vercel deployments
- **Last verified production fingerprint before this loop:** `7153f320dfd0533b2dfd04bc06d06319a94ca56b`
- **CI:** Loop 007 PR build/verification passed before merge
- **Last updated:** 2026-10-14

## Loop 007 — results

- Added `robots.txt` and an XML sitemap covering the 11 primary indexable routes.
- Added canonical links and matching Open Graph URLs to every rendered page.
- Canonicalized the legacy `/accueil/` page to the homepage and the short `/questions/` alias to the primary Questions route; both aliases retain `noindex, follow`.
- Added `noindex` to the custom 404 page.
- Extended the build verifier to test SEO files, canonical destinations, duplicate-alias exclusion, and the existing build fingerprint.
- Updated repository documentation to reflect actual runtime verification rather than older unverified deployment state.

## Browser QA run against Production before these source changes

- All 13 content routes returned HTTP 200; a deliberately invalid route returned HTTP 404.
- All internal navigation/content links collected from those routes responded successfully.
- Desktop (1365px), mobile (390px) and compact mobile (320px): no horizontal overflow on the tested routes.
- All rendered site images loaded successfully after allowing lazy-loaded images to load.
- All seven local WebP assets returned HTTP 200 with `image/webp` content type.
- The existing Google Form embed and its direct view URL responded; **no submission was made** and no responses were accessed.
- Both supplied Drive viewer links responded with HTTP 200; the PDF file contents themselves were not inspected.
- Google Maps and the exact supplied Street View embed URLs responded with HTTP 200.
- The Tamis public resource URL responded with HTTP 200.
- Browser console was clean on Home, Resources and Waiting-list; the Access page showed a third-party Google Maps permissions-policy warning, with the embeds otherwise responding.
- Screenshots were captured during desktop/mobile inspection for this run, but manual visual sign-off against the source design remains outstanding.

## Preserved constraints

- Original Form URL and embed unchanged; no responses accessed and no test submission made.
- Supplied CPAM/MDPH Drive links and exact Street View iframe source unchanged.
- No backend, database, custom API, form recreation, analytics, or new persistent storage introduced.
- Diploma/certificate scans and child-activity imagery remain excluded pending owner review.
- No Vercel deployment was initiated by this loop.

## Remaining QA items

1. Owner or practitioner should verify the current fees, group schedules, and professional biographies against their intended current source; the site clearly labels the 2026–2027 schedule as source-provided, but this audit is not a professional content approval.
2. The PDF file contents and actual download behaviour still require human confirmation beyond HTTP 200 on the Drive viewer links.
3. Complete keyboard-only and assistive-technology testing, contrast measurement and visual review against the source.
4. After the owner deploys this Loop 007 merge, re-check `/build-info.json`, `/robots.txt`, `/sitemap.xml`, canonical metadata, images and direct routes on Production.

## Next loop

Continue with a focused content-fidelity/accessibility review. Do not initiate Vercel deployments; test and merge successful work into `main` only.
