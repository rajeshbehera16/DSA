/** * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** * @param {TreeNode} root
 * @return {TreeNode} */
var invertTree = function(root) {
    if (!root) return null; // Base case: if the tree is empty, return null

    // Swap the left and right children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root; // Return the root of the inverted tree
}
// Example usage:
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(4);
let left = new TreeNode(2);
let right = new TreeNode(7);
let leftLeft = new TreeNode(1);
let leftRight = new TreeNode(3);
let rightLeft = new TreeNode(6);
let rightRight = new TreeNode(9);
root.left = left;
root.right = right;
left.left = leftLeft;
left.right = leftRight;
right.left = rightLeft;
right.right = rightRight;
let invertedRoot = invertTree(root);
console.log(invertedRoot.val); // Output: 4
console.log(invertedRoot.left.val); // Output: 7
console.log(invertedRoot.right.val); // Output: 2
console.log(invertedRoot.left.left.val); // Output: 9
console.log(invertedRoot.left.right.val); // Output: 6
console.log(invertedRoot.right.left.val); // Output: 3
console.log(invertedRoot.right.right.val); // Output: 1