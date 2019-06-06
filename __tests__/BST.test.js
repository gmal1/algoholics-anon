const BST = require('../dailyTasks/BST.js');
const util = require('util'); // node core module used for console logs of deeply nested objects

describe('BST tests', () => {
  // REPEATS NOT ALLOWED IN THESE BSTs
  const arr0 = [];
  const arr1 = [10];
  const arr2 = [1, 4, 5, 6, 2, 10, 3, 17, 0];
  const testTree = new BST(12);
  for (let el of arr2) {
    testTree.add(el);
  }

  it('constructor returns a new BST', () => {
    expect(new BST(10)).toEqual({ val: 10, left: null, right: null });
  });

  it('can add new node', () => {
    const testTree = new BST(12);
    testTree.add(10);
    expect(testTree).toEqual({ val: 12, left: { val: 10, left: null, right: null }, right: null });
  });

  it('can add lots of new nodes', () => {
    // console.log(util.inspect(testTree, { showHidden: false, depth: null }));
    expect(testTree).toEqual({
      val: 12,
      left: {
        val: 1,
        left: { val: 0, left: null, right: null },
        right: {
          val: 4,
          left: {
            val: 2,
            left: null,
            right: { val: 3, left: null, right: null },
          },
          right: {
            val: 5,
            left: null,
            right: {
              val: 6,
              left: null,
              right: { val: 10, left: null, right: null },
            },
          },
        },
      },
      right: { val: 17, left: null, right: null },
    });
  });

  it('contains returns true for existing root element', () => {
    expect(testTree.contains(12)).toBe(true);
  });

  it('contains returns true for existing leaf element', () => {
    expect(testTree.contains(10)).toBe(true);
  });

  it('contains returns false for nonexistent element', () => {
    expect(testTree.contains(420)).toBe(false);
  });

  it('max returns max element in BST', () => {
    expect(testTree.max()).toBe(17);
  });

  it('min returns min element in BST', () => {
    expect(testTree.min()).toBe(0);
  });
});
