// -------------------- Part 1 --------------------
// const fs = require('fs');

// fs.readFile('./input.txt', (err, data) => {
//   if (err) throw err;

//   // Get the input and change it to an array
//   const str = data.toString();
//   const arr = str.split("\r\n");

//   // Positive is 1
//   // Negative is 0
//   let gammaRate = [0,0,0,0,0,0,0,0,0,0,0,0]

//   for (const binary of arr) {
//     for (let i = 0; i < binary.length; i++) {
//       if (binary[i] === "1") {
//         gammaRate[i]++;
//       } else {
//         gammaRate[i]--;
//       }
//     }
//   }

//   // Translate to gamma
//   for (let i = 0; i < gammaRate.length; i++) {
//     if (gammaRate[i] > 0) {
//       gammaRate[i] = 1;
//     } else {
//       gammaRate[i] = 0;
//     }
//   }
//   const gammaDecimal = parseInt(gammaRate.join(""), 2);
  
//   // Translate to epsilon
//   for (let i = 0; i < gammaRate.length; i++) {
//     if (gammaRate[i] === 1) {
//       gammaRate[i] = 0;
//     } else {
//       gammaRate[i] = 1;
//     }
//   }
//   const epsilonDecimal = parseInt(gammaRate.join(""), 2);

//   console.log({gammaDecimal, epsilonDecimal, result: gammaDecimal*epsilonDecimal})
// })


// -------------------- Part 2 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n");

  let relevantBinaries = arr;
  let focusBit = 0;

  do {
    let temporaryBinaries1 = [];
    let temporaryBinaries0 = [];

    // Positive is 1
    // Negative is 0
    let winningBit = 0;

    for (const binary of relevantBinaries) {
      if (binary[focusBit] === "1") {
        winningBit++;
        temporaryBinaries1.push(binary)
      } else {
        winningBit--;
        temporaryBinaries0.push(binary)
      }
    }

    if (winningBit < 0) {
      relevantBinaries = temporaryBinaries0;
    } else {
      relevantBinaries = temporaryBinaries1;
    }
    focusBit++
    
  } while (relevantBinaries.length > 1);

  const oxygen = parseInt(relevantBinaries[0], 2);


  relevantBinaries = arr;
  focusBit = 0;

  do {
    let temporaryBinaries1 = [];
    let temporaryBinaries0 = [];

    // Positive is 1
    // Negative is 0
    let winningBit = 0;

    for (const binary of relevantBinaries) {
      if (binary[focusBit] === "1") {
        winningBit++;
        temporaryBinaries1.push(binary)
      } else {
        winningBit--;
        temporaryBinaries0.push(binary)
      }
    }

    if (winningBit < 0) {
      relevantBinaries = temporaryBinaries1;
    } else {
      relevantBinaries = temporaryBinaries0;
    }
    focusBit++
    
  } while (relevantBinaries.length > 1);

  const carbon = parseInt(relevantBinaries[0], 2);

  console.log(carbon * oxygen)
})