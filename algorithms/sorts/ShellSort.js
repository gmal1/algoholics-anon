function shellSort(array) {
  const N = array.length;

  let h = 1;
  while (h < N / 3) h = 3 * h + 1; // Knuth's 3x+1 sequence: 1, 4, 13, 40, ...

  while (h >= 1) {
    // h-sort the array
    for (let i = h; i < N; i += 1) {
      // Modified insertion sort
      for (let j = i; j >= h && array[j] < array[j - h]; j -= h) {
        [array[j], array[j - h]] = [array[j - h], array[j]];
      }
    }

    h = Math.floor(h / 3); // Move to next increment
  }
  return array;
}

function genRandArray(max, size) {
  const output = [];

  for (let i = 0; i < size; i += 1) {
    const rand = Math.floor(Math.random() * max);
    output.push(rand);
  }

  return output;
}

module.exports = shellSort;
