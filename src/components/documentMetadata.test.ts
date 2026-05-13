import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const indexHtml = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');

describe('document metadata', () => {
  it('uses the StackOps mark as the browser favicon', () => {
    expect(indexHtml).toContain(
      '<link rel="icon" type="image/svg+xml" href="/logos/StackOps_mark.svg" />',
    );
  });
});
