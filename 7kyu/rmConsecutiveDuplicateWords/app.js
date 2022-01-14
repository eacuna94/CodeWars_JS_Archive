// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    let newString = '';
    const wordArray = s.split(" ");

    for (let i = 0; i < wordArray.length; i++) {
        if (!newString.includes(wordArray[i])) {
            newString += wordArray[i] + ' ';
        }
    }
    // console.log(newString)
    return newString.slice(0, newString.length - 1);
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));