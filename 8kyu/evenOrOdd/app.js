// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    return (number % 2 === 0 ? 'Even' : 'Odd');
}

console.log(evenOrOdd(100)) //Expected Output 'Even'
console.log(evenOrOdd(101)) //Expected Output 'Odd'

// ---------------
// Other Solutions
// ---------------

// function even_or_odd(number) {
//     return number % 2 ? "Odd" : "Even"
// }

// function even_or_odd(number) {
//     if (number%2 == 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
// }

// const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';