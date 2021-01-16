
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/


/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
  let steps = 0

  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num--
    }

    steps++
  }

  return steps
}


console.log(numberOfSteps(14)) // 6
console.log(numberOfSteps(8)) // 4
console.log(numberOfSteps(123)) // 12
