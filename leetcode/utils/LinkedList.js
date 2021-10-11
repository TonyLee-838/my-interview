export class Node {
  constructor(value = 0) {
    this.val = value;
    this.next = null;
  }
}

/**
 * @param {number[]} array
 */
export function createLinkedList(array) {
  let head = null;
  let current = null;
  array.forEach((value) => {
    if (!head) {
      head = new Node(value);
      current = head;
    } else {
      current.next = new Node(value);
      current = current.next;
    }
  });

  return head;
}

export function printLinkedList(head) {
  if (!head) return;

  let result = `${head.val}`;
  let current = head.next;
  while (current) {
    result += ` -> ${current.val}`;
    current = current.next;
  }

  console.log(result);
}

export default class LinkedList {
  constructor(initialValue) {
    if (typeof initialValue === "number") {
      this.head = new Node(initialValue);
    }

    if (Array.isArray(initialValue)) {
      initialValue.forEach((value, index) => {
        if (!index) this.head = new Node(value);
        else this.add(value);
      });
    }
  }

  add(value) {
    const node = new Node(value);

    let current = this.head;

    while (current.next) current = current.next;

    current.next = node;
  }

  delete(value) {
    let current = this.head;
    let previousNode = null;

    if (current.value === value) {
      this.head = current.next;
      current.next = null;
      return;
    }

    while (current.next) {
      previousNode = current;
      current = current.next;

      if (current.value === value) {
        const nextNode = current.next;

        previousNode.next = nextNode;
        current.next = null;
        return;
      }
    }
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
