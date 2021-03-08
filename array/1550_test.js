/**
 1550. 存在连续三个奇数的数组
 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。

 示例 1：

 输入：arr = [2,6,4,1]
 输出：false
 解释：不存在连续三个元素都是奇数的情况。
 示例 2：

 输入：arr = [1,2,34,3,4,5,7,23,12]
 输出：true
 解释：存在连续三个元素都是奇数的情况，即 [5,7,23] 。

 提示：

 1 <= arr.length <= 1000
 1 <= arr[i] <= 1000
 */


/**
 * 思路：
 * 遍历当前数组，如果当前值是奇数，则判断下一个是否是奇数，如果是，则判断下下一个是否为奇数，如果是则跳出循环
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let l = arr.length
    for (let i = 0; i < l - 2; i++) {
        if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) {
            return true
        } else {
            continue
        }
    }

    function isOdd(num) {
        return num % 2 !== 0
    }

    return false
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
console.log(threeConsecutiveOdds([5, 7, 0, 23]));
