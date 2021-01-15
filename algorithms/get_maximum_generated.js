
// https://leetcode.com/problems/get-maximum-in-generated-array/


/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = function (n) {
  const nums = [0, 1]

  if (n <= 1) {
    return nums[n]
  }

  for (let i = 0; i < n; i++) {
    if (2 * i < n + 1) {
      nums[2 * i] = nums[i]
    }

    if (2 * i + 1 < n + 1) {
      nums[2 * i + 1] = nums[i] + nums[i + 1]
    }
  }

  return Math.max(...nums)
}


console.log(getMaximumGenerated(7)) // 3  // nums = [0,1,1,2,1,3,2,3]
console.log(getMaximumGenerated(2)) // 1
console.log(getMaximumGenerated(3)) // 2
console.log(getMaximumGenerated(1)) // 1
console.log(getMaximumGenerated(0)) // 0
