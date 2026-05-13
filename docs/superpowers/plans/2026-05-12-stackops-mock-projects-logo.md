# StackOps Mock Projects And Logo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the provided StackOps logo assets and replace generic work cards with approved fictional client project cards.

**Architecture:** Keep the site data-driven through `src/content/siteContent.ts`. Update rendering in `Header` and `Work` without changing the page route structure. Preserve the current dark premium visual system and responsive constraints.

**Tech Stack:** Vite, React, TypeScript, Vitest, Testing Library, CSS.

---

## File Structure

- Modify `src/content/siteContent.ts`: add logo asset metadata, expand `WorkItem`, update `workLabels`, and replace the three generic work entries with four approved fictional projects.
- Modify `src/content/siteContent.test.ts`: lock the new content model, logo path, mock client names, labels, tags, and literal types.
- Modify `src/components/Header.tsx`: render the provided logo asset in the brand link while preserving the accessible home label.
- Modify `src/components/Work.tsx`: render client/company name, project type, challenge, delivery, outcome, and tags.
- Modify `src/components/sections.test.tsx`: verify the logo image and the expanded work cards render.
- Modify `src/App.css`: style the real logo and upgraded work cards on desktop and mobile.

This workspace is not a git repository, so commit steps are intentionally skipped.

---

### Task 1: Expand The Content Model

**Files:**
- Modify: `src/content/siteContent.test.ts`
- Modify: `src/content/siteContent.ts`

- [ ] **Step 1: Write the failing content tests**

In `src/content/siteContent.test.ts`, update the header test to expect logo metadata:

```ts
expect(siteContent.header).toMatchObject({
  brandName: 'StackOps',
  logoAlt: 'StackOps logo',
  homeAriaLabel: 'StackOps home',
  navAriaLabel: 'Main navigation',
  cta: { label: 'Book a consult', href: '#contact' },
});
expect(siteContent.header.logoSrc).toContain('StackOps_mark');
```

Update the section count assertion:

```ts
expect(siteContent.work).toHaveLength(4);
```

Update the work heading and labels assertion:

```ts
expect(siteContent.workHeading).toEqual({
  eyebrow: 'Selected Projects',
  title: 'Completed client-style work',
  body:
    'Sample project profiles show how StackOps turns cloud, delivery, security, and operations problems into systems teams can keep running.',
});
expect(siteContent.workLabels).toEqual({
  client: 'Client',
  projectType: 'Project',
  problem: 'Challenge',
  solution: 'Delivery',
  outcome: 'Outcome',
  tags: 'Capabilities',
});
```

Add a new test for the approved mock projects:

```ts
it('defines approved fictional client project cards', () => {
  expect(siteContent.work.map((item) => item.client)).toEqual([
    'Northline Logistics',
    'Finora Pay',
    'MedAxis Clinic Group',
    'UrbanGrid Retail',
  ]);

  siteContent.work.forEach((item) => {
    expect(item.projectType).toEqual(expect.any(String));
    expect(item.title).toEqual(expect.any(String));
    expect(item.problem).toEqual(expect.any(String));
    expect(item.solution).toEqual(expect.any(String));
    expect(item.outcome).toEqual(expect.any(String));
    expect(item.tags.length).toBeGreaterThanOrEqual(3);
  });
});
```

Update the literal type checks:

```ts
expectTypeOf(siteContent.header.logoSrc).toEqualTypeOf<string>();
expectTypeOf(siteContent.header.logoAlt).toEqualTypeOf<'StackOps logo'>();
expectTypeOf(siteContent.workHeading.title).toEqualTypeOf<'Completed client-style work'>();
expectTypeOf(siteContent.workLabels.client).toEqualTypeOf<'Client'>();
expectTypeOf(siteContent.work[0].client).toEqualTypeOf<'Northline Logistics'>();
expectTypeOf(siteContent.work[0].tags[0]).toEqualTypeOf<'Cloud foundation'>();
```

- [ ] **Step 2: Run the content tests and verify failure**

Run:

```bash
npm run test:run -- src/content/siteContent.test.ts
```

Expected: FAIL because `logoSrc`, `logoAlt`, expanded work labels, four work items, and project tags do not exist yet.

- [ ] **Step 3: Implement the content model**

At the top of `src/content/siteContent.ts`, import the cropped logo mark so Vite copies the asset into production builds:

```ts
import stackOpsLogo from '../../logos/StackOps_mark.png';
```

Update `HeaderContent`:

```ts
export type HeaderContent = {
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  homeAriaLabel: string;
  navAriaLabel: string;
  cta: Cta;
};
```

Update `WorkItem`:

```ts
export type WorkItem = {
  client: string;
  projectType: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: readonly string[];
};
```

Update `WorkLabels`:

```ts
export type WorkLabels = {
  client: string;
  projectType: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string;
};
```

Update `siteContent.header`:

```ts
header: {
  brandName: 'StackOps',
  logoSrc: stackOpsLogo,
  logoAlt: 'StackOps logo',
  homeAriaLabel: 'StackOps home',
  navAriaLabel: 'Main navigation',
  cta: { label: 'Book a consult', href: '#contact' },
},
```

Update `workHeading`:

```ts
workHeading: {
  eyebrow: 'Selected Projects',
  title: 'Completed client-style work',
  body:
    'Sample project profiles show how StackOps turns cloud, delivery, security, and operations problems into systems teams can keep running.',
},
```

Update `workLabels`:

```ts
workLabels: {
  client: 'Client',
  projectType: 'Project',
  problem: 'Challenge',
  solution: 'Delivery',
  outcome: 'Outcome',
  tags: 'Capabilities',
},
```

Replace `work` with:

```ts
work: [
  {
    client: 'Northline Logistics',
    projectType: 'Cloud foundation and migration readiness',
    title: 'Cloud foundation reset for a regional logistics platform',
    problem:
      'A growing logistics team needed cleaner account boundaries, safer network patterns, and a migration path for aging workloads.',
    solution:
      'Mapped the target cloud foundation, separated environments, codified provisioning, and documented the operating model for handoff.',
    outcome:
      'The team gained a clearer migration route and a more predictable foundation for product delivery and support.',
    tags: ['Cloud foundation', 'AWS', 'Terraform', 'Migration planning'],
  },
  {
    client: 'Finora Pay',
    projectType: 'CI/CD pipeline modernization',
    title: 'Release pipeline modernization for a payments product',
    problem:
      'Manual releases created coordination risk and slowed delivery across application, infrastructure, and QA teams.',
    solution:
      'Introduced CI/CD workflows, environment promotion gates, deployment visibility, and rollback-ready release routines.',
    outcome:
      'Engineering moved toward a repeatable release process with clearer ownership and less manual operational friction.',
    tags: ['CI/CD', 'DevOps', 'Release controls', 'Quality gates'],
  },
  {
    client: 'MedAxis Clinic Group',
    projectType: 'Security hardening and access cleanup',
    title: 'Identity and infrastructure hardening for clinical operations',
    problem:
      'Shared access, inconsistent secrets handling, and unclear infrastructure ownership increased operational exposure.',
    solution:
      'Reviewed IAM, tightened privileged access, improved secrets practices, and created remediation guidance for the operations team.',
    outcome:
      'Leadership received a practical hardening path with clearer access control and better readiness for future audits.',
    tags: ['Security hardening', 'IAM', 'Secrets', 'Operations'],
  },
  {
    client: 'UrbanGrid Retail',
    projectType: 'Monitoring and incident readiness',
    title: 'Operations readiness program for a retail platform',
    problem:
      'Production incidents were difficult to triage because service signals, escalation paths, and runbooks were fragmented.',
    solution:
      'Built monitoring views, alert routing, incident runbooks, and operating rituals for service health reviews.',
    outcome:
      'Support teams gained a shared view of system health and a calmer path from alert to action.',
    tags: ['Observability', 'Runbooks', 'Incident response', 'SRE'],
  },
],
```

- [ ] **Step 4: Run the content tests and verify success**

Run:

```bash
npm run test:run -- src/content/siteContent.test.ts
```

Expected: PASS.

---

### Task 2: Render The StackOps Logo In The Header

**Files:**
- Modify: `src/components/sections.test.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Write the failing header rendering test**

In `src/components/sections.test.tsx`, inside `renders the approved navigation and hero CTAs`, add:

```ts
expect(screen.getByRole('img', { name: 'StackOps logo' })).toHaveAttribute(
  'src',
  siteContent.header.logoSrc,
);
```

This test expects the logo to be discoverable by assistive technology.

- [ ] **Step 2: Run the component test and verify failure**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL because the header still renders a CSS-generated mark rather than an image.

- [ ] **Step 3: Implement the header logo**

Update `src/components/Header.tsx` brand markup:

```tsx
<a className="brand" href="#top" aria-label={header.homeAriaLabel}>
  <span className="brand-logo-frame" aria-hidden={header.logoAlt ? undefined : 'true'}>
    <img className="brand-logo" src={header.logoSrc} alt={header.logoAlt} />
  </span>
  <span className="brand-text">{header.brandName}</span>
</a>
```

Update `src/App.css` by replacing the `.brand-mark` and `.brand-mark span` rules with:

```css
.brand-logo-frame {
  position: relative;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.25);
  border-radius: 8px;
  background: rgba(2, 6, 23, 0.92);
  box-shadow: 0 0 28px rgba(34, 211, 238, 0.2);
}

.brand-logo {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.brand-text {
  line-height: 1;
}
```

- [ ] **Step 4: Run header-related tests**

Run:

```bash
npm run test:run -- src/content/siteContent.test.ts src/components/sections.test.tsx
```

Expected: PASS.

---

### Task 3: Upgrade The Work Section Markup

**Files:**
- Modify: `src/components/sections.test.tsx`
- Modify: `src/components/Work.tsx`

- [ ] **Step 1: Write the failing work rendering test**

In `src/components/sections.test.tsx`, update the work section assertions:

```ts
expect(screen.getByRole('heading', { name: 'Completed client-style work' })).toBeInTheDocument();
const workCards = screen.getAllByTestId('work-card');
expect(workCards).toHaveLength(siteContent.work.length);
siteContent.work.forEach((item, index) => {
  const card = workCards[index];

  expect(within(card).getByText(item.client)).toBeInTheDocument();
  expect(within(card).getByText(item.projectType)).toBeInTheDocument();
  expect(within(card).getByRole('heading', { name: item.title })).toBeInTheDocument();
  expect(within(card).getByText(item.problem)).toBeInTheDocument();
  expect(within(card).getByText(item.solution)).toBeInTheDocument();
  expect(within(card).getByText(item.outcome)).toBeInTheDocument();

  item.tags.forEach((tag) => {
    expect(within(card).getByText(tag)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the component test and verify failure**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL because `Work.tsx` does not render client names, project types, or tags yet.

- [ ] **Step 3: Implement the work card markup**

Replace the article markup in `src/components/Work.tsx` map with:

```tsx
<article
  className="work-card"
  data-testid="work-card"
  key={item.client}
>
  <div className="work-card-topline">
    <div>
      <span className="work-index" aria-hidden="true">
        0{index + 1}
      </span>
      <p className="work-client-label">{workLabels.client}</p>
      <p className="work-client">{item.client}</p>
    </div>
    <ArrowUpRight aria-hidden="true" size={20} />
  </div>
  <p className="work-project-type">
    <span>{workLabels.projectType}</span>
    {item.projectType}
  </p>
  <h3>{item.title}</h3>
  <dl>
    <div>
      <dt>{workLabels.problem}</dt>
      <dd>{item.problem}</dd>
    </div>
    <div>
      <dt>{workLabels.solution}</dt>
      <dd>{item.solution}</dd>
    </div>
    <div>
      <dt>{workLabels.outcome}</dt>
      <dd>{item.outcome}</dd>
    </div>
  </dl>
  <ul className="work-tags" aria-label={workLabels.tags}>
    {item.tags.map((tag) => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
</article>
```

Keep a single `data-testid="work-card"` on each article for the length assertion and ordered per-card checks.

- [ ] **Step 4: Run the component test**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: PASS.

---

### Task 4: Style The Project Cards Responsively

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Add CSS for the upgraded work card**

In `src/App.css`, replace the old `.work-card > svg` rule with:

```css
.work-card-topline {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.work-card-topline svg {
  flex: 0 0 auto;
  color: var(--cyan);
}
```

Add these rules near the existing work-card styles:

```css
.work-client-label,
.work-project-type span {
  margin: 0 0 4px;
  color: var(--soft);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.work-client {
  margin: 4px 0 0;
  color: var(--white);
  font-weight: 850;
}

.work-project-type {
  display: grid;
  gap: 4px;
  margin: 18px 0 0;
  color: var(--green-soft);
  line-height: 1.4;
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.work-tags li {
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(34, 211, 238, 0.18);
  border-radius: 999px;
  padding: 0 10px;
  color: var(--muted);
  background: rgba(2, 6, 23, 0.34);
  font-size: 0.78rem;
  font-weight: 750;
}
```

Update `.work-card h3`:

```css
.work-card h3 {
  padding-right: 0;
  margin-top: 14px;
}
```

In the `@media (max-width: 420px)` block, add:

```css
.work-card-topline {
  gap: 12px;
}

.work-tags li {
  max-width: 100%;
}
```

- [ ] **Step 2: Run the style-sensitive verification commands**

Run:

```bash
npm run test:run
npm run build
```

Expected: both PASS.

---

### Task 5: Browser Verification

**Files:**
- No file edits unless verification finds layout problems.

- [ ] **Step 1: Start or reuse the dev server**

If no dev server is running, run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite serves the page at `http://127.0.0.1:5173/` or the next available port.

- [ ] **Step 2: Verify desktop and mobile layout**

Use browser or headless Chrome to inspect:

- Desktop: `1440x900`
- Mobile: `390x844`

Expected:

- Header logo is visible and not distorted.
- `Work` section shows four fictional project cards.
- Project text and tags do not overlap.
- No horizontal overflow on mobile.
- The page still uses `About`, not `Founders`, in navigation.

- [ ] **Step 3: Run the final CSS scan**

Run:

```bash
rg -n "radial-gradient|clamp\\(|vw|vh|letter-spacing: -|!important|z-index: -" src
```

Expected: no matches for banned styling patterns.

If `vh` appears in test tooling or unrelated content, verify it is not used for font sizing or brittle layout.

---

## Self-Review

- Spec coverage: covered logo assets, mock client project cards, content centralization, Work rendering, responsive behavior, and verification.
- Placeholder scan: no unresolved placeholder markers.
- Type consistency: `logoSrc`, `logoAlt`, `client`, `projectType`, `tags`, and expanded `workLabels` are defined before use.
- Scope check: single frontend content/layout update; no backend, routing, or real client testimonial work included.
