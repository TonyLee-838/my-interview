import { BinaryTreeNode } from "../utils/Tree";

function mergeTrees(rootA, rootB) {
  if (!rootA) return rootB;
  if (!rootB) return rootA;

  rootA.value += rootB.value;

  rootA.left = mergeTrees(rootA.left, rootB.left);
  rootA.right = mergeTrees(rootA.right, rootB.right);

  return rootA;
}
