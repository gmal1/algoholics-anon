/*
imagine a game where a player can score 1,2,3, or 4 points
return the total number of ways to score n points
*/

function b(num) {
  if (num <= 0) return 0;
  const memo = new Map();
  return helper(num);
  function helper(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    if (memo.has(n)) return memo.get(n);
    let result = 0;
    const one = helper(n - 1);
    const two = helper(n - 2);
    const three = helper(n - 3);
    const four = helper(n - 4);
    result = one + two + three + four;
    memo.set(n, result);
    return result;
  }
}

console.log(b(0)); // 0
console.log(b(1)); // 1
console.log(b(2)); // 2
console.log(b(4)); // 8
console.log(b(5)); // 15
console.log(b(7)); // 56

function bottomUp(n) {
  if (n < 0) return 0;
  const result = [0, 0, 0, 1];
  for (let i = 1; i <= n; i += 1) {
    const runs = result.reduce((acc, el) => acc + el, 0);
    result[0] = result[1];
    result[1] = result[2];
    result[2] = result[3];
    result[3] = runs;
  }
  return result[3];
}

console.log(bottomUp(0)); // 0
console.log(bottomUp(1)); // 1
console.log(bottomUp(2)); // 2
console.log(bottomUp(4)); // 8
console.log(bottomUp(5)); // 15
console.log(bottomUp(7)); // 56
