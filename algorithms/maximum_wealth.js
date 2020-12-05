
// https://leetcode.com/problems/richest-customer-wealth/


/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
  const sumArr = []
  accounts.forEach(account => {
    sumArr.push(account.reduce((acc, cur) => acc + cur, 0))
  })

  return Math.max(...sumArr)
}


console.log(maximumWealth([[1,2,3],[3,2,1]])) // 6
console.log(maximumWealth([[1,5],[7,3],[3,5]])) // 10
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])) // 17
