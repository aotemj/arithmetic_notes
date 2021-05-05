/**
 350. 两个数组的交集 II
 给定两个数组，编写一个函数来计算它们的交集。



 示例
 1：

 输入：nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 输出：[2, 2]
 示例
 2
 :

 输入：nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
 输出：[4, 9]


 说明：

 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 我们可以不考虑输出结果的顺序。
 进阶：

 如果给定的数组已经排好序呢？你将如何优化你的算法？
 如果
 nums1
 的大小比
 nums2
 小很多，哪种方法更优？
 如果
 nums2
 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//   let res = [], map = {}
//   let l1 = nums1.length
//   for (let i = 0; i < l1; i++) {
//     const item = nums1[i]
//     if (!map[item]) {
//       map[item] = 1
//     } else {
//       map[item] = map[item] + 1
//     }
//   }
//
//   // let nums2Trans = [...new Set(nums2)]
//   let l2 = nums2.length
//
//   for (let i = 0; i < l2; i++) {
//     const item = nums2[i]
//     if (map[item]) {
//       map[item] = map[item] - 1
//       res.push(item)
//     }
//   }
//   return res
// };

/**

 方法二：排序 + 双指针
 如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。

 首先对两个数组进行排序，然后使用两个指针遍历两个数组。

 初始时，两个指针分别指向两个数组的头部。每次比较两个指针指向的两个数组中的数字，如果两个数字不相等，则将指向较小数字的指针右移一位，如果两个数字相等，将该数字添加到答案，并将两个指针都右移一位。当至少有一个指针超出数组范围时，遍历结束
 */

var intersect = function (nums1, nums2) {
  let sortedNums1 = nums1.sort((a, b) => a - b)
  let sortedNums2 = nums2.sort((a, b) => a - b)

  let l1 = sortedNums1.length, l2 = sortedNums2.length

  let p1 = 0, p2 = 0, res = []

  while (p1 < l1 && p2 < l2) {
    let item1 = sortedNums1[p1]
    let item2 = sortedNums2[p2]
    if (item1 === item2) {
      res.push(item1)
      p1 += 1
      p2 += 1
    } else {
      if (item1 < item2) {
        p1 += 1
      } else {
        p2 += 1
      }
    }
  }

  return res
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
console.log(intersect(nums1, nums2));










