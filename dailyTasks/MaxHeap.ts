class MaxHeap {
  arr: number[];
  constructor() {
    this.arr = [null];
  }

  push(val: number): void {
    this.arr.push(val);
    this.swim(this.arr.length - 1);
  }

  delMax(): number {
    const max = this.arr[1];
    this.arr[1] = this.arr.pop();
    this.sink(1);
    return max;
  }

  sink(idx: number): void {
    const cand = this.arr[idx];
    while (true) {
      const child1 = this.arr[idx * 2];
      const child2 = this.arr[idx * 2 + 1];
      let swapIdx = null;
      if (child1 > cand) {
        swapIdx = idx * 2;
      }
      if (child2 > child1 && swapIdx !== null) {
        swapIdx++;
      }
      if (!swapIdx) break;

      this.arr[idx] = this.arr[swapIdx];
      this.arr[swapIdx] = cand;
      idx = swapIdx;
    }
  }

  swim(idx: number): void {
    const cand = this.arr[idx];
    while (idx > 1) {
      const parentIdx = Math.floor(idx / 2);
      const parent = this.arr[parentIdx];

      if (parent > cand) break;

      this.arr[idx] = parent;
      this.arr[parentIdx] = cand;
      idx = parentIdx;
    }
  }
}

module.exports = MaxHeap;

class MinHeap<T> {
  arr: T[];
  constructor() {
    this.arr = [null];
  }

  push(val: T): void {
    this.arr.push(val);
    this.swim(this.arr.length - 1);
  }

  sink(idx: number): void {
    const candVal = this.arr[idx];
    while (this.arr[idx] !== undefined) {
      const child1Idx = Math.floor(idx * 2);
      const child2Idx = child1Idx + 1;
      let swapIdx = null;
      if (candVal > this.arr[child1Idx]) {
        swapIdx = child1Idx;
      }
      if (this.arr[child2Idx] > this.arr[child1Idx] && swapIdx !== null) {
        swapIdx++;
      }

      if (swapIdx === null) break;

      this.arr[idx] = this.arr[swapIdx];
      this.arr[swapIdx] = candVal;
      idx = swapIdx;
    }
  }

  swim(idx: number): void {
    const candVal = this.arr[idx];
    while (idx > 1) {
      const parentIdx = Math.floor(idx / 2);
      const parentVal = this.arr[parentIdx];
      if (parentVal < candVal) {
        this.arr[parentIdx] = candVal;
        this.arr[idx] = parentVal;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  removeMin(): T {
    const min = this.arr[1];
    this.arr[1] = this.arr.pop();
    this.sink(1);
    return min;
  }
}
