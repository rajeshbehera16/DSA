/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int countNodes(TreeNode root) {
        if (root == null) return 0;
        int r = getD(root.left, true) + 1;
        int l = getD(root.right, false) + 1;
        if (r == l) return (1 << r) - 1;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    private int getD(TreeNode root, boolean left) {
        int d = 0;
        while (root != null) {
            root = left ? root.left : root.right;
            d++;
        }
        return d;
    }
}