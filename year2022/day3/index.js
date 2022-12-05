// -------------------- Part 1 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  
  // Get the input and change it to an array
  const str = data.toString();
  const input = str.split("\r\n");

  let sumOfPriorities = 0;

  const getPriority = (char) => {
    if (char == char.toUpperCase()) {
      return char.charCodeAt(0) - 38;
    } else {
      return char.charCodeAt(0) - 96;
    }
  }

  for (const line of input) {
  // for (let index = 0; index < 20; index++) { // Testing with first lines
  // const line = input[index];
    const halfLineLength = line.length / 2;
    let commonChar;

    comparisonLoop: for (let i = 0; i < halfLineLength; i++) {
      for (let j = halfLineLength; j < line.length; j++) {
        if (line[i] === line[j]) {
          commonChar = line[i];
          break comparisonLoop;
        }
      }
    }
    sumOfPriorities += getPriority(commonChar);
  }
  console.log({sumOfPriorities})
})


/** -------------------- Pseudo Code - Part 1 --------------------
 * 
 * - Read first line of input
 * - Divide it in two
 * - Loop through both arrays to find the same character
 * 
 * - How to get priority: String.charCodeAt()
 *    If lowercase: String.charCodeAt(0) - 96
 *    If uppercase: String.charCodeAt(0) - 64
 * - Check if is uppercase: char == char.toUpperCase()
 * 
 * - Store the priority. Add the sum with each line.
 * 
*/


/** -------------------- Pseudo Code - Part 2 --------------------
 * 
 * 
*/