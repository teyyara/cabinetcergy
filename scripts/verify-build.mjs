import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");


const cssSource = await readFile(path.resolve("src/styles/global.css"), "utf8");
const getColorToken = (name) => {
  const match = cssSource.match(new RegExp(name + ":\\s*(#[0-9a-fA-F]{6})"));
  assert.ok(match, `Missing CSS design token ${name}.`);
  return match[1];
};
const relativeLuminance = (hex) => {
  const channels = [1, 3, 5].map((index) => {
    const value = Number.parseInt(hex.slice(index, index + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};
const contrastRatio = (first, second) => {
  const [lighter, darker] = [relativeLuminance(first), relativeLuminance(second)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
};
const mutedColor = getColorToken("--muted");
const paperColor = getColorToken("--paper");
const warmPaperColor = getColorToken("--paper-warm");
const tealDeepColor = getColorToken("--teal-deep");
const tealPaleColor = getColorToken("--teal-pale");
assert.ok(contrastRatio(mutedColor, paperColor) >= 4.5, "Muted text must meet WCAG AA contrast on paper.");
assert.ok(contrastRatio(mutedColor, warmPaperColor) >= 4.5, "Muted text must meet WCAG AA contrast on warm paper.");
assert.ok(contrastRatio(mutedColor, "#ffffff") >= 4.5, "Muted text must meet WCAG AA contrast on white.");
assert.ok(contrastRatio(tealDeepColor, tealPaleColor) >= 4.5, "Teal text/link colour must meet WCAG AA contrast on pale teal.");
assert.ok(contrastRatio(tealDeepColor, paperColor) >= 4.5, "Teal text/link colour must meet WCAG AA contrast on paper.");
assert.ok(contrastRatio(tealDeepColor, "#ffffff") >= 4.5, "Teal text/link colour must meet WCAG AA contrast on white.");


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
const groupPage = await html("prise-en-charge-de-groupe/index.html");
assert.match(groupPage, /aria-current="location"/, "Group-support route must correctly mark its parent Tarifs & groupes navigation item as the current location.");

const allHtml = await Promise.all(routeFiles.map(html));
for (const [index, page] of allHtml.entries()) {
  const file = routeFiles[index];
  assert.match(page, /<html[^>]+lang="fr"/i, file + " must declare French as its language.");
  assert.match(page, /<title>[^<]+<\/title>/i, file + " must have a non-empty title.");
  assert.equal((page.match(/<h1\b/gi) || []).length, 1, file + " must include exactly one H1.");
  assert.equal((page.match(/<main\b/gi) || []).length, 1, file + " must have exactly one main landmark.");

  const images = [...page.matchAll(/<img\b([^>]*)>/gi)];
  for (const match of images) {
    assert.match(match[1], /\balt\s*=/i, file + " contains an image without an alt attribute.");
  }

  const iframes = [...page.matchAll(/<iframe\b([^>]*)>/gi)];
  for (const match of iframes) {
    assert.match(match[1], /\btitle\s*=\s*["'][^"']+["']/i, file + " contains an iframe without a descriptive title.");
  }

  const links = [...page.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];
  for (const match of links) {
    const attributes = match[1];
    const markup = match[2];
    const ariaLabel = attributes.match(/\baria-label\s*=\s*["']([^"']+)["']/i)?.[1]?.trim();
    const title = attributes.match(/\btitle\s*=\s*["']([^"']+)["']/i)?.[1]?.trim();
    const imageAlt = markup.match(/<img\b[^>]*\balt\s*=\s*["']([^"']*)["']/i)?.[1]?.trim();
    const nestedLabel = markup.match(/\baria-label\s*=\s*["']([^"']+)["']/i)?.[1]?.trim();
    const readableText = markup
      .replace(/<[^>]+>/g, " ")
      .replace(/&(?:nbsp|#160);/gi, " ")
      .replace(/&(?:amp|#38);/gi, "&")
      .replace(/\s+/g, " ")
      .trim();
    assert.ok(
      ariaLabel || title || nestedLabel || readableText || imageAlt,
      file + " contains a link without a detectable accessible name.",
    );
    if (/\btarget\s*=\s*["']_blank["']/i.test(attributes)) {
      const rel = attributes.match(/\brel\s*=\s*["']([^"']+)["']/i)?.[1] ?? "";
      assert.match(rel, /\bnoopener\b/i, file + " has a new-tab link without rel=noopener.");
    }
  }

  const headings = [...page.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((match) => Number(match[1]));
  for (let heading = 1; heading < headings.length; heading += 1) {
    assert.ok(
      headings[heading] <= headings[heading - 1] + 1,
      file + " skips a heading level from H" + headings[heading - 1] + " to H" + headings[heading] + ".",
    );
  }
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

console.log(`Build verification passed: ${routeFiles.length} static routes, ${localImages.length} local image assets, canonical/Open Graph metadata, sitemap/robots, accessibility semantics and contrast checks, Form, Street View, both PDF destinations and build fingerprint (${buildInfo.commitSha}) are present.`);
