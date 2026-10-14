# AEOS Status — Cabinet des Hérons

- **Active keyphrase:** Read the master strategy
- **Run ID:** cabinetcergy-2026-10-14-loop-008
- **Current loop:** LOOP 008 — source fidelity and accessibility verification
- **Working branch:** `aeos/loop-008-a11y-content-verification`
- **Checkpoint PR:** [PR #9 — accessibility checks and contrast](https://github.com/teyyara/cabinetcergy/pull/9)
- **Promotion branch:** `main`
- **Main baseline:** `3aa164c4fd1808f2ea1b027d5dce591fb10a1168`
- **Website stack:** Astro 7.3.5 static output
- **Production URL:** https://cabinetcergy.vercel.app
- **Deployment ownership:** The user manages Vercel deployments manually. This project loop must never trigger, create, retry or promote a Vercel deployment.
- **Production baseline last checked before Loop 008:** fingerprint `7153f320dfd0533b2dfd04bc06d06319a94ca56b`; Loop 008 changes remain unverified live until the user deploys them.
- **Last updated:** 2026-10-14

## Loop 008 — changes in PR #9

- Rechecked public source content for the fees, group schedule, FAQ, psychomotricity, psychoeducation, cabinet and access pages. The fee values and four group schedules currently represented match the content surfaced in the existing source audit. No prices or clinical claims were changed.
- Confirmed the dated source opening notice (“1 September 2026”) is now past; the new site does not revive it as a current announcement. Owner confirmation remains advisable.
- Improved the deep-teal text/link token from `#3e7779` to `#3c7173`. The calculated contrast against pale teal improves from 4.46:1 to 4.84:1; the token also passes the 4.5:1 target against paper and white.
- Expanded the static build verifier to check a single H1 and main landmark, image alt attributes, iframe titles, detectable link names, noopener on new-tab links, heading-level progression, and contrast for primary muted/deep-teal text pairs.
- Corrected the group page's navigation semantics: the group route is represented as the current page, while “Tarifs & groupes” is marked as the current parent location in desktop and mobile navigation.
- Added a build assertion covering the parent-section navigation state.

## Production browser evidence carried forward from Loop 007

The public site was tested before this loop at desktop width 1365px, mobile width 390px and compact mobile width 320px. All 13 content routes returned HTTP 200, a deliberately invalid route returned HTTP 404, no horizontal overflow was observed, all images loaded after lazy loading was allowed to complete, and all seven local WebP paths returned HTTP 200 with `image/webp`.

The existing Form, supplied CPAM/MDPH Drive viewer URLs, Maps, Street View and Tamis link responded. No Form submission was made and no responses were accessed. A Google Maps third-party permissions-policy warning appeared in the browser console; the map/panorama URLs responded.

## Owner review items remain open

1. Confirm the current public fee schedule and group programme with the cabinet owner; the site reproduces source-published 2026–2027 values but this is not approval to keep them beyond the stated school year.
2. Confirm whether any opening/availability notice should now be shown. Do not infer current capacity from old source text or change the original Form.
3. Confirm the CPAM and MDPH document contents and that each viewer links to the intended PDF; HTTP 200 on Google Drive viewer URLs does not prove the exact file content was reviewed.
4. Complete a manual screen-reader/assistive-technology pass and full visual acceptance review. Automated static checks are not a WCAG 2.2 AA certification.

## Preserved constraints

- Existing Google Form URL and embed unchanged; no test submission and no response access.
- User-supplied CPAM/MDPH links and exact Street View source unchanged.
- No backend, database, new persistent data service, analytics or paid dependency.
- Diploma/certificate scans and child-activity images remain excluded pending owner approval.
- No Vercel deployment was initiated.

## Validation workflow

Run the repository's GitHub Actions static validation workflow against the final PR #9 head. Merge to `main` only after it passes and verify the remote merge. After the user deploys, independently recheck the build fingerprint, SEO files, group navigation and colour token on Production.
