import { describe, expect, it } from 'vitest';
import { quartile } from './quartile.ts';

describe('quartile', () => {
  // sorted: [ 330_000, 340_000, 625_000, 690_000, 880_000, 1_100_000, 1_449_000, 1_465_000, 1_695_000, 1_700_000 ]
  const prices = [
    1_100_000, 690_000, 330_000,
    1_695_000, 1_449_000, 1_465_000,
    625_000, 340_000, 1_700_000,
    880_000,
  ];

  it('returns the quartile values', () => {
    // assemble
    const expectedValues = { q1: 641_250, median: 990_000, q3: 1_461_000 }

    // act
    const values = quartile(prices);

    // assert
    expect(values.q1).toEqual(expectedValues.q1);
    expect(values.median).toEqual(expectedValues.median);
    expect(values.q3).toEqual(expectedValues.q3);
  });
});
