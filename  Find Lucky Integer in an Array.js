// Find Lucky Integer in an Array
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const frequency = {};
    
    // Count the frequency of each number in the array
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    let luckyInteger = -1;
    
    // Check for lucky integers
    for (const [num, count] of Object.entries(frequency)) {
        if (Number(num) === count) {
            luckyInteger = Math.max(luckyInteger, Number(num));
        }
    }
    
    return luckyInteger;
};  
// Example usage:
let arr = [2, 2, 3, 4];
let result = findLucky(arr);
console.log(result); // Output: 2 (2 appears exactly 2 times, which is its value)