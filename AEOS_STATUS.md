# AEOS Status — Cabinet des Hérons

- **Active keyphrase:** Read the master strategy
- **Run ID:** cabinetcergy-2026-10-14-loop-015
- **Current loop:** LOOP 015 — compact inner-page layouts
- **Working branch:** `aeos/loop-015-narrow-screen-layouts`
- **Checkpoint PR:** [PR #16 — compact inner-page layouts](https://github.com/teyyara/cabinetcergy/pull/15)
- **Promotion branch:** `main`
- **Main baseline:** `84e71f24052c3968d7cffe40e554633c3d5cc20c`
- **Website stack:** Astro 7.3.5 static output
- **Production URL:** https://cabinetcergy.vercel.app
- **Deployment ownership:** The user manages Vercel deployments manually. This project loop must never trigger, create, retry or promote a Vercel deployment.
- **Production baseline last checked before Loop 008:** fingerprint `7153f320dfd0533b2dfd04bc06d06319a94ca56b`; Loop 008–014 source changes remain unverified live until the user deploys them.
- **Last updated:** 2026-10-14

## Loop 015 — compact inner-page layouts

- Tuned narrow-screen layouts for resource cards so the action link sits below the title and description rather than competing for the same horizontal space.
- Allowed schedule heading/badge combinations to wrap cleanly, reduced embed-heading padding, stacked section-heading content, and guarded long contact/notice text against overflow at widths of 420px and below.
- Added static regression assertions for the responsive rules. This is CSS-only; no wording, clinic details, prices, URLs, forms, dependencies, JavaScript or external services changed.
- **Validation:** GitHub Actions build/static verification is the merge gate; browser visual acceptance remains unverified until the owner manually deploys.
- **Production:** no Vercel deployment, retry or promotion was initiated.

## Loop 014 — accessible pricing table navigation

- Made each of the three practitioner pricing-table wrappers keyboard-focusable and gave it a named `region` role so users navigating with a keyboard can reach the horizontal scroll container on narrow screens.
- Added a visually-hidden caption inside each table that names its purpose and practitioner, without changing visible copy or any rates.
- Added a visible keyboard-focus outline, scroll-margin, and compact scrollbar styling where browsers display scrollbars.
- Extended `scripts/verify-build.mjs` to assert that all three pricing tables remain present and expose the expected region role, tab stop, accessible name, hidden caption, and focus treatment.
- No fees, practitioner names, service labels, schedules, links, forms, external integrations, dependencies, or JavaScript changed.
- **Validation:** PR GitHub Actions build/static verification is the merge gate; responsive keyboard/browser visual review remains unverified until the owner deploys and checks it.
- **Production:** no Vercel deployment, retry or promotion was initiated.

## Loop 013 — responsive navigation interaction polish

- Added a clearer visual state to the native mobile menu button when the menu is open; the three-line mark transitions into a close symbol, and the menu panel enters with a restrained reveal.
- Corrected the mobile waiting-list CTA's hover/focus surface: it now stays white-on-deep-teal instead of inheriting the generic pale hover background that weakened contrast with its white text.
- Added subtle pressed feedback to buttons and hover-only enhancements for fine-pointer devices, while keeping the existing keyboard focus outline.
- Explicitly disables the menu reveal and interaction transitions when `prefers-reduced-motion: reduce` is enabled.
- Extended `scripts/verify-build.mjs` to guard the menu open state, CTA foreground/background contrast intent, and reduced-motion behavior.
- CSS and verifier only: no new JavaScript, packages, remote assets, storage, form changes, clinic wording, or destination URL changes.
- **Validation:** PR GitHub Actions build/static verification remains the merge gate. Browser visual acceptance after this change remains pending the owner's manual production deployment.
- **Production:** no Vercel deployment, retry or promotion action was initiated.

## Loop 012 — consistent iconography and contact cues

- Replaced the homepage's mixed Unicode symbols in the three primary service cards with restrained inline SVG line icons for movement/body coordination, learning, and group support.
- Replaced the contact strip's generic symbols with explicit location-pin, telephone-handset and envelope icons; this also corrects the former outbound-arrow glyph next to the phone number.
- Replaced the homepage's lower information-card glyphs with matching line icons for access, fees and documents; updated the Accès page's family-support cards with child, stroller and clock illustrations.
- Added a small CSS icon layer so the icons use consistent current-color stroke, line caps and responsive dimensions. All illustrations are decorative (their parent elements are already marked `aria-hidden="true"`).
- Icons are inline and local; no icon fonts, external SVG requests, icon package or new JavaScript was introduced. Labels, visible copy, prices, links and integration URLs remain unchanged.
- **Validation:** PR #13 build/static verification must pass before merge. Runtime visual review remains pending a manual production deployment by the owner.
- **Production:** no Vercel deployment, retry or promotion action was initiated.

## Loop 011 — inner-page design refinement

- Continued the visual design work across pages beyond the homepage using the existing global stylesheet and established palette.
- Made page introductions more editorial, with clearer heading rhythm and more controlled content width; improved typography and reading rhythm for prose and lists.
- Refined practitioner pricing blocks and tables with stronger section markers, clearer column headers, zebra rows and restrained price emphasis. Source price values are untouched.
- Reworked the group schedule cards with a more intentional heading/badge hierarchy and quiet decorative geometry; labels and schedule text remain unchanged.
- Added numbered visual markers to service-domain cards using CSS counters, strengthened their spacing and surfaces, and made hover behavior subtle.
- Turned practitioner profiles into more cohesive panels with framed portrait areas; on mobile, portrait and identity align into a compact header while the biography remains readable below.
- Refined resource cards, FAQ accordions, the cabinet gallery, map/embed headings and pill lists. Existing links, contact details, iframe sources and descriptions were not changed.
- No external assets, fonts, scripts, libraries, backend, paid services or persistent storage were added.
- **Validation:** PR #12 GitHub Actions build/static verifier is the merge gate. No browser visual certification is claimed; full visual review remains pending manual deployment by the owner.
- **Production:** no Vercel deployment or retry initiated.

## Loop 010 — editorial visual design polish

- Reworked the shared visual language through a documented CSS-only override layer: softer layered paper backgrounds, a clearer editorial hero, refined brand/navigation chrome, a raised contact strip, more consistent section spacing, calmer surfaces, and more deliberate treatment of cards, practitioner portraits, accordions, tables, resource cards and dark callout panels.
- Improved the home hero's typography, visual balance and collage treatment while keeping the same locally hosted source photographs, original copy, current CTAs and contact links.
- Added restrained hover feedback and a short hero entrance transition; the existing reduced-motion preference is explicitly honored by disabling hero entrance and image transitions.
- Tuned the compact-navigation, hero collage, trust strip and card layouts at the existing tablet/mobile breakpoints without adding JavaScript, libraries, external fonts, stock imagery, new data services or costs.
- No practitioner claims, prices, hours, schedules, health information or operational URLs were changed.
- **Validation:** build and static verifier must pass on PR #11 before merge. Automated build success will not certify visual quality in all browsers; production visual verification remains gated on the user's manual deployment.
- **Production:** no Vercel deployment or retry was initiated.

## Loop 009 — exact integration destination guards

- Strengthened `scripts/verify-build.mjs` to compare actual generated HTML attribute values against exact approved destinations, normalizing only common HTML attribute entities before comparison.
- Protects the existing Google Form responder and embed URLs on the homepage and waiting-list page; the exact CPAM and MDPH Drive viewer URLs; the original Google Maps iframe URL and user-supplied full Street View panorama URL; the Google Maps directions link; the Tamis directory link; and the public telephone/email links on key routes.
- This is a regression guard only: it does not request or submit the Form, access responses, fetch private data, change the supplied destinations, or assert that third-party documents contain the expected material.
- **Validation gate:** the GitHub Actions workflow on the Loop 009 pull request must pass before merge. The PR's check results are the authoritative CI evidence.
- **Production state:** no production browser check or deployment was initiated for this loop. The owner remains responsible for Vercel deployment.

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
