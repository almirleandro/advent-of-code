// -------------------- Part 1 --------------------
// const fs = require('fs');

// fs.readFile('./input.txt', (err, data) => {
//   if (err) throw err;

//   // Get the input and change it to an array
//   const str = data.toString();
//   const arr = str.split("\r\n");

//   let horizontal = 0;
//   let vertical = 0;
//   for (const command of arr) {
//     const commandArr = command.split(" ");
//     switch (commandArr[0]) {
//       case 'down':
//         vertical += +commandArr[1];
//         break;
//       case 'up':
//         vertical -= +commandArr[1];
//         break;
//       case 'forward':
//         horizontal += +commandArr[1];
//         break;
//     }
//   }
//   console.log({horizontal, vertical, result: horizontal*vertical});
// })


// -------------------- Part 2 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n");

  let horizontal = 0;
  let vertical = 0;
  let aim = 0;
  for (const command of arr) {
    const commandArr = command.split(" ");
    switch (commandArr[0]) {
      case 'down':
        // vertical += +commandArr[1];
        aim += +commandArr[1];
        break;
      case 'up':
        // vertical -= +commandArr[1];
        aim -= +commandArr[1];
        break;
      case 'forward':
        horizontal += +commandArr[1];
        vertical += aim * +commandArr[1];
        break;
    }
  }
  console.log({horizontal, vertical, aim, result: horizontal*vertical});
})