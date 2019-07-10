/*
You're given a string consisting solely of '(', ')', and '*'. '*' can represent either a '(', ')', or an empty string. Determine whether the parentheses are balanced.

For example, (()* and (*) are balanced. )*( is not balanced.
*/

function wildParens(str, stack = []) {
  for (let char of str) {
  }
  return stack.length === 0 ? true : false;
}
