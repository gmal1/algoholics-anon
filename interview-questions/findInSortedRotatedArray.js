function binarySearch(arr, low, high, target) {
  if (high < low) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (target > arr[mid]) {
    return binarySearch(arr, mid + 1, high, target);
  }
  return binarySearch(arr, low, mid - 1, target);
}

function findPivot(arr, low, high) {
  if (high < low) {
    return -1;
  }
  if (high === low) return low;

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] > arr[mid + 1]) {
    return mid;
  }
  if (arr[mid] < arr[mid - 1]) {
    return mid - 1;
  }
  if (arr[low] >= arr[mid]) {
    // pivot must lie in the left half of the array
    return findPivot(arr, low, mid - 1);
  }
  // pivot must lie in the right half
  return findPivot(arr, mid + 1, high);
}

function findInRotatedArr(arr, target) {
  const { length } = arr;

  const pivot = findPivot(arr, 0, length - 1);

  if (pivot === -1) {
    // if there's no pivot the array isn't rotated
    return binarySearch(arr, 0, length - 1, target);
  }

  if (arr[pivot] === target) {
    return pivot;
  }
  if (arr[0] <= target) {
    return binarySearch(arr, 0, pivot - 1, target);
  }
  return binarySearch(arr, pivot + 1, length - 1, target);
}

const arr1 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
const arr2 = [1, 2, 3, 4, 5];
console.log(findInRotatedArr(arr1, 3)); // 7
console.log(findInRotatedArr(arr2, 3)); // 2
