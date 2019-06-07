const insertionSort = array => {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i += 1) {
    const valueToInsert = array[i];
    let position = i;
    while (position > 0 && valueToInsert < array[position - 1]) {
      array[position] = array[position - 1];
      position -= 1;
    }
    array[position] = valueToInsert;
  }

  return array;
};

module.exports = insertionSort;
