const bubbleSort = require('../algorithms/sorts/BubbleSort');
const randomArr = require('../utils/randomArr');

describe('bubbleSort tests', () => {
  const arr1 = [];
  const arr2 = [3, 4, 6, 2, 6, 21, 6, 7, 1, 4, 67, 8, 1, 5, 4];

  it('works with an empty array', () => {
    expect(bubbleSort(arr1)).toEqual([]);
  });

  it('sorts an array correctly', () => {
    expect(bubbleSort(arr2)).toEqual(arr2.sort((a, b) => a - b));
  });

  it('sorts an array of 1000 values', () => {
    expect(bubbleSort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
  });
});
