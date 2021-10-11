function isCompleteTree(root) {
  if (!root) return;

  const queue = [root];

  let seenTheEnd = false;

  while (queue.length) {
    const node = queue.pop();

    if (!node) {
      seenTheEnd = true;

      //Normal node, it shouldn't have seen the end
    } else {
      if (seenTheEnd) return false;

      queue.unshift(node.left);
      queue.unshift(node.right);
    }
  }

  return true;
}
