/**
 63. 不同路径 II
 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？



 网格中的障碍物和空位置分别用 1 和 0 来表示。



 示例 1：


 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 输出：2
 解释：
 3x3 网格的正中间有一个障碍物。
 从左上角到右下角一共有 2 条不同的路径：
 1. 向右 -> 向右 -> 向下 -> 向下
 2. 向下 -> 向下 -> 向右 -> 向右
 示例 2：


 输入：obstacleGrid = [[0,1],[0,0]]
 输出：1


 提示：

 m == obstacleGrid.length
 n == obstacleGrid[i].length
 1 <= m, n <= 100
 obstacleGrid[i][j] 为 0 或 1
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let map = {
    '11': 1,
    '10': 1,
    '01': 1,
}
let executeCount = 0
var uniquePathsWithObstacles = function (obstacleGrid) {
    const l = obstacleGrid.length - 1, subL = obstacleGrid[0].length - 1

    if (!executeCount) {
        if (obstacleGrid[l][subL] || obstacleGrid[0][0]) {
            return 0
        }
    }
    executeCount++
    if (l > 1 && subL > 1) {
        if (obstacleGrid[l - 1][subL] && obstacleGrid[l][subL - 1]) return 0
        if (obstacleGrid[l - 1][subL]) {
            map[`${l}${subL}`] = uniquePathsWithObstacles(obstacleGrid.map(subArr => subArr.slice(0, subL)))
        } else if (obstacleGrid[l][subL - 1]) {
            map[`${l}${subL}`] = uniquePathsWithObstacles(obstacleGrid.slice(0, l))
        } else {
            map[`${l}${subL}`] = uniquePathsWithObstacles(obstacleGrid.map(subArr => subArr.slice(0, subL))) + uniquePathsWithObstacles(obstacleGrid.slice(0, l))
        }
    } else {
        if (obstacleGrid[l - 1][obstacleGrid[l - 1].length - 1]) {
            map[`${l}${subL}`] = 1
        } else if (obstacleGrid[l][subL - 1]) {
            map[`${l}${subL}`] = 1
        } else {
            map[`${l}${subL}`] = 2
        }
    }
    return map[`${l}${subL}`]
};

// const obstacleGrid = [
//     [0, 0, 0],
//     [0, 1, 1],
//     [0, 1, 0]
// ]
const obstacleGrid = [
    [0, 0], [0, 1]
]
// const obstacleGrid = [
//     // [0, 0, 0],
//     // [0, 1, 0]
//     [0, 0],
//     [0, 1],
//     [0, 0]
// ]
// const obstacleGrid = [
//     [0, 1],
//     [0, 0]
// ]

// const obstacleGrid = [[0, 0], [0, 1]]
// const obstacleGrid = [[0, 1], [0, 0]]


console.log(uniquePathsWithObstacles(obstacleGrid));