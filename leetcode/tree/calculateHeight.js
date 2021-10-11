function getHeight(root) {
  if (!root) return 0;

  const left = getHeight(root.left);
  const right = getHeight(root.right);

  return Math.max(left, right) + 1;
}
