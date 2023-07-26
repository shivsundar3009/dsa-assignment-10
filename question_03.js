class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    // Create a dummy node as the starting point of the merged list
    const dummyHead = new ListNode(-1);
    let current = dummyHead;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
  
      current = current.next;
    }
  
    // Connect any remaining nodes in list1 or list2 to the merged list
    if (list1) {
      current.next = list1;
    } else if (list2) {
      current.next = list2;
    }
  
    return dummyHead.next; // Skip the dummy node and return the merged list
  }
  
  // Example usage:
  // Create the first sorted linked list: 1 -> 2 -> 4
  const list1 = new ListNode(1,
    new ListNode(2,
      new ListNode(4)
    )
  );
  
  // Create the second sorted linked list: 1 -> 3 -> 4
  const list2 = new ListNode(1,
    new ListNode(3,
      new ListNode(4)
    )
  );
  
  const mergedListHead = mergeTwoLists(list1, list2);
  