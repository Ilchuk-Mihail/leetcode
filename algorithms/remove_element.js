
// https://leetcode.com/problems/remove-element/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement_f = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }

  return nums.length
}


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }

  return i
}


console.log(removeElement([3, 2, 2, 3], 3))  // 2, nums = [2,2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))  // 5, nums = [0,1,4,0,3]
