
// https://leetcode.com/problems/move-zeroes/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      length--
      i--
    }
  }

  // console.log(nums)
}


moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
moveZeroes([0,1,0,3,12,0]) // [1,3,12,0,0,0]
moveZeroes([0,0,1]) // [1,0,0]
moveZeroes([1,0,1,0,0,1]) // [1,1,1,0,0,0]
