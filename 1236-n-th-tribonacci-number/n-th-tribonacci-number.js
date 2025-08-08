/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {

    if(!n) return 0;
    if(n==1) return 1;
    if(n===2) return 1;

    let t0 = 0;
    let t1 = 1;
    let t2 = 1;

    for(let i=3; i<=n;i++){
        [ t2, t1, t0 ] = [ t2+t1+t0, t2, t1 ];
    }
    
    return t2;
};