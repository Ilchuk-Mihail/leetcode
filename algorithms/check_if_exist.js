
// https://leetcode.com/problems/check-if-n-and-its-double-exist/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  const set = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
      return true
    }

    set.add(arr[i])
  }

  return false
}


console.log(checkIfExist([10, 5])) // true
console.log(checkIfExist([10, 2, 5, 3])) // true
console.log(checkIfExist([7, 1, 14, 11])) // true
console.log(checkIfExist([3, 1, 7, 11])) // false
