// H-Index
// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.


/** * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let n = citations.length;
    let hIndex = 0;

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n - i) {
            hIndex = n - i;
            break;
        }
    }

    return hIndex;
}
// Example usage:
let citations = [3, 0, 6, 1, 5];
let result = hIndex(citations);
console.log(result); // Output: 3 (the researcher has 3 papers with at least 3 citations each)
citations = [1, 2, 3, 4, 5];
result = hIndex(citations);
console.log(result); // Output: 3 (the researcher has 3 papers with at least 3 citations each)
citations = [0, 0, 0];
result = hIndex(citations);
console.log(result); // Output: 0 (no papers with citations)