# StackOps Portfolio Landing Page Design

Date: 2026-05-12

## Goal

Create a clean, modern, premium portfolio landing page for StackOps, an IT consulting agency with three founders. The page must generate consulting leads, communicate services clearly, show founder credibility through an `About` section, and present portfolio-style proof of work.

## Approved Direction

Use the **Infrastructure Command** direction:

- Dark, premium technical interface inspired by operations dashboards, cloud infrastructure, and command centers.
- Crisp cyan and green accents on a deep navy base.
- Confident business copy, not playful or overly decorative.
- Visual language should imply reliability, automation, security, and operational maturity.
- Navigation label must use `About`, not `Founders`.

## Audience

The primary audience is business and technical decision-makers evaluating an IT consulting partner. The page should work for founders, CTOs, operations leads, and teams that need cloud, DevOps, security, automation, or managed IT execution.

## Conversion Priority

The primary conversion is a project inquiry or consultation request.

Primary CTA:

- `Start a project`

Secondary CTA:

- `View our work`

The page should provide enough credibility before asking for detailed contact information.

## Page Structure

### Header

The header includes:

- StackOps logo/wordmark.
- Navigation links: `Services`, `Work`, `About`, `Insights`.
- Primary header CTA: `Book a consult`.

The header should feel compact and premium. It should not dominate the hero.

Logo assets:

- Use the provided StackOps logo files from `logos/`.
- Prefer an SVG asset in the header for crisp rendering.
- Use the dark-background StackOps variant where it fits the current dark premium visual direction.
- If the provided full-size logo canvas does not render legibly at header size, use a cropped derived mark from the same provided asset.

### Hero

The hero communicates the core value proposition:

> We design, automate, and operate resilient digital infrastructure.

Supporting copy explains that StackOps helps teams modernize cloud platforms, secure delivery pipelines, stabilize operations, and turn complex systems into dependable business capability.

Hero visual:

- Use a custom interface-style operations panel, not a generic stock image.
- Include abstract status indicators, deployment lines, infrastructure nodes, and system health cues.
- The visual should be built in code where practical for crispness and performance.

Hero proof metrics:

- `3` founder-led experts.
- `24/7` operations mindset.
- `Cloud` DevOps + security.

These can be refined later if StackOps has stronger real metrics.

### Proof Strip

Immediately below the hero, show trust-building proof cards. Use concise outcomes and capability markers, such as:

- Cloud platform modernization.
- Secure delivery pipelines.
- Operational reliability.
- Automation-first execution.

Avoid inflated claims or fake client logos.

### Services

Services should be presented as clear capability cards:

- Cloud architecture and migration.
- DevOps and CI/CD automation.
- Managed operations and monitoring.
- Cybersecurity and hardening.
- Infrastructure automation.
- Technical consulting and delivery support.

Each service card should include a short practical explanation and a technical detail line.

### Work

The `Work` section should act like a premium portfolio area. Each case-study card should include:

- Client/company name.
- Project type.
- The client situation or problem.
- The StackOps solution.
- The operational or business outcome.
- Compact service or technology tags.

The user approved using mock projects and public-facing client/company names. These names must be clearly fictional sample content that can be replaced later with real client names. Do not invent exact performance numbers or claim real relationships.

Approved mock project examples:

- `Northline Logistics` — cloud foundation and migration readiness.
- `Finora Pay` — CI/CD pipeline modernization.
- `MedAxis Clinic Group` — security hardening and access cleanup.
- `UrbanGrid Retail` — monitoring, incident readiness, and operations runbooks.

The existing generic work cards should be replaced with stronger project-style cards using this model.

### About

The `About` section replaces any founder-specific navigation label. It should communicate that StackOps is founder-led while keeping the section broader than biographies.

Content should include:

- A short agency story.
- A statement about the team’s operating principles.
- Three founder profile cards.

Each founder card should support:

- Name.
- Role.
- Short expertise summary.
- Optional headshot or monogram fallback.

Until final founder details are provided, use neutral draft content that is easy to replace and does not pretend to be final biography copy.

### Insights

Include a compact insights or thinking section if it helps the page feel like an expert consultancy. This can contain short article-style cards about cloud reliability, automation, security, or operational maturity.

This section should remain secondary and should not distract from lead generation.

### Contact

The final section should be direct and friction-light:

- Short CTA headline.
- Project inquiry form.
- Fields: name, email, company, project type, message.
- Direct email fallback.

The form can be static in the first implementation unless a backend or form provider is later requested.

## Visual Design

Use a restrained, premium technical palette:

- Deep navy / near-black background.
- Cyan accents for system intelligence and cloud cues.
- Green accents for health, uptime, and operational confidence.
- Muted slate text for secondary copy.
- White or near-white text for primary headings.

Avoid:

- Purple-heavy gradients.
- Beige or generic startup palettes.
- Large decorative blobs or unrelated abstract art.
- Stock-photo hero imagery.
- Overly rounded cards.

Cards should use subtle borders, low-opacity fills, and restrained shadows. Use 8px radius for most interface elements, with slightly larger radius allowed for major visual panels.

## Responsive Behavior

Desktop:

- Two-column hero with copy on the left and operations panel on the right.
- Multi-column service and proof layouts.
- Portfolio cards in a structured grid.

Mobile:

- Single-column layout.
- Header collapses to compact navigation.
- Hero CTA buttons remain visible near the top.
- Operations panel scales without clipping.
- Founder cards stack cleanly.

Text must not overlap or rely on viewport-scaled font sizes.

## Content Model

Keep content centralized so founder details, services, work cards, and contact links can be edited without searching through layout markup.

Suggested content groups:

- `navItems`
- `hero`
- `metrics`
- `services`
- `work`
- `workLabels`
- `about`
- `founders`
- `insights`
- `contact`

The `work` model should support client/company name, project type, challenge/problem, StackOps delivery, outcome, and tags.

## Technical Design

The project is a simple modern frontend landing page.

Recommended stack:

- Vite.
- React.
- TypeScript.
- CSS or CSS modules.
- Lucide icons if icons are needed.

No backend is required for the first version. The contact form can be presentational unless the user requests form submission handling.

## Components

Expected component boundaries:

- `Header`
- `Hero`
- `MetricsStrip`
- `Services`
- `Work`
- `About`
- `Insights`
- `Contact`
- `Footer`

Data-driven sections should receive arrays of content rather than hard-coding repeated cards directly in each component.

## Error Handling

Because the first version is static:

- The contact form should prevent empty required submissions in the browser.
- If no backend is connected, submit should not silently imply a real message was sent. It should show a clear local confirmation or use a `mailto:` fallback.
- External links should be explicit and safe.

## Testing And Verification

Minimum verification:

- Build succeeds.
- No TypeScript errors.
- Desktop visual check around 1440px width.
- Mobile visual check around 390px width.
- Confirm no overlapping text or clipped sections.
- Confirm primary CTAs are visible and navigation labels include `About`.

If automated frontend tests are practical after scaffolding, add focused tests for content rendering and required form behavior.

## Out Of Scope

The first version does not include:

- Backend contact submission.
- CMS integration.
- Real client logos or testimonials unless the user provides them.
- Claims that mock project names represent actual client work.
- Blog routing or full article pages.
- Authentication or dashboard features.
