// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let lengthStr=  str.replace(/[aeiou]/gi, "_").split("")
    return lengthStr.filter(el => el === "_").length;
}