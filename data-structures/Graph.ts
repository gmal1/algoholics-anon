import { nodeInternals } from "stack-utils";

class Graph<T> {
  nodes: Map<String, Vertex<T>>;
  directed: boolean;
  constructor() {
    this.nodes = new Map<String, Vertex<T>>();
  }

  getVertex(vertex: String) {
    return this.nodes.get(vertex);
  }
  
  addVertex(vertex: String, value: T): void {
    if (this.nodes.has(vertex)) return;

    const newVertex: Vertex<T> = new Vertex<T>(value);
    this.nodes.set(vertex, newVertex);
  }

  removeVertex() {

  }

  addEdge() {

  }

  removeEdge() {

  }

  maxDegree() {

  }
}

class Vertex<T> {
  value: T;
  edges: Array<Vertex<T>>;

  constructor(value: T) {
    this.value = value;
    this.edges = [];
  }

  addAdjacent(vertex: Vertex<T>): void {
    this.edges.push(vertex);
  }

  removeAdjacent(vertex: Vertex<T>): Vertex<T> {
    const index = this.edges.indexOf(vertex);
    if (index !== -1) {
      this.edges.splice(index, 1);
      return vertex;
    }
  }

  getAdjacent(): Array<Vertex<T>> {
    return this.edges;
  }

  degree(): number {
    return this.edges.length;
  }

  isAdjacent(vertex: Vertex<T>) {
    return this.edges.includes(vertex);
  }
}

export default Graph;