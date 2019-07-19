/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

var decodeString = function(s) {
  let res = '';
  let k = 1,
    i = 0;
  while (i < s.length) {
    if (Number.isInteger(+s[i])) {
      let len = 1;
      while (Number.isInteger(+s[i + len])) len++;
      k = parseInt(s.substr(i, len));
      i += len;
    } else if (s[i] === '[') {
      let paren = 1;
      let j = i + 1;
      while (paren) {
        paren += (s[j] === '[') - (s[j] === ']');
        j++;
      }
      res += decodeString(s.substring(i + 1, j - 1)).repeat(k);
      k = 1;
      i = j;
    } else {
      res += s[i].repeat(k);
      k = 1;
      i++;
    }
  }
  return res;
};

/*
var decodeString = function(s) {
    const result = [];
    
    const chunks = outerSlice(s);
    for (let chunk of chunks){
        if(chunk.match(/^[0-9]/)){
            for (let i = 0; i < chunk[0]; i++){
                result.push(...decodeString(chunk.slice(1)))
            }
        }else{
            result.push(chunk);
        }
    }
    
    return result.join('');
};

function outerSlice(s){
    const result = [];
    const stack = [];
    const chunk = [];
    // when to begin a new chunk:
        // char is ] and stack is length of 1
        // stack is empty and char is 0-9
    for (let char of s){
        if (stack.length){
            if (char === "["){
                stack.push(char);
            }
            if (char === "]"){
                stack.pop();
            }
            chunk.push(char)
        }else{
            
        }
    }
}
*/
