/**
 * 剑指 Offer 50. 第一个只出现一次的字符
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 *
 * 示例 1:
 *
 * 输入：s = "abaccdeff"
 * 输出：'b'
 * 示例 2:
 *
 * 输入：s = ""
 * 输出：' '
 *
 *
 * 限制：
 *
 * 0 <= s 的长度 <= 50000
 */
/**
 * @param {string} s
 * @return {character}
 */
// 使用 map 记录当前字符出现的次数
// 并判断后续子串中有没有当前字符
// 如果有，并且 map中没有记录，则表示当前字符为唯一字符
// 否则，在map中记录当前字符已经出现过
// 返回计算结果即可
var firstUniqChar = function (s) {
  if (s === '') return ' '
  let sLength = s.length
  if (sLength === 1) return s
  let map = {}
  let res = ' '
  for (let i = 0; i < sLength; i++) {
    let currentChar = s[i]
    let subStr = s.substring(i + 1)
    if (subStr.indexOf(currentChar) === -1 && !map[currentChar]) {
      res = currentChar
      break
    } else {
      map[currentChar] = 1
    }
  }
  return res
}
// let s = 'abaccbdedfef'
let s = ''
console.log(firstUniqChar(s))
