class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeNthFromEnd(head, n) {
    // Create a dummy node to handle cases where the head needs to be removed
    const dummy = new ListNode(-1);
    dummy.next = head;
  
    let fast = dummy;
    let slow = dummy;
  
    // Move the fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }
  
    // Move both pointers until the fast pointer reaches the end of the list
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  
    // Remove the nth node from the end
    slow.next = slow.next.next;
  
    return dummy.next; // Return the head of the updated linked list
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