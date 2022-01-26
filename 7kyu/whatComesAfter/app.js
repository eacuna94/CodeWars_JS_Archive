function comesAfter(str, l) {
  const letters = /^[A-Za-z]+$/;

  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === l || str[i] === l.toUpperCase()) {
      if (letters.test(str[i + 1])) {
        newString += str[i + 1];
        console.log(newString);
      }
    }
  }

  return newString;
}

console.log(comesAfter("are you really learning Ruby?", 'r'));
console.log(comesAfter("Pirates say arrrrrrrrr.", 'r'));