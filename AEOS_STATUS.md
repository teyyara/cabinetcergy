# AEOS Status — Cabinet des Hérons

- **Active keyphrase:** Read the master strategy
- **Run ID:** cabinetcergy-2026-10-12-loop-003
- **Current loop:** LOOP 003 — static-site foundation and supplied integrations
- **State:** BUILD_PENDING
- **Working branch:** aeos/loop-003-site-foundation
- **Default / production branch:** main
- **Website candidate:** Astro 7.3.5, static output
- **Deployment:** NOT STARTED; no live URL claimed
- **Branch policy:** every successfully validated loop checkpoint is merged to main at loop end, then the remote state is verified. Merge is not itself a production release.
- **Last updated:** 2026-10-12

## Loop 003 work completed so far

- The user supplied the exact Google Drive viewer URLs for Aide exceptionnelle à la CPAM and Dossier MDPH. Both are linked from the new Resources route.
- The user supplied the exact Google Street View iframe source. The new Accès route embeds it responsively; the incorrect child/play photo is not used as a Street View panorama.
- An initial static Astro website has been added on the working branch: shared layout, navigation/footer, responsive styles, home/service/team/pricing/group/access/resources/FAQ/waiting-list routes, 404 page, package manifest, and GitHub Actions build/route verification.
- The existing Google Form responder and embed URLs remain unchanged. No form responses were accessed and no test submission was made.
- Research, asset, migration and requirement records were updated with the user-supplied URLs and current validation limits.

## Validation state

- Static build and route verifier: **pending GitHub Actions**.
- Street View actual runtime rendering: not yet browser-verified.
- The two PDF links were supplied by the user and are implemented; PDF bytes/content and download behavior were not independently inspected.
- Original source images are still referenced by Google Sites URLs; local asset migration and complete image-load checks remain outstanding.
- No production deployment or production smoke test has been claimed.

## Release blockers

- Obtain a passing static build and route verifier result.
- Verify the supplied Street View panorama and both PDF destinations in a real browser.
- Complete source-image migration/review, mobile, accessibility, performance and link testing.
- Select an eligible free hosting plan and verify its current usage terms before deployment.
- Keep the existing waiting-list Google Form unchanged.
