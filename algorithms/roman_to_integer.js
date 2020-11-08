
// https://leetcode.com/problems/roman-to-integer/


const conversionMap = new Map([
  [ 'I', 1 ],
  [ 'V', 5 ],
  [ 'X', 10 ],
  [ 'L', 50 ],
  [ 'C', 100 ],
  [ 'D', 500 ],
  [ 'M', 1000 ]
])

var romanToInt = function(s) {
  let romanSum = 0

  for (let i = 0; i < s.length; i++) {
    if (conversionMap.get(s[i]) < conversionMap.get(s[i + 1])) {
      romanSum -= conversionMap.get(s[i])
    } else {
      romanSum += conversionMap.get(s[i])
    }
  }

  return romanSum
}


console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
