function recPreorderTrav(root, result = []) {
  if (!root) return;
  result.push(root.data);
  recPreorderTrav(root.left, result);
  recPreorderTrav(root.right, result);
  return result;
}

function iterPreorderTrav(root, result = []) {
  if (!root) return;

  const stk = [];
  while (stk.length || root) {
    if (root) {
      stk.push(root);
      result.push(root.data);
      root = root.left;
    } else {
      const parent = stk.pop();
      root = parent.right;
    }
  }
  return result;
}

const tree1 = {
  data: 25,
  left: null,
  right: {
    data: 125,
    left: {
      data: 50,
      left: null,
      right: {
        data: 75,
        left: null,
        right: { data: 100, left: null, right: null, next: null, parent: null },
        next: null,
        parent: null,
      },
      next: null,
      parent: null,
    },
    right: {
      data: 200,
      left: null,
      right: { data: 350, left: null, right: null, next: null, parent: null },
      next: null,
      parent: null,
    },
    next: null,
    parent: null,
  },
  next: null,
  parent: null,
};

console.log(recPreorderTrav(tree1));
console.log(iterPreorderTrav(tree1));
