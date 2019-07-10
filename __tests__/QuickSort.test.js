const quicksort = require('../algorithms/sorts/QuickSort');
const randomArr = require('../utils/randomArr');

describe('QuickSort tests', () => {
  const arr1 = [];
  const arr2 = [3, 4, 6, 2, 6, 21, 6, 7, 1, 4, 67, 8, 1, 5, 4];

  it('works with an empty array', () => {
    expect(quicksort(arr1)).toEqual([]);
  });

  it('sorts an array correctly', () => {
    expect(quicksort(arr2)).toEqual(arr2.sort((a, b) => a - b));
  });

  it('sorts an array of 1000 values', () => {
    expect(quicksort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
  });
});
