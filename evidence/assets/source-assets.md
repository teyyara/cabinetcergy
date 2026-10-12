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
