class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  // initialize the linked list with one or multiple values
  constructor(...nodes) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const node of nodes) {
      this.push(node);
      this.length += 1;
    }
  }

  push(value) {
    const newNode = new Node(value);
    // if head is null, set head to this
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  addToHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  insert(value, position) {
    let depth = 0;
    let current = this.head;
    let previous;

    while (depth < position) {
      previous = current;
      current = current.next;
      depth += 1;
    }

    const newNode = new Node(value);
    newNode.next = current;

    if (previous) {
      previous.next = newNode;
    } else {
      this.head = newNode;
    }
    this.length += 1;
  }

  removeItem(value) {
    // remove first occurrence of value from list
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = this.head.next;
        } else if (current === this.tail) {
          this.tail = prev;
          prev.next = null;
        } else {
          prev.next = current.next;
        }
      }
      prev = current;
      current = current.next;
    }
    this.length -= 1;
  }

  removePosition(position) {
    // remove element at specified position in list
    let depth = 0;
    let current = this.head;
    let previous = current;

    while (depth < position) {
      previous = current;
      current = current.next;
      depth += 1;
    }

    while (current) {
      if (depth === position) {
        // if the node to be removed is the head
        // reassign the head
        if (this.head && current === this.head) {
          this.head = this.head.next;
        }
        // ditto tail
        if (this.tail && current === this.tail) {
          this.tail = previous;
          this.tail.next = null;
        } else {
          // node to be removed is in the middle of list
          previous.next = current.next;
        }
      }
      this.length -= 1;
      return current;
    }
  }

  getLength() {
    return this.length;
  }
}

module.exports = LinkedList;
