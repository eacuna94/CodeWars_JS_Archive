function comesAfter(str, l) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];

  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === l || str[i] === l.toUpperCase()) {
      if (letters.includes(str[i + 1]) || letters.includes(str[i + 1].toUpperCase())) {
        newString += str[i + 1];
        console.log(newString);
      }
    }
  }

  return newString;
}

console.log(comesAfter("are you really learning Ruby?", 'r'));