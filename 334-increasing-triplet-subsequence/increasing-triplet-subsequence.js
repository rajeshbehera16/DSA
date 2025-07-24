/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity, second = Infinity;

    for (const num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true; // Found a number greater than both first and second
        }
    }

    return false;
};