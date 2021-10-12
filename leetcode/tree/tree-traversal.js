import { multiChildTree, binaryTree } from "../utils/Tree.js";

const result = inOrderTraverse(binaryTree);
console.log(result);

function preOrderTraverse(head) {
  const stack = [];
  const result = [];

  stack.push(head);

  while (stack.length) {
    const current = stack.pop();

    result.unshift(current.value);

    if (current.children)
      current.children.forEach((childNode) => {
        stack.push(childNode);
      });
  }

  return result;
}

function inOrderTraverse(root) {
  if (!root) return;

  const stack = [];
  const result = [];
  const seen = new Set();

  let currentNode = root;

  while (currentNode || stack.length) {
    while (currentNode && !seen.has(currentNode)) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    const parentNode = stack.pop();

    result.push(parentNode.value);
    seen.add(parentNode);

    currentNode = parentNode.right;
  }

  return result;
}

function postOrderTraverse(head) {
  const stack = [];
  const result = [];

  stack.push(head);

  while (stack.length) {
    const current = stack.pop();

    result.push(current.value);

    if (current.children)
      current.children.forEach((childNode) => {
        stack.push(childNode);
      });
  }

  return result;
}
