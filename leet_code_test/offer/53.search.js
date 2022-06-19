/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 * 统计一个数字在排序数组中出现的次数。
 *
 *
 *
 * 示例 1:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: 2
 * 示例 2:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: 0
 *
 *
 * 提示：
 *
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums 是一个非递减数组
 * -109 <= target <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路： 先使用二分法找到与target目标值相同的值，如果有则沿着当前找到的索引向两侧扩散，直到扩散的值与目标值不同为止；如果没有，则直接返回0
var search = function (nums, target) {
  let length = nums.length
  let left = 0
  let right = length
  let middle = 0
  if (length === 0 || target > nums[length - 1] || target < nums[0]) return 0
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (target > nums[middle]) {
      left = middle + 1
    } else if (target < nums[middle]) {
      right = middle - 1
    } else if (target === nums[middle]) {
      left = middle - 1
      right = middle + 1
      while (nums[left] === target) {
        left--
      }
      while (nums[right] === target) {
        right++
      }
      break
    }
  }
  return Math.max(right - left - 1, 0)
  // console.log(left, right, middle)
}
// let nums = [5, 7, 7, 8, 8, 10]
// let target = 8
// let nums = [5, 7, 8, 8, 8, 8, 9, 10]
let nums = []
let target = 0
console.log(search(nums, target))
