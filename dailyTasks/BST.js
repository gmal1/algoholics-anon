// iterative solution, no duplicates allowed
const BST = /** @class */ (function() {
  function BST(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  BST.prototype.add = function(val) {
    let parent = this;
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
  };
  BST.prototype.contains = function(val) {
    let parent = this;
    while (true) {
      if (val === parent.val) return true;
      if (val < parent.val) {
        if (!parent.left) {
          return false;
        } 
          parent = parent.left;
        
      } else if (val > parent.val) {
        if (!parent.right) {
          return false;
        } else {
          parent = parent.right;
        }
      }
    }
  };
  BST.prototype.max = function() {
    let parent = this;
    while (true) {
      if (!parent.right) return parent.val;
      parent = parent.right;
    }
  };
  BST.prototype.min = function() {
    let parent = this;
    while (true) {
      if (!parent.left) return parent.val;
      parent = parent.left;
    }
  };
  return BST;
})();
module.exports = BST;
