# StackOps Logo Refresh Design

## Goal

Refresh the StackOps logo mark so it matches the dark premium landing page and stays crisp at small header and footer sizes. The selected direction is **B. Platform Hex**, chosen by the user in the visual companion and confirmed in terminal.

## Current Problem

The current header uses `logos/StackOps_mark.png`, a 430px bitmap crop rendered inside a 34px frame. At that size the mark looks soft, boxed-in, and visually heavier than the white `StackOps` wordmark. Its saturated cyan/green layers are close to the page palette, but the dark shadows and bitmap edges make the logo feel less polished than the surrounding UI.

## Selected Visual Direction

The refreshed mark will use a transparent SVG with a hexagonal platform outline and stacked infrastructure layers inside it.

Visual traits:

- Crisp vector geometry instead of a bitmap crop.
- A subtle hex/platform container to communicate infrastructure and operational stability.
- Three inner stack layers to preserve continuity with the original logo idea.
- Existing site colors: cyan `#67e8f9`, green `#34d399`, deep cyan `#155e75`, and near-black `#020617`.
- Transparent outer canvas so the mark works inside the existing dark logo frame without carrying its own heavy square background.

## Implementation Design

Create or replace `logos/StackOps_mark.svg` with the approved Platform Hex mark. Keep the existing accessible image pattern in the header by importing this SVG through Vite and rendering it with the existing `<img alt="StackOps logo" />`.

Update `src/content/siteContent.ts` to import the SVG asset instead of the PNG while keeping the asset name and alt text stable for tests and accessibility.

Update logo CSS in `src/App.css`:

- Use `object-fit: contain` for `.brand-logo` so the transparent vector is not cropped.
- Add modest internal padding in `.brand-logo-frame` to prevent the hex from touching the border.
- Keep the dark framed treatment because it matches the current header and the selected design preview.

Update the footer brand mark to use the same logo asset so the brand identity is consistent across the page. Preserve the footer home link and keep the decorative footer logo hidden from assistive technology.

## Testing And Verification

Automated checks:

- Keep the existing header test that verifies the `StackOps logo` image uses `siteContent.header.logoSrc`.
- Keep or update the content test so `siteContent.header.logoSrc` still includes `StackOps_mark`.
- Run the existing Vitest suite.
- Run the production build.

Visual checks:

- Verify the logo in the header on desktop and mobile.
- Verify the logo remains legible at 34px and does not appear cropped.
- Verify the footer mark aligns visually with the header mark.
- Confirm no text or header controls overlap after the CSS adjustment.

## Scope

In scope:

- Redesigning/recoloring the logo mark only.
- Updating asset imports and CSS needed for correct rendering.
- Keeping the StackOps wordmark text unchanged.

Out of scope:

- Changing the broader site color system.
- Rebranding the company name or typography.
- Reworking navigation, hero copy, or page layout.
