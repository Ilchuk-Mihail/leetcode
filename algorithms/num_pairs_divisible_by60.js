
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/


/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60_f = function (time) {
  let count = 0
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < time.length; j++) {
      if (i === j || i < j) {
        continue
      }

      if ((time[i] + time[j]) % 60 === 0) {
        count++
      }
    }
  }

  return count
}


/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function (time) {
  const remainders = Array(60).fill(0)
  let count = 0
  time.forEach(t => {
    if (t % 60 === 0) {
      count += remainders[0]
    } else {
      count += remainders[60 - t % 60]
    }
    remainders[t % 60]++
  })

  return count
}


console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40])) // 3
console.log(numPairsDivisibleBy60([60, 60, 60])) // 3
