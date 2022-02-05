// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (str === '' || str.trim().length > 140) return false;
  const strArray = str.trim().split(' ');
  strArray[0][0].toUpperCase();
  let newArray = [];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== '') {
      strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
      newArray.push(strArray[i]);
    }
  }

  return `#${newArray.join('')}`;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));