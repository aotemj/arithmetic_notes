//Given the root of a binary tree, return the length of the diameter of the
//tree.
//
// The diameter of a binary tree is the length of the longest path between any
//two nodes in a tree. This path may or may not pass through the root.
//
// The length of a path between two nodes is represented by the number of edges
//between them.
//
//
// Example 1:
//
//
//Input: root = [1,2,3,4,5]
//Output: 3
//Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
//
//
// Example 2:
//
//
//Input: root = [1,2]
//Output: 1
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [1, 10⁴].
// -100 <= Node.val <= 100
//
// Related Topics Tree Depth-First Search Binary Tree 👍 6540 👎 402


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
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }

  let max = 0;

  maxDepth(root)
  return max

  function maxDepth(root) {
    if (!root) {
      return 0;
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    max = Math.max(left + right, max);
    return Math.max(left, right) + 1
  }
};


//leetcode submit region end(Prohibit modification and deletion)
