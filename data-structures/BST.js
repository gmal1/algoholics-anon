class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  add(value) {
    const newNode = new BinarySearchTree(value);

    if (newNode.value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.add(value);
      }
    } else if (newNode.value > this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.add(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) return true;
    if (value > this.value) {
      if (!this.right) {
        return false;
      }
      return this.right.contains(value);
    }
    if (value < this.value) {
      if (!this.left) {
        return false;
      }
      return this.left.contains(value);
    }
  }

  max() {
    // max value is the rightmost leaf
    let max;
    let { right } = this;
    while (right) {
      max = right.value;
      right = right.right;
    }
    return max;
  }

  min() {
    // min value is the leftmost leaf
    let min;
    let { left } = this;
    while (left) {
      min = left.value;
      left = left.left;
    }
    return min;
  }
}

module.exports = BinarySearchTree;
