// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], i);
    } else return [i, map.get(target - nums[i])];
  }
};
// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [1, 0] (since nums[0] + nums[1] = 2 + 7 = 9)