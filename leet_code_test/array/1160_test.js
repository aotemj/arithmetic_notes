/**
 1160. 拼写单词
 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

 注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。

 返回词汇表 words 中你掌握的所有单词的 长度之和。

 示例 1：

 输入：words = ["cat","bt","hat","tree"], chars = "atach"
 输出：6
 解释：
 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
 示例 2：

 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 输出：10
 解释：
 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。

 提示：

 1 <= words.length <= 1000
 1 <= words[i].length, chars.length <= 100
 所有字符串中都仅包含小写英文字母

 */

/**
 * 思路： 依次遍历当前words, 每个中的字符如果在 chars 中出现，则将当前word的长度 和结果长度相加
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let l = words.length; let count = 0
  for (let i = 0; i < l; i++) {
    const word = words[i]
    if (isRemember(word, chars)) {
      count += word.length
    }
  }

  function isRemember (word, chars) {
    const l = word.length; const cl = chars.length; const wMap = {}; const cMap = {}; const maxL = l > cl ? l : cl
    let i = 0
    while (i <= maxL) {
      const wItem = word[i]; const cItem = chars[i]
      if (wItem) {
        if (wMap[wItem]) {
          wMap[wItem] = wMap[wItem] + 1
        } else {
          wMap[wItem] = 1
        }
      }

      if (cItem) {
        if (cMap[cItem]) {
          cMap[cItem] = cMap[cItem] + 1
        } else {
          cMap[cItem] = 1
        }
      }
      i++
    }
    let j = 0
    while (j < l) {
      const item = word[j]
      if (cMap[item] >= wMap[item]) {
        j++
      } else {
        return false
      }
    }
    return true
  }

  return count
}

// let words = ["cat", "bt", "hat", "tree"], chars = "atach"
// let words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"
let words = [
  'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
  'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
  'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
  'boygirdlggnh',
  'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
  'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
  'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
  'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
  'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
  'oxgaskztzroxuntiwlfyufddl',
  'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
  'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
  'eeilfdaookieawrrbvtnqfzcricvhpiv',
  'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
  'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
  'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
  'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
  'teyygdmmyadppuopvqdodaczob',
  'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
  'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs'
]
let chars =
    'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp'
console.log(countCharacters(words, chars))
