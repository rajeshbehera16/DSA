/** * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]} */
var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;
    
    // Add all intervals that end before the new interval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    // Add the merged new interval
    result.push(newInterval);
    
    // Add all remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}   
// Example usage:
let intervals = [[1, 3], [6, 9]];
let newInterval = [2, 5];
let result = insert(intervals, newInterval);
console.log(result); // Output: [[1, 5], [6, 9]]