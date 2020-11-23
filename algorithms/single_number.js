
// https://leetcode.com/problems/single-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber_f = function(nums) {
  let uniqueNumber = 0
  let countMap = new Map()

  nums.forEach(n => { 
    countMap.set(n, (countMap.get(n) | 0 ) + 1)
  })

  countMap.forEach((value, key) => {
    if (value === 1) {
      uniqueNumber = key
      return
    }
  })

  return uniqueNumber
}

// Better solution
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let uniqueNumber = 0

  nums.forEach(n => uniqueNumber ^= n )

  return uniqueNumber
}


console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
console.log(singleNumber([1])) // 1
