type Position = 'below' | 'average' | 'above';

export function pricePosition(median: number, salePrice: number): Position {
  // I decided to get the positions using .333 as multiplier
  // because we have 3 positions to determine.
  const above = median * 1.333;
  const below = median - (median * 0.333);

  if (salePrice >= above) {
    return 'above';
  }

  if (salePrice <= below) {
    return 'below';
  }

  return 'average';
}
