/**
 * 剑指 Offer 47. 礼物的最大价值
 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 示例 1:

 输入:
 [
 [1,3,1],
 [1,5,1],
 [4,2,1]
 ]
 输出: 12
 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

 提示：

 0 < grid.length <= 200
 0 < grid[0].length <= 200
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
type NumberArray = number[]
type Grid = NumberArray[]
type Dp = {
  [key: string]: number
}
var maxValue = function (grid: Grid) {
  let m = grid.length
  let n = grid[0].length
  let iX = 0, iY = 0
  let dp: Dp = {
    '0-0': grid[0][0],
  }
  while (true) {
    if (iX === 0 && iY === 0) {
      dp[`${iX}-${iY}`] = grid[0][0]
    } else if (iX > 0 && iY > 0) {
      dp[`${iX}-${iY}`] = Math.max(dp[`${iX - 1}-${iY}`], dp[`${iX}-${iY - 1}`]) + grid[iX][iY]
    } else if (iX === 0) {
      dp[`${iX}-${iY}`] = dp[`0-${iY - 1}`] + grid[iX][iY]
    } else if (iY === 0) {
      dp[`${iX}-${iY}`] = dp[`${iX - 1}-0`] + grid[iX][iY]
    }
    if (iY < n - 1) {
      iY += 1
    } else if (iY == n - 1) {
      iX += 1
      iY = 0
    }
    if (iX === m || iY === n) {
      break
    }
  }
  return dp[`${m - 1}-${n - 1}`]
};

// var maxValue = (grid: Grid) => {
//   let m = grid.length;
//   let n = grid[0].length;
//   for (let i = 0, j = 0; j < n; i++) {
//
//   }
// }
console.log(maxValue([
  [1, 3, 1],
  [10, 5, 1],
  [4, 2, 1]
]));
console.log(maxValue([
  [1, 2, 5],
  [3, 2, 1]
]));
// console.log(maxValue([[0]]));














