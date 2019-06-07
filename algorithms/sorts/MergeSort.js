function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex += 1; // advance left index
    } else {
      merged.push(right[rightIndex]);
      rightIndex += 1; // advance right index
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
