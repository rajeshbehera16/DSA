// Find First and Last Position of Element in Sorted Array

// Topics
// premium lock icon
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    let first=-1;
    let last=-1;    
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(target==nums[mid]){
            first=mid;
            right=mid-1;
        }else if(target<nums[mid]) right=mid-1;
        else left=mid+1;
    }   

    left=0;
    right=nums.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(target==nums[mid]){
            last=mid;
            left=mid+1;
        }else if(target<nums[mid]) right=mid-1;
        else left=mid+1;
    }
    return [first,last];
};
// Example usage:
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
let result = searchRange(nums, target);
console.log(result); // Output: [3, 4] (the first and last positions of 8 in the array)
nums = [5, 7, 7, 8, 8, 10];
target = 6;
result = searchRange(nums, target);
console.log(result); // Output: [-1, -1] (6 is not present in the array)
nums = [];
target = 0;
result = searchRange(nums, target);
console.log(result); // Output: [-1, -1] (empty array, so no positions found)
nums = [1];
target = 1;
result = searchRange(nums, target);
console.log(result); // Output: [0, 0] (the only element is 1, so both first and last positions are 0)
nums = [1, 2, 3, 4, 5];
target = 3;
result = searchRange(nums, target);
console.log(result); // Output: [2, 2] (the first and last positions of 3 in the array)
