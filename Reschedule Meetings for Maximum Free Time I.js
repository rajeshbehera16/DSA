// Reschedule Meetings for Maximum Free Time I

// You are given an integer eventTime denoting the duration of an event, where the event occurs from time t = 0 to time t = eventTime.

// You are also given two integer arrays startTime and endTime, each of length n. These represent the start and end time of n non-overlapping meetings, where the ith meeting occurs during the time [startTime[i], endTime[i]].

// You can reschedule at most k meetings by moving their start time while maintaining the same duration, to maximize the longest continuous period of free time during the event.

// The relative order of all the meetings should stay the same and they should remain non-overlapping.

// Return the maximum amount of free time possible after rearranging the meetings.

// Note that the meetings can not be rescheduled to a time outside the event



/** * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} k
 * @return {number} */
var maxFreeTime = function(eventTime, startTime, endTime, k) {
    const n = startTime.length;
    const meetings = Array.from({ length: n }, (_, i) => [startTime[i], endTime[i]]);
    
    // Sort meetings by their start time
    meetings.sort((a, b) => a[0] - b[0]);
    
    // Calculate the total free time without any rescheduling
    let totalFreeTime = 0;
    let lastEnd = 0;
    
    for (const [start, end] of meetings) {
        if (start > lastEnd) {
            totalFreeTime += start - lastEnd;
        }
        lastEnd = Math.max(lastEnd, end);
    }
    
    // Add free time after the last meeting until eventTime
    if (lastEnd < eventTime) {
        totalFreeTime += eventTime - lastEnd;
    }
    
    // If k is 0, return the total free time calculated
    if (k === 0) {
        return totalFreeTime;
    }
    
    // Calculate the maximum free time possible after rearranging k meetings
    let maxFreeTime = totalFreeTime;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n && j <= i + k; j++) {
            const newStart = meetings[i][0];
            const newEnd = meetings[j][1];
            const newFreeTime = newStart - lastEnd + (eventTime - newEnd);
            maxFreeTime = Math.max(maxFreeTime, newFreeTime);
        }
    }
    
    return maxFreeTime;
}   
// Example usage:
let eventTime = 10;
let startTime = [1, 3, 5];
let endTime = [2, 4, 6];
let k = 1;
let result = maxFreeTime(eventTime, startTime, endTime, k);
console.log(result); // Output: 4 (the maximum free time after rearranging meetings)