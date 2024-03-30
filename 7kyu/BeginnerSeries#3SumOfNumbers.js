// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//     Note: a and b are not ordered!
//
//     Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.


function getSum(a, b) {
    let sum = 0
    let a1 = Math.min(a, b)
    let b1 = Math.max(a, b)
    if (a1 < b1) {
        for (a1; a1 <= b1; a1++) {
            sum += a1
        }
    } else if (a1 === b1) {
        return a1
    } else {
        return a1 + b1
    }
    return sum
}