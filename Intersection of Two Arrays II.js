//Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const count = {};
    const result = [];

    // Count occurrences of each number in nums1
    for (const num of nums1) {
        count[num] = (count[num] || 0) + 1;
    }

    // Find intersection with nums2
    for (const num of nums2) {
        if (count[num] > 0) {
            result.push(num);
            count[num]--; // Decrease the count for the number
        }
    }

    return result;
};
// Example usage:
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let intersection = intersect(nums1, nums2);
console.log(intersection); // Output: [2, 2]
// Another example:
nums1 = [4, 9, 5];  
nums2 = [9, 4, 9, 8, 4];
intersection = intersect(nums1, nums2);
console.log(intersection); // Output: [4, 9] (order may vary)
// Note: The output may vary in order, but the elements will be correct.
// The function handles duplicates correctly, returning the intersection with the correct counts.
// The time complexity is O(n + m), where n is the length of nums1 and m is the length of nums2.
// The space complexity is O(n) for the count object.
// This solution efficiently finds the intersection of two arrays, considering duplicates and maintaining the correct counts.
// It uses a hash map to count occurrences of elements in the first array and then checks against the second array to build the result. 
// This approach ensures that we only traverse each array once, making it efficient for larger inputs.