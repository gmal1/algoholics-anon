/**
leetcode 138: Copy List with Random Pointer
https://leetcode.com/problems/copy-list-with-random-pointer/

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

function copyRandomList(head) {
  const map = new Map();
  return traverse(head, map);

  function traverse(node) {
    if (!node) return null;
    if (!map.has(node)) {
      const newNode = new Node(node.val);
      map.set(node, newNode);
      newNode.next = traverse(node.next);
      newNode.random = traverse(node.random);
    }
    return map.get(node);
  }
}

// iterative:
// var copyRandomList = function(head) {
//     if (!head) return null;
//     const dummy = new Node();
//     const map = new Map();

//     let src = head;
//     let dest = dummy;
//     while (src) {
//         dest.next = new Node(src.val);
//         map.set(src, dest.next);
//         src = src.next;
//         dest = dest.next;
//     }

//     for (let [src, dest] of map) {
//         dest.random = map.get(src.random) || null;
//     }

//     return dummy.next;
// };
