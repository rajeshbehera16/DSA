/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    const charCountT = {};
    for (const char of t) {
        charCountT[char] = (charCountT[char] || 0) + 1;
    }

    let required = Object.keys(charCountT).length;
    let left = 0, right = 0;
    let formed = 0;
    const windowCounts = {};
    let minLength = Infinity;
    let minLeft = 0;

    while (right < s.length) {
        const charRight = s[right];
        windowCounts[charRight] = (windowCounts[charRight] || 0) + 1;

        if (charRight in charCountT && windowCounts[charRight] === charCountT[charRight]) {
            formed++;
        }

        while (left <= right && formed === required) {
            const charLeft = s[left];

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
            }

            windowCounts[charLeft]--;
            if (charLeft in charCountT && windowCounts[charLeft] < charCountT[charLeft]) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}