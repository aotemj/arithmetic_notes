/**
 45. 跳跃游戏 II
 给定一个非负整数数组，你最初位于数组的第一个位置。

 数组中的每个元素代表你在该位置可以跳跃的最大长度。

 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

 假设你总是可以到达数组的最后一个位置。

 示例 1:

 输入: [2,3,1,1,4]
 输出: 2
 解释: 跳到最后一个位置的最小跳跃数是 2。
 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 示例 2:

 输入: [2,3,0,1,4]
 输出: 2

 提示:

 1 <= nums.length <= 1000
 0 <= nums[i] <= 105
 */

/**
 * 思路：正向遍历，判断当前项可以到达的最远位置，如找到最大
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const l = nums.length
  let jumpCount = 0 // 跳跃次数
  let maxPosition = 0 // 目前能跳到的最远位置
  let end = 0 // 上次可达范围右边界（下次的最右起跳点）
  for (let i = 0; i < l - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i === end) {
      end = maxPosition
      jumpCount++
    }
  }
  return jumpCount
}

// const nums = [2, 3, 1, 1, 4]
const nums = [2, 3, 0, 1, 4]
console.log(jump(nums))
