import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");



const headerSource = await readFile(path.resolve("src/components/SiteHeader.astro"), "utf8");
assert.match(headerSource, /IntersectionObserver/, "The homepage Services navigation must track the visible section.");
assert.ok(headerSource.includes('rootMargin: "-96px 0px -55% 0px"'), "IntersectionObserver must use supported pixel/percentage rootMargin units.");
assert.ok(headerSource.includes('href="/#services"'), "Desktop and mobile navigation must both target the homepage Services section.");
assert.ok(headerSource.includes('link.classList.toggle("is-active", isCurrent)'), "The Services item must track the current visual navigation state.");
assert.ok(headerSource.includes('link.setAttribute("aria-current", "location")'), "The active Services link must expose its current location accessibly.");
assert.ok(headerSource.includes('link.removeAttribute("aria-current")'), "The Services link must clear its current location state when the section is no longer active.");

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

// Loop 013 — guard the mobile menu's visible state, reduced-motion behavior,
// and high-contrast waiting-list CTA interaction states.
const loop013Css = cssSource.split("/* Loop 013 — responsive navigation interaction polish */")[1] ?? "";
assert.ok(loop013Css.length > 0, "Loop 013 mobile navigation styles must be present.");
assert.match(loop013Css, /\.mobile-menu\[open\]\s*>\s*summary\s*\{/, "The mobile menu must visually distinguish its open state.");
assert.match(loop013Css, /\.mobile-menu\[open\] \.menu-lines i:nth-child\(1\)/, "The menu icon must respond to the open state.");
assert.match(loop013Css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.mobile-menu nav\s*\{\s*animation:\s*none;/, "The mobile menu reveal must respect reduced-motion preferences.");
const mobileMenuCtaStateRule = loop013Css.match(/\.mobile-menu nav \.mobile-menu-cta:hover,\s*\.mobile-menu nav \.mobile-menu-cta:focus-visible\s*\{([^}]*)\}/);
assert.ok(mobileMenuCtaStateRule, "The waiting-list CTA must define explicit hover and keyboard-focus states.");
assert.match(mobileMenuCtaStateRule[1], /color:\s*var\(--white\)/, "The waiting-list CTA must retain high-contrast white text while active.");
assert.match(mobileMenuCtaStateRule[1], /background:\s*var\(--teal-deep\)/, "The waiting-list CTA must use deep teal instead of the generic pale hover surface.");



// Loop 015 — protect compact layouts for resource, schedule, and embed cards.
const loop015Css = cssSource.split("/* Loop 015 — compact inner-page layouts */")[1] ?? "";
assert.ok(loop015Css.length > 0, "Loop 015 compact inner-page styles must be present.");
assert.ok(loop015Css.includes("@media (max-width: 420px)"), "Compact inner-page adjustments must target narrow screens.");
assert.ok(loop015Css.includes("grid-template-columns: 2.4rem minmax(0, 1fr)"), "Resource cards must preserve a compact icon/content layout on narrow screens.");
assert.ok(loop015Css.includes("grid-column: 1 / -1"), "Resource actions must move below the content on narrow screens.");
assert.ok(loop015Css.includes("flex-wrap: wrap"), "Schedule headings and badges must wrap instead of forcing overflow.");
assert.ok(loop015Css.includes("padding: 1.05rem"), "Embed headings must use compact padding on narrow screens.");

// Loop 016 — guard the mobile menu's keyboard and open/closed behavior.
assert.ok(headerSource.includes('menu.addEventListener("toggle", syncMenuLabel)'), "The mobile menu's accessible action label must follow its open state.");
assert.ok(headerSource.includes('menu.open ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"'), "The mobile menu must announce the action appropriate to its current state.");
assert.ok(headerSource.includes('if (event.key !== "Escape" || !menu.open) return;') && headerSource.includes("menu.open = false;") && headerSource.includes("summary?.focus();"), "Escape must close the open mobile menu and return focus to its trigger.");
assert.ok(headerSource.includes('menu.querySelectorAll("nav a")') && headerSource.includes('link.addEventListener("click", () => {') && headerSource.includes("menu.open = false;"), "Choosing a mobile navigation link must close the menu.");

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
const faqPage = await html("ressources-utiles/questions/index.html");
const waiting = await html("liste-attente/index.html");

const heroVisualTag = home.match(/<div\b[^>]*class="hero-visual"[^>]*>/i)?.[0] ?? "";
assert.ok(heroVisualTag.includes('role="group"') && heroVisualTag.includes('aria-label="Aperçu des locaux du cabinet"'), "Homepage photo gallery must expose its accessible label on a semantic group.");
const trustStripTag = home.match(/<div\b[^>]*class="trust-strip"[^>]*>/i)?.[0] ?? "";
assert.ok(trustStripTag.includes('role="group"') && trustStripTag.includes('aria-label="Informations pratiques"'), "Homepage practical contact strip must expose its accessible label on a semantic group.");


// Protect the exact operational destinations from accidental URL drift.
// Astro HTML-escapes ampersands inside attributes; decode only the common
// attribute entities before comparing URLs, without changing page output.
const decodeHtmlAttribute = (value) =>
  value
    .replace(/&amp;/gi, "&")
    .replace(/&#38;/gi, "&")
    .replace(/&#x26;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'");
const attributeValues = (markup, tagName, attributeName) =>
  [...markup.matchAll(new RegExp(`<${tagName}\\b([^>]*)>`, "gi"))]
    .map((tag) => tag[1].match(new RegExp(`\\b${attributeName}\\s*=\\s*["']([^"']*)["']`, "i"))?.[1])
    .filter((value) => value !== undefined)
    .map(decodeHtmlAttribute);
const assertExactDestination = (values, expected, description) => {
  assert.ok(
    values.includes(expected),
    `${description} must retain its exact approved destination: ${expected}`,
  );
};

assert.ok(home.includes('href="/#services"'), "Homepage navigation must retain the Services section link.");
assert.ok(home.includes('id="services"'), "Homepage must retain the Services section target.");
assert.match(home, /Cabinet des Hérons/i, "Homepage must include the practice name.");
assert.match(home, /liste-attente/i, "Homepage must expose the waiting-list path.");
assert.match(waiting, /Liste d.{0,2}attente/i, "Waiting-list page needs a meaningful title or heading.");
assert.doesNotMatch(
  resources,
  /class="faq-item"/,
  "The Resources overview must not repeat the full FAQ accordion list; use its dedicated FAQ page.",
);
assert.ok(
  resources.includes('href="/ressources-utiles/questions/"'),
  "The Resources overview must provide a clear link to the dedicated FAQ page.",
);
assert.equal(
  (faqPage.match(/class="faq-item"/g) || []).length,
  10,
  "The dedicated FAQ page must retain all ten existing answers after removing the duplicate preview.",
);


const expectedIntegrationUrls = {
  form: "https://docs.google.com/forms/d/e/1FAIpQLScMR1FWyX53VLXnJb6GeowOZUiPI0yswKq45elzOnOCACz-pQ/viewform",
  formEmbed: "https://docs.google.com/forms/d/e/1FAIpQLScMR1FWyX53VLXnJb6GeowOZUiPI0yswKq45elzOnOCACz-pQ/viewform?embedded=true",
  cpamPdf: "https://drive.google.com/file/d/1msvVUC-UMOAHLfb6ggOwVt2cNfNjnqob/view",
  mdphPdf: "https://drive.google.com/file/d/1w2jvSMQVWMltH1D9XMiW7NSLr6LwlFHj/view",
  mapEmbed: "https://maps-api-ssl.google.com/maps?hl=en-US&ll=49.049469%2C2.02295&output=embed&q=49.049538%2C2.022028&z=15",
  streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1791825647154!6m8!1m7!1sDsd4mnK4aCy6rATid4JkwQ!2m2!1d49.04966665723625!2d2.022063723216358!3f194.6892389321645!4f-10.290917139043856!5f1.0839813137111003",
  mapDirections: "https://www.google.com/maps/search/?api=1&query=27+Avenue+des+H%C3%A9rons%2C+95800+Cergy%2C+France",
  tamis: "https://www.tamis-autisme.org/",
  telephone: "tel:+33781243098",
  email: "mailto:edith.fautras@gmail.com",
};

const homeLinks = attributeValues(home, "a", "href");
const accessLinks = attributeValues(accessPage, "a", "href");
const resourceLinks = attributeValues(resources, "a", "href");
const waitingLinks = attributeValues(waiting, "a", "href");

assertExactDestination(homeLinks, expectedIntegrationUrls.form, "Homepage's existing Google Form link");
assertExactDestination(waitingLinks, expectedIntegrationUrls.form, "Waiting-list page's existing Google Form link");
assertExactDestination(resourceLinks, expectedIntegrationUrls.cpamPdf, "CPAM document link");
assertExactDestination(resourceLinks, expectedIntegrationUrls.mdphPdf, "MDPH document link");
assertExactDestination(accessLinks, expectedIntegrationUrls.mapDirections, "Google Maps directions link");
assertExactDestination(resourceLinks, expectedIntegrationUrls.tamis, "Tamis directory link");

const homeFormEmbeds = attributeValues(home, "iframe", "src").filter((value) => value.includes("docs.google.com/forms/"));
const waitingFormEmbeds = attributeValues(waiting, "iframe", "src").filter((value) => value.includes("docs.google.com/forms/"));
assert.deepEqual(homeFormEmbeds, [expectedIntegrationUrls.formEmbed], "Homepage must preserve exactly one unchanged embedded Google Form destination.");
assert.deepEqual(waitingFormEmbeds, [expectedIntegrationUrls.formEmbed], "Waiting-list page must preserve exactly one unchanged embedded Google Form destination.");


assert.ok(accessPage.includes('<p class="embed-caption map-link">') && accessPage.includes("Ouvrir dans Google Maps"), "The map destination must use a simple caption row, not a nested card.");
assert.ok(accessPage.includes('<p class="embed-caption small-print street-view-caption">'), "The Street View explanation must use the same simple caption treatment.");
assert.ok(!accessPage.includes('class="card map-link"') && !accessPage.includes('class="card small-print"'), "Map and Street View captions must not create nested cards inside the embed cards.");

const accessEmbedUrls = attributeValues(accessPage, "iframe", "src");
assertExactDestination(accessEmbedUrls, expectedIntegrationUrls.mapEmbed, "Original Google Maps iframe");
assertExactDestination(accessEmbedUrls, expectedIntegrationUrls.streetViewEmbed, "User-supplied Google Street View panorama iframe");

for (const [pageName, page] of [["homepage", home], ["access", accessPage], ["resources", resources], ["waiting-list", waiting]]) {
  const links = attributeValues(page, "a", "href");
  assertExactDestination(links, expectedIntegrationUrls.telephone, `${pageName} public phone link`);
  assertExactDestination(links, expectedIntegrationUrls.email, `${pageName} public email link`);
}
// Loop 014 — pricing tables must expose named, keyboard-focusable scroll regions and accessible captions.
const pricingPage = await html("prestations/index.html");
const pricingRegions = [...pricingPage.matchAll(/<div\b([^>]*class="table-wrap"[^>]*)>([\s\S]*?)<\/div>/gi)];
assert.equal(pricingRegions.length, 3, "The three practitioner pricing tables must remain present.");
for (const [index, region] of pricingRegions.entries()) {
  assert.match(region[1], /\brole="region"/i, "Pricing table " + (index + 1) + " must expose a named scroll region.");
  assert.match(region[1], /\btabindex="0"/i, "Pricing table " + (index + 1) + " must be keyboard-focusable for horizontal scrolling.");
  assert.match(region[1], /\baria-label="Tarifs : [^"]+"/i, "Pricing table " + (index + 1) + " must have a descriptive region name.");
  assert.match(region[2], /<caption class="sr-only">Tarifs affichés pour les prestations de [^<]+<\/caption>/i, "Pricing table " + (index + 1) + " must have an accessible caption.");
}
const loop014Css = cssSource.split("/* Loop 014 — accessible pricing table overflow */")[1] ?? "";
assert.ok(loop014Css.length > 0, "Loop 014 pricing table scrolling styles must be present.");
assert.match(loop014Css, /\.table-wrap\[role="region"\]:focus-visible\s*\{[^}]*outline:\s*3px solid var\(--blue\)/, "Pricing table scroll regions must have a visible keyboard focus indicator.");
assert.match(loop014Css, /scrollbar-width:\s*thin/, "Pricing table scroll areas should have a compact, visible scrollbar where supported.");

const groupPage = await html("prise-en-charge-de-groupe/index.html");
assert.match(groupPage, /aria-current="location"/, "Group-support route must correctly mark its parent Tarifs & groupes navigation item as the current location.");

const allHtml = await Promise.all(routeFiles.map(html));


const loop022Css = cssSource.split("/* Loop 022 — quieter standalone contact links outside prose */")[1] ?? "";
assert.ok(loop022Css.length > 0, "Loop 022 standalone contact-link styling must be present.");
assert.match(loop022Css, /\.contact-link\s*\{[^}]*text-decoration:\s*none;/, "Standalone contact links must not be underlined at rest.");
assert.match(loop022Css, /\.contact-link:hover,\s*\.contact-link:focus-visible\s*\{[^}]*text-decoration:\s*underline;/, "Standalone contact links must show clear underline feedback on hover/focus.");
assert.match(loop022Css, /\.notice-contact-links\s*\{[^}]*display:\s*grid;[^}]*gap:\s*0\.4rem;/, "Waiting-list contact details must use consistent vertical spacing.");
assert.match(home, /<a class="contact-link" href="tel:\+33781243098">/, "Homepage phone link must use the quiet contact-link treatment.");
assert.match(home, /<a class="contact-link" href="mailto:edith\.fautras@gmail\.com">/, "Homepage email link must use the quiet contact-link treatment.");
assert.match(pricingPage, /<a class="contact-link" href="tel:\+33781243098">/, "Pricing-page direct phone link must use the quiet contact-link treatment.");
assert.match(waiting, /<div class="notice-contact-links"><a class="contact-link" href="tel:\+33781243098">[\s\S]*?<a class="contact-link" href="mailto:edith\.fautras@gmail\.com">/, "Waiting-list phone/email links must be grouped with consistent spacing and quiet resting styles.");

const loop021Css = cssSource.split("/* Loop 021 — visual polish: calmer spacing, clean footer links, consistent embed captions */")[1] ?? "";
assert.ok(loop021Css.length > 0, "Loop 021 visual-polish rules must be present.");
assert.match(loop021Css, /\.section\s*\{[^}]*padding-block:\s*clamp\(3\.8rem,\s*6vw,\s*6\.2rem\)/, "Desktop section spacing must use the calmer vertical rhythm.");
assert.match(loop021Css, /@media\s*\(max-width:\s*700px\)[\s\S]*?\.section\s*\{\s*padding-block:\s*3\.1rem;/, "Mobile section spacing must be tightened as well.");
assert.match(loop021Css, /\.site-footer a\s*\{[^}]*text-decoration:\s*none;/, "Footer links must not be underlined at rest.");
assert.match(loop021Css, /\.site-footer a:hover,\s*\.site-footer a:focus-visible\s*\{[^}]*text-decoration:\s*underline;/, "Footer links must receive an underline on hover and keyboard focus.");
assert.match(loop021Css, /\.footer-links a\s*\{[^}]*display:\s*block;/, "Footer navigation links must have a consistent vertical rhythm.");
assert.match(loop021Css, /\.embed-caption\s*\{[^}]*box-shadow:\s*none;/, "Map and Street View captions must not appear as nested cards.");


// ARIA labels on generic div/span containers are not exposed as accessible names.
// Require a semantic, nameable role whenever these elements declare aria-label.
for (const [index, page] of allHtml.entries()) {
  const file = routeFiles[index];
  const labelledGenericContainers = [
    ...page.matchAll(/<(div|span)\b([^>]*)\baria-label\s*=\s*["'][^"']+["']([^>]*)>/gi),
  ];
  for (const match of labelledGenericContainers) {
    const attributes = match[2] + " " + match[3];
    const role = attributes.match(/\brole\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();
    assert.ok(
      role && !["generic", "none", "presentation"].includes(role),
      file + " puts aria-label on a generic div/span without a semantic role that permits naming.",
    );
  }
}


// Loop 017 — catch migration-only notes accidentally exposed in public copy.
for (const [index, page] of allHtml.entries()) {
  assert.doesNotMatch(
    page,
    /\b(?:le site source|la page source|du site source|de la page source|sur le site source|sur la page source|contenu source|site source|page source|source site|source page|content source)\b|remplacer l’image statique incorrectement placée|liens de fichiers manquants|n['’]a pas été inspecté dans cette étape|dans cette étape/i,
    routeFiles[index] + " must not expose internal migration notes to visitors.",
  );
}
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

console.log(`Build verification passed: ${routeFiles.length} static routes, ${localImages.length} local image assets, canonical/Open Graph metadata, sitemap/robots, accessibility semantics and contrast checks, exact existing Form/Maps/Street View/PDF/contact destinations, and build fingerprint (${buildInfo.commitSha}) are present.`);


// Loop 023 — service-card links align despite different paragraph lengths.
const globalCss = cssSource;
assert.match(globalCss, /\.cards-grid\s*>\s*\.card\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/s, "Service cards must use a vertical flex layout so actions can align consistently.");
assert.match(globalCss, /\.cards-grid\s*>\s*\.card\s*>\s*\.text-link\s*\{[^}]*margin-top:\s*auto;/s, "Service-card action links must sit at the bottom of cards with different copy lengths.");
