
// https://leetcode.com/problems/determine-if-string-halves-are-alike/


/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  let aCount = 0
  let bCount = 0
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) {
      aCount++
    }

    if (vowels.includes(s[s.length - i - 1])) {
      bCount++
    }
  }

  return aCount === bCount
}


console.log(halvesAreAlike('book')) // true
console.log(halvesAreAlike('textbook')) // false
console.log(halvesAreAlike('MerryChristmas')) // false
console.log(halvesAreAlike('AbCdEfGh'))// true
