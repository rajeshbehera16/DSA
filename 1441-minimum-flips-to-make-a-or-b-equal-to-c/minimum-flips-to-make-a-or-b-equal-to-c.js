/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {

    let count = 0;

    while (a > 0 || b > 0 || c > 0) {
        const aBit = a & 1;
        const bBit = b & 1;
        const cBit = c & 1;

        if ((aBit | bBit) !== cBit) {
            count += cBit === 0 ? aBit + bBit : 1;
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return count;
};