/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

function islands(graph) {
  let count = 0;
  for (let y = 0; y < graph.length; y++) {
    for (let x = 0; x < graph.length; x++) {
      if (graph[y][x] === 1) {
        dfs(y, x);
        count++;
      }
    }
  }
  return count;

  function dfs(y, x) {
    if (y > graph.length - 1 || y < 0 || x > graph[0].length - 1 || x < 0) return;
    if (graph[y][x] !== 1) return;
    graph[y][x] = count + 2;
    dfs(y + 1, x);
    dfs(y - 1, x);
    dfs(y, x - 1);
    dfs(y, x + 1);
  }
}

console.log(islands([[1, 0, 1], [1, 1, 0], [1, 0, 1]])); // 3
