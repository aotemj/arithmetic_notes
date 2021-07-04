/**
 *
 139. 单词拆分
 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

 说明：

 拆分时可以重复使用字典中的单词。
 你可以假设字典中没有重复的单词。
 示例 1：

 输入: s = "leetcode", wordDict = ["leet", "code"]
 输出: true
 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 示例 2：

 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 输出: true
 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 注意你可以重复使用字典中的单词。
 示例 3：

 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 输出: false

 */

/**
 * 思路：动态规划（官方解法）
 * 假设 当前s 的某个子串 能在字典中查到，name 当前把当前子串根据索引 j分成 0,j 和  j,length-1, 若 0,j 子串可以在字典中查到，name j,length-1 一定可以在字典中查到
 * 用 map 记录当前s 中符合在字典中匹配的长度索引
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let map = {
    0: true
  }
  const sl = s.length
  for (let i = 1; i <= sl; i++) {
    for (let j = 0; j < i; j++) {
      if (map[j] && wordDict.includes(s.substring(j, i))) {
        map[i] = true
        break
      }
    }
  }
  return !!map[sl]
}

// const s = "leetcode", wordDict = ["leet", "code"]
const s = 'catsandog'; const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'] // false
// const s = "applepenapple", wordDict = ["apple", "pen"]
// const s = "a", wordDict = ["b"]
// const s = "bb", wordDict = ["a", "b", "bbb", "bbbb"]
// const s = "cars", wordDict = ["car", "ca", "rs"]
// const s = "a", wordDict = ["a"]
// const s = "cars", wordDict = ["car", "ca", "rs"]

console.log(wordBreak(s, wordDict))
