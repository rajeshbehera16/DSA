
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
};