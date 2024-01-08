// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.
//
//     Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
//
//     Good Luck!
//
//     Note
// 1 Dollar = 100 Cents

function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    switch(litres){
        case 1:
            return  pricePerLitre;
        case 2:
            return Number((2 * pricePerLitre - (2 * 0.05)).toFixed(2))
        case 3:
            return Number((3 * pricePerLitre - (3 * 0.05)).toFixed(2))
        case 4:
            return Number((4 * pricePerLitre - (4 * 0.10)).toFixed(2))
        case 5:
            return Number((5 * pricePerLitre - (5 * 0.10)).toFixed(2))
        case 6:
            return Number((6 * pricePerLitre - (6 * 0.15)).toFixed(2))
        case 7:
            return Number((7 * pricePerLitre - (7 * 0.15)).toFixed(2))
        case 8:
            return Number((8 * pricePerLitre - (8 * 0.20)).toFixed(2))
        case 9:
            return Number((9 * pricePerLitre - (9 * 0.20)).toFixed(2))
        default:
            return Number((litres * pricePerLitre - (litres * 0.25)).toFixed(2))
    }
}