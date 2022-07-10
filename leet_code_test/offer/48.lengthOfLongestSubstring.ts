/**
 * 剑指 Offer 48. 最长不含重复字符的子字符串
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *      提示：* s.length <= 40000
 */
function lengthOfLongestSubstring(s: string): number {
  let length = s.length;
  let maxLength = 0;
  let subArr = [];
  let i = 0
  while (i < length) {
    let item = s[i]
    let index = subArr.indexOf(item)
    if (index !== -1) {
      subArr.splice(0, index + 1)
    }
    subArr.push(item)
    maxLength = Math.max(maxLength, subArr.length)
    i++
  }
  return maxLength
};

// let s = 'abcabcbb'
// let s = 'bbbbb'
// let s = 'pwwkew'
let s = "dvdf"
// let s = 'a'
// let s = 'azazb'
console.log(lengthOfLongestSubstring(s));
