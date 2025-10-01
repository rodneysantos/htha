import { calculateMedianPrice } from '#modules/utils/median-price.ts';
import { describe, expect, it } from 'vitest';

describe('calculateMedianPrice', () => {
  // sorted: [ 330_000, 340_000, 625_000, 690_000, 880_000, 1_100_000, 1_449_000, 1_465_000, 1_695_000, 1_700_000 ]
  const prices = [
    1_100_000, 690_000, 330_000,
    1_695_000, 1_449_000, 1_465_000,
    625_000, 340_000, 1_700_000,
    880_000,
  ];

  it('returns the median price when even', () => {
    // assemble
    const expectedMedianPrice = 990_000;

    // act
    const medianPrice = calculateMedianPrice(prices);

    // assert
    expect(medianPrice).toEqual(expectedMedianPrice);
  });

  it('returns the median price when odd', () => {
    // assemble
    const expectedMedianPrice = 880_000;

    // act
    const medianPrice = calculateMedianPrice([...prices, 500_000]);

    // assert
    expect(medianPrice).toEqual(expectedMedianPrice);
  });
});
