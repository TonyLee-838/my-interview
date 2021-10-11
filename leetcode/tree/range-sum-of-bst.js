function solve(root, L, R) {
  let sum = 0;
  traverse(root, L, R);

  return sum;

  function traverse(root) {
    if (!root) return;

    if (root.val > L && root.val < R) {
      sum += root.val;
    }

    if (root.val > L) {
      traverse(root.left);
    }

    if (root.val < R) {
      traverse(root.right);
    }
  }
}
