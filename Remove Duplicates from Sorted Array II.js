// Remove Duplicates from Sorted Array II

// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.


/** * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length; // If the array has 2 or fewer elements, return its length

    let k = 2; // Start from the third position
    for (let i = 2; i < nums.length; i++) {
        // Check if the current number is different from the number at position k-2
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]; // Place the current number at position k
            k++; // Increment k
        }
    }
    return k; // Return the new length of the array
};
// Example usage:
let nums = [1, 1, 1, 2, 2, 3];
let k = removeDuplicates(nums);
console.log(k); // Output: 5 (the new length of the array)
console.log(nums.slice(0, k)); // Output: [1, 1, 2, 2, 3] (the modified array with duplicates removed)
nums = [0, 0, 1, 1, 1, 1, 2, 2];
k = removeDuplicates(nums);
console.log(k); // Output: 6 (the new length of the array)
console.log(nums.slice(0, k)); // Output: [0, 0, 1, 1, 2, 2] (the modified array with duplicates removed)