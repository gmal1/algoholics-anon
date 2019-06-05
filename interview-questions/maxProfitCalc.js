// Write an efficient method that takes stockPrices and returns
// the best profit I could have made from one purchase and
// one sale of one share of Apple stock yesterday.

const profitCalc = arrOfStockPrices => {
  if (!Array.isArray(arrOfStockPrices)) {
    return 'Function called with invalid input.';
  }

  if (arrOfStockPrices.length < 2) {
    return 'There must be more than two prices to enable the trade';
  }
  // We'll greedily update minPrice and maxProfit, so we initialize them to
  // the first price and the first possible profit

  let minPrice = arrOfStockPrices[0];
  let maxProfit = arrOfStockPrices[1] - arrOfStockPrices[0];

  // Start at the second (index 1) time
  // We can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time
  // If we started at index 0, we'd try to buy AND sell at time 0.
  // This would result in a profit of 0, which is a problem if
  // maxProfit is supposed to be *negative*—we'd return 0
  for (let i = 1; i < arrOfStockPrices.length; i += 1) {
    const currentStockPrice = arrOfStockPrices[i];

    // See what our profit would be if we bought at the minPrice
    // and sold at the current price
    const potentialProfit = currentStockPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // update minPrice so it's always the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentStockPrice);
  }

  return maxProfit;
};

module.exports = profitCalc;
