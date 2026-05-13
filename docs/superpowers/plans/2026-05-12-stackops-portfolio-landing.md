# StackOps Portfolio Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive premium landing page for StackOps with direction A, `About` navigation, service proof, portfolio-style work cards, three founder-led About profiles, and a lead-generation contact form.

**Architecture:** Create a Vite + React + TypeScript single-page app in the currently empty project folder. Keep all editable business content in `src/content/siteContent.ts`, render it through focused section components, and put page-level visual styling in `src/App.css`.

**Tech Stack:** Vite, React, TypeScript, Vitest, React Testing Library, Lucide React, plain CSS.

---

## File Structure

- Create `package.json`: project scripts and dependencies.
- Create `index.html`: Vite HTML entry.
- Create `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`: TypeScript and Vite config.
- Create `.gitignore`: ignore dependencies, build output, local env files, and `.superpowers/`.
- Create `src/main.tsx`: React root mount.
- Create `src/App.tsx`: page composition.
- Create `src/App.css`: global and section styling.
- Create `src/setupTests.ts`: Vitest DOM matcher setup.
- Create `src/vite-env.d.ts`: Vite type references.
- Create `src/content/siteContent.ts`: centralized editable landing-page content.
- Create `src/content/siteContent.test.ts`: content model tests.
- Create `src/components/Header.tsx`: compact navigation and header CTA.
- Create `src/components/Hero.tsx`: hero copy, CTA buttons, metrics, operations panel.
- Create `src/components/Services.tsx`: service capability cards.
- Create `src/components/Work.tsx`: portfolio-style work cards.
- Create `src/components/About.tsx`: agency story and three profile cards.
- Create `src/components/Insights.tsx`: compact thinking section.
- Create `src/components/Contact.tsx`: static inquiry form with local confirmation and mail link.
- Create `src/components/Footer.tsx`: final nav and company mark.
- Create `src/components/sections.test.tsx`: rendering tests for major sections and contact behavior.

This workspace is not a git repository, so commit steps are replaced with checkpoints. If a repository is initialized later, commit after each task using the changed files listed in that task.

---

### Task 1: Scaffold The React App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `.gitignore`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/App.css`
- Create: `src/setupTests.ts`
- Create: `src/vite-env.d.ts`

- [ ] **Step 1: Create project package metadata**

Create `package.json`:

```json
{
  "name": "stackops-portfolio-landing",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:run": "vitest run"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "vite": "^5.4.11"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "jsdom": "^25.0.1",
    "typescript": "^5.6.3",
    "vitest": "^2.1.5"
  }
}
```

- [ ] **Step 2: Create Vite and TypeScript config files**

Create `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="StackOps is a founder-led IT consulting agency for resilient cloud, DevOps, security, and managed operations."
    />
    <title>StackOps IT Consulting</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

Create `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    globals: true,
  },
});
```

- [ ] **Step 3: Create base source files**

Create `.gitignore`:

```gitignore
node_modules
dist
.env
.env.*
.DS_Store
.superpowers/
```

Create `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />
```

Create `src/setupTests.ts`:

```ts
import '@testing-library/jest-dom/vitest';
```

Create `src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Create `src/App.tsx`:

```tsx
export default function App() {
  return (
    <main className="app-shell">
      <h1>StackOps</h1>
    </main>
  );
}
```

Create `src/App.css`:

```css
:root {
  color: #e5f3ff;
  background: #06111f;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  background: #06111f;
}

button,
input,
select,
textarea {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
  padding: 48px;
}
```

- [ ] **Step 4: Install dependencies**

Run:

```bash
npm install
```

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 5: Verify the scaffold builds**

Run:

```bash
npm run build
```

Expected: TypeScript completes and Vite writes production files into `dist/`.

- [ ] **Step 6: Checkpoint**

Record changed files:

```bash
find . -maxdepth 2 -type f | sort
```

Expected: the created config and source files are listed. If this folder is later initialized as a git repository, commit this task before starting Task 2.

---

### Task 2: Add The Content Model With Tests

**Files:**
- Create: `src/content/siteContent.test.ts`
- Create: `src/content/siteContent.ts`

- [ ] **Step 1: Write the failing content test**

Create `src/content/siteContent.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { siteContent } from './siteContent';

describe('siteContent', () => {
  it('uses About in navigation and does not expose a founder-only nav label', () => {
    const labels = siteContent.navItems.map((item) => item.label);

    expect(labels).toEqual(['Services', 'Work', 'About', 'Insights']);
    expect(labels).not.toContain('Founders');
  });

  it('contains the core landing page sections', () => {
    expect(siteContent.hero.primaryCta.label).toBe('Start a project');
    expect(siteContent.hero.secondaryCta.label).toBe('View our work');
    expect(siteContent.metrics).toHaveLength(3);
    expect(siteContent.services).toHaveLength(6);
    expect(siteContent.work).toHaveLength(3);
    expect(siteContent.founders).toHaveLength(3);
    expect(siteContent.insights).toHaveLength(3);
  });

  it('defines a direct contact email and required project types', () => {
    expect(siteContent.contact.email).toMatch(/@/);
    expect(siteContent.contact.projectTypes).toEqual([
      'Cloud modernization',
      'DevOps automation',
      'Managed operations',
      'Security hardening',
      'Technical consulting',
    ]);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:run -- src/content/siteContent.test.ts
```

Expected: FAIL because `src/content/siteContent.ts` does not exist.

- [ ] **Step 3: Implement the content model**

Create `src/content/siteContent.ts`:

```ts
export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  summary: string;
  detail: string;
};

export type WorkItem = {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type Founder = {
  name: string;
  role: string;
  expertise: string;
  monogram: string;
};

export type Insight = {
  title: string;
  summary: string;
};

export type SiteContent = {
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  metrics: Metric[];
  proof: string[];
  services: Service[];
  work: WorkItem[];
  about: {
    eyebrow: string;
    title: string;
    body: string;
    principles: string[];
  };
  founders: Founder[];
  insights: Insight[];
  contact: {
    title: string;
    body: string;
    email: string;
    projectTypes: string[];
  };
};

export const siteContent: SiteContent = {
  navItems: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
  ],
  hero: {
    eyebrow: 'IT consulting for reliable growth',
    title: 'We design, automate, and operate resilient digital infrastructure.',
    body:
      'StackOps helps teams modernize cloud platforms, secure delivery pipelines, stabilize operations, and turn complex systems into dependable business capability.',
    primaryCta: { label: 'Start a project', href: '#contact' },
    secondaryCta: { label: 'View our work', href: '#work' },
  },
  metrics: [
    { value: '3', label: 'founder-led experts' },
    { value: '24/7', label: 'operations mindset' },
    { value: 'Cloud', label: 'DevOps + security' },
  ],
  proof: [
    'Cloud platform modernization',
    'Secure delivery pipelines',
    'Operational reliability',
    'Automation-first execution',
  ],
  services: [
    {
      title: 'Cloud architecture',
      summary: 'Plan and modernize cloud foundations that scale with the business.',
      detail: 'AWS, Azure, networking, identity, migration planning',
    },
    {
      title: 'DevOps automation',
      summary: 'Turn manual release work into reliable, repeatable delivery systems.',
      detail: 'CI/CD, IaC, environment strategy, release controls',
    },
    {
      title: 'Managed operations',
      summary: 'Stabilize production operations with monitoring and response patterns.',
      detail: 'Observability, alerting, runbooks, incident readiness',
    },
    {
      title: 'Security hardening',
      summary: 'Reduce exposure across infrastructure, access, and delivery workflows.',
      detail: 'IAM, secrets, patching, compliance-ready controls',
    },
    {
      title: 'Infrastructure automation',
      summary: 'Codify repeatable systems so teams can ship without drift.',
      detail: 'Terraform, containers, scripting, configuration management',
    },
    {
      title: 'Technical consulting',
      summary: 'Bring senior execution support to roadmaps, audits, and delivery gaps.',
      detail: 'Assessments, architecture reviews, delivery leadership',
    },
  ],
  work: [
    {
      title: 'Cloud foundation reset',
      problem: 'A growing product team needed a cleaner cloud account structure and deployment path.',
      solution: 'Designed environment boundaries, automated provisioning, and documented operating flows.',
      outcome: 'A more predictable foundation for product delivery and operational support.',
    },
    {
      title: 'Delivery pipeline modernization',
      problem: 'Manual releases slowed feature delivery and increased coordination risk.',
      solution: 'Introduced CI/CD workflows, quality gates, and release visibility for engineering teams.',
      outcome: 'A repeatable delivery process that reduced release friction.',
    },
    {
      title: 'Operations readiness program',
      problem: 'Production incidents were difficult to triage because ownership and signals were unclear.',
      solution: 'Built monitoring views, runbooks, alert routing, and incident response routines.',
      outcome: 'A clearer operating model for service health and support.',
    },
  ],
  about: {
    eyebrow: 'About StackOps',
    title: 'Founder-led consulting for teams that need systems they can trust.',
    body:
      'StackOps is built around practical senior execution: diagnose the platform, automate the repetitive work, secure the delivery path, and leave teams with operating patterns they can keep using.',
    principles: ['Reliability before flash', 'Automation over repetition', 'Security built into delivery'],
  },
  founders: [
    {
      name: 'Founder 01',
      role: 'Cloud Architecture Lead',
      expertise: 'Cloud foundations, migrations, platform strategy, and infrastructure reviews.',
      monogram: 'F1',
    },
    {
      name: 'Founder 02',
      role: 'DevOps Automation Lead',
      expertise: 'CI/CD systems, infrastructure as code, developer workflows, and release quality.',
      monogram: 'F2',
    },
    {
      name: 'Founder 03',
      role: 'Security Operations Lead',
      expertise: 'Hardening, monitoring, access controls, incident readiness, and managed operations.',
      monogram: 'F3',
    },
  ],
  insights: [
    {
      title: 'Cloud reliability starts with ownership',
      summary: 'Healthy platforms make service boundaries, alerts, and operating responsibilities visible.',
    },
    {
      title: 'Automation is an operating decision',
      summary: 'The best automation removes repeated risk while keeping delivery teams in control.',
    },
    {
      title: 'Security belongs inside delivery',
      summary: 'Access, secrets, and infrastructure policy work best when they are part of the release path.',
    },
  ],
  contact: {
    title: 'Ready to modernize how your systems run?',
    body:
      'Tell us what you are building, stabilizing, or automating. StackOps will respond with a practical next step.',
    email: 'hello@stackops.example',
    projectTypes: [
      'Cloud modernization',
      'DevOps automation',
      'Managed operations',
      'Security hardening',
      'Technical consulting',
    ],
  },
};
```

- [ ] **Step 4: Run the content test to verify it passes**

Run:

```bash
npm run test:run -- src/content/siteContent.test.ts
```

Expected: PASS.

- [ ] **Step 5: Checkpoint**

Run:

```bash
npm run build
```

Expected: PASS. If this folder is later initialized as a git repository, commit `src/content/siteContent.ts` and `src/content/siteContent.test.ts`.

---

### Task 3: Build Header And Hero With Tests

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/sections.test.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write failing render tests for the header and hero**

Create `src/components/sections.test.tsx`:

```tsx
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('StackOps landing page', () => {
  it('renders the approved navigation and hero CTAs', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(screen.queryByRole('link', { name: 'Founders' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We design, automate, and operate resilient digital infrastructure.',
    );
    expect(screen.getByRole('link', { name: 'Start a project' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'View our work' })).toHaveAttribute('href', '#work');
  });

  it('renders the operations visual and hero metrics', () => {
    render(<App />);

    expect(screen.getByLabelText('StackOps operations health visual')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('Cloud')).toBeInTheDocument();
  });

  it('shows a local confirmation after a completed contact request', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Aye Chan' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'aye@example.com' } });
    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'Example Co' } });
    fireEvent.change(screen.getByLabelText('Project type'), {
      target: { value: 'Cloud modernization' },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'We need help modernizing our cloud platform.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Prepare request' }));

    expect(screen.getByText(/Thanks, Aye Chan/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Email StackOps/ })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:hello@stackops.example'),
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL because the final components and contact form do not exist yet.

- [ ] **Step 3: Implement the header component**

Create `src/components/Header.tsx`:

```tsx
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="StackOps home">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>StackOps</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {siteContent.navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Book a consult
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </header>
  );
}
```

- [ ] **Step 4: Implement the hero component**

Create `src/components/Hero.tsx`:

```tsx
import { ArrowRight, Activity, GitBranch, ShieldCheck } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function Hero() {
  const { hero, metrics, proof } = siteContent;

  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          {hero.eyebrow}
        </p>
        <h1>{hero.title}</h1>
        <p className="hero-body">{hero.body}</p>

        <div className="hero-actions">
          <a className="button button-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a className="button button-secondary" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>

        <dl className="metric-grid" aria-label="StackOps proof metrics">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="ops-console" aria-label="StackOps operations health visual">
        <div className="console-header">
          <span>Operations map</span>
          <span className="health-pill">Systems healthy</span>
        </div>
        <div className="console-lines" aria-hidden="true">
          <span className="line-cyan" />
          <span />
          <span className="line-green" />
          <span />
        </div>
        <div className="node-grid" aria-hidden="true">
          <div className="node-card">
            <Activity size={20} />
            <strong>Monitor</strong>
            <span>Signals unified</span>
          </div>
          <div className="node-card">
            <GitBranch size={20} />
            <strong>Deploy</strong>
            <span>Pipelines controlled</span>
          </div>
          <div className="node-card">
            <ShieldCheck size={20} />
            <strong>Secure</strong>
            <span>Access hardened</span>
          </div>
        </div>
      </div>

      <div className="proof-strip" aria-label="StackOps capabilities">
        {proof.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Wire header and hero into the app**

Modify `src/App.tsx`:

```tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
```

- [ ] **Step 6: Run tests and observe the remaining expected failures**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL only on sections and contact form that will be added in Tasks 4 and 5.

- [ ] **Step 7: Checkpoint**

Run:

```bash
npm run build
```

Expected: PASS. If this folder is later initialized as a git repository, commit `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/sections.test.tsx`, and `src/App.tsx`.

---

### Task 4: Build Services, Work, About, And Insights

**Files:**
- Create: `src/components/Services.tsx`
- Create: `src/components/Work.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Insights.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/sections.test.tsx`

- [ ] **Step 1: Extend the section test before implementation**

Replace `src/components/sections.test.tsx` with:

```tsx
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('StackOps landing page', () => {
  it('renders the approved navigation and hero CTAs', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(screen.queryByRole('link', { name: 'Founders' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We design, automate, and operate resilient digital infrastructure.',
    );
    expect(screen.getByRole('link', { name: 'Start a project' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'View our work' })).toHaveAttribute('href', '#work');
  });

  it('renders the operations visual and hero metrics', () => {
    render(<App />);

    expect(screen.getByLabelText('StackOps operations health visual')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('Cloud')).toBeInTheDocument();
  });

  it('renders services, work, about, and insights sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Services built for operational maturity' })).toBeInTheDocument();
    expect(screen.getAllByTestId('service-card')).toHaveLength(6);
    expect(screen.getByRole('heading', { name: 'Selected operating work' })).toBeInTheDocument();
    expect(screen.getAllByTestId('work-card')).toHaveLength(3);
    expect(screen.getByRole('heading', { name: 'Founder-led consulting for teams that need systems they can trust.' })).toBeInTheDocument();
    expect(screen.getAllByTestId('founder-card')).toHaveLength(3);
    expect(screen.getByRole('heading', { name: 'Operational thinking' })).toBeInTheDocument();
    expect(screen.getAllByTestId('insight-card')).toHaveLength(3);
  });

  it('shows a local confirmation after a completed contact request', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Aye Chan' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'aye@example.com' } });
    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'Example Co' } });
    fireEvent.change(screen.getByLabelText('Project type'), {
      target: { value: 'Cloud modernization' },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'We need help modernizing our cloud platform.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Prepare request' }));

    expect(screen.getByText(/Thanks, Aye Chan/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Email StackOps/ })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:hello@stackops.example'),
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails for missing sections**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL because services, work, about, insights, and contact sections are not wired in.

- [ ] **Step 3: Implement services**

Create `src/components/Services.tsx`:

```tsx
import { Cloud, GitBranch, Headset, LockKeyhole, ServerCog, Wrench } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const icons = [Cloud, GitBranch, Headset, LockKeyhole, ServerCog, Wrench];

export function Services() {
  return (
    <section className="page-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Services built for operational maturity</h2>
        <p>
          From cloud foundations to managed operations, StackOps focuses on the systems that keep
          modern teams shipping safely.
        </p>
      </div>

      <div className="card-grid services-grid">
        {siteContent.services.map((service, index) => {
          const Icon = icons[index];
          return (
            <article className="service-card" data-testid="service-card" key={service.title}>
              <div className="icon-box">
                <Icon aria-hidden="true" size={22} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span>{service.detail}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Implement work cards**

Create `src/components/Work.tsx`:

```tsx
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function Work() {
  return (
    <section className="page-section split-section" id="work">
      <div className="section-heading sticky-heading">
        <p className="eyebrow">Work</p>
        <h2>Selected operating work</h2>
        <p>
          Each engagement is framed around the same practical pattern: clarify the system, reduce
          risk, automate the repeatable path, and leave the team with a stronger way to operate.
        </p>
      </div>

      <div className="work-list">
        {siteContent.work.map((item, index) => (
          <article className="work-card" data-testid="work-card" key={item.title}>
            <div className="work-index">0{index + 1}</div>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>{item.problem}</dd>
              </div>
              <div>
                <dt>Solution</dt>
                <dd>{item.solution}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{item.outcome}</dd>
              </div>
            </dl>
            <ArrowUpRight aria-hidden="true" size={20} />
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Implement About**

Create `src/components/About.tsx`:

```tsx
import { CheckCircle2 } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function About() {
  return (
    <section className="page-section about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">{siteContent.about.eyebrow}</p>
        <h2>{siteContent.about.title}</h2>
        <p>{siteContent.about.body}</p>
        <ul className="principle-list">
          {siteContent.about.principles.map((principle) => (
            <li key={principle}>
              <CheckCircle2 aria-hidden="true" size={18} />
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div className="founder-grid" aria-label="StackOps founder-led expertise">
        {siteContent.founders.map((founder) => (
          <article className="founder-card" data-testid="founder-card" key={founder.role}>
            <div className="founder-avatar">{founder.monogram}</div>
            <div>
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p>{founder.expertise}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Implement insights**

Create `src/components/Insights.tsx`:

```tsx
import { BookOpen } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function Insights() {
  return (
    <section className="page-section" id="insights">
      <div className="section-heading">
        <p className="eyebrow">Insights</p>
        <h2>Operational thinking</h2>
        <p>
          A compact view of how StackOps approaches reliable platforms, automation, and secure
          delivery.
        </p>
      </div>

      <div className="card-grid insight-grid">
        {siteContent.insights.map((insight) => (
          <article className="insight-card" data-testid="insight-card" key={insight.title}>
            <BookOpen aria-hidden="true" size={20} />
            <h3>{insight.title}</h3>
            <p>{insight.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Wire the new sections into the app**

Modify `src/App.tsx`:

```tsx
import { About } from './components/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { Services } from './components/Services';
import { Work } from './components/Work';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Insights />
      </main>
    </div>
  );
}
```

- [ ] **Step 8: Run the test and observe the remaining contact failure**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL only for the contact form behavior.

- [ ] **Step 9: Checkpoint**

Run:

```bash
npm run build
```

Expected: PASS. If this folder is later initialized as a git repository, commit the new section components, `src/App.tsx`, and `src/components/sections.test.tsx`.

---

### Task 5: Build Contact And Footer

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Confirm the contact test fails before writing the form**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: FAIL because the contact form is not rendered.

- [ ] **Step 2: Implement the contact form**

Create `src/components/Contact.tsx`:

```tsx
import { FormEvent, useMemo, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { siteContent } from '../content/siteContent';

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: siteContent.contact.projectTypes[0],
  message: '',
};

export function Contact() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submittedName, setSubmittedName] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`StackOps inquiry: ${formState.projectType}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nProject type: ${formState.projectType}\n\n${formState.message}`,
    );

    return `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`;
  }, [formState]);

  function updateField(field: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedName(formState.name.trim());
  }

  return (
    <section className="page-section contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>{siteContent.contact.title}</h2>
        <p>{siteContent.contact.body}</p>
        <a className="mail-link" href={`mailto:${siteContent.contact.email}`}>
          <Mail aria-hidden="true" size={18} />
          {siteContent.contact.email}
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            required
            value={formState.name}
            onChange={(event) => updateField('name', event.target.value)}
            type="text"
            autoComplete="name"
          />
        </label>

        <label>
          Email
          <input
            required
            value={formState.email}
            onChange={(event) => updateField('email', event.target.value)}
            type="email"
            autoComplete="email"
          />
        </label>

        <label>
          Company
          <input
            required
            value={formState.company}
            onChange={(event) => updateField('company', event.target.value)}
            type="text"
            autoComplete="organization"
          />
        </label>

        <label>
          Project type
          <select
            required
            value={formState.projectType}
            onChange={(event) => updateField('projectType', event.target.value)}
          >
            {siteContent.contact.projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
              </option>
            ))}
          </select>
        </label>

        <label className="full-field">
          Message
          <textarea
            required
            value={formState.message}
            onChange={(event) => updateField('message', event.target.value)}
            rows={5}
          />
        </label>

        <button className="button button-primary full-field" type="submit">
          Prepare request
          <Send aria-hidden="true" size={18} />
        </button>

        {submittedName ? (
          <div className="form-note full-field" role="status">
            <p>Thanks, {submittedName}. Your request is ready to send through your email client.</p>
            <a href={mailtoHref}>Email StackOps with this request</a>
          </div>
        ) : (
          <p className="form-note full-field">
            This first version prepares a direct email instead of sending to a backend.
          </p>
        )}
      </form>
    </section>
  );
}
```

- [ ] **Step 3: Implement the footer**

Create `src/components/Footer.tsx`:

```tsx
import { siteContent } from '../content/siteContent';

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#top" aria-label="StackOps home">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>StackOps</span>
      </a>
      <div className="footer-links">
        {siteContent.navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <p>Founder-led IT consulting for resilient digital infrastructure.</p>
    </footer>
  );
}
```

- [ ] **Step 4: Wire contact and footer into the app**

Modify `src/App.tsx`:

```tsx
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { Services } from './components/Services';
import { Work } from './components/Work';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 5: Run the section tests to verify green**

Run:

```bash
npm run test:run -- src/components/sections.test.tsx
```

Expected: PASS.

- [ ] **Step 6: Run all tests**

Run:

```bash
npm run test:run
```

Expected: PASS for `src/content/siteContent.test.ts` and `src/components/sections.test.tsx`.

- [ ] **Step 7: Checkpoint**

Run:

```bash
npm run build
```

Expected: PASS. If this folder is later initialized as a git repository, commit `src/components/Contact.tsx`, `src/components/Footer.tsx`, and `src/App.tsx`.

---

### Task 6: Add Premium Infrastructure Styling

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Replace the base CSS with the final responsive styling**

Replace `src/App.css` with:

```css
:root {
  color: #e5f3ff;
  background: #06111f;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --bg: #06111f;
  --bg-2: #0b1728;
  --panel: rgba(15, 23, 42, 0.68);
  --panel-strong: rgba(2, 6, 23, 0.72);
  --line: rgba(226, 232, 240, 0.14);
  --line-strong: rgba(34, 211, 238, 0.3);
  --text: #e5f3ff;
  --muted: rgba(226, 232, 240, 0.68);
  --soft: rgba(226, 232, 240, 0.48);
  --cyan: #67e8f9;
  --green: #34d399;
  --white: #f8fafc;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 78% 4%, rgba(34, 211, 238, 0.2), transparent 32rem),
    radial-gradient(circle at 10% 38%, rgba(16, 185, 129, 0.12), transparent 28rem),
    linear-gradient(135deg, #06111f 0%, #0b1728 58%, #092528 100%);
}

body,
button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
  cursor: pointer;
}

.app-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.site-header,
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.site-header {
  min-height: 84px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--white);
  font-weight: 800;
}

.brand-mark {
  width: 30px;
  height: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  padding: 5px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.9), rgba(16, 185, 129, 0.9));
  box-shadow: 0 0 28px rgba(34, 211, 238, 0.34);
}

.brand-mark span {
  border-radius: 2px;
  background: rgba(2, 6, 23, 0.76);
}

.nav-links,
.footer-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-size: 0.92rem;
}

.nav-links a,
.footer-links a {
  transition: color 160ms ease;
}

.nav-links a:hover,
.footer-links a:hover {
  color: var(--cyan);
}

.header-cta,
.button {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  font-weight: 800;
  white-space: nowrap;
}

.header-cta {
  padding: 0 14px;
  border: 1px solid var(--line);
  color: var(--white);
}

.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(320px, 0.96fr);
  gap: 48px;
  align-items: center;
  padding: 84px 0 56px;
}

.hero-copy h1,
.section-heading h2,
.about-copy h2,
.contact-copy h2 {
  margin: 0;
  color: var(--white);
  letter-spacing: 0;
}

.hero-copy h1 {
  max-width: 700px;
  font-size: 5.2rem;
  line-height: 0.98;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 18px;
  color: var(--cyan);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--green);
  box-shadow: 0 0 18px rgba(52, 211, 153, 0.8);
}

.hero-body {
  max-width: 620px;
  margin: 22px 0 28px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.button {
  padding: 0 18px;
}

.button-primary {
  color: #04111f;
  background: var(--white);
}

.button-secondary {
  color: var(--white);
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.4);
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  max-width: 620px;
  margin: 0;
}

.metric-card {
  margin: 0;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}

.metric-card dt {
  color: var(--white);
  font-size: 1.35rem;
  font-weight: 850;
}

.metric-card dd {
  margin: 4px 0 0;
  color: var(--soft);
  font-size: 0.84rem;
}

.ops-console,
.service-card,
.work-card,
.founder-card,
.insight-card,
.contact-form {
  border: 1px solid var(--line);
  background: var(--panel);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(18px);
}

.ops-console {
  min-height: 390px;
  border-color: var(--line-strong);
  border-radius: 18px;
  padding: 20px;
  background:
    linear-gradient(rgba(34, 211, 238, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.06) 1px, transparent 1px),
    rgba(2, 6, 23, 0.72);
  background-size: 28px 28px;
}

.console-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--soft);
  font-size: 0.84rem;
}

.health-pill {
  padding: 6px 10px;
  border: 1px solid rgba(52, 211, 153, 0.35);
  border-radius: 999px;
  color: #bbf7d0;
}

.console-lines {
  display: grid;
  gap: 12px;
  margin: 28px 0;
}

.console-lines span {
  height: 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.2);
}

.console-lines .line-cyan {
  width: 74%;
  background: rgba(103, 232, 249, 0.45);
}

.console-lines .line-green {
  width: 56%;
  background: rgba(52, 211, 153, 0.35);
}

.node-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.node-card {
  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 14px;
  border: 1px solid rgba(226, 232, 240, 0.12);
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.78);
}

.node-card svg {
  color: var(--cyan);
}

.node-card strong {
  color: var(--white);
}

.node-card span {
  color: var(--soft);
  font-size: 0.82rem;
}

.proof-strip {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.proof-strip span {
  min-height: 58px;
  display: flex;
  align-items: center;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.42);
  color: var(--muted);
  font-weight: 700;
}

.page-section {
  padding: 80px 0;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 28px;
}

.section-heading h2,
.about-copy h2,
.contact-copy h2 {
  font-size: 3.25rem;
  line-height: 1.04;
}

.section-heading p:not(.eyebrow),
.about-copy p,
.contact-copy p,
.service-card p,
.work-card dd,
.founder-card p,
.insight-card p {
  color: var(--muted);
  line-height: 1.65;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.service-card,
.insight-card {
  min-height: 250px;
  padding: 22px;
  border-radius: 14px;
}

.service-card h3,
.insight-card h3,
.work-card h3,
.founder-card h3 {
  margin: 18px 0 10px;
  color: var(--white);
}

.service-card span {
  display: block;
  margin-top: 18px;
  color: var(--cyan);
  font-size: 0.84rem;
  line-height: 1.45;
}

.icon-box {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: var(--cyan);
  background: rgba(34, 211, 238, 0.1);
}

.split-section,
.about-section,
.contact-section {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 34px;
  align-items: start;
}

.sticky-heading {
  position: sticky;
  top: 24px;
}

.work-list {
  display: grid;
  gap: 16px;
}

.work-card {
  position: relative;
  padding: 24px;
  border-radius: 14px;
}

.work-card > svg {
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--cyan);
}

.work-index {
  color: var(--cyan);
  font-size: 0.82rem;
  font-weight: 850;
}

.work-card dl {
  display: grid;
  gap: 16px;
  margin: 20px 0 0;
}

.work-card dt {
  margin-bottom: 4px;
  color: var(--white);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.founder-grid {
  display: grid;
  gap: 14px;
}

.founder-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 18px;
  border-radius: 14px;
}

.founder-avatar {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: #04111f;
  background: linear-gradient(135deg, var(--cyan), var(--green));
  font-weight: 900;
}

.founder-card h3,
.founder-card p {
  margin: 0;
}

.founder-role {
  margin: 4px 0 8px !important;
  color: var(--cyan) !important;
  font-size: 0.88rem;
  font-weight: 800;
}

.principle-list {
  display: grid;
  gap: 12px;
  padding: 0;
  margin: 24px 0 0;
  list-style: none;
}

.principle-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white);
}

.principle-list svg {
  flex: 0 0 auto;
  color: var(--green);
}

.insight-card svg {
  color: var(--green);
}

.contact-copy {
  max-width: 520px;
}

.mail-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  color: var(--cyan);
  font-weight: 800;
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 22px;
  border-radius: 14px;
}

.contact-form label {
  display: grid;
  gap: 8px;
  color: var(--white);
  font-size: 0.88rem;
  font-weight: 800;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px;
  color: var(--white);
  background: rgba(2, 6, 23, 0.62);
  outline: none;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.14);
}

.full-field {
  grid-column: 1 / -1;
}

.form-note {
  margin: 0;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--muted);
  background: rgba(2, 6, 23, 0.42);
  line-height: 1.5;
}

.form-note p {
  margin: 0 0 8px;
}

.form-note a {
  color: var(--cyan);
  font-weight: 800;
}

.site-footer {
  padding: 34px 0 44px;
  border-top: 1px solid var(--line);
  color: var(--soft);
}

.site-footer p {
  margin: 0;
  text-align: right;
}

@media (max-width: 920px) {
  .app-shell {
    width: min(100% - 28px, 720px);
  }

  .site-header {
    flex-wrap: wrap;
    padding: 18px 0 8px;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    overflow-x: auto;
  }

  .hero-section,
  .split-section,
  .about-section,
  .contact-section {
    grid-template-columns: 1fr;
  }

  .hero-section {
    gap: 28px;
    padding-top: 54px;
  }

  .hero-copy h1 {
    font-size: 3rem;
  }

  .section-heading h2,
  .about-copy h2,
  .contact-copy h2 {
    font-size: 2.6rem;
  }

  .proof-strip,
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sticky-heading {
    position: static;
  }

  .site-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .site-footer p {
    text-align: left;
  }
}

@media (max-width: 620px) {
  .app-shell {
    width: min(100% - 20px, 520px);
  }

  .header-cta {
    width: 100%;
  }

  .hero-copy h1 {
    font-size: 2.55rem;
  }

  .section-heading h2,
  .about-copy h2,
  .contact-copy h2 {
    font-size: 2.12rem;
  }

  .hero-actions,
  .hero-actions .button {
    width: 100%;
  }

  .metric-grid,
  .proof-strip,
  .card-grid,
  .node-grid,
  .contact-form {
    grid-template-columns: 1fr;
  }

  .ops-console {
    min-height: auto;
  }

  .page-section {
    padding: 58px 0;
  }

  .founder-card {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Run all tests after styling**

Run:

```bash
npm run test:run
```

Expected: PASS.

- [ ] **Step 3: Run production build**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 4: Checkpoint**

If this folder is later initialized as a git repository, commit `src/App.css`.

---

### Task 7: Final Browser Verification

**Files:**
- No planned source edits unless browser verification reveals layout issues.

- [ ] **Step 1: Start the dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite prints a local URL, usually `http://127.0.0.1:5173/`.

- [ ] **Step 2: Verify desktop layout**

Open the local URL at a desktop viewport around `1440x900`.

Expected:

- Header uses `Services`, `Work`, `About`, `Insights`.
- No `Founders` navigation label appears.
- Hero uses the dark Infrastructure Command direction.
- Hero CTAs are visible above the fold.
- Operations panel is visible and not clipped.
- Services render as six cards.
- Work renders as three case-study cards.
- About renders three profile cards.
- Contact form is visible and legible.

- [ ] **Step 3: Verify mobile layout**

Open the same page at a mobile viewport around `390x844`.

Expected:

- Header wraps without overlapping text.
- Hero title, CTAs, metrics, and operations panel stack cleanly.
- Cards use one column where needed.
- Contact form fields fill the width and do not overflow.
- No section text overlaps the next section.

- [ ] **Step 4: Verify contact interaction**

Fill out the contact form and click `Prepare request`.

Expected:

- A local confirmation appears with the entered name.
- The `Email StackOps with this request` link uses a `mailto:` URL.
- The page does not claim that a backend submission was sent.

- [ ] **Step 5: Final verification commands**

Run:

```bash
npm run test:run
npm run build
```

Expected: both commands PASS.

- [ ] **Step 6: Checkpoint**

If this folder is later initialized as a git repository, make a final commit with all landing-page files.
