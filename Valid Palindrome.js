// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


/** * @param {string} s
 * @return {boolean}
 */var isPalindrome = function(s) {
    // Convert the string to lowercase and filter out non-alphanumeric characters
    const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the filtered string is equal to its reverse
    return filteredString === filteredString.split('').reverse().join('');
};
// Example usage:
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)); // Output: true