/**
 * 剑指 Offer 06. 从尾到头打印链表
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 *
 *
 *
 * 示例 1：
 *
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 *
 *
 * 限制：
 *
 * 0 <= 链表长度 <= 10000
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 思路： 如果head 不为null， 则一直将head.next 赋值为 head,直到 head.next 为null
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let res = []
  while (head) {
    res.unshift(head.val)
    if (head) {
      head = head.next
    } else {
      head = null
    }
  }
  return res
}
