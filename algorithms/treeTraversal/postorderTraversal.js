function recPostorderTrav(root, result = []) {
  if (!root) return;
  recPostorderTrav(root.left, result);
  recPostorderTrav(root.right, result);
  result.push(root.data);
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

console.log(recPostorderTrav(tree1));
