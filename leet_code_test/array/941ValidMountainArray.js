/**
 *
 * 941. 有效的山脉数组
 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。

 让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：

 arr.length >= 3
 在 0 < i < arr.length - 1 条件下，存在 i 使得：
 arr[0] < arr[1] < ... arr[i-1] < arr[i]
 arr[i] > arr[i+1] > ... > arr[arr.length - 1]

 示例 1：

 输入：arr = [2,1]
 输出：false
 示例 2：

 输入：arr = [3,5,5]
 输出：false
 示例 3：

 输入：arr = [0,3,2,1]
 输出：true


 提示：

 1 <= arr.length <= 104
 0 <= arr[i] <= 104
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let length = arr.length;
  if (length < 3) {
    return false;
  }
  let res = true;
  let flag = true;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < length - 1; i++) {
    let curr = arr[i];
    let next = arr[i + 1];
    let max = arr[0];
    // 由小到大
    if (flag) {
      if (curr === next) {
        res = false;
        break;
      } else if (curr < next) {
        arr1.push(curr);
        max = next;
      } else {
        if (curr > next) {
          flag = false;
          arr2.push(curr);
        }
      }
    } else {
      if (next === curr) {
        res = false;
        break;
      } else if (next > curr) {
        res = false;
        break;
      } else {
        arr2.push(curr)
      }
    }
  }
  return  res && !!arr1.length && !!arr2.length;
};
let arr = [2, 1];
// let arr = [3, 5, 5];
// let arr = [0, 3, 2, 1];
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = [1, 9, 1];
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(validMountainArray(arr));
