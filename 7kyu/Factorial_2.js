// Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
    //your code here
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}