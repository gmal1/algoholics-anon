function shuffle(array) {
  for (let i = 0; i < array.length; i += 1) {
    const rand = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
  }
}

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// shuffle(array);
// console.log(array);