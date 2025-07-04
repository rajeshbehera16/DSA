//Best Time to Buy and Sell Stock II
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the price today is greater than the price yesterday, we can make a profit
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1]; // Add the profit to the total
        }
    }

    return totalProfit;
}   
// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result); // Output: 7 (Buy on day 2 at price 1, sell on day 3 at price 5, buy on day 4 at price 3
// and sell on day 5 at price 6, total profit = (5-1) + (6-3) = 4 + 3 = 7)