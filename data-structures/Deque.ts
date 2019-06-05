class Deque<T> {
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

  front(): T {
    return this.head.value;
  }

  back(): T {
    return this.tail.value;
  }

  at(index: number): T {
    if (index < 0 || index >= this.numItems) return null;
    let current: Item<T> = this.head;

    while(index > 0) {
      current = current.next;
      index -= 1;
    }

    return current.value;
  }

  unshift(item: T): void {
    const newItem: Item<T> = new Item<T>(item);

    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.head.prev = newItem;
      newItem.next = this.head;
      this.head = newItem;
    }
  }

  push(item: T): void {
    const newItem: Item<T> = new Item<T>(item);

    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }

    this.numItems += 1;
  }

  shift(): T {
    if (!this.head) return null;

    const first: Item<T> = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }

    this.numItems -= 1;

    return first.value;
  }

  pop(): T {
    if (!this.tail) return null;

    const last: Item<T> = this.tail;
    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    
    this.numItems -= 1;
    
    return last.value;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while(current) {
      yield current.value;
      current = current.next;
    }
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

export default Deque;