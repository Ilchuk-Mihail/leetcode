
// https://leetcode.com/problems/merge-sorted-array/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  const len = m + n - 1
  let first = m - 1
  let second = n - 1

  for (let i = len; i >= 0; i--) {
    if (second < 0) {
      break
    }

    if (first >= 0 && nums1[first] > nums2[second]) {
      nums1[i] = nums1[first]
      first--
    } else {
      nums1[i] = nums2[second]
      second--
    }
  }

  // console.log(nums1)
}


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1, 2, 2, 3, 5, 6]
console.log(merge([2, 0], 1, [1], 1))  // [1, 2]
console.log(merge([1, 2, 3, 0, 0, 0], 3, [-2, -1, 5], 3))  // [-2, -1, 1, 2, 3, 5]
