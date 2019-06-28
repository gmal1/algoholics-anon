// iterative solution, no duplicates allowed
var BST = /** @class */ (function () {
    function BST(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    BST.prototype.add = function (val) {
        var newNode = new BST(val);
        var parent = this;
        while (true) {
            if (val > parent.val) {
                if (!parent.right)
                    return (parent.right = newNode);
                parent = parent.right;
            }
            else if (val < parent.val) {
                if (!parent.left)
                    return (parent.left = newNode);
                parent = parent.left;
            }
            else {
                throw new Error('no duplicate vals allowed');
            }
        }
    };
    BST.prototype.contains = function (val) {
        var parent = this;
        while (parent) {
            if (val === parent.val)
                return true;
            if (val > parent.val) {
                parent = parent.right;
            }
            else if (val < parent.val) {
                parent = parent.left;
            }
        }
        return false;
    };
    BST.prototype.min = function () {
        var parent = this;
        while (parent.left) {
            parent = parent.left;
        }
        return parent.val;
    };
    BST.prototype.max = function () {
        var parent = this;
        while (parent.right) {
            parent = parent.right;
        }
        return parent.val;
    };
    return BST;
}());
module.exports = BST;
