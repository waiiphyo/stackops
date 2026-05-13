# StackOps About Page Implementation Plan

## Goal

Implement the approved V8 `/about` page design from `docs/superpowers/specs/2026-05-12-stackops-about-page-design.md` in the existing React/Vite app.

## Scope

- Add a real `/about` route without introducing a router dependency.
- Keep the existing homepage intact, but change its About section into a compact teaser with a link to `/about`.
- Add cream editorial styling only for `/about`.
- Add technology marquee, credential pills, founder note, and team photo placeholders.
- Update tests first, then implementation.

## Test Plan

1. Update content tests:
   - Header nav About href is `/about`.
   - New `aboutPage` content includes hero, stats, principles, technology logos, credentials, founder note, and people.
   - Literal type coverage reflects the new route and content.

2. Update component tests:
   - Homepage still renders hero, sections, and a compact About teaser.
   - Header About link points to `/about`.
   - Rendering at `/about` shows the approved page content.
   - From `/about`, Services/Work/Insights/Contact links point back to homepage anchors.

3. Verification:
   - `npm run test:run`
   - `npm run build`
   - Local dev server with desktop and mobile screenshot checks for `/about`.

## Implementation Steps

1. Extend `siteContent.ts`:
   - Add typed `aboutPage` content.
   - Change `navItems[2].href` from `#about` to `/about`.
   - Add a CTA to the homepage `about` teaser.

2. Add route helpers:
   - Detect `window.location.pathname === '/about'`.
   - On `/about`, use `/` for brand links and `/#...` for homepage section links.
   - On home, preserve local `#...` anchors.

3. Add `AboutPage.tsx`:
   - Render approved hero, stats, principles, technology marquee, credentials, founder note, and people.
   - Use lucide icons for principle tiles.
   - Duplicate technology logo text in the marquee for seamless animation.

4. Update `App.tsx`:
   - Render `AboutPage` when path is `/about`.
   - Render the existing homepage sections otherwise.
   - Add a shell modifier class for about-page styling.

5. Update `About.tsx`:
   - Keep it as a short homepage teaser.
   - Add `Read our story` CTA.
   - Fix founder card keys to use names, avoiding duplicate React keys.

6. Update `App.css`:
   - Add `/about` cream theme overrides for header/footer.
   - Add compact editorial layout styles.
   - Add right-moving marquee animation.
   - Disable marquee animation under `prefers-reduced-motion: reduce`.
   - Add responsive sizing to avoid horizontal overflow.
