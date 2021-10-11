function getMaxWidth(root) {
  const mostLeftNodes = new Map();
  let maxWidth = 0;

  traverse(root, 0, 0);

  return maxWidth;

  function traverse(node, depth, position) {
    if (!node) return;

    if (!mostLeftNodes.has(depth)) {
      mostLeftNodes.set(depth, position);
    }

    maxWidth = Math.max(maxWidth, position - mostLeftNodes.get(depth) + 1);

    traverse(node.left, depth + 1, position * 2);
    traverse(node.right, depth + 1, position * 2 + 1);
  }
}
