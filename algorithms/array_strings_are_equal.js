
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/


/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('')
}


console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])) // true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])) // false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])) // true
