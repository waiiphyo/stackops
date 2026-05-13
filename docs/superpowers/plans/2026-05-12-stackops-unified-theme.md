# StackOps Unified Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a shared light/dark theme system across the homepage and `/about`, reduce oversized typography, and simplify the footer.

**Architecture:** Keep the existing React/Vite structure and add a small `ThemeToggle` component plus CSS token refactor. The app shell gets a `data-theme` attribute based on state persisted in `localStorage`; CSS variables drive both homepage and `/about` colors from the same token set.

**Tech Stack:** React 18, TypeScript, Vite, Vitest, Testing Library, CSS custom properties, lucide-react.

---

## Files

- Modify `src/App.tsx`: own theme state, persist to `localStorage`, add `data-theme`.
- Create `src/components/ThemeToggle.tsx`: accessible compact light/dark toggle.
- Modify `src/components/Header.tsx`: render theme toggle.
- Modify `src/components/Footer.tsx`: remove duplicate footer nav.
- Modify `src/App.css`: shared theme tokens, light/dark variables, smaller display typography, `/about` no longer cream-only.
- Modify `src/components/sections.test.tsx`: footer nav removal and theme toggle behavior.
- Modify `src/content/siteContent.test.ts`: footer accessibility expectations.

## Tasks

### Task 1: Theme State And Tests

**Files:**
- Modify `src/components/sections.test.tsx`
- Modify `src/App.tsx`
- Create `src/components/ThemeToggle.tsx`
- Modify `src/components/Header.tsx`

- [ ] **Step 1: Write failing tests**

Add tests that assert:

```tsx
expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument();
fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument();
expect(document.querySelector('.app-shell')).toHaveAttribute('data-theme', 'light');
expect(window.localStorage.getItem('stackops-theme')).toBe('light');
```

- [ ] **Step 2: Run failing tests**

Run: `npm run test:run`

Expected: theme toggle tests fail because the component and state do not exist yet.

- [ ] **Step 3: Implement theme state**

Add a `ThemeMode = 'dark' | 'light'` state in `App.tsx`, initialize from `localStorage`, persist on changes, and pass `theme`/`onToggleTheme` to `Header`.

- [ ] **Step 4: Add `ThemeToggle`**

Create a button with:

```tsx
aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
aria-pressed={theme === 'light'}
```

Use `Moon` and `Sun` from `lucide-react`.

- [ ] **Step 5: Run tests**

Run: `npm run test:run`

Expected: theme toggle tests pass.

### Task 2: Footer Simplification

**Files:**
- Modify `src/components/Footer.tsx`
- Modify `src/components/sections.test.tsx`
- Modify `src/content/siteContent.test.ts`

- [ ] **Step 1: Write failing tests**

Update tests so footer navigation is absent:

```tsx
expect(screen.queryByRole('navigation', { name: 'Footer navigation' })).not.toBeInTheDocument();
```

- [ ] **Step 2: Run failing tests**

Run: `npm run test:run`

Expected: fails because `Footer` still renders duplicate nav links.

- [ ] **Step 3: Remove footer nav**

Delete the footer `<nav>` mapping from `Footer.tsx`. Keep brand and summary.

- [ ] **Step 4: Run tests**

Run: `npm run test:run`

Expected: footer tests pass.

### Task 3: Shared Theme CSS And Typography

**Files:**
- Modify `src/App.css`

- [ ] **Step 1: Refactor variables**

Replace the hard-coded dark-only root variables with semantic variables:

```css
.app-shell {
  --page-bg: #071421;
  --panel-bg: rgba(15, 28, 46, 0.72);
  --text-main: #f4fbff;
  --text-muted: rgba(228, 240, 247, 0.72);
  --accent: #d26a42;
  --accent-cool: #67e8f9;
}

.app-shell[data-theme="light"] {
  --page-bg: #f6f1e9;
  --panel-bg: rgba(255, 250, 242, 0.64);
  --text-main: #111111;
  --text-muted: #625f57;
  --accent: #c8653f;
  --accent-cool: #2e9fb1;
}
```

Then update existing selectors to use the semantic variables.

- [ ] **Step 2: Make body/app background theme-controlled**

Set `.app-shell` to full width/min-height with themed background, then constrain inner sections and header/footer with max-width rules. Remove `/about`-only cream shell assumptions.

- [ ] **Step 3: Reduce typography scale**

Set:

```css
.hero-copy h1 { font-size: clamp(2.8rem, 5.2vw, 4.15rem); font-weight: 680; }
.section-heading h2,
.about-copy h2,
.contact-copy h2 { font-size: clamp(2.1rem, 4vw, 3rem); font-weight: 680; }
.about-section-heading h2 { font-size: clamp(2.05rem, 4vw, 3.25rem); font-weight: 680; }
.about-founder-note-section blockquote { font-size: clamp(2rem, 4.2vw, 3.45rem); font-weight: 650; }
```

- [ ] **Step 4: Restyle `/about` using shared tokens**

Remove the isolated Georgia/cream-only styling from `/about` and use `--page-bg`, `--panel-bg`, `--text-main`, `--text-muted`, `--line`, and `--accent`.

- [ ] **Step 5: Visual check**

Run local dev server and capture:

- `/` dark
- `/` light
- `/about` dark
- `/about` light

Confirm the pages share a coherent visual system and that footer nav is gone.

### Task 4: Final Verification

**Files:**
- All touched files

- [ ] **Step 1: Run tests**

Run: `npm run test:run`

Expected: all tests pass.

- [ ] **Step 2: Run build**

Run: `npm run build`

Expected: TypeScript and Vite build complete successfully.

- [ ] **Step 3: Check mobile overflow**

Use Chrome DevTools emulation at 390px for `/about` and confirm:

```js
document.documentElement.scrollWidth === window.innerWidth
```

Expected: `true`.
