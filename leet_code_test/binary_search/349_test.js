/**
 349. 两个数组的交集
 给定两个数组，编写一个函数来计算它们的交集。

 示例 1：

 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 输出：[2]
 示例 2：

 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 输出：[9,4]

 说明：

 输出结果中的每个元素一定是唯一的。
 我们可以不考虑输出结果的顺序。
 */

/**
 * 双指针法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let l1 = nums1.length
  let l2 = nums2.length
  let sortNum1 = nums1.sort((a, b) => a - b)
  let sortNum2 = nums2.sort((a, b) => a - b)
  let p1 = 0
  let p2 = 0
  let res = []
  while (p1 < l1 && p2 < l2) {
    if (sortNum1[p1] === sortNum2[p2]) {
      res.push(sortNum1[p1])
      p1++
      p2++
    } else if (sortNum1[p1] < sortNum2[p2]) {
      p1++
    } else {
      p2++
    }
  }
  return [...new Set(res)]
}
console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
