//My solution
function finalGrade (exam, projects) {
    let grade = 0;
    if (exam > 90 || projects > 10) {
      grade = 100;
    } else if (exam > 75 && projects >= 5) {
      grade = 90;
    } else if (exam > 50 && projects >= 2) {
      grade = 75;
    } else {
      grade = 0;
    }
    return grade// final grade
  }

//   -------------------------------------------
//   Other shorther solutions

// function finalGrade (exam, projects) {
//     if (exam > 90 || projects > 10) return 100;
//     else if (exam > 75 && projects >= 5) return 90;
//     else if (exam > 50 && projects >= 2) return 75;
//     else return 0;
//   }

// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10) return 100;
//     if(exam > 75 & projects >= 5) return 90;
//     if(exam > 50 & projects >= 2) return 75;
//     return 0;
//   }

//   const finalGrade = (exam, projects) => {
//     return (
//       exam > 90 || projects > 10 ? 100 :
//       exam > 75 && projects >= 5 ? 90 :
//       exam > 50 && projects >= 2 ? 75 : 0
//     )
//   }