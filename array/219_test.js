/**
 219. 存在重复元素 II
 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，
 使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

 示例 1:

 输入: nums = [1,2,3,1], k = 3
 输出: true
 示例 2:

 输入: nums = [1,0,1,1], k = 1
 输出: true
 示例 3:

 输入: nums = [1,2,3,1,2,3], k = 2
 输出: false
 */

/**
 * 思路：
   遍历当前数组，使用map记录每个元素出现时的索引，
   如果有重复值，则比较当前索引和上一个索引的差值的绝对值，如果<=k则跳出循环
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let l = nums.length, map = {}
    for (let i = 0; i < l; i++) {
        const item = nums[i]
        if (map[item]) {
            if (Math.abs(map[item][map[item].length - 1] - i) <= k) {
                return true
            }
            map[item].push(i)
        } else {
            map[item] = [i]
        }
    }
    return false
};

// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1], 1));
