/*
Write a program that counts how many ways you can go from the top-left 
to the bottom-right in a square 2D array.

can only move right and down

ex:
n = 5
total number of ways to get to each position in grid:
[ [ 1, 1, 1, 1, 1 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 3, 6, 10, 15 ],
  [ 1, 4, 10, 20, 35 ],
  [ 1, 5, 15, 35, 70 ] ]
return: 70
*/

function numberOfPaths(n) {
  const memo = Array(n)
    .fill(null)
    .map(el => Array(n));
  memo[0] = Array(n).fill(1);
  memo.forEach((arr, i) => (arr[0] = 1));

  function helper(i, j) {
    if (memo[i][j]) return memo[i][j];
    return (memo[i][j] = helper(i - 1, j) + helper(i, j - 1));
  }
  helper(n - 1, n - 1);
  // console.log(memo)
  return memo[n - 1][n - 1];
}
