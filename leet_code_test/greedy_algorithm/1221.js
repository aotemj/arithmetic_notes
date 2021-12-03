/**
 1221. 分割平衡字符串

 在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。

 给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

 注意：分割得到的每个字符串都必须是平衡字符串。

 返回可以通过分割得到的平衡字符串的 最大数量 。

 示例 1：

 输入：s = "RLRRLLRLRL"
 输出：4
 解释：s 可以分割为 "RL"、"RRLL"、"RL"、"RL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
 示例 2：

 输入：s = "RLLLLRRRLR"
 输出：3
 解释：s 可以分割为 "RL"、"LLLRRR"、"LR" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
 示例 3：

 输入：s = "LLLLRRRR"
 输出：1
 解释：s 只能保持原样 "LLLLRRRR".
 示例 4：

 输入：s = "RLRRRLLRLL"
 输出：2
 解释：s 可以分割为 "RL"、"RRRLLRLL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。

 提示：

 1 <= s.length <= 1000
 s[i] = 'L' 或 'R'
 s 是一个 平衡 字符串

 */

/**
 * 方法1：双指针法
 * @param {string} s
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var balancedStringSplit = function (s) {
  const l = s.length
  let start = 0; let end = 2; let RCount = 0; let LCount = 0; let maxCount = 0
  while (end <= l) {
    const subStr = s.substring(start, end); const sl = subStr.length
    let index = 0
    while (index < sl) {
      const item = subStr[index]
      if (item === 'R') {
        RCount++
      } else {
        LCount++
      }
      index += 1
    }
    if (RCount === LCount) {
      start += sl
      end += 2
      maxCount += 1
      RCount = 0
      LCount = 0
    } else {
      end += 2
      RCount = 0
      LCount = 0
    }
  }
  return maxCount
}

/**
 * 方法2： 堆栈法
 * @param s
 */
var balancedStringSplit2 = function (s) {
  const l = s.length
  let count = 0; let temp = 0
  for (let i = 0; i < l; i++) {
    const item = s[i]
    if (item === 'R') {
      temp -= 1
    } else {
      temp += 1
    }
    if (!temp) {
      count += 1
    }
  }
  return count
}

const s = 'RLRRLLRLRL'
// const s = "LLLLRRRR"
// const s = "RLRRRLLRLL"
console.log(balancedStringSplit2(s))
