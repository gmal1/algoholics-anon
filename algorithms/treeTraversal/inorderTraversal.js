function recInorderTrav(root, result = []) {
  if (!root) return;
  recInorderTrav(root.left, result);
  result.push(root.data);
  recInorderTrav(root.right, result);
  return result;
}

function iterInorderTrav(root, result = []) {
  if (!root) return root;
  const stack = [];

  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const parent = stack.pop();
      result.push(parent.data);
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

console.log(recInorderTrav(tree1));
console.log(iterInorderTrav(tree1));
