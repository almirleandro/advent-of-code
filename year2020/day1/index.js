const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n");

  let foundTri = false;
  let foundDuo = false;

  // Loop through the array
  outer: for (let num1 of arr) {

    for (let num2 of arr) {

      // Do this loop if the answers is not known yet
      if (!foundTri) for (let num3 of arr) {
        if (+num1 + +num2 + +num3 === 2020) {
          console.log(`Second answer: numbers are ${num1} and ${num2} and ${num3}, which multiplied are ${num1 * num2 * num3}`);
          foundTri = true;
        }
      }

      // Print the answer when we have it
      if (+num1 + +num2 === 2020) {
        console.log(`First answer: numbers are ${num1} and ${num2}, which multiplied are ${num1 * num2}`);
        foundDuo = true;
      }

      // Break the loop if we have the answers already
      if (foundDuo && foundTri) break outer;
    }
  }
})