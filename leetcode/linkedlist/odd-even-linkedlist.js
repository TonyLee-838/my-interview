import { createLinkedList, printLinkedList } from "../utils/LinkedList.js";
const list = createLinkedList([1, 2, 3, 4, 5, 6, 7]);
function oddEvenList(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    odd.next = even.next;

    odd = even.next;

    even.next = odd.next;

    even = odd.next;
  }

  odd.next = evenHead;

  return head;
}

const result = oddEvenList(list);
printLinkedList(result);
