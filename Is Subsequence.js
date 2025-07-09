// Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
/** * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0, tIndex = 0;

    // Loop through both strings
    while (sIndex < s.length && tIndex < t.length) {
        // If characters match, move to the next character in s
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }
        // Always move to the next character in t
        tIndex++;
    }

    // If we have gone through all characters in s, it is a subsequence of t
    return sIndex === s.length;
}
// Example usage:
let s = "abc";
let t = "ahbgdc";
let result = isSubsequence(s, t);
console.log(result); // Output: true (s is a subsequence of t)