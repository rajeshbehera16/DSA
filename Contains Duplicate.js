// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set(); // Create a set to track seen numbers

    for (const num of nums) {
        if (seen.has(num)) {
            return true; // If the number is already in the set, return true
        }
        seen.add(num); // Add the number to the set
    }

    return false; // If no duplicates found, return false
}
// Example usage:
let nums = [1, 2, 3, 1];
let result = containsDuplicate(nums);
console.log(result); // Output: true (1 appears twice in the array)