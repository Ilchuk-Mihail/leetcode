
// https://leetcode.com/problems/fibonacci-number/


/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2)
  } else {
    // for 0 and 1
    return n
  }
}


console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(26))
