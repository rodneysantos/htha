export function calculateMedianPrice(prices: number[]) {
  const sortedPrices = prices.slice().sort((a, b) => a - b);

  if (sortedPrices.length % 2 === 1) {
    const medianIndex = Math.ceil(sortedPrices.length / 2);
    return sortedPrices[medianIndex - 1];
  }

  const middle = sortedPrices.length / 2;
  return (sortedPrices[middle - 1] + sortedPrices[middle]) / 2;
}
