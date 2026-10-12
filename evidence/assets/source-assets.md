# Source Asset Inventory — 12 October 2026

This is a **source URL and identity inventory**, not a completed asset migration. The exact 25 discovered image-gateway URLs, source-page placement, inspection result and review state are tracked in [source-assets.json](source-assets.json). None have yet been copied into local project assets.

## Findings

- The original logo was visually inspected: it depicts a heron, brain and children with the practice name/service wording and tagline.
- The Le Cabinet page has inspected photographs of a waiting/seating area, air-conditioning/window, reading nook/bookshelf and treatment/learning room.
- The image under “Vue de la rue (Street View)” depicts children playing with blocks, not a street panorama. This is a confirmed source-label mismatch and a release blocker until a verified destination or owner-approved presentation is established.
- The access-page driving and bus photos look like generic illustrative images rather than identifiable local directions. Do not treat them as evidence of the actual route.
- Edith Fautras’s and Jarod Florance’s portraits were viewed. Bouhar Oubeidi’s portrait URL was identified but returned HTTP 403 in the inspection tool.
- Several linked image URLs returned HTTP 403. Their URLs and unknown state are recorded, but their contents must not be inferred.
- Several diploma/certificate scans were visually inspected and appear to reveal personal identifiers, including dates of birth and credential/serial identifiers. One training certificate contains third-party provider details. The project brief requires owner verification/approval before republishing these scans.
- Images showing children/hands and craft materials are flagged for release/owner approval review. Public presence on the existing page alone is not taken as sufficient approval for republishing on a migrated site.

## Asset migration rules

1. Map each source asset to its actual page use before implementation.
2. Retrieve only accessible, authorised originals; keep original bytes in the source asset archive before producing derivatives.
3. Do not fabricate replacement imagery or call a generic photograph “Street View.”
4. Do not silently crop, redact or alter credential scans. Flag them for owner review; if approval is absent, do not republish the scans.
5. Copy files locally and optimise derivatives only after source identity, approval and intended placement are known.
6. Record stable local paths, dimensions, format, alternative text/caption and source correspondence.
7. Run a broken-image check and responsive-crop review once the app exists.
8. Any item marked `OWNER_APPROVAL_REQUIRED`, `MISMATCH_BLOCKER`, `OWNER_APPROVAL_REVIEW` or `CONTENT_UNVERIFIED` is not approved for automatic republication.

## State at Loop 002

- Source image inventory: **25 URLs recorded**.
- Local image copies created: **0**.
- PDF documents verified/downloaded: **0**.
- Verified Street View panorama source: **none**.
- Approval-sensitive assets released for migration: **none**.


## Loop 003 — new document and Street View sources (user-provided 2026-10-12)

Two direct Google Drive viewer URLs are now recorded and linked on the Resources page:
- **Aide exceptionnelle à la CPAM:** https://drive.google.com/file/d/1msvVUC-UMOAHLfb6ggOwVt2cNfNjnqob/view
- **Dossier MDPH / projet de vie:** https://drive.google.com/file/d/1w2jvSMQVWMltH1D9XMiW7NSLr6LwlFHj/view

The links are available in the migrated site. Their actual PDF bytes/content and end-user download behavior have not been independently inspected, so they are marked as destinations supplied by the user rather than as fully verified documents.

The user also supplied the correct Google Street View embed:
```html
<iframe src="https://www.google.com/maps/embed?pb=!4v1791825647154!6m8!1m7!1sDsd4mnK4aCy6rATid4JkwQ!2m2!1d49.04966665723625!2d2.022063723216358!3f194.6892389321645!4f-10.290917139043856!5f1.0839813137111003" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
```

The new Accès page embeds this exact `src` with a descriptive title; responsive width/aspect behavior is handled by CSS. Runtime panorama rendering remains to be validated in a browser. The old image under the Street View heading is not reused as a panorama.
