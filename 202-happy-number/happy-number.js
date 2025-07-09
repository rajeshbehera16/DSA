/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num=n;
    while(num>9){
        let temp=0;
        while(num!=0){
            temp+=Math.pow((num%10),2);
            num=Math.floor(num/10);
        }
        num=temp;
    }
    return num==7||num==1?true:false;
};
// Example usage:
let n = 19;
let result = isHappy(n);
console.log(result); // Output: true (19 is a happy number)