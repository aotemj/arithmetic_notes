/**
 628. 三个数的最大乘积
 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

 示例 1：

 输入：nums = [1,2,3]
 输出：6
 示例 2：

 输入：nums = [1,2,3,4]
 输出：24
 示例 3：

 输入：nums = [-1,-2,-3]
 输出：-6


 提示：

 3 <= nums.length <= 104
 -1000 <= nums[i] <= 1000
 */

/**
 * 思路1：
 * 先对当前数组进行升序排列
 * 最大乘积可能是： 最小负数 * 第二小负数 * 最大整数 || 后三个最大正数 的乘积
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function (nums) {
    let l = nums.length,
        transNum = nums.sort((a, b) => a - b);
    return Math.max(transNum[0] * transNum[1] * transNum[l - 1], transNum[l - 1] * transNum[l - 2], transNum[l - 3])
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3, 4, 5]));


