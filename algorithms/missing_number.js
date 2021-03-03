
// https://leetcode.com/problems/missing-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber_f = function(nums) {

  nums = nums.sort((a, b) => a - b)

  if (nums[nums.length - 1] !== nums.length) {
    return nums.length
  } else if (nums[0] !== 0) {
    return 0
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }

  return 0
}

// Better solution

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber_s = function(nums) {
  let missing = nums.length

  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i]
  }

  return missing
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  let totalSum = nums.length
  let arrSum = 0
  for (let i = 0; i < nums.length; i++) {
    totalSum += i
    arrSum += nums[i]
  }

  return totalSum - arrSum
}

console.log(missingNumber([3,0,1])) // 2
console.log(missingNumber([0,1])) // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8
console.log(missingNumber([0])) // 1
