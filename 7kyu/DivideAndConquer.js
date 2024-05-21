// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//
//     Return as a number.

function divCon(x) {
    let x_1 = x.filter(el => typeof el === "number")
    let x_2 = x.filter(el => typeof el === "string")
    return x_1.reduce((acc, el) => acc + el, 0) - x_2.reduce((acc, el) => acc + Number(el), 0)
}