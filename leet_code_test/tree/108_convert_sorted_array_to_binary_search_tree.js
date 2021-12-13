//Given an integer array nums where the elements are sorted in ascending order,
//convert it to a height-balanced binary search tree.
//
// A height-balanced binary tree is a binary tree in which the depth of the two
//subtrees of every node never differs by more than one.
//
//
// Example 1:
//
//
//Input: nums = [-10,-3,0,5,9]
//Output: [0,-3,9,-10,null,5]
//Explanation: [0,-10,5,null,-3,null,9] is also accepted:
//
//
//
// Example 2:
//
//
//Input: nums = [1,3]
//Output: [3,1]
//Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
//
//
//
// Constraints:
//
//
// 1 <= nums.length <= 10⁴
// -10⁴ <= nums[i] <= 10⁴
// nums is sorted in a strictly increasing order.
//
// Related Topics Array Divide and Conquer Tree Binary Search Tree Binary Tree ?
//? 5337 👎 328


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) {
    return null
  }
  return helper(nums, 0, nums.length - 1)

  function helper(nums, low, high) {
    if (low > high) {
      return null
    }
    let middle = Math.floor((high + low) / 2) // NOTE: the middle must be a integer
    let head = new TreeNode(nums[middle])
    head.left = helper(nums, low, middle - 1)
    head.right = helper(nums, middle + 1, high)
    return head
  }
};


//leetcode submit region end(Prohibit modification and deletion)
