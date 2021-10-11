import LinkedList from "./utils/LinkedList.js";

const list = new LinkedList([1, 2, 3, 4, 5, 3, 2, 1]);

function isPalindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverseLinkedList(slow);
  fast = head;

  while (slow) {
    if (slow.value !== fast.value) return false;
    slow = slow.next;
    fast = fast.next;
  }

  return true;
}

function reverseLinkedList(head) {
  let previousNode = null;

  while (head) {
    const nextNode = head.next;
    head.next = previousNode;

    previousNode = head;
    head = nextNode;
  }

  return previousNode;
}

const result = isPalindrome(list.head);
console.log(result);
