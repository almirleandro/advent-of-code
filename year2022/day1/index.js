// -------------------- Part 1 --------------------
// const fs = require('fs');

// fs.readFile('./input.txt', (err, data) => {
//   if (err) throw err;
  
//   // Get the input and change it to an array
//   const str = data.toString();
//   const input = str.split("\r\n");
  
//   let greatestNumber = 0;
//   let currentCalories = 0;

//   for (const line of input) {
//   // for (let index = 0; index < 20; index++) { // Testing with first lines
//   // const line = arr[index];                   // Testing

//     if (line !== "") {
//       currentCalories += parseInt(line);
//     } else {
//       if (currentCalories > greatestNumber) greatestNumber = currentCalories;
//       currentCalories = 0;
//     }
//   }
//   console.log(greatestNumber);
// })


// -------------------- Part 2 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  
  // Get the input and change it to an array
  const str = data.toString();
  const input = str.split("\r\n");
  
  let topGreatest1 = 0;
  let topGreatest2 = 0;
  let topGreatest3 = 0;
  let currentCalories = 0;

  for (const line of input) {
  // for (let index = 0; index < 20; index++) { // Testing with first lines
  // const line = arr[index];                   // Testing

    if (line !== "") {
      currentCalories += parseInt(line);
    } else {
      if (currentCalories > topGreatest3) {
        switch (true) {
          case currentCalories > topGreatest1:
            topGreatest3 = topGreatest2;
            topGreatest2 = topGreatest1;
            topGreatest1 = currentCalories;
            break;
        
          case currentCalories > topGreatest2:
            topGreatest3 = topGreatest2;
            topGreatest2 = currentCalories;
            break;
        
          default:
            topGreatest3 = currentCalories;
            break;
        }
      }
      currentCalories = 0;
    }
  }
  console.log(topGreatest1 + topGreatest2 + topGreatest3);
})


/** -------------------- Pseudo Code - Part 1 --------------------
 * 
 * - Create a variable to store the quantity of calories that the elf with the most has
 *   and set it to zero.
 * 
 * - Iterate through each line of the input.
 * 
 * - Add the calories of the current elf.
 * 
 * - If the quantity is greater than the one stored, change it to the new one.
 * 
 * - The solution is the stored number.
 * 
*/


/** -------------------- Pseudo Code - Part 2 --------------------
 * 
 * - Create three variables to store the quantity of calories that the elfs with the most have
 *   and set them to zero.
 * 
 * - Iterate through each line of the input.
 * 
 * - Add the calories of the current elf.
 * 
 * - If the quantity is greater than the smallest of the three stored ones,
 *   calculate which of the three should be substituted by it.
 * 
 * - The solution is the sum of the three stored numbers.
 * 
*/