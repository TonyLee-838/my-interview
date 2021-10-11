import { BinaryTreeNode } from "../utils/Tree";

/**
 * @description
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path such that adding up all the values 
 * along the path equals targetSum.
 
 * A leaf is a node with no children.
 */

/**
 *
 * @param {BinaryTreeNode} root
 * @param {number} target
 */
function hasSumPathIterative(root, target) {
  if (!root) return false;

  const nodeStack = [root];
  const sumStack = [target - root.val];

  while (nodeStack.length) {
    const currentNode = nodeStack.pop();
    const currentSum = sumStack.pop();

    if (isLeaf(currentNode) && currentSum === 0) return true;

    if (currentNode.left) {
      nodeStack.push(currentNode.left);
      sumStack.push(currentSum - currentNode.left.val);
    }

    if (currentNode.right) {
      nodeStack.push(currentNode.right);
      sumStack.push(currentSum - currentNode.right.val);
    }
  }

  return false;
}

function hasSumPathRecursive(root, target) {
  if (!root) return false;

  let currentTarget = target - root.val;

  if (isLeaf(root)) {
    return currentTarget === 0;
  }

  let leftResult = false;
  let rightResult = false;

  if (root.left) {
    leftResult = hasPathSum(root.left, currentTarget);
  }

  if (root.right) {
    rightResult = hasPathSum(root.right, currentTarget);
  }

  return leftResult || rightResult;
}

function isLeaf(root) {
  return !root.left && !root.right;
}
