const InsertionSort = require('../algorithms/sorts/InsertionSort');
const randomArr = require('../utils/randomArr');

describe('InsertionSort tests', () => {
  const arr1 = [];
  const arr2 = [3, 4, 6, 2, 6, 21, 6, 7, 1, 4, 67, 8, 1, 5, 4];

  it('works with an empty array', () => {
    expect(InsertionSort(arr1)).toEqual([]);
  });

  it('sorts an array correctly', () => {
    expect(InsertionSort(arr2)).toEqual(arr2.sort((a, b) => a - b));
  });

  it('sorts an array of 1000 values', () => {
    expect(InsertionSort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
  });
});
