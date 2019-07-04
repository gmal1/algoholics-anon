function shortestPath(matrix) {
  const queue = [[0, 0, 0]];
  const visited = new Array(matrix.length).fill([]);

  for (let i = 0; i < visited.length; i += 1) {
    visited[i] = new Array(matrix[0].length).fill(false);
  }

  while (queue.length) {
    const [row, col, steps] = queue.shift();

    if (visited[row][col]) continue;
    visited[row][col] = true;

    const up =
      row - 1 >= 0 && !visited[row - 1][col] ? matrix[row - 1][col] : 0;
    const down =
      row + 1 < matrix.length && !visited[row + 1][col]
        ? matrix[row + 1][col]
        : 0;
    const left =
      col - 1 >= 0 && !visited[row][col - 1] ? matrix[row][col - 1] : 0;
    const right =
      col + 1 < matrix[row].length && !visited[row][col + 1]
        ? matrix[row][col + 1]
        : 0;

    if (matrix[row][col] === 9) {
      return steps;
    }

    if (up) {
      queue.push([row - 1, col, steps + 1]);
    }

    if (down) {
      queue.push([row + 1, col, steps + 1]);
    }

    if (left) {
      queue.push([row, col - 1, steps + 1]);
    }

    if (right) {
      queue.push([row, col + 1, steps + 1]);
    }
  }
}

const matrix = [[1, 0, 0], [1, 0, 0], [1, 9, 1]];
console.assert(shortestPath(matrix) === 3, 'Expected: 3');

const matrix2 = [
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 9, 1],
  [0, 0, 1, 1],
];
console.assert(shortestPath(matrix2) === 5, 'Expected: 5');

const matrix3 = [[1, 1, 0, 9], [0, 1, 0, 1], [0, 1, 1, 1]];

console.assert(shortestPath(matrix3) === 7, 'Expected: 7');

const matrix4 = [[1, 1, 9, 1], [1, 0, 1, 0], [1, 1, 1, 0]];

console.assert(shortestPath(matrix4) === 2, 'Expected: 2');
