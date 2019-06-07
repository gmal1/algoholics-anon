function merge(arr1, arr2) {
  const merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  while (arr1.length > 0) {
    merged.push(arr1.shift());
  }

  while (arr2.length > 0) {
    merged.push(arr2.shift());
  }
  return merged;
}

function mergeSort(array) {
  if (array.length === 1) return array;

  const start = 0;
  const middle = Math.abs(array.length / 2);
  const left = mergeSort(array.slice(start, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

module.exports = mergeSort;
