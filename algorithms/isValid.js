
// https://leetcode.com/problems/valid-parentheses/


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = []
  const mapping = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])

  for (let i = 0; i < s.length; i++) {
    if (mapping.has(s[i])) {
      stack.push(s[i])
    } else {
      const bracket = stack.pop()
      if (s[i] != mapping.get(bracket)) {
        return false
      }
    }
  }

  return stack.length === 0
}


console.log(isValid('('))      // false
console.log(isValid('()'))      // true
console.log(isValid('()[]{}'))  // true
console.log(isValid('(]'))      // false
console.log(isValid('([)]'))    // false
console.log(isValid('{[]}'))    // true
console.log(isValid('{{}[][[[]]]}')) // true
