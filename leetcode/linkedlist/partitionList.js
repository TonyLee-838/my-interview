import { Node } from "../utils/LinkedList.js";

function partitionList(head, target) {
  const beforeHead = new Node();
  const afterHead = new Node();

  let beforePointer = beforeHead;
  let afterPointer = afterHead;

  while (head) {
    if (target > head.val) {
      beforePointer.next = head;
      beforePointer = beforePointer.next;
    } else {
      afterPointer.next = head;
      afterPointer = afterPointer.next;
    }

    head = head.next;
  }

  afterPointer.next = null;
  beforePointer.next = afterHead.next;

  return beforeHead.next;
}
