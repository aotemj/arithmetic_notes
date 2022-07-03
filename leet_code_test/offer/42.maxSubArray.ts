/**
 * 剑指 Offer 42. 连续子数组的最大和
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 *
 * 要求时间复杂度为O(n)。
 *
 *
 *
 * 示例1:
 *
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 提示：
 *
 * 1 <= arr.length <= 10^5
 * -100 <= arr[i] <= 100
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//设动态规划列表 dpdp ，dp[i]dp[i] 代表以元素 nums[i]nums[i] 为结尾的连续子数组最大和。
//
// 为何定义最大和 dp[i]dp[i] 中必须包含元素 nums[i]nums[i] ：保证 dp[i]dp[i] 递推到 dp[i+1]dp[i+1] 的正确性；如果不包含 nums[i]nums[i] ，递推时则不满足题目的 连续子数组 要求

type Dp = {
  [key: string]: number
}

function maxSubArray(nums: number[]): number {
  let length = nums.length
  let maxRes = nums[0]
  let dp: Dp = {
    '0': nums[0]
  }
  for (let i = 1; i < length; i++) {
    let item = nums[i]
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + item
    } else {
      dp[i] = item
    }
    maxRes = Math.max(maxRes, dp[i])
  }
  return maxRes
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));
