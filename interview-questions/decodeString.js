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

function dS(str) {
  const result = [];
  let count = 1;
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (Number.isInteger(char)) {
      let numberLength = 1;
      while (Number.isInteger(str[i + numberLength])) numberLength += 1;
      count = parseInt(str.slice(i, i + numberLength));
      i += numberLength;
    } else if (char === '[') {
      const stack = ['['];
      let j = i + 1;
      while (stack.length) {
        const innerChar = str[j];
        if (innerChar === '[') {
          stack.push('[');
        } else if (innerChar === ']') {
          stack.pop();
        }
        j += 1;
      }
      const substr = str.slice(i, j);
      result.push(...dS(substr).repeat(count));
      count = 1;
      i = j;
    } else {
      result.push(char.repeat(count));
      i += 1;
      count = 1;
    }
  }
  return result.join('');
}

/*
const decodeString = function(s) {
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
