# MASTER STRATEGY PROMPT — CABINET DES HÉRONS
## Transform the existing Google Sites website into a premium, fully featured, professional healthcare website

### 1. Your mission

You are an autonomous senior web developer, UI/UX designer, accessibility specialist, SEO engineer, and website migration expert.

Your mission is to transform the existing Cabinet des Hérons website from a basic Google Sites creation into an exceptionally polished, trustworthy, modern and professional healthcare website.

**Original website:**  
https://sites.google.com/view/cabinetdesheronscergy/

This is an existing website belonging to a real healthcare practice. It is already being used by the cabinet owner. Your responsibility is to preserve its existing content, information, imagery, links and working features while dramatically improving the visual presentation, user experience, responsiveness, organisation and technical quality.

The new website should feel like a premium professional website created by a talented design and engineering team, not a generic template, a school project or a basic recreation of Google Sites.

However, the highest priority is **content and functional fidelity**. Do not sacrifice existing information or working functionality for visual design.

You must inspect the original website yourself. Do not rely exclusively on this prompt, a previously prepared summary, assumptions, or the content visible on the homepage. The original website is the primary source of truth for the migration.

---

### 2. NON-NEGOTIABLE CONSTRAINTS

These requirements override all other architectural, design, and implementation decisions.

#### 2.1 Zero-cost implementation

The entire implementation must be achievable without purchasing any service, product, subscription, licence, premium template, premium component library or paid hosting feature.

Use free and open-source technologies wherever possible.

Do not:
- Introduce paid APIs, plugins, themes, design assets or external services.
- Purchase a domain name or other service.
- Enable paid deployment features or paid usage add-ons.
- Depend on a premium CMS, premium form provider or paid image service.
- Add a feature that can work only after purchasing a subscription.
- Introduce payment processing, user accounts or other functionality that the existing website does not require.

If a hosting provider offers a free tier, use only functionality that is actually available without payment, and verify the applicable constraints before depending on it.

Prefer simple, portable technologies that can be maintained without recurring costs.

#### 2.2 No new backend, database or external data-storage system

This is primarily a public informational website. It does not need a custom application backend.

Do not create:
- A new database.
- A custom API or server-side application.
- A new customer relationship management system.
- A new patient management system.
- A new file-storage service.
- A new booking or appointment management platform.
- A new authentication system.
- A new form-processing backend.
- A new cloud storage integration.
- A new analytics database or tracking infrastructure.

Do not store form submissions, visitor information, family information or patient-related data in the new website, its source repository, deployment environment, browser storage or any newly introduced third-party service.

The source code repository should contain only the website code, public website content and appropriately approved static assets. Never include real patient information, form responses, credentials or confidential operational files.

#### 2.3 Preserve the existing waiting-list form EXACTLY as an operating feature

**The form is already operational. Do not remake it.**

The existing form already sends information to the cabinet owner through the established process. The owner already uses it, and that process must continue functioning.

Your task is to reproduce the existing form's presence and presentation within the new website while preserving the original form itself.

Mandatory procedure:

1. Locate the exact form used by the original website.
2. Inspect how it is embedded or linked, including its original URL and any available iframe source.
3. Identify the existing submission destination and workflow as far as publicly observable, without accessing private accounts or private responses.
4. Embed the exact same existing form in the new site, or reproduce the original link to it if that is how the original feature operates.
5. Preserve its existing service, questions, field names, order, options, required fields, validation, submission mechanism, confirmation behaviour and delivery to the cabinet owner.
6. Test that the embedded or linked form remains usable and that its submission interface has not been broken by the new design.

Do not create a replacement form.

Do not manually recreate the questions in a new form service.

Do not replace the form with an HTML form, a custom modal, an email link, a mailto action, a new API, a webhook or a new submission handler.

Do not change the email address, destination, recipients, permissions, notifications or other settings of the existing form.

Do not connect the form to a database or another data processor.

Do not inspect, download, copy or expose real form responses.

You may redesign the surrounding section, heading, explanatory text presentation, spacing, container and responsive layout. You must not alter the existing form's underlying functionality.

If an embedded form has technical limitations, retain the original working form through its existing URL rather than trying to replace its functionality. Document any browser restrictions or third-party display limitations that cannot be controlled from the new site.

**The existing form is the deliberate exception to the prohibition on new data systems: preserve the existing service and workflow without creating an additional one.**

#### 2.4 Preserve the existing external functionality

The original Google Maps integration, Street View, external resource links, downloadable documents, phone links, email links and other useful external elements must be inspected and preserved.

Do not replace Google Maps with an unrelated mapping service.

Do not invent a new map or make up coordinates.

Do not use an illustrative photograph as a replacement for the existing Street View simply because it is easier to implement.

Keep the original map and Street View destinations or embeds whenever they remain functional. You may improve their surrounding layout and responsive presentation, but preserve their intended behaviour.

Preserve the original resource destinations and downloadable files. Do not substitute a different document without verification.

Do not introduce an external CMS, image CDN, data collection service, tracking provider or other third-party integration merely for convenience.

Where a third-party service is already an intentional part of the existing website, retain that service as needed to preserve functionality. Do not create additional dependencies unnecessarily.

#### 2.5 No silent content changes

The purpose is to transfer the original website into a better presentation.

Do not invent:
- New healthcare services.
- New practitioners or qualifications.
- New treatment claims.
- New prices or reimbursement guarantees.
- New opening hours.
- New appointment availability.
- New transport information.
- New contact information.
- Testimonials, reviews or endorsements that do not already exist.

Do not remove existing information just because it is difficult to present elegantly.

Do not silently change potentially outdated information. Record it for verification while retaining the original value as the migration baseline.

The source website takes precedence over any assumptions or example content in this prompt.

---

### 3. FIRST TASK: CONDUCT A COMPLETE SOURCE-WEBSITE AUDIT

Before implementation, examine:

https://sites.google.com/view/cabinetdesheronscergy/

Open the website in a real browser or another appropriate inspection environment. Use available browser automation, developer tools, page-source inspection and command-line tools when they are useful.

Explore the site as a visitor would.

Do not stop after inspecting the homepage.

#### 3.1 Discover every page

Inspect the entire navigation structure, all internal links and relevant linked pages.

The following are known starting points, not an exhaustive substitute for discovery:

1. Homepage:
   https://sites.google.com/view/cabinetdesheronscergy/

2. Accueil:
   https://sites.google.com/view/cabinetdesheronscergy/accueil

3. Le Cabinet:
   https://sites.google.com/view/cabinetdesheronscergy/le-cabinet

4. Prestations et tarifs:
   https://sites.google.com/view/cabinetdesheronscergy/prestations

5. Prise en charge de groupe:
   https://sites.google.com/view/cabinetdesheronscergy/prise-en-charge-de-groupe

6. Accès:
   https://sites.google.com/view/cabinetdesheronscergy/acc%C3%A8s

7. Psychomotricité:
   https://sites.google.com/view/cabinetdesheronscergy/psychomotricit%C3%A9

8. Psycho-éducation:
   https://sites.google.com/view/cabinetdesheronscergy/psycho-%C3%A9ducation

9. Ressources utiles:
   https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles

10. Questions:
    https://sites.google.com/view/cabinetdesheronscergy/ressources-utiles/questions

11. L’Équipe:
    https://sites.google.com/view/cabinetdesheronscergy/l%C3%A9quipe

The homepage and Accueil may present the same content. Verify this, then avoid unnecessarily duplicating the page in the new site's navigation.

Discover any additional pages, anchors, links, downloadable resources or embedded content through the actual website. Do not assume the list above contains everything.

#### 3.2 Inspect every page completely

For each page:

- Read all visible text.
- Inspect the full page, including content below the fold.
- Scroll to the bottom.
- Record the exact headings, paragraphs, lists, captions and notices.
- Identify every photograph, logo, certificate and illustration.
- Inspect links, buttons, accordions and other interactive elements.
- Identify embedded Google Forms, Google Maps, Street View and external widgets.
- Record the destinations of relevant links.
- Identify duplicated content and shared navigation elements.
- Inspect the page on desktop and mobile layouts where possible.
- Capture screenshots or equivalent visual references for design reconstruction.

Do not capture only the first viewport and infer the rest of the page.

If a page, image, form, iframe or document cannot be accessed, try reasonable alternatives such as opening its direct URL, following an internal link, viewing the rendered page, inspecting available markup, or using a compatible browser.

Do not bypass authentication or access private information.

Keep a record of what could and could not be inspected.

#### 3.3 Produce a complete migration inventory

Before writing the main website implementation, prepare an inventory containing:

- Every original page and its proposed destination.
- Every heading, paragraph and meaningful content block.
- Every local image and its original source.
- Every image's intended purpose and placement.
- All practitioner information and qualifications.
- All fees, durations, schedules and conditions.
- All waiting-list form links or embeds.
- The exact map and Street View sources.
- All external resource destinations.
- Both downloadable PDF resources and their verified destinations.
- Every telephone number, email address and other contact detail.
- Every working interactive feature.
- All uncertain, inaccessible or potentially outdated content.

Keep a correspondence between the original website and the new website so that no page, image or feature disappears during the migration.

Do not proceed to final launch until this inventory has been used to check the implementation.

---

### 4. EXISTING CONTENT THAT MUST BE INCLUDED IN THE AUDIT

Use the following as a checklist when inspecting the source site. Always verify details against the actual original website and transfer the source content faithfully.

#### A. Brand and identity

The site is called Cabinet des Hérons — Cergy.

Its existing identity includes a logo depicting a heron, a brain and children, with the wording:

“CABINET des HÉRONS — CERGY — PSYCHOMOTRICITÉ & PSYCHOÉDUCATION”

Its tagline is:

“Accompagner chaque enfant vers l’autonomie.”

The site's core message concerns a caring approach to supporting children's and adolescents' development.

Retain the existing logo and branding assets wherever available. Do not create an unrelated new identity.

#### B. The practice and premises

Inspect the existing description of:

- The cabinet's approach to neurodevelopmental disorders.
- ABA, TEACCH and CAA references.
- The premises and their layout.
- The waiting room and treatment spaces.
- The air conditioning.
- The reading corner and activity materials.
- The existing photographs of the premises.
- The accessibility and family facilities.

The original site describes two rooms totalling 35 m², renovated premises and a child-friendly environment. Verify these claims against the current source.

Preserve all relevant photographs and captions. Keep originals in the project’s local asset directory when appropriately available and authorised.

#### C. Team

Inspect the complete profiles of all practitioners listed on the website, including:

- Edith Fautras.
- Jarod Florance.
- Bouhar Oubeidi.

Transfer their original biographies, roles, qualifications, training, supervision information, relevant methods and photographs as published.

The original biographies contain specific training and professional-history details. Do not reduce them to three generic profile cards.

Some qualification and certificate scans may expose personal identifiers. Do not silently remove or alter them; flag them for appropriate owner verification and approval as part of the migration.

#### D. Services

Preserve the separate service content for psychomotricity and psychoeducation.

The current content discusses areas such as gross and fine motor skills, graphism, body schema, coordination, spatial and temporal orientation, motor planning, communication, reading, comprehension, attention, concentration, organisation, autonomy and social skills.

Transfer every other verified topic from the source pages as well.

Preserve the existing distinctions concerning medical prescriptions, assessments, individual sessions and parent guidance.

#### E. Fees and group programmes

The original pricing page includes practitioner-specific prices, session durations, initial consultations, travel to meetings, parent guidance, AESH supervision and group pricing.

It identifies the 2026–2027 school year.

The group page lists the following programme names and schedules as migration-check items:

- Maternelle: Monday and Wednesday, 09:30–11:00.
- Indigo: Monday, 15:30–17:00; Wednesday, 11:00–12:30.
- Turquoise: Monday, 13:15–14:45; Wednesday, 13:30–15:00.
- Azur: Wednesday, 17:00–18:30.

The original site lists a group price of €35 per 90-minute session and an annual package paid across 11 or 12 months. Verify all fees, conditions and current schedules directly from the source.

Present the actual information in attractive, readable tables or structured pricing cards. Make it clear which practitioner, duration and conditions apply to each price.

Do not turn the waiting list into an appointment-booking system. The original website does not establish a new real-time booking system.

#### F. Access and location

The original address is:

27 Avenue des Hérons, 95800 Cergy, France.

The access page contains information about public transport, walking distances, parking near the Grande Mosquée, a map, Street View and advice for families arriving at the cabinet.

Its transport information includes references to Cergy Saint-Christophe, RER A, Transilien L, bus routes and several stops.

Verify the displayed map, Street View, imagery, links, coordinates and labels. Preserve the original integration and its behaviour.

Do not assume an image labelled Street View is actually a street view. Manually verify the intended visual reference and flag any source mismatch.

#### G. Resources and questions

Inspect and transfer the full Resources and Questions content.

This includes, wherever present:

- Explanations of psychomotricity, psychoeducation, ABA and CAA.
- Questions about consultations and initial appointments.
- Prescription requirements.
- Age groups and support.
- Information about diagnosis and treatment duration.
- Financial assistance through the CPAM.
- MDPH administrative guidance.
- TAMIS and other external directories.
- Mutual-insurer information.
- Family guides and educational documents.
- Every additional FAQ answer and downloadable resource.

The existing page references these documents:

- `nouveau dossier aide exceptionnelle à la cpam.pdf`
- `181120-VJB-Fiche réponse Projet de vie.pdf`

Locate the actual files and preserve their content and working download destinations. Inspect the documents where possible. Do not invent their contents from the filenames.

If Resources and Questions duplicate information, a cleaner navigation structure may consolidate the duplicate presentation, but every original answer must remain accessible.

#### H. Existing form and waiting-list notice

Locate the original waiting-list form and preserve it unchanged.

The form includes information about the child, contact information, diagnoses, other practitioners, educational circumstances, funding, desired services and other relevant details.

Its exact current fields and submission process must come from the original form, not from the summary above.

Retain the waiting-list status notices and explanations surrounding the form. If the source gives an availability or opening date that may no longer be current, preserve the source content as the migration baseline and flag it for owner approval rather than silently inventing an update.

---

### 5. TECHNICAL ARCHITECTURE

Build a modern, polished, static website with no new backend or persistent data system.

Recommended default:

- Astro with TypeScript for statically generated pages.
- React components only where interactivity genuinely benefits from them.
- CSS or a free, open-source styling solution.
- Local image assets and fonts that are legally available for the project.
- Lightweight, accessible JavaScript for navigation and interface interactions.
- A simple static build that can be deployed using an appropriate free hosting plan.

React with Vite and a suitable static-generation approach is also acceptable if it provides an equally good result. Choose the architecture that achieves the best combination of design quality, SEO, performance and maintainability without introducing unnecessary complexity.

All public informational pages should be statically generated where possible.

Do not install or configure a database, CMS, server API, patient portal, account system or form-processing backend.

Keep the site portable: another developer should be able to run the project, build it and deploy it without needing paid services.

#### Suggested structure

Use a clear, maintainable architecture similar to:

- `src/pages/` for public routes.
- `src/components/` for shared interface elements.
- `src/layouts/` for consistent page layouts.
- `src/styles/` for the design system and responsive styling.
- `src/content/` for verified public website content.
- `src/assets/` for local images, logos and approved static assets.
- `public/` for files that must retain stable public paths, including downloadable documents.
- `README.md` for setup, build, testing and deployment instructions.

Adjust this structure to the selected framework if necessary.

The site must not depend on the original Google Sites page for its basic layout or visual design. The original site should serve as a content and asset source, not as a permanent wrapper around the new website.

The only intentional external dependencies should be the existing features that must be preserved, such as the original waiting-list form, map, Street View or relevant resource destinations.

Do not load unnecessary external fonts, trackers, widgets or scripts.

---

### 6. VISUAL DESIGN DIRECTION

Create a distinctive premium healthcare website, built around the identity of Cabinet des Hérons.

The design should communicate:

- Professionalism.
- Trust.
- Warmth.
- Calm.
- Care.
- Clarity.
- Accessibility.
- Modernity.

Do not imitate a hospital administration portal or use a generic clinic template.

Retain the existing brand's soft teal and blue palette, supported by deep navy typography, off-white backgrounds and restrained neutral tones. The known brand references include `#A9CECC` and `#5288B5`; inspect the source assets for other established colours.

Design principles:

- Excellent typography and clear hierarchy.
- Generous whitespace.
- Consistent alignment and spacing.
- Beautifully composed layouts.
- Large, authentic photographs of the premises and practitioners.
- Cohesive image crops and appropriate aspect ratios.
- Elegant section transitions.
- Clearly differentiated cards and content groups.
- Highly legible price tables.
- Refined navigation and footer.
- Subtle, purposeful motion.
- Excellent mobile design.

Use the actual logo and approved source imagery.

Do not substitute unrelated stock photographs for real photographs when suitable original assets are available.

Do not create fake testimonials, artificial patient images presented as real, invented photographs of the cabinet or fictitious practitioner portraits.

Use local copies of the original image assets when appropriately available and approved, rather than fragile remote image URLs. Preserve the originals and optimise derivatives for web use. Optimisation must not materially change the images' content.

### 7. REQUIRED PAGE EXPERIENCE

Design each page individually while maintaining one consistent design system.

#### Homepage

Create a polished hero with the logo, a clear message about the cabinet and an immediately understandable path to its services and waiting-list process.

Show the key services, an introduction to the team, a selection of real premises photographs, relevant programme information, the fees/resources pathways and clear access information.

Maintain the original message and factual content. Do not invent a marketing campaign or new availability promises.

#### Le Cabinet

Create an editorial-style presentation of the practice, its approach, premises, photographs and facilities.

#### L’Équipe

Give each practitioner an individual, well-designed profile with the complete approved biography, role, verified professional information, photograph and relevant qualifications.

#### Psychomotricité

Present the existing service description with excellent readability and clear information about how to request support and the prescription requirement.

#### Psycho-éducation

Present the existing service description independently, with clear explanations and the correct prescription information.

#### Prestations et tarifs

Use clear pricing tables or well-designed structured cards. Preserve every price, duration, practitioner distinction, qualification and condition.

The page must work on narrow mobile screens without horizontal overflow or tiny text.

#### Prise en charge de groupe

Present the programmes, schedules, duration, prices and conditions in an easily understood format.

Explain the existing professional-placement process accurately. Do not present the published sessions as a public online booking calendar.

#### Accès

Show the correct address, original map, Street View or relevant original visual reference, directions and verified transport information.

Improve the visual hierarchy around directions and parking without changing the underlying location information.

#### Ressources utiles and Questions

Present the original family resources in a structured, readable format. Group the FAQ logically and retain every verified question and answer.

Provide accessible and clearly labelled links to the actual downloadable files.

#### Waiting-list section

Make the existing form easy to locate, understand and use.

Preserve the original form integration and submission process. Visually improve its surrounding section, but never replace or recreate the form.

---

### 8. IMAGE AND ASSET MIGRATION

Perform a dedicated asset migration rather than casually copying image URLs into the code.

For each original image:

1. Identify where it appears.
2. Determine its actual source and intended purpose.
3. Download or otherwise retrieve the original file when appropriately accessible and authorised.
4. Save an organised local copy in the project.
5. Preserve the original file.
6. Create an optimised derivative if necessary.
7. Record its new path and its corresponding original placement.
8. Implement meaningful alternative text where appropriate.

Include the logo, interior photographs, practitioner portraits, qualifications and certificate images, resource illustrations and any other images actually used on the source website.

Inspect images that are used as thumbnails or embedded visual references rather than assuming they are decorative.

Pay special attention to the Street View section. If the source image does not actually correspond to the advertised street view, flag the discrepancy and find the correct original integration. Do not silently substitute unrelated artwork.

If an image or PDF cannot be retrieved, document the exact item and what blocked its migration. Do not pretend it was copied successfully.

Do not use fabricated replacement assets to hide missing source material.

---

### 9. CONTENT MODEL AND MAINTAINABILITY

Public website content should be kept separate from layout components.

Where appropriate, structure information such as:

- Practitioners.
- Services.
- Fees.
- Session durations.
- Group programmes.
- FAQ entries.
- Public resources.
- Address and transport information.

This will make future updates straightforward.

A simple static content model is preferred over introducing a full CMS.

However, content restructuring must not change its meaning or lose details. If the same source information appears in more than one place, avoid unnecessary inconsistency by using a shared public-content source where appropriate.

All public content should remain editable through the code repository without requiring paid tools or services.

Document how the owner or developer can update fees, schedules, contact details and public notices.

---

### 10. ACCESSIBILITY AND PERFORMANCE

Build for real visitors, including people using mobile devices and assistive technologies.

Implement:

- Semantic headings and document structure.
- Keyboard-accessible navigation.
- Clearly visible focus states.
- Accessible links and buttons.
- Correct form-container labelling where required.
- Legible typography and sufficient contrast.
- Appropriate alternative text.
- Responsive layouts without horizontal overflow.
- Reduced-motion support.
- Clear hover, focus and active states.
- Sensible loading behaviour for media and external embeds.

Aim for WCAG 2.2 AA accessibility.

Optimise images, font loading, CSS and JavaScript. Avoid loading large media or third-party widgets unnecessarily before they are required.

Do not sacrifice accessibility or performance for excessive animation.

The result should be visually impressive and technically lightweight.

---

### 11. SEO AND PUBLIC WEBSITE QUALITY

Build a genuine multi-page informational website, not a single generic page that changes headings through client-side state.

Use page-specific routes and metadata.

Include:

- Descriptive titles and meta descriptions.
- Correct heading hierarchy.
- Canonical URLs where appropriate.
- An XML sitemap.
- An appropriate robots configuration.
- Open Graph metadata.
- Correct language identification for French content.
- Useful image alternative text.
- Appropriate structured business data where the available facts support it.
- Descriptive internal links.
- Consistent navigation.
- A clear footer.

Do not fabricate business hours, professional registrations, treatment claims, addresses, credentials or other structured information.

Make search-engine discovery and page understanding as straightforward as possible while keeping the implementation free of paid SEO services.

---

### 12. ROUTES, LINKS AND MIGRATION MAPPING

Preserve the original information architecture while improving usability.

Create a mapping from every original public page to its corresponding new route.

Use clean, readable URLs, with a consistent approach to French accents and URL encoding.

Avoid duplicate pages for identical content. Redirect or consolidate routes only when it is appropriate and possible without breaking access to the old content.

Verify every internal link and ensure the logo returns to the new homepage.

External links should point to their actual verified destinations.

Do not remove any functional original link just because it does not fit the first proposed design.

Do not assume that moving to a new domain automatically transfers Google Sites search rankings. Document the old-to-new URL mapping and any practical limitations of redirects from the original Google Sites domain.

---

### 13. IMPLEMENTATION AND DELIVERY PROCESS

Work in clear phases, but do not stop after writing a plan. Execute the implementation.

#### Phase 1: Inspect

Audit every original page, image, form, map, Street View integration, document and link.

#### Phase 2: Inventory

Create and use a migration manifest that records the source content and its destination in the new website.

#### Phase 3: Design

Establish the design system, page layouts, responsive behaviour, typography and navigation.

#### Phase 4: Build

Implement the website using the selected static architecture and reusable components.

Migrate the actual content and original assets. Preserve the existing form, maps, Street View and downloads.

#### Phase 5: Test

Test all public routes and interactive elements. Compare the migrated site against the source and verify that no content or critical functionality is missing.

#### Phase 6: Polish

Refine spacing, typography, responsive layouts, loading behaviour, accessibility, content hierarchy, image crops and animation.

#### Phase 7: Deploy

Use an appropriate free static hosting option. Do not purchase a domain or enable paid services. If a new domain is not already available, use the free URL provided by the chosen hosting platform.

Keep the deployment configuration and build instructions in the repository.

Do not claim that a production deployment succeeded unless the deployment actually completed and the live URL was verified.

---

### 14. MANDATORY TESTING CHECKLIST

Before declaring the work complete, verify all of the following.

#### Content fidelity

- Every discovered public page is represented.
- Every meaningful paragraph, list, notice and heading has been transferred.
- All three practitioner profiles and relevant qualifications are accounted for.
- All existing service information is retained.
- All prices, durations and conditions match the source.
- Every group programme and schedule has been transferred.
- All verified address and transport details are retained.
- Every FAQ and resource item is accounted for.
- All source uncertainties or inaccessible assets are documented.

#### Images and files

- The logo renders correctly.
- All relevant original photographs are accounted for.
- Practitioner images and approved qualification images render correctly.
- No broken image paths remain.
- Images are responsive and appropriately optimised.
- The original PDF resources download correctly.
- The Street View and other map imagery corresponds to the intended destination.

#### Existing functionality

- The original waiting-list form is embedded or linked correctly.
- No new form has been created.
- The existing submission workflow has not been changed.
- The form does not overflow its container on mobile.
- The original map and Street View features remain available.
- Every internal and external link works.
- Telephone and email links are correct wherever present.
- Every download opens the correct source file.
- No original functional feature was silently removed.

Do not submit a real form containing personal data during testing. Verify the embedded form's display and operation without exposing or generating real patient information. If end-to-end submission testing requires the owner's involvement or access to the existing form service, document that limitation rather than changing the form to facilitate testing.

#### Technical quality

- The production build completes successfully.
- The site is accessible at its deployed URL.
- All routes work when opened directly.
- Refreshing a non-homepage route does not produce a 404.
- There are no broken asset requests.
- There are no significant console errors.
- Responsive behaviour works across desktop and mobile.
- Keyboard navigation works.
- Reduced-motion preferences are respected.
- Performance and accessibility have been checked.
- There are no new database or server-side form dependencies.
- No paid features or new persistent data services have been introduced.

---

### 15. REQUIRED FINAL REPORT

At completion, provide a concise but substantive report describing:

1. The final website URL, if successfully deployed.
2. The technology stack and where the site can be maintained.
3. The new page structure.
4. Which source pages, photographs, documents and external assets were migrated.
5. Confirmation that the original form was preserved and not recreated.
6. Confirmation that the original map and Street View integrations were preserved, or a precise explanation of anything that could not be retained.
7. Confirmation that no new backend, database, persistent form storage or paid services were introduced.
8. The results of build, route, mobile, accessibility and link tests.
9. Any content that could not be migrated.
10. Any potentially outdated information or source discrepancies requiring the owner's verification.

Do not claim complete success if an asset is missing, a link is untested or the form's behaviour could not be confirmed.

Report verified accomplishments separately from outstanding items.

---

## FINAL PRIORITY

The desired outcome is an exceptional new presentation of the existing Cabinet des Hérons website.

The visual result should be dramatically better than Google Sites: sophisticated, polished, responsive, accessible, beautifully structured and worthy of a professional healthcare practice.

But this improvement must happen without sacrificing the existing information or disrupting the cabinet's operational workflow.

**Do not rebuild systems that already work. Do not create new systems that are unnecessary. Do not spend money. Do not lose content.**

Inspect the original website, transfer its real content and approved assets, preserve its existing functional integrations, and use modern free technologies to deliver the highest possible quality within those constraints.

Begin by inspecting the source URL and creating the migration inventory. Then execute the migration, test it thoroughly, deploy the finished static website using a free option, and report the verified result.
