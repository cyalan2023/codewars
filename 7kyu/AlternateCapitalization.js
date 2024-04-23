// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!

function capitalize(s) {
    let arr = s.split("").map((el, index) => index % 2 === 0 ? el.toUpperCase() : el).join("")
    let arr_1 = s.split("").map((el, index) => index % 2 !== 0 ? el.toUpperCase() : el).join("")
    return [arr, arr_1]
};