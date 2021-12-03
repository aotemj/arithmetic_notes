/**
 *
 22. 括号生成

 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 示例 1：

 输入：n = 3
 输出：["((()))","(()())","(())()","()(())","()()()"]
 示例 2：

 输入：n = 1
 输出：["()"]

 提示：

 1 <= n <= 8
 */

/**
 * 思路：n 个()的结果可以由 n-1 个()的结果 +  一个 () 的结果构成，() 可以加在 n-1 的结果中每一项 的()
 * @param {number} n
 * @return {string[]}
 */
let map = {
  1: ['()']
}
var generateParenthesis = function (n) {
  if (n === 1) return ['()']
  if (map[n]) return map[n]

  let res = []; let preRes = generateParenthesis(n - 1); let pl = preRes.length
  for (let i = 0; i < pl; i++) {
    const item = preRes[i]
    res.push(`(${item})`)
    res.push(`()${item}`)
    res.push(`${item}()`)
    const l = item.length
    for (let j = 0; j < l - 1; j++) {
      const subStr = item.substring(j, j + 2)
      if (subStr === '()') {
        // 在括号右边增加
        res.push(`${item.substring(0, j + 2)}()${item.substring(j + 2)}`)
        // 在括号左边增加
        res.push(`${item.substring(0, j - 1)}()${item.substring(j - 1)}`)
        // 在括号内部添加括号
        res.push(`${item.substring(0, j + 1)}()${item.substring(j + 1)}`)
      }
    }
  }
  res = [...new Set(res)]
  map[n] = res
  return res
}

const n = 5
console.log(generateParenthesis(n))
