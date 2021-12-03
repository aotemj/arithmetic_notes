/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

 示例 1:

 输入: 123
 输出: 321
 示例 2:

 输入: -123
 输出: -321
 示例 3:

 输入: 120
 输出: 21
 注意:

 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 ,− 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max = Math.pow(2, 31) - 1
  let min = -Math.pow(2, 31)
  let target = 0
  // 321
  while (x !== 0) {
    target = target * 10 + x % 10
    x = parseInt(x / 10)
  }
  if (target > max || target < min) target = 0
  console.log(target)

  return target
}
reverse(Math.pow(2, 31))
reverse(321)
reverse(3212122222222222222)
// let x = 321
// x /= 10
// console.log(x);
