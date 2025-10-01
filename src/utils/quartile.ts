export function quartile(prices: number[]) {
  const sortedPrices = prices.slice().sort((a, b) => a - b);
  const percentile = (p: number) => {
    const index = (sortedPrices.length - 1) * p;
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    const weight = index - lower;
    return sortedPrices[lower] * (1 - weight) + sortedPrices[upper] * weight;
  }

  return {
    q1: percentile(0.25),
    median: percentile(0.5),
    q3: percentile(0.75),
  }
}
