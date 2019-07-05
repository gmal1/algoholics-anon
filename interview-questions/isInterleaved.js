// given an input of three strings return true if the third string
// is an interleaving of the first two. order matters.
// e.g. input: "abc", "def", "adebcf"; output: true
// assumption: not using any letters more than once

function isInterleaved(a, b, c) {
  if (!a.length && !b.length && !c.length) return true;

  // return false if we reach the end of the interleaved string
  // but there are characters remainining in strings a and b
  if (!c.length) return false;

  if (a.length && a[0] === c[0]) {
    return isInterleaved(a.slice(1), b, c.slice(1));
  }

  if (b.length && b[0] === c[0]) {
    return isInterleaved(a, b.slice(1), c.slice(1));
  }
  return false;
}

module.exports = isInterleaved;
