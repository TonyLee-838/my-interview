import LinkedList from "../utils/LinkedList.js";

const list = new LinkedList([1, 2, 3, 4, 5, 6]);

/**
 * @param {LinkedList} list
 */

// 1=>2=>3=>4
// 2 => 1
// 1 => null
//
function reverseLinkedList(head) {
  let previous = null;
  let current = head;

  while (current) {
    const next = current.next;

    current.next = previous;

    previous = current;
    current = next;
  }

  return previous;
}
const result = reverseLinkedList(list.head);
console.log(result);
