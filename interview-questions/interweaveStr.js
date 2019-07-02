// given an input of three strings return true if the third string
// is an interweaving of the first two. order matters
// e.g. input: "abc", "def", "adebcf"; output: true
// assumption: not using any letters more than once

function interweave(a, b, c) {
  if (a.length + b.length !== c.length) return false;

  let pointer1 = 0;
  let pointer2 = 0;

  while (c[pointer1] || c[pointer2]) {
    if (a[pointer1] === c[pointer1]) {
      pointer1 += 1;
    }
    if (b[pointer2] === c[pointer2]) {
      pointer2 += 1;
    }
    return true;
  }
  return false;
}

console.log(interweave('abc', 'def', 'adebcf'));
console.log(interweave('aaa', 'bbc', 'abacba'));
