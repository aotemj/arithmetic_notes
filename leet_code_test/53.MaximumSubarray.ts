/**
 * 53. Maximum Subarray
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * Example 2:
 *
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 * Example 3:
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums:number[]) {
  let length = nums.length
  let sum = 0
  let res = nums[0]
  for (let i = 0; i < length; i++) {
    const item = nums[i]
    if (sum > 0) {
      sum += item
    } else {
      sum = item
    }
    res = Math.max(res, sum)
  }
  return res
}
/**
 *思路
 这道题用动态规划的思路并不难解决，比较难的是后文提出的用分治法求解，但由于其不是最优解法，所以先不列出来
 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
 时间复杂度：O(n)O(n)
 */

/**
 * 尝试获取最大子数列的数组
 * @param nums
 */
const maxSubArray1 = function (nums:number[]) {
  let length = nums.length
  let subArr = [nums[0]]
  let sum = nums[0]
  for (let i = 0; i < length; i++) {
    const item = nums[i]
    if(sum>0){
      sum+=item
      subArr.push(item)
    }else {
      sum = item
      subArr = [item]
    }
  }
  return subArr
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(arr))
console.log(maxSubArray1(arr))
// console.log(maxSubArray([1]));
// console.log(maxSubArray([]));
// console.log(maxSubArray([-2, -1]));
// console.log(maxSubArray([1, 2]));
// console.log(sum([, 1, 23]));
