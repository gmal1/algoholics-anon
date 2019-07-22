/*
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. 
You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/

const longestIncreasingPath = function(matrix) {
  const map = new Map(); // key: coord, value: longest path known starting at this coord
  let longest = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      const key = `${i}.${j}`;
      map.set(key, dfs(i, j, new Set()));
    }
  }
  return longest;

  function dfs(y, x, visited, len = 0, prevVal = Infinity) {
    const key = `${y}.${x}`;
    if (visited.has(key)) return len;

    if (y < 0 || x < 0 || y >= matrix.length || x >= matrix[0].length)
      return len;
    const val = matrix[y][x];
    if (val >= prevVal) return len;

    // we've now validated the input, get it from the cache if it has already been computed
    if (map.has(key)) {
      return map.get(key) + len;
    }

    visited.add(key);
    len = Math.max(
      dfs(y + 1, x, visited, len + 1, val),
      dfs(y - 1, x, visited, len + 1, val),
      dfs(y, x + 1, visited, len + 1, val),
      dfs(y, x - 1, visited, len + 1, val)
    );
    visited.delete(key);

    if (len > longest) longest = len;
    return len;
  }
};
