
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/


/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  const digits = String(n).split('')
  let sum = 0
  let product = 1

  digits.forEach(d => {
    sum += Number(d)
    product *= Number(d)
  })

  return product - sum
}


console.log(subtractProductAndSum(234)) // 15
console.log(subtractProductAndSum(4421)) // 21
