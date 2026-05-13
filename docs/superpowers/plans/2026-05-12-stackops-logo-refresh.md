# StackOps Logo Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the soft bitmap StackOps mark with the approved crisp Platform Hex SVG and render it consistently in the header and footer.

**Architecture:** The logo remains a static asset imported through Vite from `src/content/siteContent.ts`. Header and footer components continue to render standard image elements, while `src/App.css` owns sizing, padding, and dark frame treatment.

**Tech Stack:** React 18, TypeScript, Vite asset imports, CSS, Vitest, Testing Library.

---

## File Structure

- Create: `logos/StackOps_mark.svg`
  - Owns the approved Platform Hex vector artwork.
- Modify: `src/content/siteContent.ts`
  - Imports the SVG logo asset instead of the old PNG while preserving `siteContent.header.logoSrc`.
- Modify: `src/components/Footer.tsx`
  - Replaces the footer-only CSS grid mark with the same SVG asset used by the header.
- Modify: `src/App.css`
  - Updates logo frame sizing behavior so the transparent SVG is contained and padded.
- Modify: `src/content/siteContent.test.ts`
  - Locks the new SVG asset contract.
- Modify: `src/components/sections.test.tsx`
  - Verifies the decorative footer mark uses the same asset.

## Task 1: Lock The SVG Asset Contract

**Files:**
- Modify: `src/content/siteContent.test.ts`

- [ ] **Step 1: Write the failing content test**

Update the logo assertion in `src/content/siteContent.test.ts`:

```ts
expect(siteContent.header.logoSrc).toContain('StackOps_mark.svg');
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run:

```bash
npm run test:run -- src/content/siteContent.test.ts
```

Expected: FAIL because `siteContent.header.logoSrc` still points at the PNG asset.

## Task 2: Create The Platform Hex SVG Asset

**Files:**
- Create: `logos/StackOps_mark.svg`

- [ ] **Step 1: Add the approved vector logo**

Create `logos/StackOps_mark.svg` with:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-labelledby="stackops-mark-title">
  <title id="stackops-mark-title">StackOps mark</title>
  <path d="M32 7 54 20v24L32 57 10 44V20L32 7Z" fill="rgba(103, 232, 249, 0.08)" stroke="#155e75" stroke-width="3" stroke-linejoin="round"/>
  <path d="M32 14 48 23 32 32 16 23 32 14Z" fill="#67e8f9"/>
  <path d="M16 28 32 37 48 28v8L32 45 16 36Z" fill="#34d399"/>
  <path d="M16 41 32 50 48 41" fill="none" stroke="#67e8f9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32 14 48 23 32 32 16 23 32 14ZM16 28 32 37 48 28" fill="none" stroke="#020617" stroke-width="3" stroke-linejoin="round"/>
</svg>
```

## Task 3: Switch The Shared Logo Import

**Files:**
- Modify: `src/content/siteContent.ts`

- [ ] **Step 1: Import the SVG instead of the PNG**

Change the first line of `src/content/siteContent.ts` to:

```ts
import stackOpsLogo from '../../logos/StackOps_mark.svg';
```

- [ ] **Step 2: Run the focused content test**

Run:

```bash
npm run test:run -- src/content/siteContent.test.ts
```

Expected: PASS because the asset URL now contains `StackOps_mark.svg`.

## Task 4: Render The Same Mark In The Footer

**Files:**
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/sections.test.tsx`

- [ ] **Step 1: Write the failing footer test**

In the first test in `src/components/sections.test.tsx`, after the header logo assertion, add:

```ts
expect(screen.getByTestId('footer-logo')).toHaveAttribute('src', siteContent.header.logoSrc);
```

- [ ] **Step 2: Run the focused section test to verify it fails**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL because the footer still renders a CSS-only grid mark and has no `footer-logo` test id.

- [ ] **Step 3: Update the footer component**

Replace the current decorative `brand-mark` contents in `src/components/Footer.tsx` with:

```tsx
<span className="brand-logo-frame brand-logo-frame-footer" aria-hidden="true">
  <img className="brand-logo" src={header.logoSrc} alt="" data-testid="footer-logo" />
</span>
```

The full brand link should remain:

```tsx
<a className="brand" href="#top" aria-label={footer.homeAriaLabel}>
  <span className="brand-logo-frame brand-logo-frame-footer" aria-hidden="true">
    <img className="brand-logo" src={header.logoSrc} alt="" data-testid="footer-logo" />
  </span>
  <span>{header.brandName}</span>
</a>
```

- [ ] **Step 4: Run the focused section test**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: PASS.

## Task 5: Polish Logo CSS

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Update logo frame and image styles**

Change `.brand-logo-frame` and `.brand-logo` in `src/App.css` to:

```css
.brand-logo-frame {
  position: relative;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  overflow: hidden;
  padding: 4px;
  border: 1px solid rgba(34, 211, 238, 0.25);
  border-radius: 8px;
  background: rgba(2, 6, 23, 0.92);
  box-shadow: 0 0 28px rgba(34, 211, 238, 0.2);
}

.brand-logo-frame-footer {
  width: 30px;
  height: 30px;
  padding: 3px;
}

.brand-logo {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}
```

- [ ] **Step 2: Remove obsolete footer grid mark CSS**

Delete these selectors from `src/App.css`:

```css
.site-footer .brand-mark {
  width: 30px;
  height: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  padding: 5px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.95), rgba(16, 185, 129, 0.95));
  box-shadow: 0 0 28px rgba(34, 211, 238, 0.28);
}

.site-footer .brand-mark span {
  border-radius: 2px;
  background: rgba(2, 6, 23, 0.78);
}
```

- [ ] **Step 3: Run all tests**

Run:

```bash
npm run test:run
```

Expected: PASS.

## Task 6: Build And Visual Verify

**Files:**
- No additional source files.

- [ ] **Step 1: Run the production build**

Run:

```bash
npm run build
```

Expected: PASS with Vite producing `dist/`.

- [ ] **Step 2: Start the local dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite prints a local URL, usually `http://127.0.0.1:5173/`.

- [ ] **Step 3: Inspect the page**

Open the local URL and verify:

- Header mark is crisp at 34px.
- Header mark is not cropped.
- Footer uses the same mark.
- Header controls and brand text do not overlap on desktop or mobile widths.

## Self-Review Notes

- Spec coverage: the plan covers the SVG asset, shared import, header rendering via existing content, footer consistency, CSS containment, tests, build, and visual verification.
- Placeholder scan: no TBD/TODO placeholders remain.
- Type consistency: `siteContent.header.logoSrc` remains the single asset source for header and footer.
- Git note: this workspace currently is not inside a Git repository, so commit steps are intentionally omitted.
