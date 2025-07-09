// Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1;
    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) {
            return [i + 1, j + 1]; // Return indices as 1-indexed
        } else if (sum < target) {
            i++; // Move left pointer to the right
        } else {
            j--; // Move right pointer to the left
        }
    }
    return []; // If no solution is found, though the problem guarantees one exists
};
// Example usage:
let numbers = [2, 7, 11, 15];
let target = 9;
let result = twoSum(numbers, target);
console.log(result); // Output: [1, 2] (since numbers[0] + numbers[1] = 2 + 7 = 9)