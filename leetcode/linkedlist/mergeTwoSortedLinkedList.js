import { createLinkedList, Node, printLinkedList } from "./utils/LinkedList.js";

const headA = createLinkedList([1, 2, 3, 4, 5, 6, 7]);
const headB = createLinkedList([-1, 1, 3, 4, 8, 12, 13]);

printLinkedList(merge(headA, headB));

function merge(headA, headB) {
  const dummyNode = new Node(0);
  let currentNode = dummyNode;

  while (headA && headB) {
    if (headA.val < headB.val) {
      currentNode.next = headA;

      headA = headA.next;
    } else {
      currentNode.next = headB;

      headB = headB.next;
    }

    currentNode = currentNode.next;
  }

  if (headA) {
    currentNode.next = headA;
  }

  if (headB) {
    currentNode.next = headB;
  }

  return dummyNode.next;
}
