
/** * Definition for singly-linked list with a random pointer.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/** * @param {Node} head
 * @return {Node} */
var copyRandomList = function(head) {
    if (!head) return null;

    let map = new Map();
    let current = head;

    // First pass: create a copy of each node and store it in the map
    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: assign next and random pointers for the copied nodes
    current = head;
    while (current) {
        let copyNode = map.get(current);
        copyNode.next = map.get(current.next) || null;
        copyNode.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
};
// Example usage:
function Node(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
}
let head = new Node(1);
let second = new Node(2);
head.next = second;
head.random = second; // 1's random points to 2
second.random = head; // 2's random points to 1
let result = copyRandomList(head);
console.log(result); // Output: Deep copy of the linked list with correct next and random pointers