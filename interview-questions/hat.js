/*
santa hat data structure
-can add names to the hat
-can remove names, one at a time, you'll receive a random one when you do so
*/

// hat with array x
class SimpleHat {
  constructor(size, initialNames = []) {
    if (initialNames.length > size) throw new Error('this hat is too small!');
    this.size = size;
    this.arr = [...initialNames];
  }

  add(name) {
    if (typeof name !== 'string') throw new TypeError('wrong type yo');
    if (this.arr.length === this.size)
      throw new Error(`bag is full, add(${name}) failed`);
    this.arr.push(name);
  }

  remove() {
    if (this.arr.length === 0) return '';
    const { length } = this.arr;
    const rand = Math.random();
    const nameIdx = Math.floor(rand * length);
    [this.arr[nameIdx], this.arr[0]] = [this.arr[0], this.arr[nameIdx]];
    return this.arr.pop();
  }
}
