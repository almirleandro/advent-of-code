// -------------------- Part 1 --------------------
// const fs = require('fs');

// fs.readFile('./input.txt', (err, data) => {
//   if (err) throw err;

//   // Get the input and change it to an array
//   const str = data.toString();
//   const arr = str.split("\r\n");

//   let previousNum = 104;
//   let increaseCount = 0;
//   for (const num of arr) {
//     if (+num > previousNum) increaseCount++;
//     previousNum = +num;
//   }
//   console.log(increaseCount);
// })


// -------------------- Part 2 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n");

  let num1 = null;
  let num2 = null;
  let num3 = null;
  let previousSum = null;
  let increaseCount = 0;
  for (const num of arr) {
    num1 = num2;
    num2 = num3;
    num3 = +num;

    if (num1 && num2 && num3) {
      let currentSum = num1 + num2 + num3;
      if (previousSum && currentSum > previousSum) {
        increaseCount++;
      }
      previousSum = currentSum;
    }
  }
  console.log(increaseCount);
})