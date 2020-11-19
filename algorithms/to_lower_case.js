
// https://leetcode.com/problems/to-lower-case/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let result = ''
  for(let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32)
    } else {
      result += str[i]
    }
  }
    
  return result
};


console.log(toLowerCase('Hello')) // hello
console.log(toLowerCase('here')) // here
console.log(toLowerCase('LOVELY')) // lovely