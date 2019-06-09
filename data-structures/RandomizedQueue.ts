// doubly linked list with random insetion and random sampling
class RandomizedQueue<T> {
  head: Item<T>;
  tail: Item<T>;
  numItems: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.numItems = 0;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  size(): number {
    return this.numItems;
  }

  enqueue(item: T): void {
    const newItem = new Item<T>(item);
    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }
  }

  dequeue(): T {
    if (!this.head) return null;

    let randomIndex = Math.floor(Math.random() * this.numItems);
    let current = this.head;
    while (randomIndex > 0) {
      current = current.next;
      randomIndex -= 1;
    }

    if (current === this.head) {
      this.head = current.next;
    }

    if (current === this.tail) {
      this.tail = current.prev;
    }

    const prev = current.prev;
    prev.next = current.next;
    current.prev = prev;

    return current.value;
  }

  sample(): T {
    let randomIndex = Math.floor(Math.random() * this.numItems);
    let current = this.head;
    while (randomIndex > 0) {
      current = current.next;
      randomIndex -= 1;
    }

    return current.value;
  }

  *[Symbol.iterator]() {
    // Haven't figured it out
    yield 1;
  }
}

class Item<T> {
  value: T;
  next: Item<T>;
  prev: Item<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default RandomizedQueue;
