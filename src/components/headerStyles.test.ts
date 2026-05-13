import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const appCss = readFileSync(resolve(process.cwd(), 'src/App.css'), 'utf8');

describe('header styles', () => {
  it('uses the approved compact floating header spacing', () => {
    expect(appCss).toMatch(
      /\.site-header\s*{[^}]*top: 12px;[^}]*min-height: 84px;[^}]*margin-top: 12px;[^}]*padding: 0 24px;/s,
    );
    expect(appCss).not.toMatch(/\.site-header\s*{[^}]*width: min\(1880px, calc\(100vw - 32px\)\);/s);
    expect(appCss).not.toMatch(/\.site-header\s*{[^}]*transform: translateX\(-50%\);/s);
  });

  it('does not redefine header appearance on the about route', () => {
    expect(appCss).not.toMatch(/\.about-page-shell\s+\.site-header/);
    expect(appCss).not.toMatch(/\.about-page-shell\s+\.brand\b/);
    expect(appCss).not.toMatch(/\.about-page-shell\s+\.brand-logo-frame/);
    expect(appCss).not.toMatch(/\.about-page-shell\s+\.nav-links/);
    expect(appCss).not.toMatch(/\.about-page-shell\s+\.header-cta/);
    expect(appCss).not.toMatch(/\.about-page-shell\s+\.theme-toggle/);
  });

  it('colors the about title accent with the site orange', () => {
    expect(appCss).toMatch(/\.about-title-accent\s*{\s*color: var\(--about-orange\);\s*}/);
  });
});
