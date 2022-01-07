let friendsList = ["Ryan", "Kieran", "Mark"];

// This code worked on node console, but didn't pass codewars test

// function friend(friends){
//     let friendArr = [];
//     for (friend of friends) {
//         if (friend.length === 4) {
//         friendArr.push(friend);
//         }
//     }
//     return friendArr;
// }

function friend(friends){
    let friendArr = [];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length === 4) {
        friendArr.push(friends[i]);
      }
    }
    return friendArr;
}

console.log(friend(friendsList))


// ------------------------------------------------
// Other Solutions

// function friend(friends){
//     return friends.filter(n => n.length === 4)
// }

// const friend = friends => friends.filter(friend => friend.length == 4);