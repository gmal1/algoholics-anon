function swap(array, pos1, pos2) {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
}

function heapsPermute(array, n = array.length, result = []) {
  if (n === 1) {
    return result.push([...array]);
  }
  for (let i = 1; i <= n; i += 1) {
    swap(array, i - 1, n - 1);
    heapsPermute(array, n - 1, result);
    swap(array, i - 1, n - 1);
  }
  return result;
}

function accPerm(array, acc = [], result = []) {
  if (!array.length) {
    return result.push([...acc]);
  }
  for (let i = 0; i < array.length; i++) {
    const cand = array[i];
    const localArr = array.slice(0, i).concat(array.slice(i + 1));
    acc.push(cand);
    accPerm(localArr, acc, result);
    acc.pop();
  }
  return result;
}

// simple tests
// console.log(accPerm(['a', 'b', 'c', 'd']));
console.log(accPerm([1, 2, 3]));
// console.log(heapsPermute(['a', 'b', 'c', 'd']));
console.log(heapsPermute([1, 2, 3]));

// perf tests
console.time();
// console.log(accPerm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length);
console.timeEnd();

console.time();
// console.log(heapsPermute([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length);
console.timeEnd();

// weird Heap's I found online, I prefer mine above
// function heapsPermute(array, n = array.length, result = []) {
//   if (n === 1) {
//     return result.push([...array]);
//   }
//   for (let i = 1; i <= n; i += 1) {
//     heapsPermute(array, n - 1, result);
//     let j;
//     if (n % 2) {
//       j = 1;
//     } else {
//       j = i;
//     }
//     swap(array, j - 1, n - 1);
//   }
//   return result;
// }
