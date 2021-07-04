/**
 *
 49. 字母异位词分组
 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

 示例:

 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 输出:
 [
 ["ate","eat","tea"],
 ["nat","tan"],
 ["bat"]
 ]
 说明：

 所有输入均为小写字母。
 不考虑答案输出的顺序。

 */

/**
 * 思路：遍历当前数组，根据当前 ASCII码 值和字符串长度，判断当前字符串是否和字符串map中的值相同，如果相同，则表示这两个字符串是字母异位词
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const l = strs.length
  let map = {}
  for (let i = 0; i < l; i++) {
    const item = strs[i]
    const l = item.length
    let chars = []
    for (let j = 0; j < l; j++) {
      const strItem = item.substring(j, j + 1)
      const char = strItem.charCodeAt()
      chars.push(char)
    }

    const charsStr = chars.sort((a, b) => a - b).join('')

    if (map[charsStr]) {
      map[charsStr].push(item)
    } else {
      map[charsStr] = [item]
    }
  }
  return Object.values(map)
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(strs))
