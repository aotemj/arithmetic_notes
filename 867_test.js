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

// method 1
// var transpose = function (matrix) {
//     let newArr = []
//     const length = matrix.length
//     const subLength = matrix[0].length
//     for (let i = 0; i < subLength; i++) {
//         let subArr = []
//         for (let j = 0; j < length; j++) {
//             subArr.push(matrix[j][i])
//         }
//         newArr.push(subArr)
//     }
//     return newArr
// };


// method 2
    // matrix[i,j] = matrix[j,i]
// var transpose = function (matrix) {
//         let newArr = []
//         for (const i in matrix) {
//             for (const j in matrix[i]) {
//                 if (!newArr[j]) {
//                     newArr[j] = []
//                 }
//
//                 newArr[j][i] = matrix[i][j]
//             }
//         }
//         return newArr
//     }

// method3
var transpose = function (A) {
        return A[0].map((_, idx) => {
            return A.map(row => row[idx])
        })
    }

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));

