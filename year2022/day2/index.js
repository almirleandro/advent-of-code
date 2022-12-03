// -------------------- Part 1 --------------------
const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  
  // Get the input and change it to an array
  const str = data.toString();
  const input = str.split("\r\n");

  let yourTotalScore = 0;

  const calculateWeaponScore = (weapon) => {
    switch (weapon) {
      case "X":
        return 1;
      case "Y":
        return 2;
      case "Z":
        return 3;
    }
  }
  
  const calculateMatchScore = (opponent, you) => {
    switch (you) {
      case "X":
        return opponent === "B" ? 0 :
               opponent === "C" ? 6 :
               3;
      case "Y":
        return opponent === "C" ? 0 :
               opponent === "A" ? 6 :
               3;
      case "Z":
        return opponent === "A" ? 0 :
               opponent === "B" ? 6 :
               3;
    }
  }
  
  const calculateWeaponScore_v2 = (opponent, result) => {
    switch (result) {
      case "X":
        return opponent === "B" ? 1 :
               opponent === "C" ? 2 :
               3;
      case "Y":
        return opponent === "C" ? 3 :
               opponent === "A" ? 1 :
               2;
      case "Z":
        return opponent === "A" ? 2 :
               opponent === "B" ? 3 :
               1;
    }
  }

  const calculateMatchScore_v2 = (result) => {
    switch (result) {
      case "X":
        return 0;
      case "Y":
        return 3;
      case "Z":
        return 6;
    }
  }

  for (const line of input) {
  // for (let index = 0; index < 20; index++) { // Testing with first lines
  // const line = input[index];                 // Testing

    const playersChoices = line.split(" ")
    // yourTotalScore += calculateWeaponScore(playersChoices[1]);
    // yourTotalScore += calculateMatchScore(playersChoices[0], playersChoices[1]);
    yourTotalScore += calculateWeaponScore_v2(playersChoices[0], playersChoices[1]);
    yourTotalScore += calculateMatchScore_v2(playersChoices[1]);
  }

  console.log(yourTotalScore)
})


/** -------------------- Pseudo Code - Part 1 --------------------
 * 
 * - Create variable to store your total score.
 * 
 * - Read each line of the input.
 * 
 * - Create variable to store your game score.
 * 
 * - Identify players choices.
 * 
 * - Create function to calculate match score.
 * 
 * - Create function to calculate weapon score.
 * 
 * - Add both scores to total. It's the final solution.
 * 
*/


/** -------------------- Pseudo Code - Part 2 --------------------
 * 
 * 
*/