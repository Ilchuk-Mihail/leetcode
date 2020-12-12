
// https://leetcode.com/problems/valid-mountain-array/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false
  }

  let i = 0
  // walk up
  while (arr[i] < arr[i + 1]) {
    i++
  }

  // peak can't be first or last
  if (i === 0 || i === arr.length - 1) {
    return false
  }

  // walk down
  while (arr[i] > arr[i + 1]) {
    i++
  }

  return i === arr.length - 1
}


console.log(validMountainArray([2, 1])) // false
console.log(validMountainArray([3, 5, 5])) // false
console.log(validMountainArray([0, 3, 2, 1])) // true
console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])) // true

console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) // false
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) // false
