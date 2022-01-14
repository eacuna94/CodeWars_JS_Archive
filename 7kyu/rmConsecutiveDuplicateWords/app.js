// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    let newString = '';
    const wordArray = s.split(" ");

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] !== wordArray[i + 1]) {
            newString += wordArray[i] + ' ';
        }
    }
    // console.log(newString)
    return newString.slice(0, newString.length - 1);
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

// ----------------
// Other Solutions
// ----------------

// const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

// const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')