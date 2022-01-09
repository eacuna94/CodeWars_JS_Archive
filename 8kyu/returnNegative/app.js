function makeNegative(num) {
    return (num > 0 ? num * -1 : num);
}

console.log(makeNegative(-5));

// --------------------------------------
// Other Solutions

// function makeNegative(num) {
//     return -Math.abs(num);
// }

// makeNegative = n => -Math.abs(n)

// function makeNegative(num) {
//     return num < 0 ? num : -num;
// }