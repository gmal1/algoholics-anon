// given an array of integers and a number, move all occurrences
// of the number to the end of the array. order must be preserved
//
// input: arr = [1,9,8,4,0,0,2,7,0,6,0], num = 0
// output: arr = [1,9,8,4,2,7,6,0,0,0,0]

function pushToEnd(arr, num) {
  let leftPointer = 0;
  for (let rightPointer = 0; rightPointer < arr.length; rightPointer += 1) {
    const currentNum = arr[rightPointer];
    if (currentNum !== num) {
      console.log('currentnum is not equal to num', currentNum, arr)
      arr[leftPointer] = currentNum;
      leftPointer += 1;
    }
  }

  while (leftPointer < arr.length) {
    console.log('inside while loop,', arr, 'arr[leftPointer]', arr[leftPointer])
    arr[leftPointer] = num;
    leftPointer += 1;
  }
}

console.log(pushToEnd([1,0,2,0,2,0,0,2,1,3,4,0,1,0], 0));
