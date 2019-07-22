/*
given an array of numbers, mutate the array such that all of the 0's in the array are on the right
the non-zero numbers should maintain their relative order
*/

function moveZeroesRight(arr) {
  let write = 0;
  let read = 0;
  while (read < arr.length) {
    const cand = arr[read];
    if (cand !== 0) {
      arr[write] = cand;
      write++;
    }
    read++;
  }
  while (write < arr.length) {
    arr[write] = 0;
    write++;
  }
  return arr;
}

console.log(moveZeroesRight([1, 2, 3, 0, 0, 0]));
console.log(moveZeroesRight([0, 1, 2, 0, 3, 0]));
console.log(moveZeroesRight([1, 0, 0, 2, 0, 3]));
