/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/

var numDecodings = function(s) {
  if (!s && s.length == 0) return 0;

  const mem = new Map();
  return generate(0, s);

  function generate(idx) {
    let result = 0;

    //if we get to the end, it is a valid way
    if (idx == s.length) {
      return 1;
    }

    //memo
    if (mem.has(idx)) return mem.get(idx);

    //first decision
    //is the one letter string from this position valid?
    //if so move pointer one ahead
    if (s[idx] < 27 && s[idx] > 0) {
      result += generate(idx + 1);
    }

    //second decision is if the two letter string is also valid
    //move the pointer (if not at end of string) and recurse
    if (idx + 1 < s.length) {
      //get two letter string from position idx
      let sub = s.substring(idx, idx + 2);

      //if valid move pointer 2 ahead and recurse
      if (sub < 27 && sub > 0 && sub.charAt(0) != '0') {
        result += generate(idx + 2);
      }
    }

    //set the result in the memo table
    mem.set(idx, result);
    return result;
  }
};
