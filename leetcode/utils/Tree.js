export class BinaryTreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class MultiChildTreeNode {
  constructor(value, children = null) {
    this.val = value;
    this.children = children;
  }
}

export const binaryTree = new BinaryTreeNode(1);
binaryTree.left = new BinaryTreeNode(2);
binaryTree.right = new BinaryTreeNode(3);

binaryTree.right.left = new BinaryTreeNode(6);
binaryTree.left.left = new BinaryTreeNode(4);
binaryTree.left.left.left = new BinaryTreeNode(-1);
binaryTree.left.right = new BinaryTreeNode(5);

export const binaryTree2 = new BinaryTreeNode(1);
binaryTree.left = new BinaryTreeNode(2);
binaryTree.right = new BinaryTreeNode(5);
binaryTree.right.left = new BinaryTreeNode(7);
binaryTree.left.left = new BinaryTreeNode(8);
binaryTree.left.right = new BinaryTreeNode(9);

export const multiChildTree = new MultiChildTreeNode(1, [
  new MultiChildTreeNode(3, [
    new MultiChildTreeNode(5),
    new MultiChildTreeNode(6),
  ]),
  new MultiChildTreeNode(2),
  new MultiChildTreeNode(4),
]);
