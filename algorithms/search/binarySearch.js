function binSearchIterative(arr, target) {
    // assuming sorted array of numbers
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor(left + right / 2);
        if (arr[mid] === target)
            return mid;
        if (left === right) {
            return false;
        }
        if (arr[mid] > target) {
            right = mid - 1;
            continue;
        }
        if (arr[mid] < target) {
            left = mid + 1;
            continue;
        }
    }
    return false;
}
function binarySearchRec(arr, target, i, j) {
    if (i === void 0) { i = 0; }
    if (j === void 0) { j = arr.length - 1; }
    // assuming arr is sorted
    if (j < i)
        return false;
    var mid = Math.floor((i + j) / 2);
    if (arr[mid] === target)
        return mid;
    if (target < mid) {
        return binarySearchRec(arr, target, i, mid - 1);
    }
    else {
        return binarySearchRec(arr, target, mid + 1, j);
    }
}
console.log(binarySearchRec([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 3
console.log(binarySearchRec([0, 1, 2, 4, 5, 6, 7, 8, 9], 3)); // false
console.log(binarySearchRec([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 30)); // false
console.log(binarySearchRec([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0)); // 0
console.log(binarySearchRec([0, 1, 2, 3, 4, 5, 6, 7, 8], 1)); // 1
console.log(binarySearchRec([0, 1], 1)); // 1
console.log(binarySearchRec([0, 1], 0)); // 0
console.log(binarySearchRec([0], 0)); // 0
console.log(binarySearchRec([0], 1)); // false
console.log(binarySearchRec([], 1)); // false
// not tested yet
