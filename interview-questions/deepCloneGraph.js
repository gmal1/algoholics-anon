/**
https://leetcode.com/problems/clone-graph/
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

function cloneGraph(graph) {
  const map = new Map();
  return traverse(graph);

  function traverse(node) {
    if (!node) return
    if (!map.has(node)) {
      const newNode = new Node(node.val);
      map.set(node, newNode);
      newNode.neighbors = node.neighbors.map(traverse);
    }
    return map.get(node);
  }
}