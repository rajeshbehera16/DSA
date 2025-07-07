// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroIndex = 0; // Pointer for the position of the last non-zero element

    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i]; // Place non-zero element at the last non-zero index
            lastNonZeroIndex++; // Increment the index for the next non-zero element
        }
    }

    // Fill the rest of the array with zeros
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0; // Set remaining elements to zero
    }
}
// Example usage:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]