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
    this.arr[1] = this.arr[this.arr.length - 1];
    this.arr.pop();
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
      if (child2 > child1) {
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










class MinHeap{
  arr: number[]
  constructor(){
    this.arr = [null];
  }

  push(val: number){
    this.arr.push(val);
    this.swim(this.arr.length - 1);
  }

  delMin(){
    const result = this.arr[1];
    const end = this.arr[this.arr.length - 1];

    this.arr[1] = end;
    this.arr.pop();
    this.sink(1);

    return result;
  }

  swim(idx: number){
    const candidate = this.arr[idx];
    while (idx > 1){
      const parentIdx = Math.floor(idx / 2);
      const parent = this.arr[parentIdx];

      if (parent < candidate) break;

      this.arr[parentIdx] = candidate;
      this.arr[idx] = parent;
      idx = parentIdx;
    }
  }

  sink(idx: number){
    const candidate = this.arr[idx];

    while (true){
      const child1 = this.arr[idx * 2]; 
      const child2 = this.arr[idx * 2 + 1];
      
      let swapIdx;
      if (child1 < candidate){
        swapIdx = idx * 2;
      }
      if (child2 < child1){
        swapIdx++;
      }

      if (!swapIdx) break;

      this.arr[idx] = this.arr[swapIdx];
      this.arr[swapIdx] = candidate;
      idx = swapIdx;
    }

  }


}


