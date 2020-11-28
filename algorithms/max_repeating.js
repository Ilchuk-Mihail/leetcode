
// https://leetcode.com/problems/maximum-repeating-substring/


/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function(sequence, word) {
  let str = word

  for (let i = 1; ; i++) {
   if(!sequence.includes(str)) {
     return i - 1
   }

   str += word
  }
}


console.log(maxRepeating('ababc', 'ab')) // 2
console.log(maxRepeating("ababc", "ba")) // 1
console.log(maxRepeating('ababc', 'ac')) // 0
console.log(maxRepeating('baba', 'b')) // 1
console.log(maxRepeating('aaa', 'a')) // 3
console.log(maxRepeating('aaa', 'b')) // 0
