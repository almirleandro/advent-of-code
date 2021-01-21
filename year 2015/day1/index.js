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
  console.log("I've seen you followed the right instructions!")
  console.log(`You have reached floor #${floor}`)
  console.log(`You have reached the basement at the #${basement} position`)


  // const goUp = '(';
  // const goDown = ')';

  // let pos1 = 0;
  // let upCount = 0;
  // while (true) {
  //   let foundPos = str.indexOf(goUp, pos1);
  //   if (foundPos == -1) break;
  //   upCount++;
  //   pos1 = foundPos + 1; // continue the search from the next position
  // }
  // console.log(`Go up ${upCount} floors!`)

  // let pos2 = 0;
  // let downCount = 0;
  // while (true) {
  //   let foundPos = str.indexOf(goDown, pos2);
  //   if (foundPos == -1) break;
  //   downCount++;
  //   pos2 = foundPos + 1; // continue the search from the next position
  // }
  // console.log(`Go down ${downCount} floors!`)

  // console.log(`You have reached floor #${upCount - downCount}`)
})