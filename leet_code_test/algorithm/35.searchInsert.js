/**
 * 35. 搜索插入位置
 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

 请必须使用时间复杂度为 O(log n) 的算法。

 示例 1:

 输入: nums = [1,3,5,6], target = 5
 输出: 2
 示例 2:

 输入: nums = [1,3,5,6], target = 2
 输出: 1
 示例 3:

 输入: nums = [1,3,5,6], target = 7
 输出: 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length
  let min = nums[0]
  let max = nums[right - 1]
  let middle
  let res = -1
  if (target > max) {
    return right
  } else if (target < min) {
    return 0
  }
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] === target) {
      res = middle
      break
    }
  }
  return res === -1 ? left : res
}

let nums = [1, 3, 5, 6]
let target = 5
// let nums = [1, 3, 5, 6]
// let target = 2
// let nums = [1, 3, 5, 6]
// let target = 7
console.log(searchInsert(nums, target))
