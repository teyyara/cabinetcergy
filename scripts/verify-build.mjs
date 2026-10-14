import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");

const buildInfo = JSON.parse(await readFile(path.join(dist, "build-info.json"), "utf8"));
assert.equal(buildInfo.application, "cabinet-des-herons", "Build fingerprint must identify this site.");
assert.equal(buildInfo.formatVersion, 1, "Build fingerprint format must be supported.");
assert.ok(typeof buildInfo.buildProvider === "string" && buildInfo.buildProvider.length > 0, "Build provider must be recorded.");
assert.ok(typeof buildInfo.commitSha === "string" && buildInfo.commitSha.length > 0, "Build commit must be recorded.");
assert.ok(typeof buildInfo.branch === "string" && buildInfo.branch.length > 0, "Build branch must be recorded.");
const expectedCommit = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA;
if (expectedCommit) {
  assert.equal(buildInfo.commitSha, expectedCommit, "Build fingerprint must match the commit supplied by the hosting/CI environment.");
}


const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
const sitemapUrls = sitemap
  .split("<loc>")
  .slice(1)
  .map((segment) => segment.split("</loc>")[0]);
const expectedSitemapUrls = [
  "https://cabinetcergy.vercel.app/",
  "https://cabinetcergy.vercel.app/le-cabinet/",
  "https://cabinetcergy.vercel.app/equipe/",
  "https://cabinetcergy.vercel.app/psychomotricite/",
  "https://cabinetcergy.vercel.app/psycho-education/",
  "https://cabinetcergy.vercel.app/prestations/",
  "https://cabinetcergy.vercel.app/prise-en-charge-de-groupe/",
  "https://cabinetcergy.vercel.app/acces/",
  "https://cabinetcergy.vercel.app/ressources-utiles/",
  "https://cabinetcergy.vercel.app/ressources-utiles/questions/",
  "https://cabinetcergy.vercel.app/liste-attente/",
];
assert.deepEqual(
  [...sitemapUrls].sort(),
  [...expectedSitemapUrls].sort(),
  "Sitemap must contain the intended indexable routes and no duplicate/alias URLs.",
);
assert.ok(robots.includes("User-agent: *"), "robots.txt must apply to all well-behaved crawlers.");
assert.ok(robots.includes("Allow: /"), "robots.txt should allow public informational pages.");
assert.ok(
  robots.includes("Sitemap: https://cabinetcergy.vercel.app/sitemap.xml"),
  "robots.txt must advertise the sitemap.",
);

const routeFiles = [
  "index.html",
  "accueil/index.html",
  "le-cabinet/index.html",
  "equipe/index.html",
  "psychomotricite/index.html",
  "psycho-education/index.html",
  "prestations/index.html",
  "prise-en-charge-de-groupe/index.html",
  "acces/index.html",
  "ressources-utiles/index.html",
  "ressources-utiles/questions/index.html",
  "questions/index.html",
  "liste-attente/index.html",
  "404.html",
];

for (const file of routeFiles) {
  await access(path.join(dist, file));
}

const html = async (file) => readFile(path.join(dist, file), "utf8");

const canonicalPages = [
  ["index.html", "https://cabinetcergy.vercel.app/"],
  ["accueil/index.html", "https://cabinetcergy.vercel.app/"],
  ["le-cabinet/index.html", "https://cabinetcergy.vercel.app/le-cabinet/"],
  ["equipe/index.html", "https://cabinetcergy.vercel.app/equipe/"],
  ["psychomotricite/index.html", "https://cabinetcergy.vercel.app/psychomotricite/"],
  ["psycho-education/index.html", "https://cabinetcergy.vercel.app/psycho-education/"],
  ["prestations/index.html", "https://cabinetcergy.vercel.app/prestations/"],
  ["prise-en-charge-de-groupe/index.html", "https://cabinetcergy.vercel.app/prise-en-charge-de-groupe/"],
  ["acces/index.html", "https://cabinetcergy.vercel.app/acces/"],
  ["ressources-utiles/index.html", "https://cabinetcergy.vercel.app/ressources-utiles/"],
  ["ressources-utiles/questions/index.html", "https://cabinetcergy.vercel.app/ressources-utiles/questions/"],
  ["questions/index.html", "https://cabinetcergy.vercel.app/ressources-utiles/questions/"],
  ["liste-attente/index.html", "https://cabinetcergy.vercel.app/liste-attente/"],
];
for (const [file, canonical] of canonicalPages) {
  const page = await html(file);
  assert.ok(
    page.includes(`<link rel="canonical" href="${canonical}"`),
    `${file} must declare the correct canonical URL.`,
  );
  assert.ok(
    page.includes(`<meta property="og:url" content="${canonical}"`),
    `${file} must expose the same canonical URL in Open Graph metadata.`,
  );
}
assert.match(await html("accueil/index.html"), /name="robots" content="noindex, follow"/, "The duplicate Accueil route must remain excluded from indexing.");
assert.match(await html("questions/index.html"), /name="robots" content="noindex, follow"/, "The short Questions alias must remain excluded from indexing.");
assert.match(await html("404.html"), /name="robots" content="noindex, follow"/, "The custom 404 page must not be indexed.");

const home = await html("index.html");
const accessPage = await html("acces/index.html");
const resources = await html("ressources-utiles/index.html");
const waiting = await html("liste-attente/index.html");

assert.match(home, /Cabinet des Hérons/i, "Homepage must include the practice name.");
assert.match(home, /liste-attente/i, "Homepage must expose the waiting-list path.");
assert.match(accessPage, /!4v1791825647154!6m8!1m7!1sDsd4mnK4aCy6rATid4JkwQ/, "The user-supplied Street View panorama must be present.");
assert.match(resources, /1msvVUC-UMOAHLfb6ggOwVt2cNfNjnqob/, "The supplied CPAM PDF link must be present.");
assert.match(resources, /1w2jvSMQVWMltH1D9XMiW7NSLr6LwlFHj/, "The supplied MDPH PDF link must be present.");
assert.match(waiting, /1FAIpQLScMR1FWyX53VLXnJb6GeowOZUiPI0yswKq45elzOnOCACz-pQ/, "The existing Google Form integration must be preserved.");
assert.match(waiting, /Liste d.{0,2}attente/i, "Waiting-list page needs a meaningful title or heading.");

const allHtml = await Promise.all(routeFiles.map(html));
for (const [index, page] of allHtml.entries()) {
  assert.match(page, /<html[^>]+lang="fr"/i, `${routeFiles[index]} must declare French as its language.`);
  assert.match(page, /<title>[^<]+<\/title>/i, `${routeFiles[index]} must have a non-empty title.`);
  assert.match(page, /<h1[ >]/i, `${routeFiles[index]} must include a top-level heading.`);
}


const localImages = [
  "images/cabinet-des-herons-logo.webp",
  "images/cabinet-room-01.webp",
  "images/cabinet-room-03.webp",
  "images/cabinet-room-05.webp",
  "images/edith-fautras.webp",
  "images/jarod-florance.webp",
  "images/bouhar-obeidi.webp",
];
for (const image of localImages) {
  const imagePath = path.join(dist, image);
  await access(imagePath);
  const imageInfo = await stat(imagePath);
  assert.ok(imageInfo.size > 1_000, `${image} must be a non-empty local image asset.`);
}

assert.ok(home.includes('src="/images/cabinet-des-herons-logo.webp"'), "The site header must use the local logo.");
assert.ok(home.includes('src="/images/cabinet-room-01.webp"'), "The homepage must use local room photography.");
const teamPage = await html("equipe/index.html");
assert.ok(teamPage.includes('src="/images/edith-fautras.webp"'), "The team page must show Edith Fautras’s local portrait.");
assert.ok(teamPage.includes('src="/images/jarod-florance.webp"'), "The team page must show Jarod Florance’s local portrait.");
assert.ok(teamPage.includes('src="/images/bouhar-obeidi.webp"'), "The team page must show Bouhar Oubeidi’s local portrait.");
assert.ok(!allHtml.join("\n").includes("sites.google.com/sitesv-images-rt"), "Rendered pages must not depend on Google Sites’ image gateway.");

console.log(`Build verification passed: ${routeFiles.length} static routes, ${localImages.length} local image assets, canonical/Open Graph metadata, robots.txt, sitemap.xml, Form, Street View, both PDF destinations and build fingerprint (${buildInfo.commitSha}) are present.`);
