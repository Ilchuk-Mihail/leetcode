
// https://leetcode.com/problems/sort-characters-by-frequency/


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const frequencyMap = new Map()

  for (let i = 0; i < s.length; i++) {
    let ch = frequencyMap.get(s[i])
    if (ch) {
      frequencyMap.set(s[i], ++ch)
    } else {
      frequencyMap.set(s[i], 1)
    }
  }

  const arr = []
  frequencyMap.forEach((value, key) => {
    arr.push({
      chr: key.repeat(value), // generate text representation
      value
    })
  })
  arr.sort((a, b) => a.value < b.value ? 1 : -1)

  return arr.map(x => x.chr).join('')
};


console.log(frequencySort('')) // ''
console.log(frequencySort('a')) // a
console.log(frequencySort('tree')) // eert
console.log(frequencySort('cccaaa')) // cccaaa
console.log(frequencySort('Aabb')) // bbAa
