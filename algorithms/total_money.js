
// https://leetcode.com/problems/calculate-money-in-leetcode-bank/


/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function (n) {
  let count = 0
  let inc = 1
  let monday = 1
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) {
      count += monday
      monday++
      inc = monday
      continue
    }

    count += inc
    inc++
  }

  return count
}


console.log(totalMoney(4)) // 10
console.log(totalMoney(10)) // 37
console.log(totalMoney(20)) // 96
