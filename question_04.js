class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function detectCycle(head) {
    // Check if the list is empty or has only one node
    if (!head || !head.next) {
      return null;
    }
  
    let tortoise = head;
    let hare = head;
  
    // Step 1: Detect the cycle (hare moves twice as fast as tortoise)
    while (hare && hare.next) {
      tortoise = tortoise.next;
      hare = hare.next.next;
  
      if (tortoise === hare) {
        break; // Cycle detected
      }
    }
  
    // Step 2: Find the starting node of the cycle (if there is one)
    if (tortoise !== hare) {
      return null; // No cycle in the linked list
    }
  
    // Reset one pointer to the head and move both pointers one step at a time
    hare = head;
    while (hare !== tortoise) {
      hare = hare.next;
      tortoise = tortoise.next;
    }
  
    return hare; // Return the starting node of the cycle
  }
  
  // Helper function to create a linked list from an array and connect the tail to a given position
  function createLinkedListWithCycle(arr, pos) {
    if (!arr.length) {
      return null;
    }
  
    const head = new ListNode(arr[0]);
    let current = head;
    let cycleStartNode = null;
  
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
  
      if (i === pos) {
        cycleStartNode = current; // Save the node where the cycle should start
      }
    }
  
    // Connect the tail to the cycleStartNode to create the cycle
    current.next = cycleStartNode;
  
    return head;
  }