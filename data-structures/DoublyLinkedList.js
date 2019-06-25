const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.head = null;
  }

  addToHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  addAfterNode(value, node) {
    const newNode = new Node(value);
    if (node === this.head) {
      this.addToHead(value);
    } else {
      newNode.prev = node;
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  addToEnd(value) {
    const newNode = new Node(value);
    if (!this.head.value) {
      this.addToHead(value);
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

const dll = new DoublyLinkedList();
dll.addToHead(1);
dll.addToEnd(2);

// dll.addToEnd(3);

console.log(util.inspect(dll, { depth: Infinity }));
