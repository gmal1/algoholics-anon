const assert = require('assert');

it('should return true', () => {
  assert.equal(true, true);
});

function binSearchIterative(arr: number[], target: number): boolean {
  // assuming sorted array of numbers
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(arr.length / 2);
  while (left < right) {
    if (arr[mid] === target) return true;
    if (arr[mid] > target) {
      right = mid - 1;
      continue;
    }
    if (arr[mid] < target) {
      left = mid + 1;
      continue;
    }
  }
}

// not tested yet