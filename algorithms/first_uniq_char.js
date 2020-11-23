
// https://leetcode.com/problems/first-unique-character-in-a-string/


const firstUniqChar = function(s) {
  const map = new Map()

  let index = -1
  if(s.length === 1) {
    return 0
  }

  for (let i = 0; i < s.length; i++) {
    let item = map.get(s[i])
    if(item) {
      map.set(s[i], ++item)
    } else {
      map.set(s[i], 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    const item = map.get(s[i])
    if(item === 1) {
      index = i
      break
  }
}

  return index
}


console.log(firstUniqChar("aadadaad")) // -1
console.log(firstUniqChar('z')) // 0
console.log(firstUniqChar('cc')) // -1
console.log(firstUniqChar('')) // -1
console.log(firstUniqChar('leetcode')) // 0
console.log(firstUniqChar('loveleetcode')) // 2
