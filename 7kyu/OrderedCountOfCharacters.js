// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
//     Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    const counts = {};
    const result = [];

    for (let char of text) {
        counts[char] = (counts[char] || 0) + 1;
    }

    for (let char of text) {
        if (counts[char] > 0) {
            result.push([char, counts[char]]);
            counts[char] = 0;
        }
    }

    return result;
}