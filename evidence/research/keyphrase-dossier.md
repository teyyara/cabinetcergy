# Cabinet des Hérons — Keyphrase Research Dossier

- **Active keyphrase:** `Read the master strategy`
- **Research date:** 2026-10-12
- **Repository:** https://github.com/teyyara/cabinetcergy
- **Original website:** https://sites.google.com/view/cabinetdesheronscergy/
- **Rulebook:** [AEOS v3](../AEOS-RULEBOOK.md)
- **Project contract source:** [Cabinet des Hérons master strategy](../project-master-strategy.md)
- **Research gate:** `KEYPHRASE_RESEARCH: COMPLETE` for activation; asset-level verification remains incomplete.
- **Current execution state:** Repository identity and permissions verified after explicit authorization. The repo was empty before bootstrap; migration implementation has not started.

## Scope and hard constraints

The goal is to improve the existing practice site's visual quality, information hierarchy, mobile experience, accessibility, SEO, performance and maintainability without losing original information or breaking operational integrations.

Non-negotiables from the supplied project brief:

- Zero paid dependencies, paid APIs, premium assets or paid deployment features.
- Static-first informational website; no new backend, database, CMS, API, patient system, booking service, tracking or external data storage.
- Preserve the *same* waiting-list Google Form; do not recreate it, alter settings, access private responses or submit a real test response.
- Preserve the original Google Maps/Street View behavior, phone/email links, resources, external destinations and downloadable files after their true destinations are verified.
- Do not invent health claims, practitioner credentials, prices, opening hours, availability, testimonials or new services.
- Treat possible stale information as an owner-review item instead of silently changing it.
- Accessibility target: WCAG 2.2 AA, including keyboard operation, visible focus, legible contrast, responsive layouts, meaningful alt text and reduced-motion support.
- Do not call implementation, build, link tests, accessibility review, deployment or production smoke tests PASS without observed evidence.

## Public-source inventory

The following page URLs are identified in the supplied master strategy and source reconnaissance. The list is a migration baseline, not proof that every visual state, embedded asset or downloadable file has been fully audited.

| Source page | Intended subject | Status / notes |
|---|---|---|
| https://sites.google.com/view/cabinetdesheronscergy/ | Original root | Root did not resolve in the inspection interface; root alias remains UNKNOWN |
| https://sites.google.com/view/cabinetdesheronscergy/accueil | Accueil | Visible home/waitlist entry point; use as confirmed homepage source pending root-alias verification |
| https://sites.google.com/view/cabinetdesheronscergy/le-cabinet | Le Cabinet | Practice approach, premises and photographs |
| https://sites.google.com/view/cabinetdesheronscergy/l%C3%A9quipe | L’Équipe | Practitioner biographies and training; URL encoded form to be normalized when used |
| https://sites.google.com/view/cabinetdesheronscergy/prestations | Prestations et tarifs | Practitioner fees and 2026–2027 content |
| https://sites.google.com/view/cabinetdesheronscergy/prise-en-charge-de-groupe | Prise en charge de groupe | Group formats, schedules and conditions |
| https://sites.google.com/view/cabinetdesheronscergy/acc%C3%A8s | Accès | Address, transport, parking, Maps and Street View area |
| https://sites.google.com/view/cabinetdesheronscergy/psychomotricit%C3%A9 | Psychomotricité | Individual service; source indicates prescription required |
| https://sites.google.com/view/cabinetdesheronscergy/psycho-%C3%A9ducation | Psycho-éducation | Individual service; source indicates prescription not required |
| https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles | Ressources utiles | Family resources, administrative information and named PDFs |
| https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles/questions | Questions | FAQ; some duplication with Resources needs comparison |

The root and `/accueil` relationship must be tested before consolidating redirects or routes. The public source's full page-by-page desktop/mobile visual audit, asset retrieval and internal-link crawl remain pending.

## Public-source facts and migration baseline

### Brand, contact and notice

- Practice identity: Cabinet des Hérons — Cergy; public service focus is psychomotricity and psychoeducation.
- Brand text listed by the project brief: “CABINET des HÉRONS — CERGY — PSYCHOMOTRICITÉ & PSYCHOÉDUCATION”.
- Tagline listed by the project brief: “Accompagner chaque enfant vers l’autonomie.”
- Public address: 27 Avenue des Hérons, 95800 Cergy, France.
- Public telephone: 07 81 24 30 98.
- Public email: edith.fautras@gmail.com.
- The source currently surfaced for this research says the renovated cabinet opens from **1 September 2026**. That date is in the past as of 12 October 2026; retain it as the source baseline and flag it for owner verification. Do not make up a replacement notice.

### Team

The source identifies Edith Fautras (psychomotricienne), Jarod Florance (psychomotricien diplômé d’État), and Bouhar Oubeidi (psychologue). The full biographies, individual training/supervision statements, qualifications and photographs must be migrated from their actual source material, not reduced to generic summaries. Certificate images that may show personal identifiers need owner approval before publication.

### Service descriptions

The source describes psychomotricity topics including gross/fine motor skills, graphism, body schema, coordination, spatial/temporal orientation and motor planning. Psychoeducation includes communication, reading/comprehension, logical/numerical learning, attention/concentration, organisation/autonomy and social skills. Transfer all source topics and preserve the original prescription/assessment/session/parent-guidance distinctions; do not strengthen medical claims.

### Published fees and schedules — school year 2026–2027

These values are migration-check items sourced from the research record. Recheck directly against each source page before publishing the migrated content.

| Practitioner | Initial interview | 30 min | 45 min | 60 min | Other published items |
|---|---:|---:|---:|---:|---|
| Edith Fautras | €50 | €38.86 | €55 | €65 | Meeting travel €60; parent guidance €60; AESH supervision €150 / 3 h, subject to academic-inspector authorization |
| Jarod Florance | €50 | €38.86 | €55 | €65 | Meeting travel €60 |
| Bouhar Oubeidi | €50 | €38.86 | €50 | €60 | Meeting travel €60; parent guidance €60 |

Published group-price baseline: €35 per 90-minute session; annual package spread over 11 or 12 monthly instalments, subject to a quote.

- Maternelle: Monday and Wednesday, 09:30–11:00.
- Indigo: Monday 15:30–17:00 and Wednesday 11:00–12:30.
- Turquoise: Monday 13:15–14:45 and Wednesday 13:30–15:00.
- Azur: Wednesday 17:00–18:30.

The source says group placement is proposed by professionals rather than chosen by parents. This must not become an online booking calendar or be portrayed as proof of current availability.

### Access and transport

The site describes 27 Avenue des Hérons, Cergy, with references to Cergy Saint-Christophe, RER A, Transilien L, buses 1240/1239, and stops including Hérons, La Belle Heaumière, Avenue du Terroir, Le Hazay and Rond-point du Chêne. Preserve as source text while verifying links/labels during detailed audit.

The source presents a Google Maps iframe and a section labelled “Vue de la rue (Street View)”. The exact embed URL, its interaction, and whether the Street View presentation is a true panorama or only a static image have not yet been verified. Do not substitute another map, fabricate coordinates or replace Street View with stock imagery.

### Resources and questions

The source discusses psychomotricity, psychoeducation, ABA, CAA, first appointments, prescriptions, age groups, diagnosis and variable support duration. Administrative/financial topics include CPAM exceptional aid, MDPH guidance, TAMIS and mutual insurers. Preserve source wording and avoid creating reimbursement guarantees or promises of eligibility.

Two named PDF resources:
- `nouveau dossier aide exceptionnelle à la cpam.pdf`
- `181120-VJB-Fiche réponse Projet de vie.pdf`

Exact downloadable targets and successful downloads are **UNKNOWN**. The source files themselves have not been inspected from verified download URLs; do not fabricate links or document contents.

### Waiting-list form

The public form URL identified in the source reconnaissance is:
https://docs.google.com/forms/d/e/1FAIpQLScMR1FWyX53VLXnJb6GeowOZUiPI0yswKq45elzOnOCACz-pQ/viewform

Embedded URL:
https://docs.google.com/forms/d/e/1FAIpQLScMR1FWyX53VLXnJb6GeowOZUiPI0yswKq45elzOnOCACz-pQ/viewform?embedded=true

These URLs identify the same existing Google Form. Public inspection does **not** establish private owner-side notifications, settings, delivery or retention. Do not view responses, submit test data, alter settings, create a replacement, or route data into this website.

## Fact / inference / unknown classification

### FACT — supported by source text / observed GitHub responses

- The project brief requires preservation of existing website content and operational integrations.
- The public source identifies pages covering the practice, team, services, fees, group support, access, resources and questions.
- The public site identifies the form URL above and an embedded-form variant.
- The public source has displayed an opening notice dated 1 September 2026, which is past as of the research date.
- The repository `teyyara/cabinetcergy` was private and empty at authorized inspection: 0 size, no branches and GitHub returned “Git Repository is empty” for commits/ref enumeration.
- The connected GitHub integration reported read/write/push/admin permissions; a `main` bootstrap commit and `aeos/progression` working branch were created.
- The supplied strategy names Astro + TypeScript as the recommended default candidate, but actual framework/package/build selection is pending.

### INFERENCE — reasoned, not a verified fact

- A statically generated informational site is a good fit because the core pages are public information and the existing waiting-list submission goes through an external form.
- Astro + TypeScript is likely a low-complexity fit, but it must be validated against real available assets, accessibility, SEO and build/deployment constraints.
- Hosting must be selected only after current free-tier terms and commercial-use restrictions are checked.

### UNKNOWN / TO BE VALIDATED

- Every below-the-fold visual/content block and all mobile/desktop states.
- Root URL alias behaviour and any pages/anchors not discovered yet.
- Actual logo/image originals, file paths, dimensions and approvals.
- Exact Google Maps and Street View source/destination and behavior.
- Download URLs and contents for the two named PDFs.
- Current validity of the opening notice, published prices, group schedules, transport and administrative/financial guidance.
- Owner-side delivery of the existing form; no private account or response access was attempted.
- Production hosting integration, target URL, browser automation, and live production state.
- Accessibility and performance results; no product code exists yet, so no build or runtime tests have been run.

## Risks and mitigations

| Risk | Required mitigation |
|---|---|
| Stale public notice | Preserve the source as baseline; mark owner verification required |
| Sensitive family/child data | Never access/copy responses; no submission tests; no new storage path |
| Broken/changed form integration | Reuse exact URL and existing embed behavior; validate only public display until safe verification is available |
| Missing/incorrect PDF URLs | Resolve actual links, inspect real files, and record blocked items explicitly |
| Street View mismatch | Verify actual embed/source and destination; never substitute invented imagery |
| Content or credential drift | Source-to-destination manifest and page-by-page comparison before launch |
| Free hosting terms mismatch | Recheck current provider plan limits and permitted use; no paid upgrade |
| False test/deployment confidence | Evidence manifest; unavailable tooling maps to UNKNOWN/BLOCKED, never PASS |

## Primary sources / provenance

- Public source site: https://sites.google.com/view/cabinetdesheronscergy/
- Accueil: https://sites.google.com/view/cabinetdesheronscergy/accueil
- Le Cabinet: https://sites.google.com/view/cabinetdesheronscergy/le-cabinet
- L’Équipe: https://sites.google.com/view/cabinetdesheronscergy/l%C3%A9quipe
- Psychomotricité: https://sites.google.com/view/cabinetdesheronscergy/psychomotricit%C3%A9
- Psycho-éducation: https://sites.google.com/view/cabinetdesheronscergy/psycho-%C3%A9ducation
- Prestations: https://sites.google.com/view/cabinetdesheronscergy/prestations
- Groupes: https://sites.google.com/view/cabinetdesheronscergy/prise-en-charge-de-groupe
- Accès: https://sites.google.com/view/cabinetdesheronscergy/acc%C3%A8s
- Ressources: https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles
- Questions: https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles/questions
- Official Astro architecture guidance: https://docs.astro.build/en/concepts/why-astro/
- Official GitHub Pages limitations: https://github.com/github/docs/blob/main/content/pages/getting-started-with-github-pages/github-pages-limits.md
- Official Cloudflare Pages limits: https://developers.cloudflare.com/pages/platform/limits/
- Vercel terms: https://vercel.com/legal/terms
- WCAG 2.2 overview: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- Reduced motion guidance: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility
- Google Maps Embed API: https://developers.google.com/maps/documentation/embed/embedding-map

**Research state: COMPLETE for keyphrase activation; incomplete for migration-grade visual and asset verification.** Do not treat the inventory above as proof that all content/assets have been fully migrated.
