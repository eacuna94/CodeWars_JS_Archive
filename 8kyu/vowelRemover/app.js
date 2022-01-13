// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
    const vowels = ['a', 'e', 'o', 'i', 'u'];
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) {
            newString += string[i]
        }
    }

    return newString;
}

console.log(shortcut('hello'));
console.log(shortcut('codewars'));

// ------------------
// Other Solutions
// ------------------

// function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
// }

// function shortcut(str) {
//     return str.split('').filter(function(e) {
//       return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
//     }).join('')
// }