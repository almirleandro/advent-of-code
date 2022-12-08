// -------------------- Part 1 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  
  // Get the input and change it to an array
  const str = data.toString();
  const input = str.split("\r\n");

  let overlapingCount = 0;

  for (const line of input) {
  // for (let index = 0; index < 20; index++) { // Testing with first lines
  // const line = input[index];

    const [firstSection, secondSection] = line.split(",");
    const [firstSectionStart, firstSectionEnd] = firstSection.split("-");
    const [secondSectionStart, secondSectionEnd] = secondSection.split("-");

    switch (true) {
      case (
        parseInt(firstSectionStart) === parseInt(secondSectionStart) ||
        parseInt(firstSectionEnd) === parseInt(secondSectionEnd)
      ):
        overlapingCount += 1;
        break;

      case (parseInt(firstSectionStart) > parseInt(secondSectionStart)):
        if (parseInt(firstSectionEnd) < parseInt(secondSectionEnd)) overlapingCount += 1;
        break;

      case (parseInt(firstSectionStart) < parseInt(secondSectionStart)):
        if (parseInt(firstSectionEnd) > parseInt(secondSectionEnd)) overlapingCount += 1;
        break;
    }
  }
  console.log(overlapingCount)
})


/** -------------------- Pseudo Code - Part 1 --------------------
 * 
 * - Read first line of input
 * - Separate the pair and get each number
 * 
 * + If the 1st number of the 1st range is equal to the 1st number of the 2nd range
 *   add 1 to the count.
 * + If the 2nd number of the 1st range is equal to the 2nd number of the 2nd range
 *   add 1 to the count.
 * 
 * - Compare the 1st number of the 1st range with the 1st number of the 2nd range
 *   to see which is bigger
 * - Compare the 2nd number of this range with the 2nd number of the other range
 *   to see if it is smaller
 * - If it is, add 1 to the count.
 * 
*/


/** -------------------- Pseudo Code - Part 2 --------------------
 * 
 * 
*/