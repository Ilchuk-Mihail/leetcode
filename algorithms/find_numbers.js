
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/


/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  let countOfEven = 0
  nums.forEach(num => {
    if (num.toString().length % 2 === 0) {
      countOfEven++
    }
  })

  return countOfEven
}


console.log(findNumbers([12, 345, 2, 6, 7896])) // 2
console.log(findNumbers([555, 901, 482, 1771])) // 1
