/**
 * 56. 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 示例 2：
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let length = intervals.length
  intervals.sort((a, b) => a[0] - b[0])
  let mergeArr = []
  let start = intervals[0][0]
  let end = intervals[0][1]
  for (let i = 1; i < length; i++) {
    let curr = intervals[i]
    if (end >= curr[0]) {
      end = Math.max(end, curr[1])
    } else {
      mergeArr.push([start, end])
      start = curr[0]
      end = curr[1]
    }
  }
  mergeArr.push([start, end])
  return mergeArr
}

// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
const intervals = [[1, 4], [4, 5]]
// const intervals = [[1, 4], [3, 5]]
console.log(merge(intervals))
