function flatten(root) {
  if (!root) return null;

  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode.right) {
      stack.push(currentNode.right);
    }

    if (currentNode.left) {
      stack.push(currentNode.left);
    }

    if (stack.length) {
      const lastNode = stack[stack.length - 1];

      currentNode.right = lastNode;
      currentNode.left = null;
    }
  }
}
