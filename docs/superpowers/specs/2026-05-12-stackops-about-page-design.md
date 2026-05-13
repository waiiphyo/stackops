# StackOps About Page Design

## Goal

Create a standalone `/about` page for StackOps using the approved V8 direction: a premium cream editorial layout inspired by the referenced Returning.AI About page, adapted with StackOps copy, softer typography, compact scale, and placeholders for future certificates, technology logos, and founder photos.

## Approved Direction

The approved design is the V8 mockup shown in the visual companion:

- Cream editorial page background.
- Black body/headline text with restrained burnt-orange accents.
- Softer serif display typography for the major headline areas:
  - `Built for cloud teams. Only reliable systems.`
  - `Four principles, every project.`
  - Founder quote.
  - `Meet the team.`
- Smaller, calmer type scale than the direct reference.
- Split hero section with a large headline on the left and explanatory copy on the right.
- Bordered three-column stat row.
- Four-column principles panel.
- Right-moving technology/logo marquee.
- Small certificate/achievement pills.
- Founder note section.
- Team section with circular founder photo slots.

## Page Content

Navigation:

- Add a real `/about` route.
- Header About link should navigate to `/about`.
- Brand logo should navigate back to the homepage.
- Keep Services, Work, Insights, and Contact links available, pointing back to the homepage anchors.

Hero:

- Eyebrow: `/ About StackOps`
- Headline: `Built for cloud teams. Only reliable systems.`
- Body mock copy:
  `We did not adapt generic IT support into cloud consulting. We built StackOps from real DevOps work: cloud foundations, secure delivery pipelines, automation, observability, and operating habits that match how modern teams actually run production systems.`

Stats:

- `2025` / `Founded`
- `3` / `Founder-led engineers`
- `24/7` / `Operations mindset`

Principles:

1. `Operations-First`
   `Built for ownership, monitoring, recovery, and maintainability from day one.`
2. `Automation-First`
   `Manual infrastructure and release work becomes repeatable, reviewed, and safer.`
3. `Direct Access`
   `Work directly with the engineers designing, building, and operating the system.`
4. `Ship Safely`
   `Security, access, secrets, and environment controls belong inside delivery.`

Technology ecosystem marquee:

- Use placeholder text logos for now:
  `AWS`, `Azure`, `Google Cloud`, `Terraform`, `Kubernetes`, `GitHub`, `Docker`, `Prometheus`.
- Animate the row smoothly moving right.
- If formal partner relationships are not confirmed, label this section `Technology ecosystem and credentials`, not `Partners`.

Certificate/achievement pills:

- `Cloud certificate placeholder`
- `Security training placeholder`
- `Operations achievement placeholder`

Founder note:

- Label: `Founder's note`
- Quote:
  `“We started StackOps because reliable systems should not depend on heroics. Every engagement starts with one question: will this be easier to operate after we leave?”`
- Signature: `StackOps Founding Team · Founded 2025`

People:

- Label: `Our people`
- Heading: `Meet the team.`
- Body:
  `The people behind StackOps. Building the cloud operations practice that helps teams run safer, faster, and more reliable systems.`
- Founder cards:
  - Wai Phyo / `Cloud / Platform`
  - Hein Htet Win / `DevOps / Automation`
  - Aung Hein Kyaw / `Security / Operations`
- Use circular photo placeholders until real founder photos are available.

## Homepage Impact

The current homepage About section should not remain a full duplicate of the `/about` page.

Recommended homepage behavior:

- Keep a shortened About teaser on the homepage.
- Add a CTA/link to `/about`.
- Keep the current one-page Services, Work, Insights, and Contact sections.

## Visual Requirements

- Use the cream/black/burnt-orange theme for the `/about` page.
- Preserve the StackOps logo in the header.
- Use a softer display style for the large headings and quote. The V8 mockup used a serif fallback display treatment; implementation can use CSS font stacks already available in the project unless a new font is intentionally added.
- Avoid oversized type. Use the V8 scale as the upper bound.
- Keep the certificate and ecosystem areas compact.
- Avoid heavy box/card clutter.
- Team photos should be medium circular portraits, not oversized hero images.
- Maintain responsive layouts on mobile with stacked sections and no horizontal overflow.

## Testing And Verification

Automated checks:

- Verify `/about` renders the approved hero, stats, principles, credentials label, founder note, and team members.
- Verify Header About link points to `/about`.
- Verify homepage anchor links still work from `/about`.
- Verify the technology marquee respects `prefers-reduced-motion` by disabling animation.
- Run the existing test suite.
- Run the production build.

Visual checks:

- Review desktop and mobile screenshots of `/about`.
- Confirm typography is smaller and softer than earlier V5/V6/V7 mockups.
- Confirm marquee moves right on normal motion settings.
- Confirm there is no horizontal overflow on mobile.

## Out Of Scope

- Real certificate or partner claims until the user provides verified names.
- Real founder photos until the user provides image files.
- A complete site-wide recolor to cream; only `/about` uses this reference-inspired theme unless explicitly requested later.
