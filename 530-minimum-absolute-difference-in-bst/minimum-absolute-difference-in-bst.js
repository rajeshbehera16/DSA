/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {

    if(!root) return root;
    let minDiff = 10**5;
    let prev = -Infinity;

    const minFunc = (node) =>{

        if(!node) return;

        minFunc(node.left);
        if(prev === - Infinity) {
            prev = node.val;
        }
        else{
            minDiff = Math.min( minDiff, node.val - prev);
            prev = node.val;
        }
        minFunc(node.right);
    }
    minFunc( root);
    return minDiff;
};