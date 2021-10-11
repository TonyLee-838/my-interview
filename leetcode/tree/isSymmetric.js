function isSymmetric(root) {
  return traverse(root, root);

  function traverse(rootA, rootB) {
    if (!rootA && !rootB) return true;
    if (!rootA || !rootB) return false;

    return (
      rootA.val === rootB.val &&
      traverse(rootA.left, rootB.right) &&
      traverse(rootA.right, rootB.left)
    );
  }
}
