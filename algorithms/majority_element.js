
// https://leetcode.com/problems/majority-element/


/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement_f = function (nums) {
  const map = new Map()

  for (let num of nums) {
    map.set(num, (map.get(num) + 1 || 1))
  }

  let max = 0
  let majority = 0
  map.forEach((value, key) => {
    if (value > max) {
      max = value
      majority = key
    }
  })

  return majority
}


/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement_s = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}


// Boyer-Moore Voting Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let count = 0
  let candidate

  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }

    count += candidate === num ? 1 : -1
  }

  return candidate
}


console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2
