const fs = require('fs');

fs.readFile('./directions.txt', (err, data) => {
  if (err) throw err;

  const str = data.toString();

  let floor = 0;
  let charposition = 1;
  let basement;

  for (char of str) {
    char === '(' ? floor++ : floor--;
    if (!basement) floor === -1 ? basement = charposition : null;
    charposition === 7000 ? null : charposition++;
  }
  console.log("I've seen you followed the right instructions!");
  console.log(`You have reached floor #${floor}`);
  console.log(`You have reached the basement at the #${basement} position`);
})