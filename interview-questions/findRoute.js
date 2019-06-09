// given a directed graph and two nodes, find out whether
// there exists a route between the two nodes

const Graph = require('../data-structures/Graph');

function search(graph, start, end) {
  // cast both params into strings
  start = start.toString();
  end = end.toString();
  // return false if either of the input values aren't present in graph
  if (!graph.hasNode(start) || !graph.hasNode(end)) {
    return false;
  }
  if (start === end) return true;

  const queue = [];
  const visited = new Set();

  queue.push(start);
  while (queue.length) {
    // TODO replace array with queue
    const currentNode = queue.shift();
    if (currentNode === end) return true;
    visited.add(currentNode);

    const edges = graph.findEdges(currentNode);
    for (const e of Object.keys(edges)) {
      if (!visited.has(e)) {
        queue.push(e);
        visited.add(e);
      }
    }
  }
  return false;
}
