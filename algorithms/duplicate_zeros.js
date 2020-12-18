
// https://leetcode.com/problems/duplicate-zeros/solution/


// cleaner
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros_c = function (arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      arr.pop()
      i++
    }
  }
  // console.log(arr)
}

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 2; j >= i; j--) {
        arr[j + 1] = arr[j]
      }
      i++
    }
  }
  //console.log(arr)
}


console.log(duplicateZeros([1, 0, 2, 3, 4])) // [1,0,0,2,3]
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])) // [1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1, 2, 3])) // [1,2,3]
