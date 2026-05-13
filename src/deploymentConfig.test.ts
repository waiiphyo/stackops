import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

type VercelConfig = {
  rewrites?: Array<{
    source?: string;
    destination?: string;
  }>;
};

describe('Vercel deployment config', () => {
  it('serves client-side routes through index.html', () => {
    const configPath = resolve(process.cwd(), 'vercel.json');

    const config = JSON.parse(readFileSync(configPath, 'utf8')) as VercelConfig;

    expect(config.rewrites).toEqual(
      expect.arrayContaining([
        {
          source: '/(.*)',
          destination: '/index.html',
        },
      ]),
    );
  });
});
