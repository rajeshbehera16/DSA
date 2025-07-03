//Find the K-th Character in String Game I
function findKthBit(n,k){
    let s="0"
    for(let i=1;i<n;i++){
        const temp=s+"1"+s.split("").reverse().map(x=>x=="0"?"1":"0").join("")
        s=temp
    }
    return s[k-1]
}
