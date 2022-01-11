const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";

function oddOrEven(n) {
    if (n % 2 !== 0) {
        return EITHER
    }
    let consecutiveN = n / 2;
    return consecutiveN % 2 === 0 ? EVEN : ODD;
}

console.log(oddOrEven(1))
console.log(oddOrEven(6))
console.log(oddOrEven(8))

// ----------------------
// Other Solutions
// ----------------------

// function oddOrEven(n) {
//     return n % 2 ? EITHER : n / 2 % 2 ? ODD : EVEN
// }

// const oddOrEven = $ => $ % 2 ? EITHER : $ / 2 % 2 ? ODD : EVEN