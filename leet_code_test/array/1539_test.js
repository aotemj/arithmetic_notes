/**
 *
 1539. 第 k 个缺失的正整数
 给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。

 请你找到这个数组里第 k 个缺失的正整数。

 示例 1：

 输入：arr = [2,3,4,7,11], k = 5
 输出：9
 解释：缺失的正整数包括 [1,5,6,8,9,10,12,13,...] 。第 5 个缺失的正整数为 9 。
 示例 2：

 输入：arr = [1,2,3,4], k = 2
 输出：6
 解释：缺失的正整数包括 [5,6,7,...] 。第 2 个缺失的正整数为 6 。

 提示：

 1 <= arr.length <= 1000
 1 <= arr[i] <= 1000
 1 <= k <= 1000
 对于所有 1 <= i < j <= arr.length 的 i 和 j 满足 arr[i] < arr[j]
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const l = arr.length, max = arr[l - 1];
  let losingArr = [], fullArr = []
  for (let i = 1; i <= max; i++) {
    fullArr.push(i)
  }
  const fl = fullArr.length
  let left1 = 0, left2 = 0
  while (left1 < l && left2 < fl) {
    if (arr[left1] === fullArr[left2]) {
      left1++;
      left2++;
    } else {
      losingArr.push(fullArr[left2])
      left2++;
    }
  }
  let ll = losingArr.length
  if (ll < k) {
    for (let i = 0; i < k; i++) {
      losingArr.push(arr[l - 1] + 1 + i)
    }
  }
  return losingArr[k - 1];
};
let arr = [2, 3, 4, 7, 11], k = 5
// let arr = [1, 2, 3, 4], k = 2
// let arr = [2], k = 1
// let arr = [5, 6, 7, 8, 9], k = 9
// let arr = [1, 13, 18], k = 17
console.log(findKthPositive(arr, k));

