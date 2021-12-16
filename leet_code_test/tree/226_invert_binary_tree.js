//Given the root of a binary tree, invert the tree, and return its root.
//
//
// Example 1:
//
//
//Input: root = [4,2,7,1,3,6,9]
//Output: [4,7,2,9,6,3,1]
//
//
// Example 2:
//
//
//Input: root = [2,1,3]
//Output: [2,3,1]
//
//
// Example 3:
//
//
//Input: root = []
//Output: []
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
//
// Related Topics Tree Depth-First Search Breadth-First Search Binary Tree 👍 70
//70 👎 97


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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root
  }

  return invertRecursion(root);

  function invertRecursion(root) {
    if (!root) return null;
    let newLeft = invertRecursion(root.left)
    let newRight = invertRecursion(root.right);
    root.right = newLeft;
    root.left = newRight;
    return root
  }
};
//leetcode submit region end(Prohibit modification and deletion)
