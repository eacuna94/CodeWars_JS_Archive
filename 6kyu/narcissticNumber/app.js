function narcissitic(value) {
    let valueArray = Array.from(String(value)); //make array of value parameter to iterate over it
    console.log(valueArray)
    let sumOfBase = 0;
    for (let i = 0; i < valueArray.length; i++) {
        sumOfBase += Math.pow(valueArray[i], valueArray.length);  
    };
    console.log(sumOfBase);
    return value === sumOfBase ? true : false;
}

console.log(narcissitic(153));

// ----------------------------------------------
// Other Solutions
// ----------------------------------------------

// function narcissistic( value ) {
//     return ('' + value).split('').reduce(function(p, c){
//       return p + Math.pow(c, ('' + value).length)
//       }, 0) == value;
// }

// function narcissistic(value) {
//     return value.toString()
//                 .split('')
//                 .map( (x,i,arr) => x ** arr.length)
//                 .reduce( (a,b)=> +a + +b) 
//                  === value
// }