
// https://leetcode.com/problems/top-k-frequent-elements/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  // calculate frequency
  const frequencyMap = new Map()
  nums.forEach(n => {
    frequencyMap.set(n, (frequencyMap.get(n) + 1) || 1)
  })

  // convert map to array sort, slice
  const topFrequent = 
    [...frequencyMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k) 
    .map(x => x[0])

  return topFrequent
}


console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1,2]
console.log(topKFrequent([1,1,1,3,2,2], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([-1,-1], 1)) // [-1]
console.log(topKFrequent([-1,-1,-2,-2,-2], 2)) // [-2, -1]
console.log(topKFrequent([-1,-1,-2,-2,-3,-3,4,4,4,4,-2], 2)) // [4, -2]
