
/** * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse from top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            // Traverse from right to left
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Traverse from bottom to top
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}
// Example usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let result = spiralOrder(matrix);
console.log(result); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]