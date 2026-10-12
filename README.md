# Cabinet des Hérons — Website Migration

This repository is the workspace for the migration and improvement of the existing Cabinet des Hérons public website.

## Project state

- **Active keyphrase:** Read the master strategy
- **Status:** Repository bootstrapping; source research gate complete.
- **Production implementation:** Not yet present in this repository.
- **Original source:** https://sites.google.com/view/cabinetdesheronscergy/
- **Project brief:** Preserve public content and existing operational integrations while improving presentation, accessibility, responsive behavior, SEO, performance, and maintainability.

## Non-negotiable constraints

- Zero paid dependencies and no paid deployment features.
- Static-first informational website.
- No new backend, database, API, CMS, analytics store, patient-management system, appointment platform, or form-processing backend.
- Preserve the existing waiting-list Google Form exactly; do not recreate it, submit real test data, or access private responses.
- Preserve original Google Maps/Street View behavior, resources, downloads, phone/email links, and external destinations where verified.
- Do not invent clinical claims, credentials, prices, availability, hours, testimonials, or other business facts.
- Flag outdated or uncertain source content for owner verification rather than silently changing it.
- Target WCAG 2.2 AA; support keyboard use, visible focus, readable contrast, responsive layouts, and reduced motion.

## Project records

The next workspace checkpoint will establish the AEOS status, project configuration, capability manifest, source research dossier, and source-to-destination migration inventory under evidence/ and .aeos/.

## Local development

Implementation framework and scripts are **not selected yet** because no website code exists in this repository. Inspect the source assets and available constraints before choosing an architecture. Do not claim a build or deployment has succeeded until it is actually run and observed.


## Autonomous loop and main-branch promotion

Work proceeds on `aeos/progression`. At the end of each successfully validated loop, open and merge the checkpoint into `main`, then verify that GitHub's remote `main` reflects the expected merge. Preserve history; do not force-push. This merge records verified progress and does not itself mean the website is production-ready or authorize deployment. Deployment remains separately gated by content fidelity, existing integrations, accessibility, performance, tests and release criteria.


## Website development

The repository now includes the first static Astro implementation. It introduces no backend, database, CMS, API, analytics or form-processing service. The existing Google Form remains integrated using its original responder/embed URLs.

### Local commands

```sh
npm install
npm run dev
npm run build
npm run verify:build
npm run preview
```

Node.js 22.12.0 or newer is the target runtime. GitHub Actions workflow `.github/workflows/ci.yml` runs the static build and generated-route/integration checks on pull requests and pushes to main.

The verifier checks generated static routes, French document language and page headings, plus the original Form endpoint, user-supplied CPAM/MDPH PDF viewer URLs, and supplied Street View source. It does not replace real-browser checks for embeds and downloads.

### User-supplied sources integrated in Loop 003

- Aide exceptionnelle à la CPAM: https://drive.google.com/file/d/1msvVUC-UMOAHLfb6ggOwVt2cNfNjnqob/view
- Dossier MDPH / projet de vie: https://drive.google.com/file/d/1w2jvSMQVWMltH1D9XMiW7NSLr6LwlFHj/view
- Google Street View iframe src: https://www.google.com/maps/embed?pb=!4v1791825647154!6m8!1m7!1sDsd4mnK4aCy6rATid4JkwQ!2m2!1d49.04966665723625!2d2.022063723216358!3f194.6892389321645!4f-10.290917139043856!5f1.0839813137111003

PDF content/download behavior and Street View runtime rendering remain unverified. Original source image URLs have not yet been copied locally.
