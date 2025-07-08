// Maximum Number of Events That Can Be Attended II
// You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also given an integer k which represents the maximum number of events you can attend.

// You can only attend one event at a time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is, you cannot attend two events where one of them starts and the other ends on the same day.

// Return the maximum sum of values that you can receive by attending events.
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = (events, limit) => {
    const len = events.length;
    const dp = Array.from({ length: len + 1 }, () => Array(limit + 1).fill(0));

    if (limit === 1) {
        let maxVal = 0;
        for (const [start, end, val] of events) {
            maxVal = Math.max(maxVal, val);
        }

        return maxVal;
    }

    events.sort((a, b) => a[0] - b[0]);

    for (let i = len - 1; i >= 0; i--) {
        let left = i + 1;
        let right = len;
        const endTime = events[i][1];
        while (left < right) {
            const mid = Math.floor((right - left) / 2) + left;
            if (events[mid][0] > endTime) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        const next = left;

        for (let j = limit - 1; j >= 0; j--) {
            dp[i][j] = Math.max(
                dp[i + 1][j],
                dp[next][j + 1] + events[i][2]
            );
        }
    }

    return dp[0][0];
};
