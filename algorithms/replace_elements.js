
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/


/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  let maxValue = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i]
    arr[i] = maxValue
    maxValue = Math.max(curr, maxValue)
  }

  return arr
}


console.log(replaceElements([17, 18, 5, 4, 6, 1])) // [18,6,6,6,1,-1]
console.log(replaceElements([400])) // [-1]
