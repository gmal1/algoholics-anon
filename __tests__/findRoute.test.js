const findRoute = require('../interview-questions/findRoute');
const Graph = require('../data-structures/Graph');

describe('findRoute tests', () => {
  const g = new Graph();
  g.addNode(1);
  g.addNode(2);
  g.addNode(3);
  g.addNode(4);
  g.addNode(5);
  g.addNode(6);
  g.addEdge(1, 2);
  g.addEdge(1, 3);
  g.addEdge(3, 6);
  g.addEdge(2, 3);
  g.addEdge(4, 5);

  it('returns true if a route between two nodes exists', () => {
    expect(findRoute(g, 1, 6)).toBe(true);
  });

  it('returns false if graph does not contain start node', () => {
    expect(findRoute(g, 7, 1)).toBe(false);
  });

  it('returns false if graph does not contain end node', () => {
    expect(findRoute(g, 1, 7)).toBe(false);
  });

  it('returns false if the two nodes are unconnected', () => {
    expect(findRoute(g, 1, 4)).toBe(false);
  });
});
