// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.
//

function sumMix(x){
    let newNumber = x.map(el => Number(el))
    return newNumber.reduce((ac,el) => ac + el,0)
}