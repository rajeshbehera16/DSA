/** * Definition for singly-linked list.
 * function ListNode(val) {
 *    this.val = val;
 *     this.next = null;
 * }
 */
/** * @param {ListNode} head
 * @param {number} x
 * @return {ListNode} */
var partition = function(head, x) {
  let leftDummyHead = new ListNode(0);
    let rightDummyHead = new ListNode(0);
    let left = leftDummyHead;
    let right = rightDummyHead;
    let current = head;
    while (current) {
        if (current.val < x) {
            left.next = current;
            left = left.next;
        } else {
            right.next = current;
            right = right.next;
        }
        current = current.next;
    }
    right.next = null; // End the right list
    left.next = rightDummyHead.next; // Connect left and right lists
    return leftDummyHead.next; // Return the head of the partitioned list
};
// Example usage:
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(1);
let second = new ListNode(4);
let third = new ListNode(3);
let fourth = new ListNode(2);
let fifth = new ListNode(5);
let sixth = new ListNode(2);
head.next = second; 
second.next = third;
third.next = fourth;
fourth.next = fifth;    
fifth.next = sixth;
let x = 3;
let result = partition(head, x);
let current = result;
while (current) {
    console.log(current.val);
    current = current.next;
}
// Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5