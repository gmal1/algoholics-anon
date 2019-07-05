// iterative solution, no duplicates allowed
class BST {
  val: number;
  left: BST;
  right: BST;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val: number): BST {
    const newNode = new BST(val);
    let parent: BST = this;
    while (true) {
      if (val > parent.val) {
        if (!parent.right) return (parent.right = newNode);
        parent = parent.right;
      } else if (val < parent.val) {
        if (!parent.left) return (parent.left = newNode);
        parent = parent.left;
      } else {
        throw new Error('no duplicate vals allowed');
      }
    }
  }

  contains(val: number): boolean {
    let parent: BST = this;
    while (parent) {
      if (val === parent.val) return true;

      if (val > parent.val) {
        parent = parent.right;
      } else if (val < parent.val) {
        parent = parent.left;
      }
    }
    return false;
  }

  min(): number {
    let parent: BST = this;
    while (parent.left) {
      parent = parent.left;
    }
    return parent.val;
  }

  max(): number {
    let parent: BST = this;
    while (parent.right) {
      parent = parent.right;
    }
    return parent.val;
  }
}

module.exports = BST;
