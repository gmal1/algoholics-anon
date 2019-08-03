// given an array of sorted elements construct a BST of minimal height
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
const BST = require('../data-structures/BST.js');

function BSThelper(arr, start, end) {
  if (end < start) return null;
  const mid = Math.floor((start + end) / 2);

  const newTree = new BST(arr[mid]);
  newTree.left = BSThelper(arr, start, mid - 1);
  newTree.right = BSThelper(arr, mid + 1, end);
  return newTree;
}

function minHeightBST(array) {
  return BSThelper(array, 0, array.length - 1);
}

module.exports = minHeightBST;
