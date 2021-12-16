//Given the roots of two binary trees p and q, write a function to check if
//they are the same or not.
//
// Two binary trees are considered the same if they are structurally identical,
//and the nodes have the same value.
//
//
// Example 1:
//
//
//Input: p = [1,2,3], q = [1,2,3]
//Output: true
//
//
// Example 2:
//
//
//Input: p = [1,2], q = [1,null,2]
//Output: false
//
//
// Example 3:
//
//
//Input: p = [1,2,1], q = [1,1,2]
//Output: false
//
//
//
// Constraints:
//
//
// The number of nodes in both trees is in the range [0, 100].
// -10⁴ <= Node.val <= 10⁴
//
// Related Topics Tree Depth-First Search Breadth-First Search Binary Tree 👍 44
//76 👎 113


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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let res = true
  let currP = p, currQ = q
  while (true) {
    if (currP && currQ) {
      if (currP.val === currQ.val) {
        let resLeft = isSameTree(currP.left, currQ.left)
        if (resLeft) {
          let resRight = isSameTree(currP.right, currQ.right)
          if (resRight) {
            res = true
            break
          } else {
            res = false
            break
          }
        } else {
          res = false
          break
        }
      } else {
        res = false
        break
      }
    } else if (!currP && !currQ) {
      res = true
      break
    } else {
      res = false
      break
    }
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
