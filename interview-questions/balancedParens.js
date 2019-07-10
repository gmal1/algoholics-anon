// determine if some parens string is legit
// legit : (()())
// not legit: (()))

function balancedParens(str) {
  const stack = [];
  for (let char of str) {
    if (char === '(') {
      stack.push('(');
    } else if (char === ')') {
      const top = stack.pop();
      if (top !== '(') return false;
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(balancedParens('')); // true
console.log(balancedParens('(')); // false
console.log(balancedParens(')')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens('()()')); // true
console.log(balancedParens('())')); // false
console.log(balancedParens('(()())')); // true
console.log(balancedParens('((()()')); // false
console.log(balancedParens('(())()')); // true
