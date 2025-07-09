// Text Justification
// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

/** * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let currentLine = [];
    let currentLength = 0;

    for (const word of words) {
        if (currentLength + word.length + currentLine.length > maxWidth) {
            // Justify the current line
            result.push(justifyLine(currentLine, currentLength, maxWidth));
            currentLine = [word];
            currentLength = word.length;
        } else {
            currentLine.push(word);
            currentLength += word.length;
        }
    }

    // Handle the last line
    if (currentLine.length > 0) {
        result.push(leftJustify(currentLine, maxWidth));
    }

    return result;
}

function justifyLine(line, totalLength, maxWidth) {
    const numSpaces = line.length - 1;
    const remainingSpace = maxWidth - totalLength;
}   
function leftJustify(line, maxWidth) {
    const justifiedLine = line.join(' ');
    const spacesToAdd = maxWidth - justifiedLine.length;
    return justifiedLine + ' '.repeat(spacesToAdd);
}
function justifyLine(line, totalLength, maxWidth) {
    if (line.length === 1) {
        return line[0] + ' '.repeat(maxWidth - totalLength);
    }

    const numSpaces = line.length - 1;
    const remainingSpace = maxWidth - totalLength;
    const spacePerGap = Math.floor(remainingSpace / numSpaces);
    const extraSpaces = remainingSpace % numSpaces;

    let justifiedLine = '';
    for (let i = 0; i < line.length; i++) {
        justifiedLine += line[i];
        if (i < numSpaces) {
            justifiedLine += ' '.repeat(spacePerGap + (i < extraSpaces ? 1 : 0));
        }
    }

    return justifiedLine;
}
function leftJustify(line, maxWidth) {
    const justifiedLine = line.join(' ');
    const spacesToAdd = maxWidth - justifiedLine.length;
    return justifiedLine + ' '.repeat(spacesToAdd);
}
// Example usage:
let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
let result = fullJustify(words, maxWidth);
console.log(result); // Output: ["This    is    an", "example  of text", "justification.  "]