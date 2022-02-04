// Write a function to convert a name into initials. This kata strictly takes two words with one space 
// in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let spaceIndex = name.indexOf(' ');
  let firstInitial = name[0].toUpperCase();
  let lastInitial = name[spaceIndex + 1].toUpperCase();
  return firstInitial + '.' + lastInitial;
}

console.log(abbrevName('Sam Harris'));
console.log(abbrevName('patrick feeney'));

// -----------------------------------------
// Other Solutions
// -----------------------------------------

// function abbrevName(name){

//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// function abbrevName(name){
//   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }

// function abbrevName(name){

//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }