function prune(root) {
  if (!root) return null;

  const containsOne = deleteIfNotContainsOne(root);
  return containsOne ? root : null;

  function deleteIfNotContainsOne(root) {
    if (!root) return false;

    const leftContainsOne = deleteIfNotContainsOne(root.left);
    const rightContainsOne = deleteIfNotContainsOne(root.right);

    if (!leftContainsOne) root.left = null;
    if (!rightContainsOne) root.right = null;

    return root.val === 1 || leftContainsOne || rightContainsOne;
  }
}
