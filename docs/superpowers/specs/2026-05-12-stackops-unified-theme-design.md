# StackOps Unified Theme Design

## Goal

Unify the visual theme across the StackOps homepage and `/about` page. The current `/about` page uses a cream editorial theme while the rest of the site uses a dark cloud theme; this makes the site feel like two different products. The approved redesign uses one shared theme system with both dark and light modes.

## Approved Direction

- Add a site-wide Light / Dark theme toggle in the header.
- Save the selected theme in `localStorage`.
- Use the same layout language, card borders, spacing, header, footer, and typography across homepage and `/about`.
- Light mode should use the cream palette the user liked, with orange mixed into labels, active states, and accents.
- Dark mode should keep the StackOps navy/cloud feel, but use the same orange accent so it feels related to light mode.
- `/about` should no longer be a separate cream-only visual system.

## Typography Changes

Reduce oversized and overly bold display typography.

Specific copy to resize and soften:

- Homepage hero: `We design, automate, and operate resilient digital infrastructure.`
- About principles heading: `Four principles, every project.`
- Founder quote: `"We started StackOps because reliable systems should not depend on heroics. Every engagement starts with one question: will this be easier to operate after we leave?"`
- Team heading: `Meet the team.`

Implementation direction:

- Use the existing Inter/system font stack for display text.
- Remove the heavy Georgia serif treatment from `/about`.
- Use approximately `620-700` font weight for display headings.
- Keep display sizes responsive and smaller than the previous versions.
- Preserve professional hierarchy without large bold blocks.

## Header

- Keep the existing StackOps logo and navigation.
- Add a compact theme toggle in the header.
- The toggle should be icon-driven and accessible, with text clear enough to understand the current action.
- Header links continue to work from both homepage and `/about`.

## Footer

Remove duplicate footer navigation links:

- No `Services`
- No `Work`
- No `About`
- No `Insights`

Footer should keep:

- StackOps logo/brand
- Short summary text
- Optional contact/email action if it fits cleanly

## About Page

Keep the approved About content and structure:

- Hero
- Stats row
- Four principles
- Technology ecosystem marquee
- Credential pills
- Founder note
- Team section

But restyle it to use the shared theme tokens, not an isolated cream-only theme.

## Homepage

Keep the current homepage sections:

- Hero
- Services
- Work
- About teaser
- Insights
- Contact

Apply the same theme tokens to all cards, buttons, headings, forms, and footer so light/dark modes work consistently.

## Verification

Automated checks:

- Theme toggle renders and has accessible state.
- Footer no longer renders the duplicate navigation.
- `/about` still renders the approved content.
- Existing section and contact tests continue to pass.
- Production build passes.

Visual checks:

- Review homepage in dark mode.
- Review homepage in light mode.
- Review `/about` in dark mode.
- Review `/about` in light mode.
- Confirm no horizontal overflow on mobile.
- Confirm the listed large headings are smaller and less bold than before.
