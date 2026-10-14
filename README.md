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

## Main-branch promotion and owner-managed deployment

`main` is the validated source branch. Merging a pull request updates source code and runs the repository’s static GitHub Actions checks; it does not mean production has been released or verified.

**The site owner initiates all Vercel deployments manually.** This workflow must not trigger, create, retry, promote or otherwise initiate a Vercel deployment. Do not treat a GitHub merge, an Actions pass or a deployment build as production acceptance.

After the owner deploys, verify the deployed build fingerprint, routes, responsive layouts, images, keyboard interactions and preserved external integrations in a browser. The recorded 2026-10-14 browser audit exercised 13 routes at desktop, 390px and 320px widths, and checked image/link behavior including Form, Drive, Maps, Street View and Tamis. That audit predates the later Loop 008–019 source changes; it is historical evidence, not acceptance of the current source. No form was submitted.

## Visitor-facing copy consistency (Loop 017)

A copy review removed internal migration commentary such as “le site source indique” and technical explanations about replacing the original map image from visitor-facing sections. The information is now phrased for families while preserving the cabinet-attributed clinical guidance and operational details. Published fees, schedules, transit routes, contact links, the existing Google Form and third-party embed URLs remain unchanged. Caveats remain where reimbursement terms or transit timings have not been independently verified. The build verifier guards against those migration-only phrases returning to the generated pages.

## Quiet standalone contact links (Loop 022)

The homepage contact strip, pricing-callout phone number and waiting-list help card now use a shared `contact-link` treatment, with no underline at rest and an underline on hover/keyboard focus. The waiting-list phone/email lines use a grid wrapper for regular spacing rather than an explicit line break. Inline informational links remain underlined. Existing phone/email destinations are unchanged. PR #32 merged to `main` as 713a50566575834363393c2f3fa35f034fb75d34; PR Actions run 38635199552 and post-merge main run 38635353590 passed. No Vercel deployment or browser visual QA was initiated.
## Visual rhythm and link/caption polish (Loop 021)

Loop 021 tightens section padding and heading spacing for desktop and mobile layouts, removes default underlines from footer links while preserving hover/keyboard-focus indication, stacks footer contact/exploration links consistently, and presents Maps/Street View captions as simple strips rather than nested cards. All public content and operational link destinations are preserved. PR #30 merged to `main` as 38a42fd2caba162d3573624f451c62bf76110f95; PR Actions run 38633696207 and post-merge main run 38633853515 passed. No Vercel deployment or browser visual QA was initiated; the owner deploys manually and completes visual acceptance.
## Semantic labels for homepage groups (Loop 020)

The homepage room-photo gallery and practical contact strip now have `role="group"` in addition to their existing `aria-label` attributes. Plain generic `div` elements cannot be author-named through `aria-label`; a semantic group can expose these descriptive labels to assistive technology. The static verifier checks both generated groups and guards against future labelled generic containers without a role that permits naming. PR #28 merged to `main` as 6c83b63f4a5b51589754376267e596da0b1f4852; PR Actions run 38631475971 and post-merge main run 38631652346 passed. No content, visuals, operational destinations or dependencies changed. No Vercel deployment or screen-reader runtime test was initiated.
## Section-aware Services navigation (Loop 019)

The homepage “Les services” item now follows the visible `#services` section in both desktop and mobile navigation. While the section is in the active reading region, the item receives active styling and `aria-current="location"`; the state clears once the section is no longer current. The build verifier guards the observer logic, valid margin units, destination and target. PR #26 merged to `main` as 1a5f87ff84e2bb111aff771cf2d70916019a5112; final PR Actions run 38629848669 and the post-merge main run 38630043007 both passed. No Vercel deployment or post-change browser QA was initiated; the site owner deploys manually and performs production acceptance.
## Resource-page clarity and FAQ deduplication (Loop 018)

The Resources page now prioritizes its two administrative documents and other useful links, replacing a repeated ten-question accordion with a compact callout to the dedicated Questions page. All ten questions remain available at `/ressources-utiles/questions/`. The Google Drive links, Tamis destination, contact destinations and form behavior remain unchanged. The public copy no longer describes the Drive links as a migration workaround or notes that PDFs were not inspected during an implementation step. Build verification guards the FAQ count, the link to the full FAQ and the removal of those internal audit notes.

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


## Exact integration regression guards

The static build verifier compares the generated HTML's actual link and iframe destinations with the approved public URLs for the existing Google Form (both responder and embedded forms), CPAM and MDPH Drive viewers, the original Google Maps embed and full supplied Street View panorama, Maps directions, Tamis, telephone and email. These are source-level regression guards: they protect URL identity without submitting the form, accessing responses, or certifying third-party content or runtime availability.


## Visual design direction

Loop 010 introduces a responsive editorial refinement using the existing local photography and existing palette. The update gives the homepage a more intentional hero and image collage, refines the header/nav and contact strip, and applies consistent surface, spacing, card, table, accordion, resource and footer treatments across the site. Motion is limited to subtle CSS transitions and a short hero entrance, with `prefers-reduced-motion` respected explicitly.

No external font service, new image provider, JavaScript animation dependency, analytics, backend or persistent data store is added. Code-level checks validate the generated site; final visual acceptance still requires manual desktop/mobile review after the owner deploys the exact merged commit.


## Inner-page visual refinement

Loop 011 continues the editorial design system through the inner pages: service-domain cards, reading rhythm, practitioner biographies, fees and group schedules, resource cards, FAQs and access embeds. It uses CSS-only styling and the existing images/palette. Pricing values, biographies, health/service descriptions, public links and embed destinations are not changed by this visual pass.

The CSS adds a compact responsive profile header on mobile, more differentiated pricing-table rows, quiet numbered markers for service domains, and more consistent card/panel framing. These improvements should be reviewed at desktop and narrow-mobile sizes after the owner deploys the merged commit; a successful build is not a substitute for visual acceptance.


## Iconography and contact cues

Loop 012 replaces several mixed Unicode placeholders in the homepage and Accès cards with lightweight inline SVG line icons, including a proper handset beside the public phone link. Stroke weight, line caps and responsive sizing are set centrally in CSS. The SVGs are decorative and remain hidden from assistive technology where the visible text already identifies the content.

The icons are stored directly in the Astro markup and require no remote requests, icon font, package or JavaScript. No business copy, fees, forms, or external destination URLs are changed. Visual acceptance should still be performed in desktop and narrow-mobile browsers after the owner deploys the merged commit.


## Mobile navigation and interaction states

Loop 013 adds a more legible open state to the native mobile menu, a restrained close-icon/panel transition, and subtle button press feedback. The mobile waiting-list CTA keeps white text on a dark teal background in hover and keyboard-focus states rather than receiving the generic pale link-hover surface. Reduced-motion preferences disable the new movement. Regression assertions cover these source-level states; final browser acceptance remains pending the owner's manual deployment. No content, integrations, dependencies, or runtime JavaScript were added.


## Accessible pricing-table navigation

Loop 014 makes each practitioner pricing-table scroll area keyboard-focusable and exposes it as a named region. Each table includes a visually-hidden caption identifying the tariff table and practitioner. A visible focus ring, scroll positioning and slim scrollbar styling improve navigation on narrower screens when horizontal scrolling is required. Automated checks guard all three table regions and captions. No published prices or other clinic content were changed; live browser review remains pending the owner's manual deployment.


## Compact narrow-screen layouts

Loop 015 improves inner-page composition at compact mobile widths: resource-card actions wrap beneath their descriptions, schedule labels can wrap naturally, section headings stack, and embed/contact panels use tighter spacing and safer text wrapping. The responsive layer is CSS-only and preserves all clinic copy, rates, and external destinations. Static assertions guard the intended media-query rules; a real-browser visual check is still required after manual deployment.


## Mobile navigation keyboard behavior

Loop 016 improves the existing native mobile navigation without replacing its semantic `details/summary` structure. The summary's accessible action name follows the menu's open/closed state; Escape closes the panel and returns focus to the trigger; choosing a navigation link closes the panel, including the homepage section anchor. Static build assertions guard these behaviors. The change uses a tiny local script with no dependency or remote call and preserves all navigation destinations. Verify it manually with keyboard and mobile browser input after the owner deploys the merged source.


## Consistent service-card actions (Loop 023)

Homepage service-card links now align at the bottom of each card, regardless of paragraph length, using a vertical flex layout and a responsive top gap. The static build verifier guards this behavior. Visitor copy and destinations are unchanged. PR #34 merged to `main` as a54eb81a28257bded1cc6c2be38e4d0a9abd5984; PR Actions run 38636516595 and post-merge main run 38636673583 passed. No Vercel deployment or browser visual QA was initiated.


## Service-card content width correction (Loop 024)

A follow-up correction keeps service-card headings and paragraphs stretched to the full card width while using `align-self: flex-start` only on the action link. The action still uses `margin-top: auto` to align across cards with different copy lengths. The static verifier guards these rules. PR #36 passed Actions run 38638402109 and merged to `main` as 93e98ff756b135ca39f9ebdd85aab6891a38bb25; post-merge Actions run 38638544902 passed. No Vercel deployment or browser QA was initiated.
