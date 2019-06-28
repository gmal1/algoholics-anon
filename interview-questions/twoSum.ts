/**
 * https://leetcode.com/problems/two-sum/
 * given an array of nums and a target,
 * return the indexes of the elements that add up to the target
 * (or false if no such pair exists)
 * */

function twoSum(arr: number[], target: number) {
  const complements = new Map([]);
  for (let i = 0; i < arr.length; i++) {
    const cand = arr[i];
    const compl = target - cand;
    if (complements.has(compl)) {
      return [complements.get(compl), i];
    }
    complements.set(cand, i);
  }

  return false;
}
