
// https://leetcode.com/problems/max-consecutive-ones/


/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let counter = 0
  let max = 0
  nums.forEach(num => {
    if (num === 1) {
      counter++
    } else {
      counter = 0
    }

    if (counter > max) {
      max = counter
    }
  })

  return max
}


console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes([0, 1, 0, 1, 0, 1, 1])) // 2
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1, 1])) // 7
console.log(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0, 1])) // 1
console.log(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0, 0])) // 0
