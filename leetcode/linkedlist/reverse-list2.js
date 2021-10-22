class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.previous = node1;

node2.next = node3;
node3.previous = node2;

node3.next = node4;
node4.previous = node3;

function reverse(node) {
  let previous = node;
  let current = node.next;

  while (current) {
    const next = current.next;

    current.next = previous;
    previous.previous = current;

    previous = current;
    current = next;
  }

  return previous;
}

let r = reverse(node1);
for (let i = 0; i < 4; i++) {
  console.log(r.value);
  r = r.next;
}
