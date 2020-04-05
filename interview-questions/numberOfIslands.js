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


/*
*input is a 2-dimensional array of 1's and not-1's (see test cases below)
*/
function islands(graph) {
  // the value we're looking for. We'll incrememnt this count each time we find new land (a 1 in the grid)
  // if we find any value other than 1 it must be water (0)  
  // or previously explored land (2, see line 63)
  let count = 0;
  
  // We'll scan from left to right starting at the top-left (0,0) of the graph.
  // whenever we encounter land (1), we'll start a depth-first search. We'll mutate any fresh land we come across (1 -> 2).
  // once that island of connected 1's is all mutated the recursive stack will unwind and we'll increment the counter.
  // once the counter is incremented we'll continue the scan of the graph, ignoring anything other than undiscovered land (1's)
  for (let y = 0; y < graph.length; y++) {
    for (let x = 0; x < graph[0].length; x++) {
      if (graph[y][x] === 1) {
        dfs(y, x);
        count++;
      }
    }
  }
  return count;

  // helper function that, given a coordinate:
  //      -checks if the coord is even in the graph (exit if not)
  //      -checks if the coord is fresh land (1) (exit if not)
  //      -mutates the land and explores in all four directions by making four recursive calls
  //        (could optimize to not bother returning the direction you just came from, but probably not worth it)
  function dfs(y, x) {
    // if this y,x coordinate is outside the edges of the grid, don't explore further
    if (y > graph.length - 1 || y < 0 || x > graph[0].length - 1 || x < 0) return;
    
    // if this y,x coordinate does not have a value of 1, it is either water (0), or has been explored already (2)
    // either way, don't explore further 
    // (ie, go back up the stack. Maybe this was a recursive call, maybe it is time to step out of this exploration 
    // and increment the counter for this fully explored island)
    if (graph[y][x] !== 1) return;
    
    // mark this coordinate as explored
    graph[y][x] = 2;
    
    // continue exploring recursively in all four directions
    // (one will be a waste since we just came from there, but we don't know which, so do all four)
    dfs(y + 1, x); // go down
    dfs(y - 1, x); // go up
    dfs(y, x - 1); // go left
    dfs(y, x + 1); // go right
  }
}

// some tests:
console.log(islands([[1, 0, 1], 
                     [1, 1, 0], 
                     [1, 0, 1]])); // 3
console.log(islands([[1,0,1,0,0]])); // 2
console.log(islands([[1],
                     [0],
                     [0],
                     [0],
                     [1],
                     [0]])); // 2

console.log(islands([[1, 0, 1, 0, 0], 
                     [1, 1, 0, 0, 1], 
                     [1, 0, 1, 0, 1]])); // 4

console.log(islands([[1, 1, 1, 0, 1], 
                     [1, 0, 1, 0, 0], 
                     [1, 0, 1, 0, 1],
                     [1, 0, 1, 1, 1]])); // 2
