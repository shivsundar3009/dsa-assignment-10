class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let current = dummy;
    let sum = 0;
    
    const sumMap = new Map(); // Map to store cumulative sum and the corresponding node
    
    while (current) {
      sum += current.val;
      
      if (sumMap.has(sum)) {
        let prevSumNode = sumMap.get(sum);
        
        // Remove the nodes between prevSumNode and current (inclusive)
        let prev = prevSumNode.next;
        let removeSum = sum + prev.val;
        
        while (prev !== current) {
          removeSum += prev.val;
          sumMap.delete(removeSum);
          prev = prev.next;
        }
        
        prevSumNode.next = current.next;
      } else {
        sumMap.set(sum, current);
      }
      
      current = current.next;
    }
    
    return dummy.next;
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