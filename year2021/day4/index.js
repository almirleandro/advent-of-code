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
      currentBlock = []; // Clears the array
    }
  }
  inputBlocks.push(currentBlock);
  inputBlocks.shift();
  // console.log(inputBlocks)

  const bingoCards = [];
  let currentCard = [];
  for (const card of inputBlocks) {
    for (const rowString of card) {
      let rowArray = rowString.split(" ");
      rowArray = rowArray.filter(n => n); // Remove empty values
      currentCard.push(rowArray)
    }
    const cardScore = {
      col1: 0,
      col2: 0,
      col3: 0,
      col4: 0,
      col5: 0,
      row1: 0,
      row2: 0,
      row3: 0,
      row4: 0,
      row5: 0,
    }
    bingoCards.push({card: currentCard, cardScore});
    currentCard = [];
  }
  // console.log(bingoCards)
  
  const bingoOrder = arr[0].split(",")
  // console.log(bingoOrder)

  let wasWinnerAnounced = false;
  for (const currentNumber of bingoOrder) { // --------------------------------------- Bingo round
    for (const cardObj of bingoCards) { // ------------------------------------------- Check card
      for (let rowIndex = 0; rowIndex < cardObj.card.length; rowIndex++) { // -------- Check row
        const row = cardObj.card[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) { // --------------- Check column
          const number = row[colIndex];
          if (number === currentNumber) { // ----------------------------------------- Number check
            row[colIndex] = "x"; // -------------------------------------------------- Mark the spot
            cardObj.cardScore[`col${colIndex + 1}`]++;
            cardObj.cardScore[`row${rowIndex + 1}`]++;
            if (cardObj.cardScore[`col${colIndex + 1}`] === 5 ||
                cardObj.cardScore[`row${rowIndex + 1}`] === 5) {
              anounceWinner({card: cardObj.card, cardScore: cardObj.cardScore, winningNumber: number}); // -- Bingo!
            }
          }
        }
      }
    }
  }

  function anounceWinner(winner) {
    if (!wasWinnerAnounced) {
      console.log(winner);
      wasWinnerAnounced = true;
      calculateFinalScore(winner);
    }
  }

  function calculateFinalScore(winner) {
    let unmarkedNumbersSum = 0;
    for (const row of winner.card) {
      for (const number of row) {
        if (number !== "x") unmarkedNumbersSum += parseInt(number);
      }
    }
    console.log("Final score is " + (unmarkedNumbersSum * winner.winningNumber))
  }
})


// -------------------- Part 2 (TBD) --------------------