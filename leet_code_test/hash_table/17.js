/*
17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]

提示：

0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  const l = digits.length
  if (l === 0) return []
  if (l === 1) return map[digits]
  let res = []

  let tempRes = []

  iterate(digits, l)

  function iterate (digits, l) {
    if (!digits.length || tempRes.length === l) {
      res.push(tempRes.join(''))
      tempRes.splice(tempRes.length - 1, 1)
      return
    }
    const digit = digits[0]
    const subStrs = map[digit]
    const sl = subStrs.length
    for (let i = 0; i < sl; i++) {
      const temp = subStrs[i]
      tempRes.push(temp)
      iterate(digits.substring(1), l)
    }
    tempRes.splice(tempRes.length - 1, 1)
  }

  return res
}

const digits = '2'
console.log(letterCombinations(digits))
