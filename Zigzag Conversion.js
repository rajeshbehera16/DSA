// Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s; // No zigzag conversion needed
    }

    const rows = Array.from({ length: numRows }, () => '');
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currentRow] += char; // Add character to the current row

        // Change direction if we hit the top or bottom row
        if (currentRow === 0) {
            goingDown = true;
        } else if (currentRow === numRows - 1) {
            goingDown = false;
        }

        // Move to the next row
        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows to form the final string
    return rows.join('');
}
// Example usage:
let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows)); // Output: "PAHNAPLSIIGYIR"