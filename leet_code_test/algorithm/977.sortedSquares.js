/**
 * 977. 有序数组的平方
 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

 示例 1：

 输入：nums = [-4,-1,0,3,10]
 输出：[0,1,9,16,100]
 解释：平方后，数组变为 [16,1,0,9,100]
 排序后，数组变为 [0,1,9,16,100]
 示例 2：

 输入：nums = [-7,-3,2,3,11]
 输出：[4,9,9,49,121]

 提示：

 1 <= nums.length <= 104
 -104 <= nums[i] <= 104
 nums 已按 非递减顺序 排序

 进阶：

 请你设计时间复杂度为 O(n) 的算法解决本问题
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const length = nums.length
  let negativeSquareArrs = []
  let positiveSquareArrs = []
  let newArr = []
  for (let i = 0; i < length; i++) {
    const item = nums[i]
    if (item < 0) {
      negativeSquareArrs.unshift(Math.pow(item, 2))
    } else {
      positiveSquareArrs.push(Math.pow(item, 2))
    }
  }
  let negativeIndex = 0
  let positiveIndex = 0
  while (negativeIndex < negativeSquareArrs.length && positiveIndex < positiveSquareArrs.length) {
    const positiveItem = positiveSquareArrs[positiveIndex]
    const negativeItem = negativeSquareArrs[negativeIndex]
    if (positiveItem < negativeItem) {
      newArr.push(positiveItem)
      positiveIndex += 1
    } else {
      newArr.push(negativeItem)
      negativeIndex += 1
    }
  }
  return [...newArr, ...positiveSquareArrs.slice(positiveIndex), ...negativeSquareArrs.slice(negativeIndex)]
}

// let nums = [-4, -1, 0, 3, 10]
// let nums = [-7, -3, 2, 3, 11]
let nums = [-10000, -9999, -7, -5, 0, 0, 10000]

console.log(sortedSquares(nums))
