import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
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

console.log(`Build verification passed: ${routeFiles.length} static routes, ${localImages.length} local image assets, Form, Street View and both PDF destinations are present.`);
