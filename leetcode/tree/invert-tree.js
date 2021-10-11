import { binaryTree2 } from "../utils/Tree.js";

function invert(root) {
  if (!root) return root;

  //DFS
  const left = invert(root.left);
  const right = invert(root.right);

  root.right = left;
  root.left = right;

  return root;
}

const inverted = invert(binaryTree2);

console.log(JSON.stringify(inverted, null, 2));
