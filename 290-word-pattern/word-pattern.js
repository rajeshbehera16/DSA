/** * @param {string} pattern * @param {string} s * @return {boolean} */ var wordPattern = function(pattern,s) {
    let arr=s.split(' ')
    if(arr.length!=pattern.length)return false;
    for(let i=0;i<pattern.length-1;i++){
        for(let j=i+1;j<pattern.length;j++){
            if((arr[i]==arr[j]&&pattern[i]!=pattern[j])||(arr[i]!=arr[j]&&pattern[i]==pattern[j])){
                return false;
            }
        }
    }
    return true;
};
// Example usage:
let pattern = "abba";
let s = "dog cat cat dog";
let result = wordPattern(pattern, s);
console.log(result); // Output: true (the pattern matches the string)
