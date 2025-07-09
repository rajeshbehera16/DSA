// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // Start with the first string as the initial prefix
    let prefix = strs[0];
    
    // Compare the prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix until it matches the start of strs[i]
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // If no common prefix found
        }
    }
    
    return prefix;
}
// Example usage:
let strs = ["flower", "flow", "flight"];
let result = longestCommonPrefix(strs);
console.log(result); // Output: "fl"    