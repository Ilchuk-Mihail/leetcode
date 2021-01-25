
// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  let distance = k
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      distance++
      continue
    }

    if (distance < k) {
      return false
    }
    distance = 0
  }

  return true
}


console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)) // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)) // false
console.log(kLengthApart([1, 1, 1, 1, 1], 0)) // true
console.log(kLengthApart([0, 1, 0, 1], 1)) // true
console.log(kLengthApart([0], 1)) // true
