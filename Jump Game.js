// Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

/** * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let goal=nums.length-1;
    for(let i=nums.length-1;i>=0;i--){
        if(i+nums[i]>=goal){
            goal=i;
        }
    }
    return goal===0;
};
// Example usage:
let nums = [2, 3, 1, 1, 4];
let result = canJump(nums);
console.log(result); // Output: true (can jump to the last index)
nums = [3, 2, 1, 0, 4];
result = canJump(nums);
console.log(result); // Output: false (cannot reach the last index)