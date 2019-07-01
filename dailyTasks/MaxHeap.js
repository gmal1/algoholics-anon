var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.arr = [null];
    }
    MaxHeap.prototype.push = function (val) {
        this.arr.push(val);
        this.swim(this.arr.length - 1);
    };
    MaxHeap.prototype.delMax = function () {
        var max = this.arr[1];
        this.arr[1] = this.arr.pop();
        this.sink(1);
        return max;
    };
    MaxHeap.prototype.sink = function (idx) {
        var cand = this.arr[idx];
        while (true) {
            var child1 = this.arr[idx * 2];
            var child2 = this.arr[idx * 2 + 1];
            var swapIdx = null;
            if (child1 > cand) {
                swapIdx = idx * 2;
            }
            if (child2 > child1 && swapIdx !== null) {
                swapIdx++;
            }
            if (!swapIdx)
                break;
            this.arr[idx] = this.arr[swapIdx];
            this.arr[swapIdx] = cand;
            idx = swapIdx;
        }
    };
    MaxHeap.prototype.swim = function (idx) {
        var cand = this.arr[idx];
        while (idx > 1) {
            var parentIdx = Math.floor(idx / 2);
            var parent_1 = this.arr[parentIdx];
            if (parent_1 > cand)
                break;
            this.arr[idx] = parent_1;
            this.arr[parentIdx] = cand;
            idx = parentIdx;
        }
    };
    return MaxHeap;
}());
module.exports = MaxHeap;
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.arr = [null];
    }
    MinHeap.prototype.push = function (val) {
        this.arr.push(val);
        this.swim(this.arr.length - 1);
    };
    MinHeap.prototype.sink = function (idx) {
        var candVal = this.arr[idx];
        while (this.arr[idx] !== undefined) {
            var child1Idx = Math.floor(idx * 2);
            var child2Idx = child1Idx + 1;
            var swapIdx = null;
            if (candVal > this.arr[child1Idx]) {
                swapIdx = child1Idx;
            }
            if (this.arr[child2Idx] > this.arr[child1Idx] && swapIdx !== null) {
                swapIdx++;
            }
            if (swapIdx === null)
                break;
            this.arr[idx] = this.arr[swapIdx];
            this.arr[swapIdx] = candVal;
            idx = swapIdx;
        }
    };
    MinHeap.prototype.swim = function (idx) {
        var candVal = this.arr[idx];
        while (idx > 1) {
            var parentIdx = Math.floor(idx / 2);
            var parentVal = this.arr[parentIdx];
            if (parentVal < candVal) {
                this.arr[parentIdx] = candVal;
                this.arr[idx] = parentVal;
                idx = parentIdx;
            }
            else {
                break;
            }
        }
    };
    MinHeap.prototype.removeMin = function () {
        var min = this.arr[1];
        this.arr[1] = this.arr.pop();
        this.sink(1);
        return min;
    };
    return MinHeap;
}());
