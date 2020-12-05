
// https://leetcode.com/problems/can-place-flowers/


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    // check left, right, current
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      n-- // placed
      i++ // skip next elem
    }

    if (n <= 0) {
      return true
    }
  }

  return false
}


console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)) // true
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0)) // true
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)) // true
console.log(canPlaceFlowers([0, 0, 0, 0, 0, 1, 0, 0], 0)) // true
