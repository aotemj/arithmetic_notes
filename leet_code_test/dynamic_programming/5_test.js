/**
 5. 最长回文子串
 给你一个字符串 s，找到 s 中最长的回文子串。

 示例 1：

 输入：s = "babad"
 输出："bab"
 解释："aba" 同样是符合题意的答案。
 示例 2：

 输入：s = "cbbd"
 输出："bb"
 示例 3：

 输入：s = "a"
 输出："a"
 示例 4：

 输入：s = "ac"
 输出："a"

 提示：

 1 <= s.length <= 1000
 s 仅由数字和英文字母（大写和/或小写）组成
 */

/**
 * 思路： 动态规划，依次遍历当前元素，如果当前元素和下一个元素相同，则当前元素右移，
 * 如果当前元素左边一个元素和右边一个元素相同，则left-=1,right+=1,
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let l = s.length; let index = 0; let start = 0; let maxL = 0
  if (l < 2) return s
  while (index < l) {
    let left = index; let right = index
    while (right < l - 1 && s.charAt(index + 1) === s.charAt(index)) {
      index += 1
      right += 1
    }
    while (left > 0 && right < l - 1 && s.charAt(left - 1) === s.charAt(right + 1)) {
      left--
      right++
    }
    index += 1

    if (right - left + 1 > maxL) {
      start = left
      maxL = right - left + 1
    }
  }
  return s.substr(start, maxL)
}

// const s = "babad"
// const s = "cbbd"
// const s = "a"
// const s = "edabcacbade"
// const s = "bb"
const s = 'bbb'
// const s = "ababababa"
console.log(longestPalindrome(s))
