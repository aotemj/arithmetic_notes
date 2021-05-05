/**
 *
 228. 汇总区间
 给定一个无重复元素的有序整数数组 nums 。

 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

 列表中的每个区间范围 [a,b] 应该按如下格式输出：

 "a->b" ，如果 a != b
 "a" ，如果 a == b

 示例 1：

 输入：nums = [0,1,2,4,5,7]
 输出：["0->2","4->5","7"]
 解释：区间范围是：
 [0,2] --> "0->2"
 [4,5] --> "4->5"
 [7,7] --> "7"
 示例 2：

 输入：nums = [0,2,3,4,6,8,9]
 输出：["0","2->4","6","8->9"]
 解释：区间范围是：
 [0,0] --> "0"
 [2,4] --> "2->4"
 [6,6] --> "6"
 [8,9] --> "8->9"
 示例 3：

 输入：nums = []
 输出：[]
 示例 4：

 输入：nums = [-1]
 输出：["-1"]
 示例 5：

 输入：nums = [0]
 输出：["0"]
 */

/**
 * 思路：
 * 定义开始、结束指针， * 如果有连续的值则存在区间，否则是单个值，将当指针记录，然后向后移动指针，再次进行比较，直到结束
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let l = nums.length, res = [], start = nums[0], end = start

    for (let i = 0; i < l; i++) {
        let current = nums[i], next = nums[i + 1]
        if (next - current === 1) {
            end += 1
        } else {
            if (start === end) {
                res.push(`${start}`)
            } else {
                res.push(`${start}->${end}`)
            }
            start = next
            end = next
        }
    }
    return res
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([0,1,2,4,5,7]));
