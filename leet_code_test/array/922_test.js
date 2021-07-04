/**
 922. 按奇偶排序数组 II
 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

 你可以返回任何满足上述条件的数组作为答案。

 示例：

 输入：[4,2,5,7]
 输出：[4,5,2,7]
 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

 提示：

 2 <= A.length <= 20000
 A.length % 2 === 0
 0 <= A[i] <= 1000
 */

/**
 * 思路：
 * 遍历当前数组，如果当前值和当前索引的奇偶性不一致，则将当前值记录入 oddArr 或 evenArr 中，并将当前索引值记录到 needChangeIndexs 数组中，然后遍历当前的needChangeIndexs数组，将对应的合适的值写会 nums里
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const l = nums.length
  let oddArr = []; let evenArr = []; let needChangeIndexs = []
  for (let i = 0; i < l; i++) {
    if ((nums[i] + i) % 2 !== 0) {
      const item = nums[i]
      // 位置需要移动
      if (i % 2 === 0) {
        oddArr.push(item)
      } else {
        evenArr.push(item)
      }
      needChangeIndexs.push(i)
    }
  }
  const il = needChangeIndexs.length
  for (let i = 0; i < il; i++) {
    const index = needChangeIndexs[i]
    if (index % 2 === 0) {
      nums[index] = evenArr.pop()
    } else {
      nums[index] = oddArr.pop()
    }
  }
  return nums
}

console.log(sortArrayByParityII([4, 2, 5, 7]))
// console.log(sortArrayByParityII([3, 1, 4, 2]));
