
/** * @param {number} n
 * @param {number[][]} meetings
 * @return {number} */
var mostBooked = function(n, meetings) {
    let count = Array.from({length: n}, () => 0);
    let rooms = Array.from({length: n}, (_, index) => ({roomId: index, endTime: 0}));
    meetings.sort((a, b) => a[0] - b[0]);
    for (let [start, end] of meetings) {
        // Find the first available room
        let room = rooms.find(r => r.endTime <= start);
        if (room) {
            // If a room is available, use it
            room.endTime = end;
            count[room.roomId]++;
        } else {
            // If no room is available, find the room that will be free the soonest
            let minEndTime = Math.min(...rooms.map(r => r.endTime));
            let delayRoom = rooms.find(r => r.endTime === minEndTime);
            delayRoom.endTime += (end - start);
            count[delayRoom.roomId]++;
        }
    }
    // Find the room with the maximum count of meetings
    let maxCount = Math.max(...count);
    return count.indexOf(maxCount);
};
// Example usage:

let n = 3;
let meetings = [[0, 10], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10]];
let result = mostBooked(n, meetings);
console.log(result); // Output: 0