class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeElements(head, val) {
    // Handle the case where the list is empty
    if (!head) {
      return null;
    }
  
    // Create a dummy node to simplify the removal process
    const dummy = new ListNode(-1);
    dummy.next = head;
  
    let prev = dummy;
    let current = head;
  
    while (current) {
      if (current.val === val) {
        prev.next = current.next; // Skip the current node
      } else {
        prev = current;
      }
      current = current.next;
    }
  
    return dummy.next; // The new head after removing nodes
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    if (!arr.length) {
      return null;
    }
  
    const head = new ListNode(arr[0]);
    let current = head;
  
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Example usage:
  const inputArray = [1, 2, 6, 3, 4, 5, 6];
  const valToRemove = 6;
  
  const inputLinkedList = arrayToLinkedList(inputArray);
  const newHead = removeElements(inputLinkedList, valToRemove);
  const outputArray = linkedListToArray(newHead);
  
  console.log(outputArray);