// Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.


// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/** * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (const str of strs) {
        // Sort the string to create a key for the anagram group
        const key = str.split('').sort().join('');
        
        // If the key doesn't exist in the map, create a new entry
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        // Push the original string into the corresponding anagram group
        map.get(key).push(str);
    }
    
    // Convert the map values to an array of arrays
    return Array.from(map.values());
}
// Example usage:
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let result = groupAnagrams(strs);
console.log(result); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// Explanation: The function groups the anagrams together by sorting each string to create a key. It uses a map to collect all strings that share the same sorted key, effectively grouping them