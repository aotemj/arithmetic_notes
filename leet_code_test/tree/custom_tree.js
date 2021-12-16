/**
 * 从上到下打印二叉树，每一层打印到一行
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印
 *  例如： 给定二叉树： [3,9,20,null,null,15,7]
 *
 *            3
 *           / \
 *          9  20
 *            /  \
 *           15   7
 *   输出：
 *   [
 *      [3],
 *      [9,20],
 *      [15,7]
 *   ]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var levelOrder = function (root) {
  let queue = [root]
  let res = []

  while (queue.length) {
    let curr = queue.shift()

    let innerRes = []
    for (let i = queue.length; i > 0; i--) {
      innerRes.push(curr.val)
      if (root.left) {
        queue.push(root.left)
      }
      if (root.right) {
        queue.push(root.right)
      }
    }
    res.push(innerRes)
  }

  return res
}
