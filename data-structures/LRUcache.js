// to be used for optimal solution to leetcode 340
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

class LRU {
  constructor(capacity = 5) {
    this.list = new DblLinkedList();
    this.map = new Map();
    this.size = 0;
    this.capacity = capacity;
  }

  addElement(key, val) {
    if (this.map.has(key)) {
      const node = this.getElement(key);
      node.val = val;
      return node;
    }
    const node = new Node(key, val);
    if (this.isFull()) {
      const evictedNode = this.list.tail.prev;
      this.list.remove(evictedNode);
      this.map.delete(evictedNode.key);
    } else {
      this.size += 1;
    }
    const entry = this.map.set(key, node);
    this.list.add(node);
  }

  getElement(key) {
    if (!this.map.has(key)) return null;
    const node = this.map.get(key);
    this.list.remove(node);
    this.list.add(node);
    return node;
  }

  peakLeastRecentlyUsed() {
    if (this.size === 0) return null;
    return this.list.tail.prev;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

class DblLinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(node) {
    const oldFirst = this.head.next;
    oldFirst.prev = node;
    this.head.next = node;
    node.next = oldFirst;
    node.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

const test = new LRU(3);

const str = 'dcccdbaeabeeec';
let i = 0;
for (const el of str) {
  test.addElement(el, i);
  i += 1;
}
let node = test.list.head;
while (node) {
  if (node.val) {
    console.log(node.key); // c, e, b
    console.log(node.val); // 13, 12, 9
  }
  node = node.next;
}
