// Jump Game II
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

/** * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
}
// Example usage:
let nums = [2, 3, 1, 1, 4];
let result = jump(nums);
console.log(result); // Output: 2 (minimum jumps to reach the last index)
nums = [2, 3, 0, 1, 4];
result = jump(nums);
console.log(result); // Output: 2 (minimum jumps to reach the last index)
nums = [0];
result = jump(nums);
console.log(result); // Output: 0 (already at the last index, no jumps needed)
nums = [1, 2, 3];
result = jump(nums);
console.log(result); // Output: 2 (minimum jumps to reach the last index)