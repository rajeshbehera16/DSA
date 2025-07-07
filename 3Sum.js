// 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array to make it easier to avoid duplicates

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates for the second number
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates for the third number
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Move left pointer to increase the sum
            } else {
                right--; // Move right pointer to decrease the sum
            }
        }
    }

    return result;
};
// Example usage:
let nums = [-1, 0, 1, 2, -1, -2];
let result = threeSum(nums);
console.log(result); // Output: [[-1, -1, 2], [-1, 0, 1], [-2, 1, 1]]
// Explanation: The function finds all unique triplets in the array that sum to zero. It sorts the array and uses a two-pointer technique to find pairs that, along with the current element, sum to zero. It also ensures that duplicate triplets are not included in the result by skipping over duplicate values during the iteration.