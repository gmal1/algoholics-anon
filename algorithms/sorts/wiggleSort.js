/**
Wiggle Sort.

Given an unsorted array nums, reorder it such
that nums[0] < nums[1] > nums[2] < nums[3]....

For example:
if input numbers = [3, 5, 2, 1, 6, 4]
one possible Wiggle Sorted answer is [3, 5, 1, 6, 2, 4]. 
 */

function wiggleSort(nums) {
  for (let i = 1; i < nums.length; i += 1) {
    if ((i % 2 === 1) === nums[i - 1] > nums[i]) {
      [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
    }
  }
  return nums;
}

console.log(wiggleSort([1, 1, 1, 1, 2, 2, 2, 2]));
