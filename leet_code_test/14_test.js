/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"
 示例 2:

 输入: ["dog","racecar","car"]
 输出: ""
 解释: 输入不存在公共前缀。
 说明:

 所有输入只包含小写字母 a-z。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let firstStr = strs[0]
  let subIndex = 1
  let commonStartStr = firstStr.substring(0, subIndex)
  if (!commonStartStr) return ''
  while (firstStr.length >= commonStartStr.length && subIndex <= firstStr.length) {
    let index = 1
    let flag = true
    while (index < strs.length && flag) {
      let currentStr = strs[index]
      if (!currentStr.startsWith(commonStartStr)) {
        flag = false
        break
      }
      index++
    }
    if (flag) {
      subIndex++
      commonStartStr = firstStr.substring(0, subIndex)
    } else {
      commonStartStr = firstStr.substring(0, subIndex - 1)
      break
    }
  }
  return commonStartStr || ''
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["c", "c"]));
console.log(longestCommonPrefix(['', '']))
