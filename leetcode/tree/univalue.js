function isUnivalued(root) {
  if (!root) return true;

  let number = null;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (number === null) {
      number = node.val;
    }

    if (number !== node.val) return false;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return true;
}
