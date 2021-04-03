/**
 1313. 解压缩编码列表
 给你一个以行程长度编码压缩的整数列表 nums 。

 考虑每对相邻的两个元素 [freq, val] = [nums[2*i], nums[2*i+1]] （其中 i >= 0 ），每一对都表示解压后子列表中有 freq 个值为 val 的元素，你需要从左到右连接所有子列表以生成解压后的列表。

 请你返回解压后的列表。

 示例 1：

 输入：nums = [1,2,3,4]
 输出：[2,4,4,4]
 解释：第一对 [1,2] 代表着 2 的出现频次为 1，所以生成数组 [2]。
 第二对 [3,4] 代表着 4 的出现频次为 3，所以生成数组 [4,4,4]。
 最后将它们串联到一起 [2] + [4,4,4] = [2,4,4,4]。
 示例 2：

 输入：nums = [1,1,2,3]
 输出：[1,3,3]

 提示：

 2 <= nums.length <= 100
 nums.length % 2 == 0
 1 <= nums[i] <= 100
 */

/**
 *思路：遍历当前数组，每次两个为单位，根据当前 两个数字的含义生成对应的数组，并push 到 resArr 中
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const l = nums.length
  let resArr = []
  for (let i = 0; i < l; i += 2) {
    const frequency = nums[i]
    const num = nums[i + 1]
    for (let j = 0; j < frequency; j++) {
      resArr.push(num)
    }
  }
  return resArr
};


// const nums = [1, 2, 3, 4]
const nums = [1,1,2,3]
console.log(decompressRLElist(nums));
