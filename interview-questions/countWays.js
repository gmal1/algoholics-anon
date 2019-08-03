const countWays = (n, initial = [1, 2, 4]) => {
  if (n < 4) return initial[n - 1];
  if (initial[n]) return initial[n];
  else
    initial[n] =
      countWays(n - 1, initial) +
      countWays(n - 2, initial) +
      countWays(n - 3, initial);

  return initial[n];
};

console.log(countWays(4)); // 7
console.log(countWays(5)); // 13
console.log(countWays(16)); // 10609
