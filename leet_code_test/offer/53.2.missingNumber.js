/**
 * 剑指 Offer 53 - II. 0～n-1中缺失的数字
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 *
 * 示例 1:
 *
 * 输入: [0,1,2]
 * 输出: 2
 * 示例 2:
 *
 * 输入: [0,1,2,3,4,5,6,7,9]
 * 输出: 8
 *
 *
 * 限制：
 *
 * 1 <= 数组长度 <= 10000
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路： 遍历当前有序数组：
//  如果当前项和他的索引不相等，则表示缺的值就是当前索引所在的值，返回当前索引即可；
//  如果遍历到数组结尾都相等，则表示却的值是数组的第n-1项，则返回当前数组最后一项+1即可
var missingNumber = function (nums) {
  let length = nums.length
  let target = -1
  for (let i = 0; i < length; i++) {
    if (i !== nums[i]) {
      target = i
      break
    }
  }
  return target === -1 ? nums[length - 1] + 1 : target
}
// let nums = [0, 1, 3]
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 9]
let nums = [0, 1, 2, 4]
console.log(missingNumber(nums))
