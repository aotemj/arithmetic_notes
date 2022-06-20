/**
 * 剑指 Offer 32 - II. 从上到下打印二叉树 II
 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 例如:
 给定二叉树: [3,9,20,null,null,15,7],

 3
 / \
 9  20
 /  \
 15   7
 返回其层次遍历结果：

 [
 [3],
 [9,20],
 [15,7]
 ]

 提示：

 节点总数 <= 1000
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return []
  }
  let queue = [[root]]
  let res = []
  while (queue.length) {
    const currNodes = queue.shift()
    let subRes = []
    let subQueue = []
    while (currNodes.length) {
      const currNode = currNodes.shift()
      if (currNode !== null) {
        subRes.push(currNode.val)
        currNode.left && subQueue.push(currNode.left)
        currNode.right && subQueue.push(currNode.right)
        subQueue.length && queue.push(subQueue)
      }
    }
    subRes.length && res.push(subRes)
  }
  return res
}

