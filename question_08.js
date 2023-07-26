class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function oddEvenList(head) {
    if (!head || !head.next) {
      return head; // No need to rearrange if the list is empty or has only one node
    }
  
    let oddHead = head;
    let evenHead = head.next;
  
    let odd = oddHead;
    let even = evenHead;
  
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
  
      even.next = odd.next;
      even = even.next;
    }
  
    odd.next = evenHead; // Connect odd nodes to even nodes
  
    return oddHead; // Return the head of the reordered linked list
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