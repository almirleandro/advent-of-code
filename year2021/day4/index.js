// -------------------- Part 1 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n");
  // console.log(arr)

  const inputBlocks = [];
  let currentBlock = [];
  for (const line of arr) {
    if (line !== "") {
      currentBlock.push(line)
    } else {
      inputBlocks.push(currentBlock);
      currentBlock = []; // clears the array
    }
  }
  inputBlocks.push(currentBlock);
  // console.log(inputBlocks)

  const bingoCards = [];
  let currentCard = [];
  for (const card of inputBlocks) {
    for (const rowString of card) {
      let rowArray = rowString.split(" ");
      rowArray = rowArray.filter(n => n);
      currentCard.push(rowArray)
    }
    bingoCards.push(currentCard);
    currentCard = [];
  }
  console.log(bingoCards[100])
  
  const bingoOrder = arr[0].split(",")
  // console.log(bingoOrder)

})


// -------------------- Part 2 --------------------
// const fs = require('fs');

// fs.readFile('./input.txt', (err, data) => {
//   if (err) throw err;

//   // Get the input and change it to an array
//   const str = data.toString();
//   const arr = str.split("\r\n");

//   let relevantBinaries = arr;
//   let focusBit = 0;

//   do {
//     let temporaryBinaries1 = [];
//     let temporaryBinaries0 = [];

//     // Positive is 1
//     // Negative is 0
//     let winningBit = 0;

//     for (const binary of relevantBinaries) {
//       if (binary[focusBit] === "1") {
//         winningBit++;
//         temporaryBinaries1.push(binary)
//       } else {
//         winningBit--;
//         temporaryBinaries0.push(binary)
//       }
//     }

//     if (winningBit < 0) {
//       relevantBinaries = temporaryBinaries0;
//     } else {
//       relevantBinaries = temporaryBinaries1;
//     }
//     focusBit++
    
//   } while (relevantBinaries.length > 1);

//   const oxygen = parseInt(relevantBinaries[0], 2);


//   relevantBinaries = arr;
//   focusBit = 0;

//   do {
//     let temporaryBinaries1 = [];
//     let temporaryBinaries0 = [];

//     // Positive is 1
//     // Negative is 0
//     let winningBit = 0;

//     for (const binary of relevantBinaries) {
//       if (binary[focusBit] === "1") {
//         winningBit++;
//         temporaryBinaries1.push(binary)
//       } else {
//         winningBit--;
//         temporaryBinaries0.push(binary)
//       }
//     }

//     if (winningBit < 0) {
//       relevantBinaries = temporaryBinaries1;
//     } else {
//       relevantBinaries = temporaryBinaries0;
//     }
//     focusBit++
    
//   } while (relevantBinaries.length > 1);

//   const carbon = parseInt(relevantBinaries[0], 2);

//   console.log(carbon * oxygen)
// })