// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 4 or less.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

var a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
var b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye' };

const cannonsReady = (gunners) => {
    const response = Object.values(gunners);
    return response.includes('nay') ? 'Shiver me timbers!' : 'Fire!';
}

console.log(cannonsReady(a));
console.log(cannonsReady(b));

// ---------------------
// Other Solutions
// ---------------------

// const cannonsReady = (gunners) => {
//     return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
// }

// const cannonsReady = (gunners) => {
//     for (var i in gunners) {
//         if (gunners[i] == "nay") {
//           return "Shiver me timbers!"
//         }
//     }
//   return "Fire!"
// }