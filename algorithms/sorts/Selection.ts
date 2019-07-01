function selectionSort(arr: number[]): void {
  let left = 0;
  let right = 0;
  while (left < arr.length) {
    let minIdx = left;
    for (right = left; right < arr.length; right++) {
      const cand = arr[right];
      if (cand < arr[minIdx]) minIdx = right;
    }
    swapEl(arr, left, minIdx);
    left++;
  }
}

function swapEl(arr: number[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
