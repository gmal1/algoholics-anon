function insertionSort(arr) {
  if (arr.length <= 1) return arr;

  for (let right = 1; right < arr.length; right++) {
    const cand = arr[right];
    let left = right;
    while (left > 0 && cand < arr[left - 1]) {
      arr[left] = arr[left - 1];
      left--;
    }
    arr[left] = cand;
  }
  return arr;
}

module.exports = insertionSort;
