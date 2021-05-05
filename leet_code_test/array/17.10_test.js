/**
 面试题 17.10. 主要元素
 数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。

 示例 1：

 输入：[1,2,5,9,5,9,5,5,5]
 输出：5


 示例 2：

 输入：[3,2]
 输出：-1


 示例 3：

 输入：[2,2,1,1,1,2,2]
 输出：2
 */


/**
 * method1 hash
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {}
    let l = nums.length
    if (l < 2) return nums[0]
    for (let i = 0; i < l; i++) {
        let item = map[nums[i]]
        if (item) {
            map[nums[i]] = item + 1
            if (map[nums[i]] > l / 2) {
                return nums[i]
            }
        } else {
            map[nums[i]] = 1
        }
    }
    return -1
};


// console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]));
// console.log(majorityElement([3, 2]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1]));
