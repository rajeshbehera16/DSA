/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    let result=[]
    for(let i=0;i<nums.length;){
        let start=i,end=i+1;
        while(end<=nums.length && nums[end]-nums[start]==end-start){
            end++;
        }
        if(start==end-1){
            result.push(`${nums[start]}`)
        }else{
            result.push(`${nums[start]}->${nums[end-1]}`);
        }
        i=end;
    }
    return result;
};
// Example usage:
let nums = [0, 1, 2, 4, 5, 7];
let result = summaryRanges(nums);
console.log(result); // Output: ["0->2", "4->5", "7"]