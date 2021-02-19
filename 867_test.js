/**
 * 867. Transpose Matrix
 Given a 2D integer array matrix, return the transpose of matrix.

 The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

 Example 1:

 Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 Output: [[1,4,7],[2,5,8],[3,6,9]]
 Example 2:

 Input: matrix = [[1,2,3],[4,5,6]]
 Output: [[1,4],[2,5],[3,6]]


 Constraints:

 m == matrix.length
 n == matrix[i].length
 1 <= m, n <= 1000
 1 <= m * n <= 105
 -109 <= matrix[i][j] <= 109
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var transpose = function (matrix) {
//   let newArr = []
//
//   for (const i in matrix) {
//     for (const j in matrix[i]) {
//       if (!newArr[j]) {
//         newArr[j] = []
//       }
//       newArr[j][i] = matrix[i][j]
//     }
//   }
//   return newArr
// };

// method2

var transpose = function (matrix) {
  return matrix[0].map((_, index) => {
    return matrix.map((value) => value[index]
    )
  })
}

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));

// 123
// 456
// 789
