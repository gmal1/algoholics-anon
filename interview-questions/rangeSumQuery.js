/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

class Solution {
  constructor(nums) {
    this.arr = [...nums];
    this.prefixSum = this.genPrefix();
  }

  genPrefix() {
    const result = [];
    this.arr.forEach((el, i) => {
      result.push(el + (result[i - 1] || 0));
    });
    // console.log(result);
    return result;
  }

  sumRange(i, j) {
    if (i === 0) return this.prefixSum[j];
    if (j > this.prefixSum.length - 1) j = this.prefixSum.length - 1;
    return this.prefixSum[j] - this.prefixSum[i - 1];
  }
}

const test = new Solution([-2, 0, 3, -5, 2, -1]);
console.log(test.sumRange(0, 2));
console.log(test.sumRange(2, 5));
console.log(test.sumRange(0, 5));
