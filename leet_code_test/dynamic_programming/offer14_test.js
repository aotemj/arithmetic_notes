/**
 剑指 Offer 14- I. 剪绳子
 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

 示例 1：

 输入: 2
 输出: 1
 解释: 2 = 1 + 1, 1 × 1 = 1
 示例 2:

 输入: 10
 输出: 36
 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
 提示：

 2 <= n <= 58
 注意：本题与主站 343 题相同：https://leetcode-cn.com/problems/integer-break/
 */

/**
 * 思路： 依次计算 n 除以【1,n-1】 之间的商和余数，并计算 商 、被除数 和余数的
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let max = 0
  for (let i = 1; i < n; i++) {
    const remainder = n % i // 余数
    const quotient = parseInt(n / i) // 商
    let res = 0
    if (quotient === 1) {
      res = i * remainder
    } else {
      res = Math.max(Math.pow(i, quotient - 1) * (i + remainder), Math.pow(i, quotient) * remainder)
    }
    max = Math.max(max, res)
  }
  return max
}

console.log(cuttingRope(8))
