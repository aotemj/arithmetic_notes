/**
 * 43. Multiply Strings
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Example 1:
 *
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * Example 2:
 *
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 *
 * Constraints:
 *
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const length1 = num1.length
  const length2 = num2.length
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  let res = '0'

  for (let j = length2 - 1; j >= 0; j--) {
    let subRes = ''
    let item2 = num2[j]
    let add = 0
    for (let i = length1 - 1; i >= 0; i--) {
      let item1 = num1[i]
      const res = item1 * item2 + add
      add = Math.floor(res / 10)
      const remind = res % 10
      if (i == 0) {
        subRes = `${res}${subRes}`
      } else {
        subRes = `${remind}${subRes}`
      }
    }
    for (let k = 0; k < length2 - j - 1; k++) {
      subRes += '0'
    }
    res = addStrings(subRes, res)
  }
  return res
}

var addStrings = function (num1, num2) {
  let length1 = num1.length
  let length2 = num2.length
  let i = length1 - 1
  let j = length2 - 1
  let add = 0
  let ans = ''
  while (i >= 0 || j >= 0 || add !== 0) {
    const item1 = i >= 0 ? num1[i] - 0 : 0
    const item2 = j >= 0 ? num2[j] - 0 : 0
    const result = item1 + item2 + add
    add = Math.floor(result / 10)
    ans = `${result % 10}${ans}`
    i--
    j--
  }
  return ans
}
