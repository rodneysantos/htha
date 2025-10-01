type Position = 'below' | 'average' | 'above';

export function pricePosition(salesPrice: number, q1: number, q3: number): Position {
  if (salesPrice <= q1) return 'below';
  if (salesPrice >= q3) return 'above';
  return 'average';
}
