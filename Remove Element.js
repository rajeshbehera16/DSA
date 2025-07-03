// Remove Element

var removeElement = function(nums,val) {
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=val){
            nums[i]=nums[j];
            i++;
        }
    }return i;
};
// Example usage:

let nums = [3,2,2,3];

let val = 3;
let newLength = removeElement(nums, val);

console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [2, 2]
