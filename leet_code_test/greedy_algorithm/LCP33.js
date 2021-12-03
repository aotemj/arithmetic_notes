/**
 LCP 33. 蓄水
 给定 N 个无限容量且初始均空的水缸，每个水缸配有一个水桶用来打水，第 i 个水缸配备的水桶容量记作 bucket[i]。小扣有以下两种操作：

 * 升级水桶：选择任意一个水桶，使其容量增加为 bucket[i]+1
 * 蓄水：将全部水桶接满水，倒入各自对应的水缸
 每个水缸对应最低蓄水量记作 vat[i]，返回小扣至少需要多少次操作可以完成所有水缸蓄水要求。

 注意：实际蓄水量 达到或超过 最低蓄水量，即完成蓄水要求。

 示例 1：

 输入：bucket = [1,3], vat = [6,8]

 输出：4

 解释：
 第 1 次操作升级 bucket[0]；
 第 2 ~ 4 次操作均选择蓄水，即可完成蓄水要求。
 vat1.gif

 示例 2：

 输入：bucket = [9,0,1], vat = [0,2,2]

 输出：3

 解释：
 第 1 次操作均选择升级 bucket[1]
 第 2~3 次操作选择蓄水，即可完成蓄水要求。

 提示：

 1 <= bucket.length == vat.length <= 100
 0 <= bucket[i], vat[i] <= 10^4
 */

/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
  const l = bucket.length
  let maxCount = 0
  for (let i = 0; i < l; i++) {
    const item = vat[i]
    if (maxCount < item) {
      maxCount = item
    }
  }
  if (maxCount <= 0) return 0
  let minCount = 10000

  // 遍历蓄水次数
  for (let i = 1; i <= maxCount; i++) {
    // 当蓄水次数为i时，对应的 升级水桶次数为： Math.ceil(vat[j]/i)-bucket[j],操作次数为： i + Math.ceil(vat[j]/i)
    let count = i
    for (let j = 0; j < l; j++) {
      count += Math.max(vat[j] / i - bucket[j], 0)
    }
    minCount = Math.min(count, minCount)
  }
  return Math.ceil(minCount)
}

// const bucket = [9, 0, 1]
// const vat = [0, 2, 2]
// const bucket = [1, 3]
// const vat = [6, 8]
// const bucket = [1]
// const vat = [2]
// const bucket = [0]
// const vat = [0]

const bucket = [16, 29, 42, 70, 42, 9] // 11
const vat = [89, 44, 50, 90, 94, 91]
console.log(storeWater(bucket, vat))
