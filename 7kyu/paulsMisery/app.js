function paul(x) {
    let miseryScore = 0;
    const activities = {
        'kata': 5,
        'Petes kata': 10,
        'life': 0,
        'eating': 1
    };

    for (let i = 0; i < x.length; i++) {
        let activity = x[i];
        // console.log(activity)
        miseryScore += activities[activity];
        // console.log(activities[activity]);
    }

    console.log(miseryScore)

    if (miseryScore < 40) {
        return 'Super happy!';
    } else if (miseryScore < 70) {
        return 'Happy!';
    } else if (miseryScore < 100) {
        return 'Sad!';
    } else {
        return 'Miserable!'
    }
}


console.log(paul(['life', 'eating', 'life']))
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata']))
console.log(paul(["Petes kata","life","eating","eating"]))


// -------------------------------------------
// Other Solutions
// -------------------------------------------

// function paul(arr){
//     const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
//     const num = arr.reduce( (a, i)=> +a + dic[i], 0)
//     return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
// }

// function paul(activities) {
//     const VALUES = {'Petes kata': 10, 'kata': 5, 'eating': 1, 'life': 0};
//     const score = activities.reduce((s, a) => s + VALUES[a], 0);
//     switch (true) {
//       case score < 40: return 'Super happy!';
//       case score < 70: return 'Happy!';
//       case score < 100: return 'Sad!';
//       default: return 'Miserable!';
//     }
// }