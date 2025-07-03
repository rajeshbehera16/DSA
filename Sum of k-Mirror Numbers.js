var kMirror = function(n) {
    let res = 0;
    for (let i = 1; i <= n; ++i) {
        if (isKmirror(i)) {
            res += i;
        }
    }
    return res;
}
function isKmirror(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Example usage:

