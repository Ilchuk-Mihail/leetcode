
// https://leetcode.com/problems/contains-duplicate/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate_f = function(nums) {
  const set = new Set(nums)
  return set.size !== nums.length
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const map = new Map()

  for (const num of nums) {
    if (map.has(num)) {
      return true
    }

    map.set(num, 1)
  }

  return false
}


console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true
