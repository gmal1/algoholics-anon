function shuffle(array) {
  for (let i = 0; i < array.length; i += 1) {
    const rand = Math.floor(Math.random() * i);
    [array[i], array[rand]] = [array[rand], array[i]];
  }
}
