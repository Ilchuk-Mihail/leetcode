
// https://leetcode.com/problems/longest-substring-without-repeating-characters/


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring_f = function (s) {
  let length = 0
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    set.clear()
    
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j])
      } else {
        break
      }
    }

    if (set.size > length) {
      length = set.size
    }
  }

  return length
}


// Sliding Window
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const set = new Set()
  const n = s.length
  let ans = 0, i = 0, j =0

  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j++])
      ans = Math.max(ans, j - i)
    } else {
      set.delete(s[i++])
    }
  }

  return ans
}


console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('')) // 0
console.log(lengthOfLongestSubstring(' ')) // 1
