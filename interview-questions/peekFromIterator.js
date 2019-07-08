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
    if (this.iterable[this.index + 1] !== undefined) {
      return true;
    } else {
      return false;
    }
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
    return (this.current = super.next());
  }

  peek() {
    return this.current;
  }
}

{
  const peek1 = new PeekableInterface([1, 2, 3]);
  console.log(peek1);
  console.log('peek', peek1.peek());
  console.log('has', peek1.hasNext());
  console.log('next', peek1.next());
  console.log('peek again', peek1.peek());

  console.log(peek1.hasNext());
  console.log(peek1.next());
  console.log(peek1.hasNext());
  console.log(peek1.next());
  console.log(peek1.hasNext());
  console.log(peek1.next());
  console.log(peek1.hasNext());
}
