/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    const positiveNumsSet = new Set(nums.filter((num) => num > 0));
    return positiveNumsSet.size === 0
        ? Math.max(...nums)
        : [...positiveNumsSet].reduce((a, b) => a + b, 0);
};