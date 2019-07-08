/**
 * given an iterator with next() and hasNext() methods,
 * create a wrapper iteratior ,PeekableInterface which implements
 * peek(). peek shows the next element that would be returned on next()
 */

class Iterator {
  constructor(iterable = []) {
    this.iterable = iterable;
    this.index = 0;
  }

  next() {
    const result = this.iterable[this.index];
    this.index += 1;
    return result;
  }

  hasNext() {
    return this.iterable[this.index + 1] !== undefined;
  }
}

// base class tests
{
  const iter1 = new Iterator([1, 2, 3]);
  console.log(iter1.hasNext());
  console.log(iter1.next());
  console.log(iter1.hasNext());
  console.log(iter1.next());
  console.log(iter1.hasNext());
  console.log(iter1.next());
  console.log(iter1.hasNext());
  console.log(iter1.next());
  console.log(iter1.hasNext());
}

class PeekableInterface extends Iterator {
  constructor(iterable) {
    super(iterable);
    this.current = super.next();
  }

  next() {
    const prev = this.current;
    this.current = super.next();
    return prev;
  }

  peek() {
    return this.current;
  }
}

{
  const peek1 = new PeekableInterface([1, 2, 3]);
  console.log(peek1);
  console.log(peek1.peek()); // 1
  console.log(peek1.hasNext()); // true
  console.log(peek1.next()); // 1
  console.log(peek1.peek()); // 2
  console.log(peek1.peek()); // 2
  console.log(peek1.next()); // 2
}
