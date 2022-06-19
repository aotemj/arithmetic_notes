/**
 * 剑指 Offer 04. 二维数组中的查找
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 示例:
 *
 * 现有矩阵 matrix 如下：
 *
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 * 给定 target = 5，返回 true。
 *
 * 给定 target = 20，返回 false。
 *
 *
 *
 * 限制：
 *
 * 0 <= n <= 1000
 *
 * 0 <= m <= 1000
 */
/**
 * 1. 将当前的二维数组拆分多个一维数组；
 *   2. 使用二分查找的方式找到每一个一维数组中是否包含 target
 *   3. 如果有，返回true
 *   4. 否则，break当前数组并进入下一个一维数组判断，
 *   5. 直到进行到最后一个一维数组；
 *   6. 返回结果
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let length = matrix.length
  if (length === 0) {
    return false
  }
  let subLength = matrix[0].length
  if (subLength === 0) {
    return false
  }
  let res = false
  for (let i = 0; i < length; i++) {
    let left = 0
    let right = subLength
    let middle = 0
    while (left <= right) {
      middle = Math.floor((left + right) / 2)
      if (matrix[i][middle] < target) {
        left = middle + 1
      } else if (matrix[i][middle] > target) {
        right = middle - 1
      } else if (matrix[i][middle] === target) {
        res = true
        break
      } else {
        break
      }
    }
  }
  return res
}
// let matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
let matrix = []
// let target = 5
// let target = 20
// let target = 21
// let target = 0
// let target = 1
// let target = 15
let target = 29

console.log(findNumberIn2DArray(matrix, target))
