/**
 62. 不同路径
 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

 问总共有多少条不同的路径？

 示例 1：

 输入：m = 3, n = 7
 输出：28
 示例 2：

 输入：m = 3, n = 2
 输出：3
 解释：
 从左上角开始，总共有 3 条路径可以到达右下角。
 1. 向右 -> 向下 -> 向下
 2. 向下 -> 向下 -> 向右
 3. 向下 -> 向右 -> 向下
 示例 3：

 输入：m = 7, n = 3
 输出：28
 示例 4：

 输入：m = 3, n = 3
 输出：6

 提示：

 1 <= m, n <= 100
 题目数据保证答案小于等于 2 * 109

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let map = {
  '1,1': 1,
  '1,2': 1,
  '2,1': 1,
  '2,2': 2,
  '3,1': 1
}
// var uniquePaths = function (m, n) {
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || j === 1) {
//                 map[`${i},${j}`] = 1
//             } else if (i >= 3 || j >= 3) {
//                 map[`${i},${j}`] = map[`${i - 1},${j}`] + map[`${i},${j - 1}`]
//             }
//         }
//     }
//
//     return map[`${m},${n}`]
// };

var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    map[`${m},${n}`] = 1
  } else if ((m >= 3 && n > 0) || (n >= 3 && m > 0)) {
    map[`${m},${n}`] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
  }
  return map[`${m},${n}`]
}

// const m = 7, n = 3
// const m = 3, n = 2
// const m = 3, n = 3
const m = 1; const n = 1
console.log(uniquePaths(m, n))
