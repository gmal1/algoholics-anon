// https://leetcode.com/problems/trapping-rain-water/

/*
wasteful brute force approach:
for each node call a helper function to check left/right looking largest nodes (a leftMax and rightMax),
choose the smaller of those and take the difference of that and the node itself
if the smaller is less than the node, this node can hold no water

from there:
rather than look for global rightMax and leftMax for each node, 
think about the leftMax of nodes on the left of the "peak" (which exists somewhere in the array, maybe even on the far left/right) and the rightMax of the nodes on the right of the peak
for left node: if there is ANY node to the right of the candidate node that is larger than the
leftMax (which we would know about already)
then it doesn't matter if there is an even bigger node to the right somewhere, the amt of water trapped
at the cand node will be determined by the leftMax
same for any right node

another way to think about it:
if there is a node to the right that is bigger than (or equal to) leftMax, 
the water level for this node can't possibly be any lower than leftMax
same for right candidate
*/

const trap = function(arr: number[]): number {
  let result = 0;
  let left = 0;
  let right = arr.length - 1;
  let leftMax = arr[left];
  let rightMax = arr[right];

  while (left <= right) {
    if (leftMax >= rightMax) {
      // the right candidate will trap water depending on the rightMax (since the left is at least as big)
      rightMax = Math.max(rightMax, arr[right]);
      result += rightMax - arr[right];
      right--;
    } else {
      leftMax = Math.max(leftMax, arr[left]);
      result += leftMax - arr[left];
      left++;
    }
  }

  return result;
};
