// Scenario
// Several people are standing in a row divided into two teams.
//     The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
//
//     Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
//
function rowWeights(array) {
    //your code here
    let one = 0
    let two = 0
    let array_1 = array.filter((el, index) => index % 2 === 0)
    let array_2 = array.filter((el, index) => index % 2 !== 0)
    array_1 = array_1.reduce((acc, el) => acc + el, 0)
    array_2 = array_2.reduce((acc, el) => acc + el, 0)
    return [array_1, array_2]
}