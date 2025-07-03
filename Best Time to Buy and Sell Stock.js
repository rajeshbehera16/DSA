// Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update the minimum price
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // Update the maximum profit
        }
    }

    return maxProfit;
}   
// Example usage:

let prices = [7, 1, 5, 3, 6, 4];
let result = maxProfit(prices);
console.log(result); // Output: 5 (Buy on day 2 at price 1 and sell on day 5 at price 6)