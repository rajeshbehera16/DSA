// Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
/** * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    // If needle is an empty string, return 0
    if (needle === "") return 0;
    
    // Get the lengths of haystack and needle
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    
    // Loop through haystack to find the first occurrence of needle
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        // Check if the substring matches needle
        if (haystack.substring(i, i + needleLength) === needle) {
            return i; // Return the index of the first occurrence
        }
    }
    
    return -1; // Return -1 if needle is not found in haystack
}
// Example usage:
let haystack = "hello";
let needle = "ll";
let result = strStr(haystack, needle);
console.log(result); // Output: 2 (the index of the first occurrence of "ll" in "hello")