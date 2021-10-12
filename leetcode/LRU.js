class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.size = 0;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;

  this.map = new Map();
  this.head = null;
  this.nodeToDelete = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  this.moveNode(key);

  return this.map.get(key)?.value || -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.size === this.capacity) {
    this.removeLastNode();
  }
  // if (this.timeQueue.length === this.capacity) {
  //   const leaseUsedKey = this.timeQueue.pop();
  //   this.map.delete(leaseUsedKey);
  // }
  const node = this.addNode(value);
  this.map.set(key, node);
};

LRUCache.prototype.removeLastNode = function () {
  this.size--;

  const prevNode = this.nodeToDelete.prev;

  if (!prevNode) return (this.nodeToDelete = null);

  prevNode.next = null;
  this.nodeToDelete = prevNode;
};

LRUCache.prototype.moveNode = function (key) {
  const node = this.map.get(key);

  if (!node) return;

  if (node.prev) node.prev.next = node.next;
  if (node.next) node.next.prev = node.prev;

  node.next = this.head;
  this.head.prev = node;
  node.prev = null;

  this.head = node;
};

LRUCache.prototype.addNode = function (value) {
  this.size++;
  const node = new Node(value);

  if (!this.nodeToDelete) {
    this.head = node;
    this.nodeToDelete = node;
    return;
  }

  this.nodeToDelete.next = node;
  node.prev = this.nodeToDelete;
  node.next = null;
  this.nodeToDelete = node;

  return node;
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4
