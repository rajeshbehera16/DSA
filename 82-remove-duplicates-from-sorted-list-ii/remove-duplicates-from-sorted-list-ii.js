/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** * @param {ListNode} head
 * @return {ListNode} */
var deleteDuplicates = function(head) {
    if (!head) return null;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy; // Previous node to the current node
    let current = head; // Current node

    while (current) {
        // Check if the current node is a duplicate
        if (current.next && current.val === current.next.val) {
            // Skip all duplicates
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            // Connect previous node to the next distinct node
            prev.next = current.next;
        } else {
            // Move prev to the current node if no duplicates found
            prev = prev.next;
        }
        // Move to the next node
        current = current.next;
    }

    return dummy.next;
}
// Example usage:
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(3);
let fifth = new ListNode(4);
let sixth = new ListNode(4);
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
let result = deleteDuplicates(head);
let current = result;
while (current) {
    console.log(current.val);
    current = current.next;
}
// Output: 1 -> 2 -> 5