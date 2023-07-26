class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteNode(node) {
  if (!node || !node.next) {
    // The given node is either null or the last node, which can't be deleted.
    return;
  }

  const nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
}

// Example usage:
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5)
      )
    )
  )
);

const nodeToDelete = head.next.next; // Node with value 3
deleteNode(nodeToDelete);