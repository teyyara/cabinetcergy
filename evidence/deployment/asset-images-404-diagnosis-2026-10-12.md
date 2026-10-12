# Production image 404 diagnosis — 2026-10-12

## Result

The image files are already in the Git repository. The current production 404 is caused by the served Vercel deployment being older than the repository's asset migration, not by the browser being blocked from those local files by Google.

## Verified repository state

At the time of investigation, `main` pointed to `efc2cb09834df468028d8223294ea9c5594c727a`. That tree contains all seven non-empty WebP assets under `public/images/`. `src/components/SiteHeader.astro` and `src/components/HomeContent.astro` reference the local `/images/...` paths, and CI has passed the Astro build and asset-path verification after Loop 005.

## Verified production state

Vercel reported its latest production deployment as:

- Deployment: `dpl_EzSwQssaF265kdcXsnd2UNQcpEC4`
- Status: `READY`
- Alias: `cabinetcergy.vercel.app`
- Source: `redeploy`
- Deployed Git SHA: `f1c0ccb3531bcb39ffd3bf8805bd642762e609c6`
- Commit message: `AEOS LOOP 004: Update current Vercel deployment reference`

That deployed SHA predates the asset migration. Direct production checks returned the site's HTML for `/images/cabinet-room-01.webp` with HTTP 404, and the live homepage still referenced `sitesv-images-rt` URLs. This is consistent with the old artifact being served.

## Correct recovery procedure

Do not use **Redeploy** on the old `f1c0ccb` deployment: that rebuilds the original deployment source and keeps the old Git SHA. Create a **new deployment from a Git reference** in Vercel instead:

1. Open the `cabinetcergy` project → **Deployments** → **Create Deployment**.
2. Select branch `main` (or explicitly provide the latest main commit SHA).
3. Ensure the resulting deployment is **Production** and its Git SHA is the current `main` head, not `f1c0ccb`.
4. After it reaches **Ready**, test `https://cabinetcergy.vercel.app/images/cabinet-room-01.webp` and the logo/portrait paths. Each should return HTTP 200 with an image content type.

Vercel's Git deployment documentation describes creating new deployments by branch or commit: https://vercel.com/docs/git

## Operational notes

- A fresh deployment request through the Vercel API was blocked by the account's daily free API-deployment limit; no plan, billing, or protection setting was changed.
- If merges to `main` continue not to create new deployments automatically, check **Project Settings → Git** and the Production Branch setting / Git connection. A successful GitHub CI build does not itself prove a new Vercel production deployment occurred.
- No external image hosting was added. The header, footer, selected room photos and practitioner portraits are intended to be served from this repository's `public/images/` folder. The existing Google Form, PDF links and Street View integration remain untouched.
