
// https://leetcode.com/problems/rotate-array/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k, k))
}


rotate([1,2,3,4,5,6,7], 3) // [5,6,7,1,2,3,4]
rotate([-1,-100,3,99], 2) // [3,99,-1,-100]
