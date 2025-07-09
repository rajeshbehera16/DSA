// Candy
// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

/** * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    if (n === 0) return 0;

    const candies = new Array(n).fill(1);

    // First pass: left to right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Second pass: right to left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((sum, candy) => sum + candy, 0);
}
// Example usage:
let ratings = [1, 0, 2];
let result = candy(ratings);
console.log(result); // Output: 5 (1 candy for rating 0, 2 candies for rating 1, 2 candies for rating 2)
ratings = [1, 2, 2];
result = candy(ratings);
console.log(result); // Output: 4 (1 candy for rating 1, 2 candies for rating 2, 1 candy for rating 2)
ratings = [1, 3, 2, 2, 1];
result = candy(ratings);
console.log(result); // Output: 9 (1 candy for rating 1, 2 candies for rating 3, 1 candy for rating 2, 1 candy for rating 2, 1 candy for rating 1)
