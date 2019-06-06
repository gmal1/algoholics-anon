const MaxHeap = require('../dailyTasks/MaxHeap.js');

describe('max heap tests', () => {
  const arr2 = [1, 4, 5, 6, 2, 10, 3, 17, 0, 10];

  it('constructor returns a new MaxHeap', () => {
    const testHeap = new MaxHeap();
    const options = [{ arr: [null] }, { arr: [] }];
    expect(options).toContainEqual(testHeap);
  });

  it('pushing a node works', () => {
    const testHeap = new MaxHeap();
    testHeap.push(5);
    const options = [{ arr: [null, 5] }, { arr: [5] }];
    expect(options).toContainEqual(testHeap);
  });

  it('pushing many nodes works', () => {
    const testHeap = new MaxHeap();
    for (let el of arr2) {
      testHeap.push(el);
    }
    const options = [{ arr: [null, 17, 10, 6, 5, 10, 4, 3, 1, 0, 2] }, { arr: [17, 10, 6, 5, 10, 4, 3, 1, 0, 2] }];
    expect(options).toContainEqual(testHeap);
  });

  it('delMax returns max element', () => {
    const testHeap = new MaxHeap();
    for (let el of arr2) {
      testHeap.push(el);
    }
    expect(testHeap.delMax()).toBe(17);
  });

  it('delMax successfully re-heapifies the array', () => {
    const testHeap = new MaxHeap();
    for (let el of arr2) {
      testHeap.push(el);
    }
    testHeap.delMax();
    const options = [{ arr: [null, 10, 10, 6, 5, 2, 4, 3, 1, 0] }, { arr: [10, 10, 6, 5, 2, 4, 3, 1, 0] }];
    expect(options).toContainEqual(testHeap);
  });
});
