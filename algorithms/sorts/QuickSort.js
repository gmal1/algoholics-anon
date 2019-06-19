// code adapted from https://www.guru99.com/quicksort-in-javascript.html

function swap(items, leftIndex, rightIndex) {
  [items[leftIndex], items[rightIndex]] = [items[rightIndex], items[leftIndex]];
}

function partition(items, left, right) {
  // make middle element the pivot
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left; // left pointer
  let j = right; // right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      // if current value is less than the value at pivot,
      // move the left pointer up
      i += 1;
    }
    while (items[j] > pivot) {
      // if the current value is greater than the value at pivot,
      // move the right pointer down
      j -= 1;
    }
    if (i <= j) {
      swap(items, i, j); // sawpping two elements
      i += 1;
      j -= 1;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); // index returned from partition
    if (left < index - 1) {
      // move elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      // move elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

module.exports = quickSort;
