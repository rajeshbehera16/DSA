/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    // Sort intervals by the start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    let merged = [];
    let currentInterval = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        let nextInterval = intervals[i];
        
        // If the current interval overlaps with the next interval
        if (currentInterval[1] >= nextInterval[0]) {
            // Merge them by updating the end time
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            // No overlap, push the current interval and move to the next
            merged.push(currentInterval);
            currentInterval = nextInterval;
        }
    }
    
    // Push the last interval
    merged.push(currentInterval);
    
    return merged;
};
// Example usage:
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
let result = merge(intervals);
console.log(result); // Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: The intervals [1, 3] and [2, 6] overlap, so they are merged into [1, 6]. The other intervals do not overlap and remain as they are.
// The final result is [[1, 6], [8, 10], [15, 18]].