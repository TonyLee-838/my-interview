import { binaryTree } from "../utils/Tree.js";

function findBottomLeft(root) {
  if (!root) return null;

  let current = root;
  const queue = [root];

  while (queue.length) {
    current = queue.shift();

    if (current.right) {
      queue.unshift(current.right);
    }
    if (current.left) {
      queue.unshift(current.left);
    }
  }

  return current.val;
}
