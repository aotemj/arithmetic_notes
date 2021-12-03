/**
 69. x 的平方根
 实现 int sqrt(int x) 函数。

 计算并返回 x 的平方根，其中 x 是非负整数。

 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

 示例 1:

 输入: 4
 输出: 2

 示例 2:

 输入: 8
 输出: 2
 说明: 8 的平方根是 2.82842...,
 由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//     if (x === 0) return x
//     for (let i = 1; i <= x; i++) {
//         if (i * i === x || ((i - 1) * (i - 1) < x && x < (i + 1) * (i + 1))) {
//             return i
//         }
//     }
// };

/**
 * method2 binary_search
 * @param x
 * @returns {number|*}
 */
var mySqrt = function (x) {
  let left = 0; let right = x
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
}

console.log(mySqrt(0))
console.log(mySqrt(1))
console.log(mySqrt(2))
console.log(mySqrt(3))
console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(16))
