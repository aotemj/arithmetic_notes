/**
 * 343. 整数拆分
 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

 示例 1:

 输入: 2
 输出: 1
 解释: 2 = 1 + 1, 1 × 1 = 1。
 示例 2:

 输入: 10
 输出: 36
 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 说明: 你可以假设 n 不小于 2 且不大于 58。
 */
/**
 * @param {number} n
 * @return {number}
 */
// 思路： 从1开始遍历，寻找 能被n 整除且最接近的值
var integerBreak = function (n) {
  let res = [1, 1, 2, 4, 6, 9, 12]
  if (n > 7) {
    for (let i = 7; i < n; i++) {
      res[i] = res[i - 3] * 3
    }
  }

  return res[n - 1]
}
console.log(integerBreak(10))
console.log(integerBreak(9))
console.log(integerBreak(8))
// integerBreak(7)
// integerBreak(6)
console.log(integerBreak(3))
// console.log(integerBreak(0));

// console.log(Math.pow(2, 0));
