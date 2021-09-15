// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
//        Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
//    For example, there won't be input like 3a or 2[4]

// time: O(n * maxCount), n = s.length
// space: O(n + m),       n = digits, m = letters
var decodeString = function(s) {
  const countStack = [];
  const stringStack = [];
  let decodedString = '';
  let count = '';

  for (let char of s) {
    // if char is a number, append to count (type string until pushed to stack)
      if (!isNaN(char)) {
          count += char;
      } else if (char === '[') {
          countStack.push(Number(count));
          stringStack.push(decodedString);

          count = '';
          decodedString = '';
      } else if (char === ']') {
          let nextDecodedString = stringStack.pop();

          nextDecodedString += decodedString.repeat(countStack.pop());
          decodedString = nextDecodedString;
      } else {
          decodedString += char;
      }
  }

  return decodedString;
};