var swapPairs = function (head) {
  if (!head) return null;

  const dummy = new ListNode();

  dummy.next = head;

  let currentNode = dummy;

  while (currentNode.next && currentNode.next.next) {
    const firstNode = currentNode.next;
    const secondNode = currentNode.next.next;

    //Swap happens here...
    currentNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    //Move pointer forward...
    currentNode = currentNode.next.next;
  }

  return dummy.next;
};
