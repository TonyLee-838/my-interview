import {
  createLinkedList,
  printLinkedList,
  Node,
} from "../utils/LinkedList.js";

const head1 = createLinkedList([1, 5, 3, 7]);
const head2 = createLinkedList([4, 5, 6, 3]);

function sum(head1, head2) {
  const dummyHead = new Node();

  let currentNode = dummyHead;

  let carrier = 0;

  while (head1 || head2) {
    const sum = carrier + (head1?.val || 0) + (head2?.val || 0);

    carrier = (sum / 10) | 0;

    const remain = sum % 10;

    const newNode = new Node(remain);

    currentNode.next = newNode;

    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;

    currentNode = currentNode.next;
  }

  if (carrier) {
    currentNode.next = new Node(carrier);
  }

  printLinkedList(dummyHead.next);
}

sum(head1, head2);
