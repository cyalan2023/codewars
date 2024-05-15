// Find the number with the most digits.
//
//     If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(array) {
    let maxDigits = 0;
    let numberWithMostDigits = array[0];

    for (let i = 0; i < array.length; i++) {
        const numLength = String(array[i]).length;
        if (numLength > maxDigits) {
            maxDigits = numLength;
            numberWithMostDigits = array[i];
        }
    }

    return numberWithMostDigits;
}