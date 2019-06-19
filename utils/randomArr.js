const arr = Array(1000).fill(null);
arr.forEach((el, i) => (arr[i] = i));

// http://stackoverflow.com/questions/962802#962890
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

module.exports = shuffle(arr);
