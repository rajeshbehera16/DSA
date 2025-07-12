/** * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/** * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean} */
var isSameTree = function(p, q) {
    // If both nodes are null, they are the same
    if (!p && !q) return true;

    // If one of the nodes is null or their values are different, they are not the same
    if (!p || !q || p.val !== q.val) return false;

    // Recursively check the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// Example usage:
function TreeNode(val) {    
    this.val = val;
    this.left = this.right = null;
}

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);
console.log(isSameTree(p, q)); // Output: true