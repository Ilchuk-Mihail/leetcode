
// https://leetcode.com/problems/valid-anagram


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const sMap = new Map()
  const tMap = new Map()

  if (s.length !== t.length) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
  }

  for (let [key, value] of sMap) {
    if (value !== tMap.get(key)) {
      return false
    }
  }

  return true
}


console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false
