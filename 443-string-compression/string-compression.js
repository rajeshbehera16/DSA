/**
 * @param {character[]} chars
 * @return {number}
 */
var findDuplicates = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }
    return result;
};

var compress = function(chars) {
    let write = 0, read = 0;

    while (read < chars.length) {
        const char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write++] = char;
        if (count > 1) {
            for (const digit of count.toString()) {
                chars[write++] = digit;
            }
        }
    }

    return write;
};