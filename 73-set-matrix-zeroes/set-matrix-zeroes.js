/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = new Set();
    const cols = new Set();
    const m = matrix.length;
    const n = matrix[0].length; 
    // First pass: identify rows and columns that need to be zeroed

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    // Second pass: set identified rows and columns to zero
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
// Example usage:
let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]   
];
setZeroes(matrix);
console.log(matrix); // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]