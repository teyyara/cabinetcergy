# Requirement Traceability — Initial Contract Baseline

Status values: `PENDING`, `UNKNOWN`, `BLOCKED`, `PASS`, `FAIL`. No requirement is PASS until evidence is recorded.

| ID | Requirement | Risk | Acceptance evidence / validation | Initial state |
|---|---|---|---|---|
| REQ-001 | Preserve all original public pages and meaningful content | R3 | Page/block inventory mapped to new content; source-to-build comparison | PENDING |
| REQ-002 | Preserve original waiting-list Google Form and workflow; do not recreate | R4 | Same verified URL/embed; no new submission code/data store; public display check | URL IDENTIFIED; behavior not fully verified |
| REQ-003 | Never inspect responses or submit real form test data | R4 | Review implementation and test records; no real submission | ACTIVE GUARDRAIL |
| REQ-004 | No new backend, database, API, CMS, form processor or persistent data store | R4 | Repository/package/config inspection; architecture review | ACTIVE GUARDRAIL |
| REQ-005 | Zero paid dependencies and deployment features | R3 | Dependency/plan/terms audit before selection and release | PENDING |
| REQ-006 | Preserve existing Google Maps and Street View target/behavior | R3 | Exact iframe/link compared with source; runtime destination verified | UNKNOWN |
| REQ-007 | Preserve every external link and downloadable resource | R3 | Link manifest and automated/manual link validation | PENDING |
| REQ-008 | Migrate original photographs/logo/certificates only when source and approval are known | R3 | Asset register, approved originals, broken-path scan | PENDING |
| REQ-009 | Preserve practitioner biographies and verified qualifications accurately | R3 | Source-to-migrated text comparison | PENDING |
| REQ-010 | Preserve every price, duration, condition and group schedule | R3 | Exact source comparison and data-table test | PENDING |
| REQ-011 | Do not silently change potentially outdated content | R3 | Review register with source value and owner-review state | PENDING; opening date flagged |
| REQ-012 | Responsive layouts without horizontal overflow | R2 | Real viewport tests at documented widths, screenshots and overflow assertions | BLOCKED until app/build/browser harness exists |
| REQ-013 | Keyboard-accessible navigation and visible focus | R3 | Keyboard journey evidence; accessibility checks | BLOCKED until implementation/browser harness exists |
| REQ-014 | Respect reduced-motion preference | R2 | CSS/animation tests under reduced-motion preference | BLOCKED until implementation exists |
| REQ-015 | Aim for WCAG 2.2 AA | R3 | Automated checks plus manual keyboard/semantic/contrast review | PENDING |
| REQ-016 | Per-page SEO metadata, sitemap, robots, canonical/OG where appropriate | R2 | Source/config inspection and response/page metadata checks | PENDING |
| REQ-017 | Static informational site with French language declaration | R2 | Build output and route metadata inspection | PENDING |
| REQ-018 | No false claims about build, runtime, accessibility, security or deployment | R4 | Evidence-based reporting; capability limits recorded | ACTIVE GUARDRAIL |
| REQ-019 | Preserve all source uncertainties and owner-review items | R3 | Migration manifest and final-report reconciliation | PENDING |
| REQ-020 | Each meaningful loop has a verified Git checkpoint | R3 | Commit ID, branch HEAD and remote state verified | IN PROGRESS |

## Initial Product Contract

- Business objective: provide a more trustworthy, professionally presented public site for Cabinet des Hérons.
- Audience: families and professionals seeking public practice information.
- Primary journeys: understand services; review fees/group programme details; learn about team and premises; find the cabinet; open family resources; reach the existing waiting-list form.
- Website type: French-language informational brochure site.
- Proposed architecture: static-first; Astro + TypeScript is the source brief's recommended default. Actual stack is not installed/verified yet.
- No user account, real-time availability calendar, new booking system, payments, new form processor or analytics/tracking.
- Brand direction: existing logo and authentic images; soft teal/blue (`#A9CECC`, `#5288B5`), off-white, deep navy, spacious and reassuring visual hierarchy.
- Accessibility: WCAG 2.2 AA target; keyboard, contrast, reduced motion and mobile responsive behavior.
- SEO: separate routes with French metadata, sitemap/robots, sensible canonical/OG metadata and factual structured data only.
- Deployment: free static hosting only, selected after current plan terms/limits are verified; do not assume Vercel Hobby or GitHub Pages is compatible with this practice's use.
- Success measure before launch: no missing source content or critical feature, no broken route/asset/link, preserved waiting list/map/download targets, tested responsive/accessibility behavior, build/deployment observed and reported with truthful confidence levels.
- Unknown budgets/browser matrix/rollback/monitoring are not yet certified; define based on verified capabilities before candidate certification.
