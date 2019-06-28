// undirected graph
class Graph {
  constructor() {
    // Key = vertex, value = array of neighbors.
    this.neighbors = {};
  }

  addEdge(u, v) {
    // add the two node arguments to each others' neighbors lists
    if (this.neighbors[u] === undefined) {
      this.neighbors[u] = [];
    }
    this.neighbors[u].push(v);

    if (this.neighbors[v] === undefined) {
      this.neighbors[v] = [];
    }
    this.neighbors[v].push(u);
  }
}

function bfs(graph, source) {
  // queue of nodes to visit, map of previously visted nodes
  const queue = [{ vertex: source, count: 0 }];
  const visited = { source: true };
  // rather than dequeuing from an array (O(n)), or using a LL,
  // just use a pointer to the leftmost unexplored node in the queue (tail)
  let tail = 0;
  while (tail < queue.length) {
    // get the node reference and count from the queue, increment (essentially pop) tail
    const u = queue[tail++].vertex;
    const count = u.count; // Pop a vertex off the queue.

    console.log('distance from ' + source + ' to ' + u + ': ' + count);
    graph.neighbors[u].forEach(function(v) {
      // if we haven't seen this node before, mark it as visited and push it into the search queue
      if (!visited[v]) {
        visited[v] = true;
        queue.push({ vertex: v, count: count + 1 });
      }
    });
  }
}

function shortestPath(graph, source, target) {
  if (source == target) {
    // Delete these four lines if
    console.log(source); // you want to look for a cycle
    return; // when the source is equal to
  } // the target.
  const queue = [source];
  const visited = { source: true };
  const predecessor = {};
  let tail = 0;
  while (tail < queue.length) {
    const u = queue[tail++]; // Pop a vertex off the queue.
    const neighbors = graph.neighbors[u];
    for (let i = 0; i < neighbors.length; ++i) {
      const v = neighbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;

      if (v === target) {
        // Check if the path is complete.
        const path = [v]; // If so, backtrack through the path and return.
        while (u !== source) {
          path.push(u);
          u = predecessor[u];
        }
        path.push(u);
        path.reverse();
        console.log(path.join(' -> '));
        return;
      }

      predecessor[v] = u;
      queue.push(v);
    }
  }
  console.log('there is no path from ' + source + ' to ' + target);
}
