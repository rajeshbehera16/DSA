// 4sum
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    return kSum(nums, target, 0, 4);
};
function kSum(nums, target, start, k) {
    let res = [];
    // If we have run out of numbers to add, return res.
    if (start === nums.length) {
        return res;
    }
    // There are k remaining values to add to the sum. The
    // average of these values is at least target / k.
    let average_value = target / k;
    // We cannot obtain a sum of target if the smallest value
    // in nums is greater than target / k or if the largest
    // value in nums is smaller than target / k.
    if (nums[start] > average_value || average_value > nums[nums.length - 1]) {
        return res;
    }
    if (k === 2) {
        return twoSum(nums, target, start);
    }
    for (let i = start; i < nums.length; i++) {
        if (i === start || nums[i - 1] !== nums[i]) {
            for (let subset of kSum(nums, target - nums[i], i + 1, k - 1)) {
                res.push([nums[i], ...subset]);
            }
        }
    }
    return res;
}
function twoSum(nums, target, start) {
    let res = [];
    let lo = start,
        hi = nums.length - 1;
    while (lo < hi) {
        let curr_sum = nums[lo] + nums[hi];
        if (curr_sum < target || (lo > start && nums[lo] === nums[lo - 1])) {
            ++lo;
        } else if (
            curr_sum > target ||
            (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
        ) {
            --hi;
        } else {
            res.push([nums[lo++], nums[hi--]]);
        }
    }
    return res;
}