/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(nums1,nums2) {
    let nums3=nums1.concat(nums2);
    nums3.sort((a,b)=>{return a-b});
    if (nums3.length%2==0){
        return ((nums3[nums3.length/2]+nums3[(nums3.length/2)-1])/2);
    }else{
        return nums3[Math.floor(nums3.length/2)];
    }
};
// Example usage:
let nums1 = [1, 3];
let nums2 = [2];
let result = findMedianSortedArrays(nums1, nums2);
console.log(result); // Output: 2.0 (The median of [1, 2, 3] is 2.0)