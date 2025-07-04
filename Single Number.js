//Single Number

/** * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let uniqueNumber = 0;

    for (let i = 0; i < nums.length; i++) {
        uniqueNumber ^= nums[i]; // XOR operation
    }

    return uniqueNumber;
}
// Example usage:
let nums = [4, 1, 2, 1, 2];
let result = singleNumber(nums);
console.log(result); // Output: 4 (4 is the single number that appears only once)