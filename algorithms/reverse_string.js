
// https://leetcode.com/problems/reverse-string/


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    const temp = s[i] 
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
}


reverseString(["h","e","l","l","o"]) // ["o","l","l","e","h"]
reverseString(["H","a","n","n","a","h"]) //  ["h","a","n","n","a","H"]
