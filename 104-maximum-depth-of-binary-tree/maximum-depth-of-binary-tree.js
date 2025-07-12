 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** * @param {TreeNode} root
 * @return {number} */
var maxDepth = function(root) {
    if (!root) return 0; // Base case: if the tree is empty, depth is 0

    // Recursively find the maximum depth of left and right subtrees
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    // The maximum depth is the greater of the two subtree depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}
// Example usage:
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(3);
let left = new TreeNode(9);
let right = new TreeNode(20);
let rightLeft = new TreeNode(15);
let rightRight = new TreeNode(7);
root.left = left;
root.right = right;
right.left = rightLeft; 
right.right = rightRight;
console.log(maxDepth(root)); // Output should be 3 (depth of the entire tree)