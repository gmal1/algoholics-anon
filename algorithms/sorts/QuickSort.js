// crazy declarative quicksort, see performance tests below though
function quicksortDec(array, cmp = (a, b) => a - b) {
  if (array.length < 1) {
    return array;
  }
  const [x, ...rest] = array;
  return [
    ...quicksortDec(rest.filter(v => cmp(v, x) < 0), cmp),
    x,
    ...quicksortDec(rest.filter(v => cmp(v, x) >= 0), cmp),
  ];
}

// more honest quicksort, 4x faster (same complexity) than the one above
function quicksort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;

  const pivot = partition(arr, start, end);
  quicksort(arr, start, pivot - 1);
  quicksort(arr, pivot + 1, end);
  return arr;
}

function partition(arr, start, end) {
  const pivotIdx = end;
  const pivotVal = arr[pivotIdx];
  let left = start;
  let right = start;
  while (right < pivotIdx) {
    if (arr[right] < pivotVal) {
      swap(arr, left, right);
      left++;
    }
    right++;
  }
  swap(arr, left, pivotIdx);
  return left;
}
function swap(arr, i, j) {
  [[arr[j]], [arr[i]]] = [[arr[i]], [arr[j]]];
}

// simple tests
{
  // console.log(partition([4, 3, 7, 2, 3, 7, 3, 1, 0, 5], 0, 9)); // 7
  // console.log(partition([4, 3, 7, 2, 3, 7, 3, 1, 0, -1], 0, 9)); // 0
  // console.log(partition([4, 3, 7, 2, 3, 7, 3, 1, 0, 10], 0, 9)); // 9
  // console.log(quicksort([1, 3, 2])); // [1, 2, 3]
  // console.log(quicksort([3, 2, 1])); // [1, 2, 3]
  // console.log(quicksort([1, 2, 3])); // [1, 2, 3]
  // console.log(quicksort([1])); // [1]
  // console.log(quicksort([1, 2])); // [1, 2]
  // console.log(quicksort([2, 1])); // [1, 2]
  // console.log(quicksort([1, 2, 3, 4]));
  // console.log(quicksort([4, 3, 2, 1]));
  // console.log(quicksort([4, 1, 3, 2]));
  // console.log(quicksort([1, 1, 1, 100, 0]));
  // console.log(quicksort([4, 3, 7, 2, 3, 7, 3, 1, 0, 10])); // [0,1,2,3,3,3,4,7,7,10]
  // console.log(quicksort([33, 6, 21, 12, 19, 29, 38, 22, 14, 40])); //
}

// perf tests
function genRandArr(size = 1000) {
  const arr = Array(size).fill(null);
  arr.forEach((el, i) => (arr[i] = i));

  function shuffle(array) {
    let current;
    let top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        [array[current], array[top]] = [array[top], array[current]];
      }
    return array;
  }
  for (let i = 0; i < 9; i++) {
    shuffle(arr);
  }
  return arr;
}

const bigArr1 = genRandArr(1000);
const bigArr2 = genRandArr(10000);
const bigArr3 = genRandArr(100000);
const bigArr4 = genRandArr(1000000);
const bigArr5 = genRandArr(10000000);

console.time();
// quicksort(bigArr1.slice());
// quicksort(bigArr2.slice())
// quicksort(bigArr3.slice());
quicksort(bigArr4.slice());
// quicksort(bigArr5.slice());
console.timeEnd();

console.time();
// quicksortDec(bigArr1.slice());
// quicksortDec(bigArr2.slice())
// quicksortDec(bigArr3.slice());
quicksortDec(bigArr4.slice());
// quicksortDec(bigArr5.slice());
console.timeEnd();

module.exports = quickSort;
