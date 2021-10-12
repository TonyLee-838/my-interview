function isCompleteTree(root) {
  if (!root) return;

  const queue = [root];

  let hasSeenTheEnd = false;

  while (queue.length) {
    const node = queue.pop();

    if (!node) {
      hasSeenTheEnd = true;

      //Normal node, it shouldn't have seen the end
    } else {
      if (hasSeenTheEnd) return false;

      queue.unshift(node.left);
      queue.unshift(node.right);
    }
  }

  return true;
}
