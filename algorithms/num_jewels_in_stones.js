
// https://leetcode.com/problems/jewels-and-stones/


/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones_f = function (J, S) {
  let count = 0
  J.split('').forEach(x => {
    count += (S.match(new RegExp(x, 'g')) || []).length
  })

  return count
}

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
  const jewels = new Set(J)
  return S.split('').reduce((res, s) => res + jewels.has(s), 0)
}


console.log(numJewelsInStones('aA', 'aAAbbbb')) // 3
console.log(numJewelsInStones('z', 'ZZ')) // 0
