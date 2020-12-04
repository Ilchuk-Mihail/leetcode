
// https://leetcode.com/problems/the-kth-factor-of-n/


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */ 
const kthFactor = function (n, k) {
  let kth = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      kth++

      if (kth === k) {
        return i
      }
    }
  }

  return -1
}


console.log(kthFactor(12, 3)) // 3
console.log(kthFactor(7, 2)) // 7
console.log(kthFactor(4, 4)) // -1
console.log(kthFactor(1, 1)) // 1
console.log(kthFactor(1000, 3)) // 4
