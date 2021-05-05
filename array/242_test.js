/**
 *
 242. 有效的字母异位词
 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

 示例 1:

 输入: s = "anagram", t = "nagaram"
 输出: true
 示例 2:

 输入: s = "rat", t = "car"
 输出: false
 说明:
 你可以假设字符串只包含小写字母。

 进阶:
 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let isAnagram = true
    const sLength = s.length, tLength = t.length,
        maxLength = sLength > tLength ? sLength : tLength,
        minLength = sLength > tLength ? tLength : sLength,
        maxString = sLength >= tLength ? s : t,
        minString = sLength >= tLength ? t : s;
    let map = {}
    for (let i = 0; i < maxLength; i++) {
        const item = maxString[i]
        if (!map[item]) {
            map[item] = 1
        } else {
            map[item] += 1
        }
    }
    for (let i = 0; i < minLength; i++) {
        const item = minString[i]
        if (map[item]) {
            map[item] -= 1
        }
    }

    for (let val of Object.values(map)) {
        if (val) {
            isAnagram = false
            break
        }
    }
    return isAnagram
};
// const s = "anagram", t = "nagaram"
const s = "rat", t = "car"
// const s = "a", t = "ab"
console.log(isAnagram(s, t));