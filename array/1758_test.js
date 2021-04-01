/**
 1758. 生成交替二进制字符串的最少操作数
 给你一个仅由字符 '0' 和 '1' 组成的字符串 s 。一步操作中，你可以将任一 '0' 变成 '1' ，或者将 '1' 变成 '0' 。

 交替字符串 定义为：如果字符串中不存在相邻两个字符相等的情况，那么该字符串就是交替字符串。例如，字符串 "010" 是交替字符串，而字符串 "0100" 不是。

 返回使 s 变成 交替字符串 所需的 最少 操作数。

 示例 1：

 输入：s = "0100"
 输出：1
 解释：如果将最后一个字符变为 '1' ，s 就变成 "0101" ，即符合交替字符串定义。
 示例 2：

 输入：s = "10"
 输出：0
 解释：s 已经是交替字符串。
 示例 3：

 输入：s = "1111"
 输出：2
 解释：需要 2 步操作得到 "0101" 或 "1010" 。


 提示：

 1 <= s.length <= 104
 s[i] 是 '0' 或 '1'
 */

/**
 * 首先根据目标字符串可得到两个不一样的交替字符串，一个"0" 开头，另一个"1"开头
 * 根据当前两个交替字符串看目标字符串要修改成其中一个的操作数，取最小值即可
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let alternate1 = s.split(''), alternate2 = s.split(''), alternate1ChangeCount = 0, alternate2ChangeCount = 0, i = 0;
  const l = s.length
  while (i < l) {
    if (i % 2 === 0) {
      if (alternate1[i] === '0') {
        alternate1[i] = '1'
        alternate1ChangeCount++
      }

      if (alternate2[i] === '1') {
        alternate2[i] = '0'
        alternate2ChangeCount++
      }
    } else {
      if (alternate1[i] === '1') {
        alternate1[i] = '0'
        alternate1ChangeCount++
      }

      if (alternate2[i] === '0') {
        alternate2[i] = '1'
        alternate2ChangeCount++
      }
    }
    i++
  }
  return alternate1ChangeCount < alternate2ChangeCount ? alternate1ChangeCount : alternate2ChangeCount
};

// let s = "0100"
// let s = "10"
let s = "1111"
console.log(minOperations(s));
