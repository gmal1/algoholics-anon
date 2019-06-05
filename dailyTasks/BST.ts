// iterative solution, no duplicates allowed
class BST {
  val: number;
  left: BST;
  right: BST;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val: number): void {
    let parent: BST = this;
    while (true) {
      if (val < parent.val) {
        if (!parent.left) {
          parent.left = new BST(val);
          break;
        } else {
          parent = parent.left;
        }
      } else if (val > parent.val) {
        if (!parent.right) {
          parent.right = new BST(val);
          break;
        } else {
          parent = parent.right;
        }
      }
    }
  }

  contains(val: number): boolean {
    let parent: BST = this;
    while (true) {
      if (val === parent.val) return true;

      if (val < parent.val) {
        if (!parent.left) {
          return false;
        } else {
          parent = parent.left;
        }
      } else if (val > parent.val) {
        if (!parent.right) {
          return false;
        } else {
          parent = parent.right;
        }
      }
    }
  }

  max(): number {
    let parent: BST = this;
    while (true) {
      if (!parent.right) return parent.val;
      parent = parent.right;
    }
  }

  min(): number {
    let parent: BST = this;
    while (true) {
      if (!parent.left) return parent.val;
      parent = parent.left;
    }
  }
}

module.exports = BST;
