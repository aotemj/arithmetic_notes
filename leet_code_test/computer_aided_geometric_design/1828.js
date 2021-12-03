/**
 1828. 统计一个圆中点的数目
 给你一个数组 points ，其中 points[i] = [xi, yi] ，表示第 i 个点在二维平面上的坐标。多个点可能会有 相同 的坐标。

 同时给你一个数组 queries ，其中 queries[j] = [xj, yj, rj] ，表示一个圆心在 (xj, yj) 且半径为 rj 的圆。

 对于每一个查询 queries[j] ，计算在第 j 个圆 内 点的数目。如果一个点在圆的 边界上 ，我们同样认为它在圆 内 。

 请你返回一个数组 answer ，其中 answer[j]是第 j 个查询的答案。

 示例 1：

 输入：points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
 输出：[3,2,2]
 解释：所有的点和圆如上图所示。
 queries[0] 是绿色的圆，queries[1] 是红色的圆，queries[2] 是蓝色的圆。
 示例 2：

 输入：points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]
 输出：[2,3,2,4]
 解释：所有的点和圆如上图所示。
 queries[0] 是绿色的圆，queries[1] 是红色的圆，queries[2] 是蓝色的圆，queries[3] 是紫色的圆。

 提示：

 1 <= points.length <= 500
 points[i].length == 2
 0 <= xi, yi <= 500
 1 <= queries.length <= 500
 queries[j].length == 3
 0 <= xj, yj <= 500
 1 <= rj <= 500
 所有的坐标都是整数。
 */

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  const pl = points.length
  const ql = queries.length
  let answer = []
  for (let i = 0; i < ql; i++) {
    const qItem = queries[i]
    const [qx, qy, radius] = qItem
    let qxRange = {max: qx + radius, min: qx - radius}
    let qyRange = {max: qy + radius, min: qy - radius}
    answer[i] = 0
    for (let j = 0; j < pl; j++) {
      const pItem = points[j]
      const [px, py] = pItem
      if (!(
        px > qxRange.max ||
        qxRange.min > px ||
        py > qyRange.max ||
        qyRange.min > py ||
        ((px === qxRange.max || px === qxRange.min) && (py === qyRange.max || py === qyRange.min)) ||
        Math.pow(qx - px, 2) + Math.pow(py - qy, 2) > Math.pow(radius, 2)
      )
      ) {
        if (answer[i]) {
          answer[i] += 1
        } else {
          answer[i] = 1
        }
      }
    }
  }
  return answer
}
// const points = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
// const queries = [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]]
// const points = [[1, 3], [3, 3], [5, 3], [2, 2]];
// const queries = [[2, 3, 1], [4, 3, 1], [1, 1, 2]]
// const points = [[99, 113], [150, 165], [23, 65], [175, 154], [84, 83], [24, 59], [124, 29], [19, 97], [117, 182], [105, 191], [83, 117], [114, 35], [0, 111], [22, 53]]
// const queries = [[105, 191, 155], [114, 35, 94], [84, 83, 68], [175, 154, 28], [99, 113, 80], [175, 154, 177], [175, 154, 181], [114, 35, 134], [22, 53, 105], [124, 29, 164], [6, 99, 39], [84, 83, 35]] // [11,7,8,2,7,11,13,10,10,14,3,3]
const points = [[1, 1], [2, 2], [2, 2], [3, 3], [3, 3], [3, 3], [4, 4], [4, 4], [4, 4], [4, 4], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [6, 6], [6, 6], [6, 6], [6, 6], [6, 6], [6, 6], [7, 7], [7, 7], [7, 7], [7, 7], [7, 7], [7, 7], [7, 7], [8, 8], [8, 8], [8, 8], [8, 8], [8, 8], [8, 8], [8, 8], [8, 8], [9, 9], [9, 9], [9, 9], [9, 9], [9, 9], [9, 9], [9, 9], [9, 9], [9, 9], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [12, 12], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [13, 13], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [14, 14], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [15, 15], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [16, 16], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [17, 17], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [18, 18], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [19, 19], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [21, 21], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [22, 22], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [23, 23], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [24, 24], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [26, 26], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [27, 27], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [28, 28], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [29, 29], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [31, 31], [32, 32], [32, 32], [32, 32], [32, 32]]
const queries = [[11, 1, 9], [49, 49, 14], [6, 15, 5], [47, 14, 14], [22, 18, 19], [33, 46, 20], [31, 13, 8], [42, 38, 4], [25, 17, 17], [34, 0, 5], [26, 13, 12], [27, 27, 6], [14, 48, 4], [3, 38, 12], [14, 48, 11], [38, 31, 20], [50, 36, 4], [42, 11, 18], [1, 25, 15], [14, 1, 23], [6, 27, 1], [22, 47, 22], [41, 18, 1], [17, 8, 11], [23, 16, 16], [48, 42, 25], [28, 12, 7], [34, 5, 17], [50, 3, 8], [35, 10, 22], [17, 42, 9], [19, 2, 19], [32, 26, 7], [39, 11, 5], [44, 35, 21], [12, 7, 13], [32, 39, 15], [11, 7, 10], [42, 21, 15], [19, 30, 10], [2, 35, 6], [5, 50, 6], [42, 39, 15], [39, 30, 13], [36, 40, 9], [49, 44, 12], [45, 39, 10], [20, 45, 24], [6, 34, 9], [41, 0, 24], [3, 30, 21], [32, 43, 25], [42, 11, 2], [39, 21, 16], [7, 27, 1], [8, 41, 16], [28, 15, 14], [17, 38, 25], [23, 36, 4], [33, 36, 9], [40, 1, 20], [1, 3, 8], [46, 27, 20], [37, 9, 1], [32, 25, 9], [8, 39, 12], [37, 8, 17], [24, 33, 23], [19, 36, 20], [49, 12, 10], [15, 11, 6], [6, 35, 25], [45, 19, 16], [32, 23, 20], [30, 9, 25], [3, 4, 1], [22, 13, 8], [8, 41, 12], [35, 23, 13], [2, 26, 11], [49, 2, 6], [6, 12, 25], [16, 48, 4], [29, 2, 2], [49, 44, 23], [47, 26, 21], [34, 4, 21], [5, 8, 23], [37, 15, 11], [18, 35, 14], [41, 15, 14], [30, 17, 4], [26, 22, 5], [29, 39, 12], [44, 30, 18], [39, 46, 13], [39, 21, 21], [50, 37, 14], [13, 7, 16], [32, 17, 21], [34, 27, 19], [37, 4, 16], [30, 1, 2], [14, 44, 14], [29, 15, 2], [39, 45, 10], [35, 48, 15], [50, 25, 17], [40, 39, 7], [40, 40, 19], [0, 9, 5], [23, 32, 20], [29, 25, 22], [3, 17, 21], [4, 48, 24], [15, 37, 5], [1, 45, 11], [11, 17, 18], [9, 8, 8], [38, 47, 16], [17, 26, 7], [14, 22, 13], [7, 45, 2], [48, 11, 17], [46, 37, 14], [11, 5, 13], [1, 31, 2], [13, 45, 15], [35, 12, 20], [1, 17, 22], [8, 10, 10], [44, 23, 19], [15, 11, 23], [34, 40, 19], [45, 26, 22], [43, 35, 24], [11, 12, 17], [12, 41, 7], [20, 38, 15], [21, 40, 12], [49, 47, 4], [17, 38, 21], [18, 8, 14], [5, 38, 20], [4, 24, 15], [34, 26, 16], [0, 44, 7], [27, 35, 16], [16, 28, 16], [0, 17, 19], [13, 35, 5], [12, 30, 16], [40, 38, 14], [48, 39, 20], [8, 31, 12], [4, 16, 9], [28, 23, 14], [15, 12, 9], [3, 16, 13], [10, 34, 21], [14, 38, 17], [38, 1, 8], [20, 44, 5], [37, 31, 16], [26, 49, 25], [2, 27, 7], [2, 36, 13], [45, 22, 3], [1, 47, 1], [37, 25, 3], [18, 1, 6], [12, 7, 22], [47, 0, 21], [43, 49, 5], [32, 30, 17], [26, 10, 6], [5, 22, 25], [12, 49, 19], [2, 43, 23], [46, 27, 3], [43, 33, 4], [17, 40, 23], [6, 11, 6], [24, 46, 3], [49, 48, 18], [12, 35, 11], [4, 27, 14], [9, 19, 25], [33, 37, 3], [8, 36, 17], [22, 30, 16], [23, 5, 20], [24, 50, 24], [17, 26, 11], [27, 18, 13], [14, 4, 16], [8, 12, 3], [28, 34, 20], [37, 5, 6], [44, 27, 10], [2, 31, 1], [50, 15, 1], [24, 37, 5], [18, 18, 19], [29, 38, 3], [48, 37, 17], [42, 42, 5], [4, 0, 10], [45, 9, 12], [23, 18, 5], [18, 38, 25], [0, 31, 25], [2, 3, 24], [11, 41, 6], [4, 37, 15], [8, 45, 16], [7, 22, 19], [14, 12, 21], [0, 48, 21], [0, 32, 25], [22, 42, 23], [22, 16, 13], [44, 35, 15], [48, 18, 6], [10, 40, 15], [24, 28, 13], [3, 26, 13], [15, 40, 19], [10, 27, 21], [9, 30, 2], [25, 40, 21], [49, 35, 24], [38, 38, 18], [7, 1, 1], [31, 9, 8], [43, 5, 17], [48, 0, 6], [20, 8, 6], [0, 48, 17], [26, 43, 10], [1, 24, 1], [6, 48, 16], [8, 0, 22], [30, 39, 24], [10, 50, 19], [46, 36, 11], [46, 8, 15], [25, 35, 1], [39, 9, 2], [9, 11, 4], [14, 40, 20], [42, 3, 10], [16, 42, 9], [6, 20, 22], [42, 45, 16], [39, 37, 4], [20, 29, 15], [48, 28, 14], [49, 30, 14], [4, 20, 15], [19, 43, 15], [5, 48, 12], [46, 22, 23], [50, 19, 4], [14, 43, 4], [21, 31, 21], [5, 20, 17], [42, 20, 12], [13, 33, 7], [41, 24, 22], [27, 36, 20], [49, 28, 15], [22, 7, 15], [44, 47, 22], [3, 2, 2], [38, 44, 2], [8, 32, 24], [25, 18, 5], [6, 34, 9], [14, 0, 14], [39, 36, 13], [20, 30, 16], [8, 8, 24], [18, 31, 9], [33, 24, 6], [10, 5, 16], [22, 38, 5], [50, 18, 12], [4, 37, 14], [40, 29, 24], [38, 50, 10], [33, 5, 10], [21, 25, 5], [5, 28, 15], [2, 17, 19], [30, 39, 25], [9, 15, 19], [29, 19, 3], [29, 13, 18], [32, 17, 25], [45, 49, 22], [2, 32, 20], [15, 9, 10], [29, 46, 12], [43, 47, 19], [0, 28, 1], [1, 6, 6], [32, 22, 2], [14, 43, 9], [16, 19, 14], [26, 43, 20], [19, 16, 4], [22, 28, 22], [26, 14, 12], [10, 10, 11], [6, 34, 11], [41, 45, 7], [0, 42, 20], [29, 9, 1], [2, 25, 12], [35, 33, 25], [7, 21, 2], [9, 16, 19], [7, 37, 13], [50, 18, 11], [38, 42, 5], [30, 19, 5], [38, 34, 15], [9, 36, 18], [33, 1, 5], [13, 31, 18], [50, 23, 23], [38, 16, 25], [40, 21, 9], [20, 36, 8], [45, 30, 7], [40, 34, 11], [7, 42, 24], [11, 38, 7], [13, 31, 16], [29, 35, 11], [17, 35, 13], [33, 0, 7], [39, 6, 8], [33, 16, 14], [27, 45, 19], [10, 15, 9], [37, 42, 19], [40, 9, 15], [12, 47, 4], [41, 22, 13], [44, 4, 7], [6, 31, 12], [8, 45, 19], [7, 41, 17], [11, 25, 12], [38, 36, 6], [22, 10, 22], [33, 30, 7], [9, 36, 23], [36, 4, 1], [37, 15, 12], [21, 11, 24], [20, 49, 6], [38, 40, 6], [8, 33, 23], [10, 36, 7], [31, 27, 8], [10, 40, 21], [2, 7, 5], [43, 15, 5], [37, 3, 20], [22, 1, 4], [45, 19, 12], [41, 50, 22], [37, 31, 6], [32, 20, 11], [16, 4, 8], [34, 50, 9], [9, 30, 8], [11, 28, 20], [31, 11, 25], [1, 19, 23], [13, 15, 24], [47, 38, 17], [39, 3, 14], [15, 5, 20], [21, 43, 9], [37, 42, 1], [15, 15, 15], [8, 26, 5], [32, 26, 22], [42, 36, 13], [47, 15, 9], [10, 7, 11], [11, 50, 24], [50, 40, 20], [10, 15, 2], [20, 15, 1], [22, 12, 9], [1, 38, 17], [45, 45, 25], [14, 32, 15], [29, 32, 4], [9, 17, 24], [21, 42, 8], [6, 4, 9], [32, 9, 25], [23, 6, 24], [3, 22, 16], [21, 36, 13], [10, 45, 10], [6, 44, 12], [3, 41, 25], [30, 0, 1], [33, 38, 24], [32, 49, 12], [1, 2, 1], [6, 2, 11], [4, 3, 5], [35, 3, 15], [19, 12, 10], [17, 33, 6], [2, 18, 7], [1, 0, 5], [39, 10, 5], [14, 0, 22], [37, 9, 3], [13, 42, 9], [27, 17, 24], [4, 2, 6], [17, 26, 6], [25, 9, 8], [44, 9, 9], [45, 44, 3], [39, 27, 10], [32, 46, 18], [3, 47, 16], [41, 35, 16], [11, 27, 4], [25, 25, 1], [0, 22, 21], [3, 33, 15], [12, 49, 19], [29, 36, 12], [24, 18, 18], [20, 44, 22], [14, 36, 21], [40, 40, 3], [42, 36, 9], [2, 16, 6], [12, 47, 4], [31, 14, 13], [30, 20, 15], [49, 29, 7], [26, 35, 1], [24, 9, 5], [12, 21, 15], [26, 30, 9], [0, 49, 5], [13, 6, 8], [23, 43, 25], [47, 40, 10], [13, 11, 18], [31, 28, 5], [24, 15, 15], [43, 18, 12], [16, 24, 25], [22, 0, 8], [47, 2, 18], [44, 19, 20], [39, 0, 22], [47, 15, 14], [40, 49, 7], [9, 27, 16], [27, 24, 4], [18, 27, 3], [45, 38, 7], [17, 37, 3], [50, 16, 19], [7, 19, 19], [20, 4, 3], [10, 17, 17], [24, 24, 3], [46, 34, 18], [21, 12, 2], [21, 50, 23], [22, 10, 10], [26, 8, 24], [47, 2, 21], [38, 22, 13], [1, 15, 25], [33, 31, 13], [10, 50, 20], [48, 5, 24], [47, 50, 4], [50, 2, 19], [29, 3, 10], [41, 15, 13], [46, 18, 12]]
console.log(countPoints(points, queries))
