// Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
/** 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    // Calculate prefix products
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    
    // Calculate suffix products and multiply with prefix products
    let suffixProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffixProduct *= nums[i + 1];
        answer[i] *= suffixProduct;
    }
    
    return answer;
}
// Example usage:
let nums = [1, 2, 3, 4];
let result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]
nums = [5, 6, 7, 8];
result = productExceptSelf(nums);
console.log(result); // Output: [336, 280, 240, 210]
nums = [1, 0, 3, 4];
result = productExceptSelf(nums);
console.log(result); // Output: [0, 12, 0, 0]

