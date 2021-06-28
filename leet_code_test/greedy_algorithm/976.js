/**
 976. 三角形的最大周长
 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

 如果不能形成任何面积不为零的三角形，返回 0。

 示例 1：

 输入：[2,1,2]
 输出：5
 示例 2：

 输入：[1,2,1]
 输出：0
 示例 3：

 输入：[3,2,3,4]
 输出：10
 示例 4：

 输入：[3,6,2,3]
 输出：8

 提示：

 3 <= A.length <= 10000
 1 <= A[i] <= 10^6
 */

/**
 * 思路： 先对nums按照降序排列，然后依次遍历 nums 检测3个值是否可以构成，如果可以，则返回他们的和
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    const l = nums.length;
    nums.sort((a, b) => b - a)
    let perimeter = 0
    for (let i = 0; i < l - 2; i++) {
        if (isConstituteTriangle(...(nums.slice(i, i + 3)))) {
            perimeter = nums[i] + nums[i + 1] + nums[i + 2]
            break
        }
    }

    return perimeter

    function isConstituteTriangle(a, b, c) {
        if (a + b > c && b + c > a && c + a > b) {
            return true
        } else {
            return false
        }
    }
};

// let nums = [2, 1, 2]
// let nums = [1, 2, 1]
// let nums = [3, 2, 3, 4]
let nums = [3, 6, 2, 3]
console.log(largestPerimeter(nums));