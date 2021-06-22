/**
 *
 剑指 Offer 47. 礼物的最大价值
 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，
 并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 示例 1:

 输入:
 [
 [1,3,1],
 [1,5,1],
 [4,2,1]
 ]
 输出: 12
 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

 */

/**
 * 思路： 当前题目和 62题 《不同路径》 问题的思路相似
 * 当前 grid[i][j] 的最大价值 = Max(grid[i-1][j]的最大价值，grid[i][j-1]的最大价值)+ grid[i][j]
 * 边缘值（i=0或j=0时） grid[i][j] 的最大价值 = grid[i-1][j] 的最大价值(j=0) +  grid[i][j] 或 grid[i][j-1] 的最大价值(i=0)
 * 时间复杂度 O(m*n)
 * @param {number[][]} grid
 * @return {number}
 *
 */
var maxValue = function (grid) {
    let m = grid.length, n = grid[0].length
    let map = {}

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i && j) {
                map[`${i}${j}`] = Math.max(map[`${i - 1}${j}`], map[`${i}${j - 1}`]) + grid[i][j]
            } else if (i && !j) {
                map[`${i}${j}`] = map[`${i - 1}${j}`] + grid[i][j]
            } else if (!i && j) {
                map[`${i}${j}`] = map[`${i}${j - 1}`] + grid[i][j]
            } else {
                map[`${i}${j}`] = grid[0][0]
            }
        }
    }
    return map[`${m - 1}${n - 1}`]
};

// let grid = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ]
let grid = [
    [0]
]
// let grid = [
//     [1, 2, 5],
//     [3, 2, 1]
// ]
console.log(maxValue(grid));