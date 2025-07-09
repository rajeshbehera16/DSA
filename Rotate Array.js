// Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative

/** * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead. */
var rotate = function (nums, k) {
  let i;
  while(k>0){
    const last=nums.pop();
    nums.unshift(last);
    k--;
  }
};
// Example usage:
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums); // Output: [5, 6, 7, 1,  2, 3, 4]