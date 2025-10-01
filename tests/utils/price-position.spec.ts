import { pricePosition } from '#modules/utils/price-position.ts';
import { describe, expect, it } from 'vitest';

describe('pricePosition', () => {
  it('returns "above"', () => {
    // assemble
    const q1 = 641_250;
    const q3 = 1_461_000;
    const propertySalePrice = 1_695_000;

    // act
    const position = pricePosition(propertySalePrice, q1, q3);

    // assert
    expect(position).toEqual('above');
  });

  it('returns "average"', () => {
    // assemble
    const q1 = 641_250;
    const q3 = 1_461_000;
    const propertySalePrice = 690_000;

    // act
    const position = pricePosition(propertySalePrice, q1, q3);

    // assert
    expect(position).toEqual('average');
  });

  it('returns "below"', () => {
    // assemble
    const q1 = 641_250;
    const q3 = 1_461_000;
    const propertySalePrice = 875_000;

    // act
    const position = pricePosition(propertySalePrice, q1, q3);

    // assert
    expect(position).toEqual('average');
  });
});
