
// https://leetcode.com/problems/spiral-matrix-ii/


/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  const matrix = [...Array(n)].map(() => Array(n).fill(null))

  let iterator = 1
  for (let layer = 0; layer < (n + 1) / 2; layer++) {

    // left to right
    for (let i = layer; i < n - layer; i++) {
      matrix[layer][i] = iterator++
    }

    // from top to bottom
    for (let i = layer + 1; i < n - layer; i++) {
      matrix[i][n - layer - 1] = iterator++
    }

    // from right to left
    for (let i = layer + 1; i < n - layer; i++) {
      matrix[n - layer - 1][n - i - 1] = iterator++
    }

    // from bottom to top
    for (let i = layer + 1; i < n - layer - 1; i++) {
      matrix[n - i - 1][layer] = iterator++
    }

  }

  return matrix
}


console.log(generateMatrix(3)) // [[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(1)) // [[1]]
console.log(generateMatrix(5))
