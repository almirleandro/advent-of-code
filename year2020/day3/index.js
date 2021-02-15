const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n"); // Array of lines

  let num1 = 0;
  let trees1 = 0;

  let num2 = 0;
  let trees2 = 0;

  let num3 = 0;
  let trees3 = 0;

  let num4 = 0;
  let trees4 = 0;

  let num5 = 0;
  let trees5 = 0;

  let toggle = true;


  for (let line of arr) {
    while (num1 > 30) num1 -= 31;
    if (line[num1] === '#') trees1++;
    num1++;

    while (num2 > 30) num2 -= 31;
    if (line[num2] === '#') trees2++;
    num2 = num2 + 3;

    while (num3 > 30) num3 -= 31;
    if (line[num3] === '#') trees3++;
    num3 = num3 + 5;

    while (num4 > 30) num4 -= 31;
    if (line[num4] === '#') trees4++;
    num4 = num4 + 7;

    if (toggle) {
      while (num5 > 30) num5 -= 31;
      if (line[num5] === '#') trees5++;
      num5 = num5 + 1;
    }
  
    toggle = !toggle;
  }

  console.log(`\nRight 1, down 1: ${trees1} trees`);
  console.log(`Right 3, down 1: ${trees2} trees`);
  console.log(`Right 5, down 1: ${trees3} trees`);
  console.log(`Right 7, down 1: ${trees4} trees`);
  console.log(`Right 1, down 2: ${trees5} trees`);
  console.log(`Total number of trees: ${trees1 * trees2 * trees3 * trees4 * trees5}\n`);
})