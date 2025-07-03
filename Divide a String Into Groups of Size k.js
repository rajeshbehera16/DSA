var divideString = function (s, k, fill) {
    let arr = []
    for(let i=0;i<s.length;){
        if(i+k<=s.length){arr.push(s.slice(i,i+k))}
        else{arr.push(s.slice(i)+fill.repeat(k-s.length+i))}i+=k}
return arr}
// Example usage:
