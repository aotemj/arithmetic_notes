/**
 *
 64. 最小路径和
 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

 说明：每次只能向下或者向右移动一步。

 示例 1：


 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 输出：7
 解释：因为路径 1→3→1→1→1 的总和最小。
 示例 2：

 输入：grid = [[1,2,3],[4,5,6]]
 输出：12

 提示：

 m == grid.length
 n == grid[i].length
 1 <= m, n <= 200
 0 <= grid[i][j] <= 100

 */

/**[
 * @param {number[][]} grid
 * 思路：
 * 第一列(grid[i][0])的元素只能从最上角往下移才能到达
 * 第一行(grid[0][j])的元素只能从最左边往右移才能到达
 * 其余的元素(grid[i][j]) 可以由其左边的元素向右移动一个元素或由其上边的元素向下移动一个元素到达，则比较从左向右移动或从上到下的最小路径即可
 * @return {number}
 */
let dp = {}
var minPathSum = function (grid) {
    dp['00'] = grid[0][0]
    let l = grid.length, subL = grid[0].length
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < subL; j++) {
            if (i === 0 && j > 0) {
                dp[`${i}${j}`] = dp[`${i}${j - 1}`] + grid[i][j]
            } else if (j === 0 && i > 0) {
                // console.log(i, j);
                dp[`${i}${j}`] = dp[`${i - 1}${j}`] + grid[i][j]
            } else if (i > 0 && j > 0) {
                // console.log(i, j);
                dp[`${i}${j}`] = Math.min(dp[`${i - 1}${j}`], dp[`${i}${j - 1}`]) + grid[i][j]
            }
        }
    }

    return dp[`${l - 1}${subL - 1}`]
};

// const grid = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ]

// const grid = [[1, 2, 3], [4, 5, 6]]
const grid = [
    [1, 1],
    [2, 2],
    [1, 1]
]

console.log(minPathSum(grid));