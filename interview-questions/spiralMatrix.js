function spiral(matrix) {
  const result = [];
  if (!matrix || !matrix[0]) return result;
  const size = matrix[0].length * matrix.length;
  let left = 0,
    right = matrix[0].length - 1;
  let up = 0,
    down = matrix.length - 1;
  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[up][i]);
    }

    for (let i = up + 1; i <= down && result.length < size; i++) {
      result.push(matrix[i][right]);
    }

    for (let i = right - 1; i >= left && result.length < size; i--) {
      result.push(matrix[down][i]);
    }

    for (let i = down - 1; i > up && result.length < size; i--) {
      result.push(matrix[i][left]);
    }

    left++;
    right--;
    up++;
    down--;
  }
  return result;
}
console.log(spiral([[1]]));
console.log(spiral([[1, 2, 3]]));
console.log(spiral([[1], [2]]));
console.log(spiral([[1, 2], [4, 3]]));
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiral([[1, 2, 3], [8, 9, 4], [7, 6, 5]]));
