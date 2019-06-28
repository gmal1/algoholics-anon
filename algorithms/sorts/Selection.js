function selectionSort(arr) {
  let left = 0;
  while (left < arr.length) {
    let right = left;
    let minIdx = left;
    while (right < arr.length) {
      const cand = arr[right];
      if (cand < arr[minIdx]) minIdx = right;
      right++;
    }
    swapEl(arr, left, minIdx);
    left++;
  }
}

function swapEl(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
