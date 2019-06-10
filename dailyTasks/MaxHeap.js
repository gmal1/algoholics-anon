const MaxHeap = /** @class */ (function() {
  function MaxHeap() {
    this.arr = [null];
  }
  MaxHeap.prototype.push = function(val) {
    this.arr.push(val);
    this.swim(this.arr.length - 1);
  };
  MaxHeap.prototype.delMax = function() {
    const max = this.arr[1];
    this.arr[1] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.sink(1);
    return max;
  };
  MaxHeap.prototype.sink = function(idx) {
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
  };
  MaxHeap.prototype.swim = function(idx) {
    const cand = this.arr[idx];
    while (idx > 1) {
      const parentIdx = Math.floor(idx / 2);
      const parent_1 = this.arr[parentIdx];
      if (parent_1 > cand) break;
      this.arr[idx] = parent_1;
      this.arr[parentIdx] = cand;
      idx = parentIdx;
    }
  };
  return MaxHeap;
})();
module.exports = MaxHeap;
