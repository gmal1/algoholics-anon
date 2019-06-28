// to be used for optimal soltion to leetcode 340
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

class LRU {
  // the list will have cap # of elements
  // each item in the list will have a position in the list and an index in the input string
  constructor(cap) {
    this.capacity = cap;
    this.size = 0;
    this.cache = new DblLinkedList();
    this.map = new Map();
  }

  addElement(char, idx) {
    console.log('adding: ', char);
    // if the char is in the cache, just update its location in the list and its node's idx
    if (this.map.has(char)) {
      const charNode = this.map.get(char);
      this.cache.use(charNode, idx);
    } else {
      // if the cache is at capacity, evict the LRU node and push the new node
      if (this.isFull()) {
        console.log('evicting a char...');

        const evictedNode = this.cache.evict();
        this.map.delete(evictedNode.char);
      } else {
        this.size += 1;
      }
      const node = this.cache.push(char, idx);
      this.map.set(char, node);
    }
  }

  getLRUnode() {
    return this.cache.getLeastRecentlyUsed();
  }

  removeLRUnode() {
    return this.cache.evict();
  }

  isFull() {
    return this.size === this.capacity;
  }
}

class Node {
  constructor(char, idx) {
    this.char = char;
    this.idx = idx;
    this.next = null;
    this.prev = null;
  }
}

class DblLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // tail node will be the least recently used
  // new nodes go to the head
  // return the node so a reference can be added to the map
  push(char, idx) {
    const node = new Node(char, idx);
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next = node;
    node.next.prev = node;

    return node;
  }

  // move node to the head
  use(node, newIdx = node.idx) {
    this.remove(node);
    this.push(node.char, newIdx);
  }

  // remove the node from the LL
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
  }

  getLeastRecentlyUsed() {
    return this.tail.prev;
  }

  // evict the LRU node
  evict() {
    const node = this.getLeastRecentlyUsed();
    console.log('char being evicted: ', node.char);
    return this.remove(node);
  }
}

const test = new LRU(3);

const str = 'dcccdbaeabc';
let i = 0;
for (const el of str) {
  test.addElement(el, i);
  i += 1;
}
