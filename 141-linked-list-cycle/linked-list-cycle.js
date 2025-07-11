/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** * @param {ListNode} head
 * @return {boolean} */
var hasCycle = function(head) {
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;
};

// Example usage:
// Define a simple linked list with a cycle

function ListNode(val) {
    this.val = val;
    this.next = null;
}   
let head = new ListNode(3);
let second = new ListNode(2);
let third = new ListNode(0);
let fourth = new ListNode(-4);
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second; // Creates a cycle    
console.log(hasCycle(head)); // Output: true