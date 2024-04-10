// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)
//
// Examples
//     [1, 1, 2] ==> 2
//     [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
    let counts = {};

    // Count the occurrences of each number
    numbers.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    // Find the number with count equal to 1
    const oddNumber = Object.keys(counts).find(key => counts[key] === 1);

    return parseInt(oddNumber);
}
