// return true if two strings are isomorphic, i.e. it's possible to make one string
// into the other by replacing every occurence of a character with a different character
// e.g. strings 'abab' and 'cdcd' are isomorphic, and 'abcd' / 'efgg' are not.

function isomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;

  const dict = {};

  return str1.split('').every((char, i) => {
    const char2 = str2[i];
    if (!dict[char]) {
      dict[char] = char2;
    }
    return dict[char] === char2;
  });
}
