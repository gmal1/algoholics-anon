/*
non-comparison sort
can only sort integers (whole numbers) 
(and things that can be assigned integer values, like letters, given a mapping like unicode or ASCI)
idea:
if we knew two things:
  -the range of incoming numbers (smallest to biggest)
  -the number of times each number occurs
we could allocate blocks of the output array (which necessarily has the same length as the input array) for each number

ex: if we have a range of 2-7 and we have three 2s, two 4s, one 6, and two 7s
we know that we'll be making an array of length 8 with 4 blocks of the sizes above

then we look over the numbers again and just put them in their respective blocks

only problem we need to solve:
how do we know where each block starts?
  -where a block starts is determined by how many elements come before it
  -if we already know the count for each number in the range, we'll just propagate
  those counts forward to find how many elements should be in the array already before each new number's block

so:
  -initialize a countArr of length equal to the range of incoming numbers
  -count the number of instances of each number in the range, incrementing the countArr as you go
  -propagate the values in the countArr forward to find out how many elements should already be in the array before each block (important detail: take into account that there are 0 elements before the first block)
  -iterate thrut the input array and put each element into its respective block
  (one final detail: when you put an element into its block, increment the count at that index so that the next copy, if there is one, knows to be put in the next index)

  time: O(n+k) where n is the # of elements, k is the range of elements
  space: linear extra space
  stable (very important fact for allowing Radix sort to work)
*/

function countingSort(arr, max = Math.max(...arr), min = Math.min(...arr)) {
  const output = new Array(arr.length).fill(0);

  const range = max - min + 1;
  const countArr = new Array(range).fill(0);

  // assemble countArr
  for (let num of arr) {
    countArr[num]++;
  }

  // propagate counts forward (making sure that the first entry is zero)
  let propCount = 0;
  countArr.forEach((count, i) => {
    countArr[i] = propCount;
    propCount += count;
  });
  // console.log(countArr);
  // notice that the # of copies of the largest element in the range is lost,
  // we don't need that info because there will be no blocks after it that
  // need to know where to start

  // iterate thru the input array, putting each element into its block
  arr.forEach(num => {
    const idx = countArr[num];
    output[idx] = num;
    countArr[num] = idx + 1;
    // console.log(output);
  });

  return output;
}
