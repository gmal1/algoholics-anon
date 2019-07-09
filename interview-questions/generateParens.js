// generate all the valid parens pairs of length n (n pairs)
function generateParens(n, result = []) {
  let rightCount = 0;
  let leftCount = 0;
  function helper(stack) {
    if (leftCount === n && rightCount === n) {
      result.push(stack.join(''));
      return;
    }
    if (rightCount < 3) {
      stack.push('(');
      rightCount++;
      helper(stack);
      stack.pop();
      rightCount--;
    }
    if (leftCount < 3 && leftCount < rightCount) {
      stack.push(')');
      leftCount++;
      helper(stack);
      stack.pop();
      leftCount--;
    }
  }
  helper([]);
  return result;
}

console.log(generateParens(1));
console.log(generateParens(2));
console.log(generateParens(3));
