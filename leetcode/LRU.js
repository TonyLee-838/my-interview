class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRU {
  constructor(capacity) {
    this.capacity = capacity;

    this.head = null; //newest
    this.tail = null; //oldest

    this.map = new Map();
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;

    this._deleteNode(key);
    this._appendNode(key, node.value);
  }

  put(key, value) {
    if (this.map.size === this.capacity) {
      this._deleteNode(this.tail.value);
    }

    this._appendNode(key, value);
  }

  print() {
    this.map.forEach((value, key) => {
      console.log(value, key);
    });
  }

  _appendNode(key, value) {
    const newNode = new Node(value);
    this.map.set(key, newNode);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  _deleteNode(key) {
    const node = this.map.get(key);
    this.map.delete(key);

    const prevNode = node.prev;
    const nextNode = node.next;

    if (node === this.head) {
      this.head = nextNode;
      nextNode.prev = null;

      return node;
    }

    if (node === this.tail) {
      this.tail = prevNode;
      prevNode.next = null;

      return node;
    }

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    return node;
  }
}
