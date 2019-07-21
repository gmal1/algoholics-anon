// insertion
function insertionSort(arr, range = [0, arr.length]) {
  for (let i = range[0] + 1; i < range[1]; i++) {
    const cand = arr[i];
    let r = i;
    while (arr[r - 1] > cand) {
      arr[r] = arr[r - 1];
      r--;
    }
    arr[r] = cand;
  }
  return arr;
}

function merge(a1, a2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < a1.length && p2 < a2.length) {
    const cand1 = a1[p1];
    const cand2 = a2[p2];
    if (cand1 < cand2) {
      result.push(cand1);
      p1++;
    } else {
      result.push(cand2);
      p2++;
    }
  }
  if (p1 === a1.length) {
    while (p2 < a2.length) {
      result.push(a2[p2]);
      p2++;
    }
  } else {
    while (p1 < a1.length) {
      result.push(a1[p1]);
      p1++;
    }
  }
  return result;
}

function mergeSort(arr, cutoff = 1) {
  if (arr.length <= cutoff) {
    return insertionSort(arr);
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function partition(arr, left, right) {
  const pivotVal = arr[right];
  let read = left;
  let write = left;
  while (read < right) {
    const cand = arr[read];
    if (cand <= pivotVal) {
      [arr[read], arr[write]] = [arr[write], arr[read]];
      write++;
    }
    read++;
  }
  [arr[read], arr[write]] = [arr[write], arr[read]];
  return write;
}

function quickSort(arr, left = 0, right = arr.length - 1, cutoff = 5) {
  if (right - left < cutoff) {
    return insertionSort(arr, [left, right + 1]);
  }
  const p = partition(arr, left, right);
  quickSort(arr, left, p - 1);
  quickSort(arr, p + 1, right);
  return arr;
}

console.log(partition([4, 3, 7, 2, 3, 7, 3, 1, 0, 5], 0, 9)); // 7 (5 should be in the 7th index)
console.log(partition([4, 3, 7, 2, 3, 7, 3, 1, 0, -1], 0, 9)); // 0 (-1 is the 0th element after partitioning)
console.log(partition([4, 3, 7, 2, 3, 7, 3, 1, 0, 10], 0, 9)); // 9
console.log(partition([1, 3, 2], 0, 2));
console.log(insertionSort([1, 3, 2])); // [1, 2, 3]
console.log(insertionSort([3, 2, 1])); // [1, 2, 3]
console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
console.log(insertionSort([1])); // [1]
console.log(insertionSort([1, 2])); // [1, 2]
console.log(insertionSort([2, 1])); // [1, 2]
console.log(insertionSort([1, 2, 3, 4]));
console.log(insertionSort([4, 3, 2, 1]));
console.log(insertionSort([4, 1, 3, 2]));
console.log(insertionSort([1, 1, 1, 100, 0]));
console.log(insertionSort([4, 3, 7, 2, 3, 7, 3, 1, 0, 10])); // [0,1,2,3,3,3,4,7,7,10]
console.log(insertionSort([33, 6, 21, 12, 19, 29, 38, 22, 14, 40])); //

console.log(mergeSort([1, 3, 2])); // [1, 2, 3]
console.log(mergeSort([3, 2, 1])); // [1, 2, 3]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([1])); // [1]
console.log(mergeSort([1, 2])); // [1, 2]
console.log(mergeSort([2, 1])); // [1, 2]
console.log(mergeSort([1, 2, 3, 4]));
console.log(mergeSort([4, 3, 2, 1]));
console.log(mergeSort([4, 1, 3, 2]));
console.log(mergeSort([1, 1, 1, 100, 0]));
console.log(mergeSort([4, 3, 7, 2, 3, 7, 3, 1, 0, 10])); // [0,1,2,3,3,3,4,7,7,10]
console.log(mergeSort([33, 6, 21, 12, 19, 29, 38, 22, 14, 40])); //

console.log(quickSort([1, 3, 2])); // [1, 2, 3]
console.log(quickSort([3, 2, 1])); // [1, 2, 3]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([1])); // [1]
console.log(quickSort([1, 2])); // [1, 2]
console.log(quickSort([2, 1])); // [1, 2]
console.log(quickSort([1, 2, 3, 4]));
console.log(quickSort([4, 3, 2, 1]));
console.log(quickSort([4, 1, 3, 2]));
console.log(quickSort([1, 1, 1, 100, 0]));
console.log(quickSort([4, 3, 7, 2, 3, 7, 3, 1, 0, 10])); // [0,1,2,3,3,3,4,7,7,10]
console.log(quickSort([33, 6, 21, 12, 19, 29, 38, 22, 14, 40])); //
