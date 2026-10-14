# AEOS Status — Cabinet des Hérons

- **Active keyphrase:** Read the master strategy
- **Run ID:** cabinetcergy-2026-10-14-loop-024
- **Current loop:** LOOP 024 — full-width service-card content and aligned actions
- **Working branch:** `aeos/loop-024-card-content-stretch`
- **Checkpoint PR:** [PR #36 — keep card copy full-width while aligning actions](https://github.com/teyyara/cabinetcergy/pull/36)
- **Promotion branch:** `main`
- **Main baseline:** `404295a4c14e30033fc27ef7576e60895de32307`
- **Website stack:** Astro 7.3.5 static output
- **Production URL:** https://cabinetcergy.vercel.app
- **Deployment ownership:** The user manages Vercel deployments manually. This project loop must never trigger, create, retry or promote a Vercel deployment.
- **Production baseline last checked before Loop 008:** fingerprint `7153f320dfd0533b2dfd04bc06d06319a94ca56b`; Loop 008–024 source changes remain unverified live until the user deploys them.
- **Last updated:** 2026-10-14

## Loop 024 — full-width service-card content and aligned actions

- Corrected the Loop 023 card flex alignment: service cards now use `align-items: stretch` so headings and paragraphs keep the available width; only the action link uses `align-self: flex-start`.
- Preserved the auto top margin on the link so actions remain aligned despite differing copy lengths, plus the responsive spacing added in Loop 023.
- Strengthened `scripts/verify-build.mjs` to guard both full-width copy stretching and left-aligned card actions.
- **Validation:** [GitHub Actions run 38638402109](https://github.com/teyyara/cabinetcergy/actions/runs/38638402109) passed on final PR #36 head 0f298b04fc16071c6fdd90641f2d85c8a7e03975.
- **Main verification:** [GitHub Actions run 38638544902](https://github.com/teyyara/cabinetcergy/actions/runs/38638544902) passed on merge commit 93e98ff756b135ca39f9ebdd85aab6891a38bb25.
- **Merge:** [PR #36](https://github.com/teyyara/cabinetcergy/pull/36) merged to `main` as [93e98ff756b135ca39f9ebdd85aab6891a38bb25](https://github.com/teyyara/cabinetcergy/commit/93e98ff756b135ca39f9ebdd85aab6891a38bb25).
- **Production:** no Vercel deployment/retry/promotion initiated. Browser visual QA remains pending owner-managed deployment.

## Loop 023 — consistent service-card action alignment

- Homepage service cards now use a vertical flex layout, so action links align along the bottom edge rather than jumping according to paragraph length.
- Added responsive breathing room above each action while keeping the existing grid, card styling, content and links unchanged.
- Extended `scripts/verify-build.mjs` with regression checks for the flex layout and auto top margin on service-card actions.
- **Validation:** [GitHub Actions run 38636516595](https://github.com/teyyara/cabinetcergy/actions/runs/38636516595) passed on final PR #34 head e9ba5112be8d84b7aef3997404714e857f019ba7.
- **Main verification:** [GitHub Actions run 38636673583](https://github.com/teyyara/cabinetcergy/actions/runs/38636673583) passed on merge commit a54eb81a28257bded1cc6c2be38e4d0a9abd5984.
- **Merge:** [PR #34](https://github.com/teyyara/cabinetcergy/pull/34) merged to `main` as [a54eb81a28257bded1cc6c2be38e4d0a9abd5984](https://github.com/teyyara/cabinetcergy/commit/a54eb81a28257bded1cc6c2be38e4d0a9abd5984).
- **Production:** no Vercel deployment/retry/promotion initiated. Browser visual QA remains pending owner-managed deployment.

## Loop 022 — quieter contact links and cleaner waiting-list spacing

- Added a shared `contact-link` treatment to the homepage phone/email strip, the direct telephone link in the pricing callout and the waiting-list help card. These standalone contact links no longer have a default underline; they regain a clear underline on hover and keyboard focus.
- Replaced the waiting-list help card's manual line break between phone and email with a dedicated grid wrapper and consistent gap, reducing uneven spacing and giving narrow layouts cleaner wrapping.
- Kept contact link contrast suitable for the dark pricing callout. Informational links in paragraphs remain underlined through the existing global rule.
- Preserved the exact `tel:+33781243098` and `mailto:edith.fautras@gmail.com` destinations, public clinic copy/facts, rates, schedules, form and all other external integrations. No new dependencies, backend, storage or analytics.
- **Validation:** [GitHub Actions run 38635199552](https://github.com/teyyara/cabinetcergy/actions/runs/38635199552) passed dependency installation, Astro static build and route/integration verification on final PR #32 head eadd9a4a5d31c3f1a59029fc522e08e54ddf7c7c.
- **Main verification:** [GitHub Actions run 38635353590](https://github.com/teyyara/cabinetcergy/actions/runs/38635353590) passed on merge commit 713a50566575834363393c2f3fa35f034fb75d34.
- **Merge:** [PR #32](https://github.com/teyyara/cabinetcergy/pull/32) merged to `main` as [713a50566575834363393c2f3fa35f034fb75d34](https://github.com/teyyara/cabinetcergy/commit/713a50566575834363393c2f3fa35f034fb75d34).
- **Production:** no Vercel deployment/retry/promotion was initiated. No browser visual QA was run; the changes await owner-managed deployment and visual review.
## Loop 021 — visual rhythm, footer links and access-page captions

- Reduced the oversized vertical padding between content sections and adjusted the heading-to-copy gap. The tighter spacing scales separately for mobile and compact mobile layouts while retaining intentional whitespace.
- Removed default underlines from footer navigation/contact links, with underlines retained on hover and keyboard focus. Footer contact and exploration links now use consistent stacked spacing instead of relying on inline flow.
- Replaced the nested-card treatment under the Maps and Street View embeds with a simple shared caption row. The Street View explanatory text no longer creates a bordered/shadowed card inside its parent embed card.
- Preserved all public wording/facts, prices, schedules, images, the existing waiting-list Google Form, phone/email destinations, Drive links, Maps/Street View URLs and Tamis link. No dependencies, backend, storage or analytics added.
- **Validation:** [GitHub Actions run 38633696207](https://github.com/teyyara/cabinetcergy/actions/runs/38633696207) passed dependency installation, Astro static build and route/integration verification on final PR #30 head 2fbfe587aa9b664329bc6d7b1e4ff5cd6d69ef53.
- **Main verification:** [GitHub Actions run 38633853515](https://github.com/teyyara/cabinetcergy/actions/runs/38633853515) passed on merge commit 38a42fd2caba162d3573624f451c62bf76110f95.
- **Merge:** [PR #30](https://github.com/teyyara/cabinetcergy/pull/30) merged to `main` as [38a42fd2caba162d3573624f451c62bf76110f95](https://github.com/teyyara/cabinetcergy/commit/38a42fd2caba162d3573624f451c62bf76110f95).
- **Production:** no Vercel deployment/retry/promotion was initiated. No browser-based visual QA was run; the owner must deploy manually and review the rendered pages.
## Loop 020 — semantic labels for homepage groups

- Corrected two homepage containers that carried `aria-label` on a plain generic `div`: the room-photo gallery and practical contact strip now use `role="group"`, allowing their existing descriptive labels to be conveyed as accessible group names.
- Added generated-HTML regression checks for both named groups, plus a general guard that rejects `aria-label` on generic `div`/`span` containers without an explicit name-permitting semantic role.
- Visual presentation, all visible copy, images, clinic facts, fees, schedules, contact links, existing Google Form, Drive links, Maps, Street View and Tamis destinations remain unchanged. No dependencies, backend, storage or analytics were added.
- **Validation:** [GitHub Actions run 38631475971](https://github.com/teyyara/cabinetcergy/actions/runs/38631475971) passed dependency installation, Astro static build and route/integration/accessibility regression verification on final PR #28 head 4fa621932a9a772efb124411fcfce228c069107c.
- **Main verification:** [GitHub Actions run 38631652346](https://github.com/teyyara/cabinetcergy/actions/runs/38631652346) passed on merge commit 6c83b63f4a5b51589754376267e596da0b1f4852.
- **Merge:** [PR #28](https://github.com/teyyara/cabinetcergy/pull/28) merged to `main` as [6c83b63f4a5b51589754376267e596da0b1f4852](https://github.com/teyyara/cabinetcergy/commit/6c83b63f4a5b51589754376267e596da0b1f4852).
- **Production:** no Vercel deployment/retry/promotion was initiated. No browser or screen-reader test of the updated groups was run; post-deployment accessibility acceptance remains owner-managed.
## Loop 019 — section-aware Services navigation

- Fixed the homepage’s “Les services” navigation inconsistency: the link is an in-page destination, so exact whole-page URL matching alone never marked it current.
- Added a small client-side IntersectionObserver that keeps both desktop and mobile links synchronized with the #services section. When the section is in the active reading region, the links receive is-active and aria-current="location"; the state is cleared when the section is no longer active.
- Used valid pixel/percentage rootMargin values for the observer. Extended the static verifier to check both navigation destinations, the section target, class/ARIA state updates and supported margin units.
- No clinic facts, prices, schedules, existing Google Form, phone/email, Drive, Maps, Street View or Tamis destinations were changed. No dependencies, backend, storage, analytics or new service were added.
- **Validation:** [GitHub Actions run 38629848669](https://github.com/teyyara/cabinetcergy/actions/runs/38629848669) passed dependency installation, Astro static build and route/integration verification on final PR #26 head a05184e53bf9491405555f86f3f4194f4e4b9947. An initial verifier run failed due to a duplicated test-script declaration; this was corrected on the same PR before the successful final run.
- **Main verification:** [GitHub Actions run 38630043007](https://github.com/teyyara/cabinetcergy/actions/runs/38630043007) passed on merge commit 1a5f87ff84e2bb111aff771cf2d70916019a5112.
- **Merge:** [PR #26](https://github.com/teyyara/cabinetcergy/pull/26) merged to main as [1a5f87ff84e2bb111aff771cf2d70916019a5112](https://github.com/teyyara/cabinetcergy/commit/1a5f87ff84e2bb111aff771cf2d70916019a5112).
- **Production:** no Vercel deployment/retry/promotion was initiated. The new scroll-state behavior has not had post-change browser QA; acceptance remains pending the owner’s manual deployment and browser review.
## Loop 018 — Resources page clarity and FAQ deduplication

- Reorganized the Resources page so the CPAM and MDPH documents are the first primary resources, followed by Tamis/mutuelle information and a clear callout to the dedicated Questions page.
- Removed the repeated FAQ accordion from Resources. All ten FAQ answers remain on `/ressources-utiles/questions/`; the Resources page now links to that single authoritative FAQ route, reducing unnecessary page length and duplicated content.
- Removed the internal implementation note about Google Drive links being a workaround for missing files and about PDF review occurring “in this step.” Visitor-facing copy describes the purpose of the links and advises families to confirm administrative conditions with the relevant organisations, without claiming independent review of the documents.
- Extended the static verifier to assert the Resources page does not duplicate FAQ items, the dedicated FAQ page retains all ten existing answers, the FAQ link remains present, and migration/audit notes are not rendered to public pages.
- **Validation:** [GitHub Actions run 38628378188](https://github.com/teyyara/cabinetcergy/actions/runs/38628378188) passed dependency installation, Astro static build, and route/integration regression checks on the final PR #24 head `71ee7ce409d9c294d157466acbaf696e265ae4be`.
- **Merge:** [PR #24](https://github.com/teyyara/cabinetcergy/pull/24) merged to `main` as [`69f1fc2`](https://github.com/teyyara/cabinetcergy/commit/69f1fc2cb5ea5820fdadcfa467e6f7d030143432).
- **Production:** no Vercel deployment/retry/promotion was initiated; post-merge runtime and visual acceptance remain pending owner-managed deployment.

## Loop 017 — visitor-facing copy consistency

- Removed internal migration commentary (for example, “le site source indique”) from the homepage, service pages, team, pricing, group support, access, resources and FAQ, so the live site's copy speaks directly to families rather than narrating the migration process.
- Reworded the Street View caption that previously described a source-site image placement error. It now explains the visitor benefit of the map view.
- Preserved the meaning of prescription guidance, published fees and group schedules, contact destinations, resource links, the existing Google Form and map/Street View embeds. Current-conditions caveats remain where reimbursement and transport details have not been independently verified.
- Added a generated-HTML regression assertion to catch migration-only wording in public pages and documented the change in README.
- **Validation:** [GitHub Actions run 38624739343](https://github.com/teyyara/cabinetcergy/actions/runs/38624739343) completed successfully: dependency installation, Astro static build, and route/integration regression verification all passed on final PR #21 head `a8038e69bc581cc2b3443eed84a4eccab6de139e`.
- **Merge:** [PR #21](https://github.com/teyyara/cabinetcergy/pull/21) merged to `main` as [`bae8024`](https://github.com/teyyara/cabinetcergy/commit/bae8024e8308806991823fdb5059560a2bc49e75).
- **Production:** no Vercel deployment/retry/promotion was initiated; post-merge live visual QA remains pending the owner's manual deployment.

## Loop 016 — mobile menu keyboard behavior

- Added a small local script to the existing native mobile navigation: the trigger's accessible label now changes between “Ouvrir le menu de navigation” and “Fermer le menu de navigation” in step with the open state.
- Pressing Escape while the menu is open closes it and returns keyboard focus to the summary trigger. Activating any mobile navigation link also closes the panel, including the same-page homepage section anchor.
- Extended the static build verifier to guard the label synchronization, Escape/focus handling, and link-close behavior in the source component.
- This is a small self-hosted script with no package, network request, storage, analytics, backend, or third-party service. No visible clinic copy, prices, schedules, form workflow or external destination was changed.
- **Validation:** [GitHub Actions run #58](https://github.com/teyyara/cabinetcergy/actions/runs/38623015583) passed dependency installation, Astro static build, and route/integration regression checks on the final PR head before merge.
- **Merge:** PR [#18](https://github.com/teyyara/cabinetcergy/pull/18) merged to `main` as [`82afde0`](https://github.com/teyyara/cabinetcergy/commit/82afde0b4c2a718af39a8ba99fce3b58cbe69313).
- **Production:** no Vercel deployment, retry or promotion was initiated; live visual and keyboard acceptance remains pending owner deployment.

## Loop 015 — compact inner-page layouts

- Tuned narrow-screen layouts for resource cards so the action link sits below the title and description rather than competing for the same horizontal space.
- Allowed schedule heading/badge combinations to wrap cleanly, reduced embed-heading padding, stacked section-heading content, and guarded long contact/notice text against overflow at widths of 420px and below.
- Added static regression assertions for the responsive rules. This is CSS-only; no wording, clinic details, prices, URLs, forms, dependencies, JavaScript or external services changed.
- **Validation:** [GitHub Actions run #52](https://github.com/teyyara/cabinetcergy/actions/runs/38622265170) passed dependency installation, static build, and route/integration regression checks for the final PR head before merge.
- **Merge:** PR [#16](https://github.com/teyyara/cabinetcergy/pull/16) merged to `main` as [`54b1425`](https://github.com/teyyara/cabinetcergy/commit/54b142545f03ba507c0252d6fee4e47ad0bb2d06).
- **Production:** no Vercel deployment, retry or promotion was initiated; live visual acceptance remains pending owner deployment.

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
