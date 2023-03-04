/**
 1013. Partition Array Into Three Parts With Equal Sum
 Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

 Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])



 Example 1:

 Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 Output: true
 Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 Example 2:

 Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
 Output: false
 Example 3:

 Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
 Output: true
 Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
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


/**
 * method2 double point
 * @param arr
 * @returns {boolean}
 */
function canThreePartsEqualSum2(arr: number[]): boolean {
  let length = arr.length,left =0,right = length-1,leftSum =arr[left],rightSum = arr[right],sum=0,avg=0,remind =0
  for(let i=0;i<length;i++){
    sum+=arr[i]
  }
  avg = sum/3
  remind = sum%3
  if(remind) return false
  while((left+1)<right){
    if(leftSum===avg && rightSum === avg){
      return true
    }
    if(leftSum!==avg){
      left+=1
      leftSum+=arr[left]
    }
    if(rightSum!==avg){
      right -=1
      rightSum+=arr[right]
    }
  }
  return false
};
