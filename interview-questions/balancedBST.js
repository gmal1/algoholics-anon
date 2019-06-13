function checkHeight(root) {
  // height of a null tree is defined as -1
  if (!root) return -1;

  const leftHeight = checkHeight(root.left);
  // pass error up
  if (leftHeight === -Infinity) return -Infinity;

  const rightHeight = checkHeight(root.right);
  if (rightHeight === -Infinity) return -Infinity;

  const heightDiff = leftHeight - rightHeight;
  if (Math.abs(heightDiff) > 1) {
    // tree is unbalanced
    return -Infinity;
  }
  return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) {
  return checkHeight(root) !== -Infinity;
}
