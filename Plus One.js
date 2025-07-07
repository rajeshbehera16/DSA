// Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1; // Start with a carry of 1 for the increment
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry; // Add the carry to the current digit
        if (digits[i] === 10) {
            digits[i] = 0; // If the digit becomes 10, set it to 0 and carry over 1
            carry = 1;
        } else {
            carry = 0; // If no carry is needed, break out of the loop
            break;
        }
    }
    
    if (carry === 1) {
        digits.unshift(1); // If there's still a carry, add a new digit at the front
    }
    
    return digits; // Return the updated array of digits
}
// Example usage:
let digits = [1, 2, 3];
let result = plusOne(digits);
console.log(result); // Output: [1, 2, 4] (123 + 1 = 124)