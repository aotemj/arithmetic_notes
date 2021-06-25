/**
 *
 409. 最长回文串
 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

 注意:
 假设字符串的长度不会超过 1010。

 示例 1:

 输入:
 "abccccdd"

 输出:
 7

 解释:
 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */
/**
 * 根据题意可以得出 偶数个的字符全部可以构成回文，奇数个的只有一个可以完全构成回文， 要找到这个最长的奇数，其他的奇数-1 后也可以变成偶数加入到回文中
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const l = s.length;
    let maxL = 0, map = {}, res = 0
    for (let i = 0; i < l; i++) {
        if (map[s[i]]) {
            map[s[i]] += 1
        } else {
            map[s[i]] = 1
        }
    }
    for (let v of Object.values(map)) {
        if (v % 2 === 0) {
            res += (v - 0)
        } else {
            res += v - 1
            maxL = Math.max(maxL, (v - 0))
        }
    }
    return maxL ? res + 1 : res
};

let s = "bb"
// let s = "abccccdd"
// let s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
console.log(longestPalindrome(s));