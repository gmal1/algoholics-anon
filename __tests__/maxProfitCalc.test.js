const maxProfit = require('../interview-questions/maxProfitCalc.js');

describe('maxProfitCalc tests', () => {
  const arr1 = [];
  const arr2 = [1, 4, 5, 6, 2, 5, 1, 10];
  const arr3 = [10, 9, 9, 8, 7];

  it('returns an error message if function is called with invalid input', () => {
    expect(maxProfit('blah')).toBe('Function called with invalid input.');
  });

  it('returns an error message if length of input array is less than 2', () => {
    expect(maxProfit(arr1)).toBe(
      'There must be more than two prices to enable the trade'
    );
  });

  it('returns 9', () => {
    expect(maxProfit(arr2)).toBe(9);
  });

  it('returns 0 for an array of descending values', () => {
    expect(maxProfit(arr3)).toBe(0);
  });
});
