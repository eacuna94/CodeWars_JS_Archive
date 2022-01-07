let dna = 'GCAT';

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence'
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === 'T') {
        rna += 'U';
      } else {
      rna += dna[i];
      }
    }
    return rna;
}

console.log(DNAtoRNA(dna))

// ----------------------------------------
// OTHER SOLUTIONS FROM OTHERS

// function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
// }

// const DNAtoRNA = dna => dna.replace(/T/g, 'U');

// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
// }