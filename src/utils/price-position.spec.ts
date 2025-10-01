import { describe, expect, it } from 'vitest';
import { pricePosition } from './price-position.ts';

describe('pricePosition', () => {
  it('returns "above"', () => {
    // assemble
    const medianPrice = 990_000; // above: 1_316_700, below: 663_300
    const propertySalePrice = 1_695_000;

    // act
    const position = pricePosition(medianPrice, propertySalePrice);

    // assert
    expect(position).toEqual('above');
  });

  it('returns "average"', () => {
    // assemble
    const medianPrice = 990_000; // above: 1_316_700, below: 663_300
    const propertySalePrice = 690_000;

    // act
    const position = pricePosition(medianPrice, propertySalePrice);

    // assert
    expect(position).toEqual('average');
  });

  it('returns "below"', () => {
    // assemble
    const medianPrice = 990_000; // above: 1_316_700, below: 663_300
    const propertySalePrice = 625_000;

    // act
    const position = pricePosition(medianPrice, propertySalePrice);

    // assert
    expect(position).toEqual('below');
  });
});
