const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  const str = data.toString();

  const arr = str.split("\r\n");

  outer: for (let num1 of arr) {
    for (let num2 of arr) {
      if (+num1 + +num2 === 2020) {
        console.log(`numbers ${num1} and ${num2}, which multiplied are ${num1 * num2}`);
        break outer;
      }
    }
  }
})