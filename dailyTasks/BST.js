// iterative solution, no duplicates allowed
var BST = /** @class */ (function () {
    function BST(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    BST.prototype.add = function (val) {
        var parent = this;
        while (true) {
            if (val < parent.val) {
                if (!parent.left) {
                    parent.left = new BST(val);
                    break;
                }
                else {
                    parent = parent.left;
                }
            }
            else if (val > parent.val) {
                if (!parent.right) {
                    parent.right = new BST(val);
                    break;
                }
                else {
                    parent = parent.right;
                }
            }
        }
    };
    BST.prototype.contains = function (val) {
        var parent = this;
        while (true) {
            if (val === parent.val)
                return true;
            if (val < parent.val) {
                if (!parent.left) {
                    return false;
                }
                else {
                    parent = parent.left;
                }
            }
            else if (val > parent.val) {
                if (!parent.right) {
                    return false;
                }
                else {
                    parent = parent.right;
                }
            }
        }
    };
    BST.prototype.max = function () {
        var parent = this;
        while (true) {
            if (!parent.right)
                return parent.val;
            parent = parent.right;
        }
    };
    BST.prototype.min = function () {
        var parent = this;
        while (true) {
            if (!parent.left)
                return parent.val;
            parent = parent.left;
        }
    };
    return BST;
}());
module.exports = BST;
