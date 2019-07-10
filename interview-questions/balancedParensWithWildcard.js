/*
You're given a string consisting solely of '(', ')', and '*'. '*' can represent either a '(', ')', or an empty string. Determine whether the parentheses are balanced.

For example, (()* and (*) are balanced. )*( is not balanced.
*/

function wildParens(str, stack = []) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      stack.push('(');
    } else if (char === ')') {
      const top = stack.pop();
      if (top !== '(') return false;
    } else if (char === '*') {
      const removed = str.slice(0, i) + str.slice(i + 1);
      const addedRight = str.slice(0, i) + '(' + str.slice(i + 1);
      const addedLeft = str.slice(0, i) + ')' + str.slice(i + 1);
      return wildParens(removed) || wildParens(addedRight) || wildParens(addedLeft);
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(wildParens('')); // true
console.log(wildParens('(')); // false
console.log(wildParens(')')); // false
console.log(wildParens('(())()')); // true

console.log(wildParens('*')); // true
console.log(wildParens('(()*')); // true
console.log(wildParens('(*)')); // true
console.log(wildParens(')*(')); // false
console.log(wildParens('(***))')); // true
console.log(wildParens('*(*')); // true
console.log(wildParens('**')); // true
console.log(wildParens('()*)')); // true
console.log(wildParens('()*(')); // false
console.log(wildParens('(*(')); // false
