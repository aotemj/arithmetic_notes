/**
 977. 有序数组的平方
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

/** O(n2)
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//     let newArray = nums.map(item => Math.pow(item, 2))
//     return newArray.sort((a, b) => a - b)
// };

/** 寻找临界点
 * 思路：
 1. 寻找正负值临界点索引 index
 2. 将index 左侧的所有负值平方后递增排序
 3. 双指针将两个递增数组合成一个
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let minusArr = [],
        positiveArr = [],
        l = nums.length,
        index = -1
    for (let i = 0; i < l; i++) {
        let item = nums[i]
        if (item < 0) {
            minusArr.unshift(Math.pow(item, 2))
        } else {
            if (index === -1) {
                index = i
                break
            }
        }
    }
    if (index === -1) {
        return minusArr
    } else {
        positiveArr = nums.slice(index, l).map(item => Math.pow(item, 2))
        let p1 = 0, p2 = 0, l1 = minusArr.length, l2 = positiveArr.length, res = []
        while (p1 < l1 && p2 < l2) {
            let item1 = minusArr[p1], item2 = positiveArr[p2]
            if (item1 < item2) {
                res.push(item1)
                p1++
            } else {
                res.push(item2)
                p2++
            }
        }
        return res.concat(minusArr.slice(p1, l1), positiveArr.slice(p2, l2))
    }
};


// console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-1]));
// console.log(sortedSquares([-7, -3, 2, 3, 11]));
