import { binaryTree } from "../utils/Tree.js";

console.log(binaryTree);
console.log(getMaxValueAtEachRow(binaryTree));

function getMaxValueAtEachRow(root) {
  const maximumValues = [];

  DFS(root, 0);

  return maximumValues;

  function DFS(root, level) {
    if (!root) return;

    if (!maximumValues[level]) {
      maximumValues[level] = root.val;
    }

    if (maximumValues[level] < root.val) maximumValues[level] = root.val;

    DFS(root.left, level + 1);
    DFS(root.right, level + 1);
  }
}
