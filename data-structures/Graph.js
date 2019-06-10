class Graph {
  constructor() {
    this.nodes = {};
  }

  addEdge(node, edge) {
    if (!this.nodes[node]) {
      return 'node does not exist';
    }
    if (this.nodes[node][edge]) {
      return `edge ${node}-${edge} already exists`;
    }
    this.nodes[node][edge] = true;
  }

  addNode(value) {
    if (this.nodes[value]) {
      return 'this node already exists';
    }
    this.nodes[value] = {};
  }

  findEdges(node) {
    if (!this.nodes[node]) {
      return 'node does not exist';
    }
    return this.nodes[node];
  }

  hasEdge(node, edge) {
    if (!this.hasNode(node)) {
      return false;
    }
    return this.nodes[node][edge];
  }

  hasNode(node) {
    return this.nodes[node] !== undefined;
  }

  removeEdge(node, edge) {
    if (!this.hasNode(node)) {
      return 'node does not exist';
    }
    delete this.nodes[node][edge];
  }

  removeNode(node) {
    if (!this.hasNode(node)) {
      return 'node does not exist';
    }
    delete this.nodes[node];
    // once the ndoe is deleted, ensure that remaining nodes
    // aren't pointing to deleted node
    for (const item of Object.keys(this.nodes)) {
      if (this.nodes[item][node]) {
        delete this.nodes[item][node];
      }
    }
  }
}

module.exports = Graph;
