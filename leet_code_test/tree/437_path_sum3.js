//Given the root of a binary tree and an integer targetSum, return the number
//of paths where the sum of the values along the path equals targetSum.
//
// The path does not need to start or end at the root or a leaf, but it must go
//downwards (i.e., traveling only from parent nodes to child nodes).
//
//
// Example 1:
//
//
//Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
//Output: 3
//Explanation: The paths that sum to 8 are shown.
//
//
// Example 2:
//
//
//Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
//Output: 3
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [0, 1000].
// -10⁹ <= Node.val <= 10⁹
// -1000 <= targetSum <= 1000
//
// Related Topics Tree Depth-First Search Binary Tree 👍 6721 👎 348


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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  sum += subPathSum(root, targetSum);
  sum += pathSum(root.left, targetSum);
  sum += pathSum(root.right, targetSum);
  return sum;
};

function subPathSum(root, targetSum) {
  if (root === null) {
    return 0;
  }

  let sum = 0, val = root.val;
  if (root.val === targetSum) {
    sum++;
  }

  sum += subPathSum(root.left, targetSum - val);
  sum += subPathSum(root.right, targetSum - val);
  return sum;
}

//leetcode submit region end(Prohibit modification and deletion)
