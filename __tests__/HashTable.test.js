const HashTable = require('../data-structures/HashTable.js');

describe('hash table tests', () => {
  const arr1 = [4, 12, 0];
  const arr2 = [1, 4, 5, 6, 2, 10, 3, 17, 0, 10];

  it('constructor returns a hash table', () => {
    const newTable = new HashTable();
    expect(newTable).toEqual({ SIZE: 16, storage: new Array(16), numberOfItems: 0 });
  });

  it('can add elements', () => {
    const newTable = new HashTable();
    arr1.forEach((el, idx) => {
      newTable.set(idx, el);
    });
    expect(newTable).toEqual({
      SIZE: 16,
      storage: [{ '0': 4, '1': 12, '2': 0 }].concat(new Array(15).fill(undefined, 1, 16)),
      numberOfItems: 3,
    });
  });

  it('can add many elements while handling resizing', () => {
    const newTable = new HashTable();
    arr2.forEach((el, idx) => {
      newTable.set(idx, el);
    });
    const result = {
      SIZE: 64,
      storage: [
        { '8': 0, '9': 10 },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        { '0': 1 },
        { '1': 4 },
        { '2': 5 },
        { '3': 6 },
        { '4': 2 },
        { '5': 10 },
        { '6': 3 },
        { '7': 17 },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      numberOfItems: 10,
    };
    expect(newTable).toEqual(result);
  });
});
