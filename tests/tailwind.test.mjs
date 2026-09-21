// tests/tailwind.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';

test('Tailwind CSS Utility Class Taxonomy', async (t) => {
  await t.test('verifies standard Tailwind mobile-first breakpoint thresholds', () => {
    const breakpoints = {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    };
    assert.equal(breakpoints.sm, '640px');
    assert.equal(breakpoints.md, '768px');
    assert.equal(breakpoints.lg, '1024px');
  });

  await t.test('verifies 4px standard spacing scale multiplier', () => {
    function spacingToPixels(scale) {
      return scale * 4;
    }
    assert.equal(spacingToPixels(4), 16);
    assert.equal(spacingToPixels(6), 24);
    assert.equal(spacingToPixels(8), 32);
    assert.equal(spacingToPixels(12), 48);
  });
});

test('Class Conflict Resolution Algorithm Simulation', async (t) => {
  await t.test('correctly simulates tailwind-merge override for conflicting padding', () => {
    function simulateMerge(base, override) {
      const tokens = base.split(' ');
      const overrideTokens = override.split(' ');
      const prefixMap = new Map();

      for (const t of [...tokens, ...overrideTokens]) {
        const prefix = t.split('-')[0]; // e.g., 'p', 'bg', 'text'
        prefixMap.set(prefix, t);
      }
      return Array.from(prefixMap.values()).join(' ');
    }

    const merged = simulateMerge('p-2 bg-red-500', 'p-4 bg-blue-600');
    assert.equal(merged, 'p-4 bg-blue-600');
  });
});
