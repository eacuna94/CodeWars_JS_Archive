// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(string) {
    if (string[string.length - 1] !== '!') {
        return string;
    } else {
        let stringArray = Array.from(string);
        for (let i = stringArray.length - 1; i >= 0; i--) {
            if (stringArray[i] === '!') {
                stringArray.pop()
            } else break
        }
        return stringArray.join('');
    }
}

console.log(remove('HI!'))
console.log(remove('HI!!!'))

// ------------------------
// Other Solutions
// ------------------------

// const remove = s => s.replace(/!+$/, '');

// function remove(s){
//     return s.replace(/!+$/, '');
// }

// function remove(s)
// {
//     while(s && s.slice(-1) == "!") 
//     { 
//         s = s.slice(0,-1) 
//     }
//     return s;
// }