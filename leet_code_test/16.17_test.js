/**
 * 面试题 16.17. 连续数列
 给定一个整数数组，找出总和最大的连续数列，并返回总和。

 示例：

 输入： [-2,1,-3,4,-1,2,1,-5,4]
 输出： 6
 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
 进阶：

 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0
    let length = nums.length
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
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2]));
