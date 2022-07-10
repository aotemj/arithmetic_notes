/**
 * 剑指 Offer 46. 把数字翻译成字符串
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 *
 *
 *
 * 示例 1:
 *
 * 输入: 12258
 * 输出: 5
 * 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 *
 *
 * 提示：
 *
 * 0 <= num < 231
 * 通过次数194,872提交次数373,176
 */
/**
 * 思路：
 *   动态规划:
 *    dp[i] = dp[i-1]+ 前一个数字的最后一个数字是否可与当前数字形成翻译 ？dp[i-2]:0
 */
function translateNum(num: number): number {
  let str = String(num)
  let numArr: number[] = str.split('').map(item => Number(item))
  let length = numArr.length;
  let dp: {
    [key: string]: number
  } = {}
  dp[0] = 1
  const targetNum = Number(`${numArr[0]}${numArr[1]}`)
  dp[1] = checkTranslate(targetNum) ? 2 : 1
  for (let i = 2; i < length; i++) {
    const targetNum = Number(`${numArr[i - 1]}${numArr[i]}`)

    dp[i] = dp[i - 1] + (checkTranslate(targetNum) ? dp[i - 2] : 0)
  }
  return dp[length - 1]
}

function checkTranslate(number: number): boolean {
  return number > 9 && number < 26
}

let num = 12258
console.log(translateNum(num));
