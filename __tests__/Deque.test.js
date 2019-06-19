// import Deque from '../data-structures/Deque';
const Deque = require('../data-structures/Deque.js');

describe('Deque', () => {
  // let deque: Deque<number>;
  let deque;

  beforeEach(() => {
    // deque = new Deque<number>();
    deque = new Deque();
  });

  describe('push method', () => {
    test('should add an item to deque correctly', () => {
      deque.push(1);
      expect(deque.at(0)).toEqual(1);

      deque.push(2);
      deque.push(3);
      deque.push(4);
      expect(deque.at(3)).toEqual(4);
    });
  });

  describe('unshift method', () => {
    test('should add item to front of deque', () => {
      deque.push(5);
      expect(deque.at(0)).toEqual(5);
    });

    test('should work with push', () => {
      deque.push(1);
      deque.push(2);
      deque.push(3);
      deque.push(4);
      deque.unshift(5);
      expect(deque.at(0)).toEqual(5);

      deque.unshift(6);
      deque.push(8);
      deque.unshift(7);
      expect(deque.at(0)).toEqual(7);
    });
  });

  describe('shift method', () => {
    test('should remove item from front', () => {
      deque.push(1);
      deque.push(2);

      deque.shift();
      expect(deque.at(0)).toEqual(2);
    });

    test('should properly return removed value', () => {
      deque.push(1);
      deque.push(2);
      deque.unshift(3);
      deque.push(4);
      deque.unshift(5);
      deque.unshift(6);

      expect(deque.shift()).toEqual(6);
      expect(deque.front()).toEqual(5);
    });

    test('should return null if deque is empty', () => {
      expect(deque.shift()).toEqual(null);
      for (let i = 0; i < 4; i += 1) {
        deque.push(i);
      }

      for (let i = 0; i < 4; i += 1) {
        deque.shift();
      }

      expect(deque.shift()).toEqual(null);
    });
  });

  describe('pop method', () => {
    test('should return null if deque is empty', () => {
      expect(deque.pop()).toEqual(null);
    });

    test('should properly return removed value', () => {
      deque.push(1);
      deque.push(2);
      deque.unshift(3);
      deque.push(4);
      deque.unshift(5);
      deque.unshift(6);

      expect(deque.pop()).toEqual(4);
      expect(deque.back()).toEqual(2);
    });
  });

  describe('isEmpty method', () => {
    test('should return true if empty', () => {
      expect(deque.isEmpty()).toBe(true);
      deque.push(1);
      deque.unshift(2);
      deque.pop();
      deque.pop();
      deque.pop();
      expect(deque.isEmpty()).toBe(true);
    });

    test('should return false is not empty', () => {
      deque.push(1);
      expect(deque.isEmpty()).toBe(false);

      deque.pop();
      deque.pop();
      deque.unshift(10);
      expect(deque.isEmpty()).toBe(false);
    });
  });

  describe('Iterator', () => {
    test('should iterate correctly', () => {
      let testOutput = '';
      for (let i = 0; i < 10; i += 1) {
        const coinToss = Math.random();
        const randItem = Math.floor(Math.random() * 10);
        if (coinToss < 0.5) {
          deque.unshift(randItem);
          testOutput = `${randItem}${testOutput}`;
        } else {
          deque.push(randItem);
          testOutput += `${randItem}`;
        }
      }

      let output = '';
      for (const value of deque) {
        output += `${value}`;
      }

      expect(output).toEqual(testOutput);
    });
  });
});
