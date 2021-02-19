const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n");

  let list = [];

  for (let seat of arr) {
    //console.log(`\n${seat}`)
    
    let row = 128;
    let minus = 64;

    for (let i = 0; i < 7; i++) {
      if (seat[i] === 'F') row -= minus;
      minus /= 2;
    }
    row -= 1;

    //console.log(`row: ${row}`)



    let column = 8;
    let minus2 = 4;
    
    for (let i = 7; i < 10; i++) {
      if (seat[i] === 'L') column -= minus2;
      minus2 /= 2;
    }
    column -= 1;

    //console.log(`column: ${column}`)

    const id = row * 8 + column;

    list.push(id)
    //console.log(`seat ID: ${id}`)
  }
  let maxNumber = 0;
  list.forEach(number => { maxNumber =  number > maxNumber ? number :  maxNumber; })
  console.log(maxNumber);
})