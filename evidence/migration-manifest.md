# Migration Manifest — Initial Source-to-Destination Inventory

**Status:** Draft / partial reconnaissance. This is a traceability baseline, not proof that migration is complete.  
**Updated:** 2026-10-12  
**Source of truth:** Original Google Sites pages and the supplied project master strategy.  
**Rule:** Preserve every verified information block and feature. Use UNKNOWN / BLOCKED when a source cannot be verified.

## Page mapping

| ID | Original page | Proposed new route | Content/feature baseline | Verification state |
|---|---|---|---|---|
| MIG-001 | https://sites.google.com/view/cabinetdesheronscergy/ | `/` | Root/home alias; don't duplicate Accueil if same content | UNKNOWN — root did not resolve in inspection interface |
| MIG-002 | https://sites.google.com/view/cabinetdesheronscergy/accueil | `/` | Brand, intro, core services, waiting-list notice/form entry point, team/services/access pathways | Source text reconnaissance; full visual block audit pending |
| MIG-003 | https://sites.google.com/view/cabinetdesheronscergy/le-cabinet | `/le-cabinet` | Approach, premises, rooms, facilities, authentic interior photographs and captions | Visual/media inventory pending |
| MIG-004 | https://sites.google.com/view/cabinetdesheronscergy/l%C3%A9quipe | `/equipe` | Complete profiles for Edith Fautras, Jarod Florance and Bouhar Oubeidi; qualifications/training/images | Complete bio extraction and image/certificate approval pending |
| MIG-005 | https://sites.google.com/view/cabinetdesheronscergy/psychomotricit%C3%A9 | `/psychomotricite` | Service topics, assessment/support, medical-prescription distinction | Full text/visual comparison pending |
| MIG-006 | https://sites.google.com/view/cabinetdesheronscergy/psycho-%C3%A9ducation | `/psycho-education` | Service topics, support and source-stated prescription distinction | Full text/visual comparison pending |
| MIG-007 | https://sites.google.com/view/cabinetdesheronscergy/prestations | `/prestations-et-tarifs` | Each practitioner fee, duration, travel, guidance, AESH supervision, group fees and conditions | Verify every value and 2026–2027 wording against live source |
| MIG-008 | https://sites.google.com/view/cabinetdesheronscergy/prise-en-charge-de-groupe | `/prise-en-charge-de-groupe` | Group programmes, sessions, placement process, schedules, pricing and conditions | Verify source text; not an online booking calendar |
| MIG-009 | https://sites.google.com/view/cabinetdesheronscergy/acc%C3%A8s | `/acces` | Address, transport, parking, Google Maps, Street View, arrival guidance and family facilities | Exact embed URLs and visual targets unknown |
| MIG-010 | https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles | `/ressources` | Full family resources, CPAM/MDPH/TAMIS and mutual insurer info, resource downloads | Every link and document destination must be inventoried |
| MIG-011 | https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles/questions | `/questions` | All questions and answers; compare for duplication with Resources | Full FAQ completeness comparison pending |

## Preserved operational integrations

| ID | Integration | Verified detail | Required action | Status |
|---|---|---|---|---|
| INT-001 | Existing waiting-list Google Form | Responder URL: https://docs.google.com/forms/d/e/1FAIpQLScMR1FWyX53VLXnJb6GeowOZUiPI0yswKq45elzOnOCACz-pQ/viewform | Reuse the same embed or link; do not create or configure a replacement | URL identified; owner-side delivery not verified |
| INT-002 | Embedded form URL | https://docs.google.com/forms/d/e/1FAIpQLScMR1FWyX53VLXnJb6GeowOZUiPI0yswKq45elzOnOCACz-pQ/viewform?embedded=true | Verify display/layout with no real submission | Exact URL identified; runtime test pending |
| INT-003 | Google Maps | Accès page has a map iframe per source reconnaissance | Extract exact embed source and preserve provider/destination | URL/behavior UNKNOWN |
| INT-004 | Street View section | Section labelled “Vue de la rue (Street View)” | Confirm actual panorama/target; do not substitute unrelated imagery | UNKNOWN |
| INT-005 | CPAM PDF | `nouveau dossier aide exceptionnelle à la cpam.pdf` | Locate actual file URL, inspect document, verify download | URL/content UNKNOWN |
| INT-006 | Projet de vie PDF | `181120-VJB-Fiche réponse Projet de vie.pdf` | Locate actual file URL, inspect document, verify download | URL/content UNKNOWN |
| INT-007 | Phone/email links | 07 81 24 30 98; edith.fautras@gmail.com | Confirm click targets on source and reproduce exactly | Public text identified; page-level href validation pending |
| INT-008 | Other external resources | Directories, forms, insurer lists and educational documents | Record exact source URLs before migrating | Full link extraction pending |

## Public facts requiring exact source verification

- Address baseline: 27 Avenue des Hérons, 95800 Cergy, France.
- Source notice says renovated premises open from 1 September 2026; this date is past and requires owner review.
- Published fee content names the 2026–2027 school year.
- Published group schedules are in the research dossier. Re-verify before implementation.
- Brand colors listed in the brief: `#A9CECC`, `#5288B5`; inspect original logo/assets for other colors.

## Asset register — to be completed from source evidence

Create one row per real asset; do not use fake replacements to hide unavailable assets.

| Asset ID | Asset type | Original URL / source location | Local path | Approved? | Optimized derivative | Alt text/caption | State |
|---|---|---|---|---|---|---|---|
| AST-001 | Heron/brain/children logo | Homepage/header (exact source file pending) | TBD | Pending | TBD | Source-appropriate brand alt text | UNKNOWN |
| AST-002+ | Cabinet/interior photographs | Le Cabinet / Accès (exact URLs pending) | TBD | Pending | TBD | Describe actual visible scene | UNKNOWN |
| AST-010+ | Practitioner portraits | L’Équipe (exact URLs pending) | TBD | Pending | TBD | Practitioner name and role only after verification | UNKNOWN |
| AST-020+ | Training/certificate images | L’Équipe (exact URLs pending) | TBD | Owner review required where identifiers visible | TBD | Verify context and approval | UNKNOWN |
| AST-030+ | Resource illustrations / PDFs | Ressources / Questions (exact URLs pending) | TBD | Pending | TBD | Source-specific | UNKNOWN |
| AST-040 | Map / Street View | Accès | TBD | Not applicable | Not applicable | Maintain functional integration | UNKNOWN |

## Content fidelity gate

Before final launch, mark each relevant item with evidence:

- Each original page, heading, paragraph, list, caption and notice.
- All practitioner bios, role and qualification statements.
- Every service detail and prescription distinction.
- Every price, duration, condition and programme schedule.
- Address, transport, parking, map and Street View.
- All FAQ answers, external resource links and PDF downloads.
- Existing waiting-list form display and URL.
- Image originals, placements and corresponding local asset paths.
- Any inaccessible/uncertain content and owner-review items.

**Current completion:** Pages and key integrations are identified; detailed visual audit, asset inventory, exact map/PDF URL verification, implementation and testing remain outstanding.


## Loop 002 — source and asset audit supplement (2026-10-12)

See [source-audit-2026-10-12.md](source-audit-2026-10-12.md) for route-by-route content findings, exact Maps and Form URLs, public field groups and unresolved issues. See [assets/source-assets.json](assets/source-assets.json) and [assets/source-assets.md](assets/source-assets.md) for 25 image source URLs and their inspection/approval states.

Key findings:
- Text and section reconnaissance is complete for all ten named subroutes, but the root URL vs. `/accueil` relationship could not be verified.
- Existing Form responder and embed URLs are identified. Public field order was inspected without viewing responses or submitting. Owner-side delivery/settings remain unverified.
- The original Google Maps iframe URL is recorded; runtime rendering could not be verified because the tool could not load the redirect.
- The image currently under “Vue de la rue (Street View)” is a photograph of children playing with blocks, not Street View. This is a release blocker until corrected with a verified source or an appropriately approved presentation.
- The two PDF filenames are visible, but no direct download URL/file contents could be verified. These remain UNKNOWN/BLOCKED.
- A number of source images returned HTTP 403. Credential scans and child imagery require owner approval before republication.
- The homepage opening notice is dated 1 September 2026, now past. The live Form notice currently says no individual-care places but some group places remain. Both should be reviewed by the owner; do not silently rewrite either.
- Browser screenshot/mobile audit, local asset migration, complete link testing and all build/runtime tests are still outstanding.

This is a partial source audit, not a migration-completion PASS.
