// 2. 从上到下打印二叉树，每一层打印到一行
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印倒一行
// 如： 给定 二叉树： [3,9,20,null,null,15,7]
//        3
//      /  \
//    9    20
//        /  \
//       15   7
// 输出
// [
//  [3],
//  [9,20],
//  [15,7]
// ]
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
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let queue = [[root]]
  let res = []
  while (queue.length) {
    let currentQueue = queue.shift()
    let innerRes = []

    while (currentQueue.length) {
      let current = currentQueue.shift()
      innerRes.push(current.val === undefined ? 0 : current.val)

      if (current.left !== null) {
        currentQueue.push(current.left)
      }
      if (current.right !== null) {
        currentQueue.push(current.right)
      }
    }
    res.push(innerRes)
  }
  return res
}
