
// https://leetcode.com/problems/shuffle-string/


/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let result = []
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i]
  }
  
  return result.join('')
};


console.log(restoreString('art', [1,0,2])) // rat
console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3])) // leetcode
console.log(restoreString('aiohn', [3,1,4,2,0])) // nihao
