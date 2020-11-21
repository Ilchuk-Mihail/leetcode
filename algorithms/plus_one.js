
// https://leetcode.com/problems/plus-one/


/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }

  digits.unshift(1) // if we changed to 0

  return digits
}


console.log(plusOne([1,2,3])) // [1,2,4]
console.log(plusOne([4,3,2,1])) // [4,3,2,2]
console.log(plusOne([0])) // [1]
console.log(plusOne([9])) // [1,0]
console.log(plusOne([9,9])) // [1,0,0]
console.log(plusOne([0,0])) // [0,1]
