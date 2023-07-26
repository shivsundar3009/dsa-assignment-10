class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function leftShiftLinkedList(head, k) {
    if (!head || k <= 0) {
      return head; // No need to shift an empty list or shift by 0
    }
  
    let length = 1;
    let current = head;
  
    // Find the length of the linked list
    while (current.next) {
      current = current.next;
      length++;
    }
  
    // Normalize k to avoid unnecessary shifts (k <= length)
    k = k % length;
  
    if (k === 0) {
      return head; // No shift needed as k is a multiple of the list length
    }
  
    current.next = head; // Connect the last node to the head to form a cycle
  
    // Find the new head and new tail after the left shift
    let newTail = head;
    for (let i = 1; i < length - k; i++) {
      newTail = newTail.next;
    }
  
    const newHead = newTail.next;
    newTail.next = null; // Break the cycle to form the new tail
  
    return newHead; // Return the new head of the left-shifted linked list
  }
  
  // Helper function to create a linked list from an array
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