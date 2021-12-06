//Given the root of a binary tree, return its maximum depth.
//
// A binary tree's maximum depth is the number of nodes along the longest path
//from the root node down to the farthest leaf node.
//
//
// Example 1:
//
//
//Input: root = [3,9,20,null,null,15,7]
//Output: 3
//
//
// Example 2:
//
//
//Input: root = [1,null,2]
//Output: 2
//
//
// Example 3:
//
//
//Input: root = []
//Output: 0
//
//
// Example 4:
//
//
//Input: root = [0]
//Output: 1
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [0, 10⁴].
// -100 <= Node.val <= 100
//
// Related Topics Tree Depth-First Search Breadth-First Search Binary Tree 👍 53
//28 👎 112


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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  return traversalTree(root, 1)
};

function traversalTree(root, index) {
  if (!root) {
    return index
  }
  if (root.left || root.right) {
    index = index + 1
  }
  return Math.max(traversalTree(root.left, index), traversalTree(root.right, index))
}

//leetcode submit region end(Prohibit modification and deletion)
