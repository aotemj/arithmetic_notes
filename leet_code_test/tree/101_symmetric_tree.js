//Given the root of a binary tree, check whether it is a mirror of itself (i.e.,
// symmetric around its center).
//
//
// Example 1:
//
//
//Input: root = [1,2,2,3,4,4,3]
//Output: true
//
//
// Example 2:
//
//
//Input: root = [1,2,2,null,3,null,3]
//Output: false
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
//
//
//
//Follow up: Could you solve it both recursively and iteratively? Related
//Topics Tree Depth-First Search Breadth-First Search Binary Tree 👍 7931 👎 197


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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  return compare(root.left, root.right)
};

function compare(first, second) {
  if (!first && !second) {
    return true
  }
  if (!first || !second) {
    return false
  }

  if (first.val !== second.val) {
    return false
  }

  return compare(first.left, second.right) && compare(second.left, first.right)
}

//leetcode submit region end(Prohibit modification and deletion)
