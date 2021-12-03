/**
 1013. 将数组分成和相等的三个部分
 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。

 形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 就可以将数组三等分。

 示例 1：

 输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 输出：true
 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 示例 2：

 输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
 输出：false
 示例 3：

 输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
 输出：true
 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

 提示：

 3 <= arr.length <= 5 * 104
 -104 <= arr[i] <= 104
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const l = arr.length
  // 计算所有数的和
  let sum = arr.reduce((curr, prev) => {
    return curr + prev
  })
  // 平均数
  let avg = sum / 3
  let tempArr = new Array(3)
  // 中转容器数组
  tempArr.fill(avg, 0, 3)

  let index = 0
  let lIndex = 0
  // 遍历当前arr，如果
  while (index < 3 && lIndex < l) {
    tempArr[index] -= arr[lIndex]
    if (tempArr[index] === 0) {
      index += 1
    }
    lIndex += 1
  }

  return index === 3
}
const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
// const arr = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]
// const arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]
// const arr = [12, -4, 16, -5, 9, -3, 3, 8, 0] // true
// const arr = [13, -12, 23, -8, -10, 8, -2, 10, 14] // false
// const arr = [10, -7, 13, -14, 30, 16, -3, -16, -27, 27, 19] // true
// const arr = [0, 0, 0, 0] // true
// const arr = [1, -1, 1, -1] // false
console.log(canThreePartsEqualSum(arr))
