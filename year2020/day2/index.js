const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n"); // Array of lines

  let validPass = 0;

  for (let line of arr) {

    const elements = line.split(' '); // Array with range, character and password
    
    const range = elements[0].split('-'); // Array with range's two numbers

    const char = elements[1].slice(0,1); // Password policy's character

    const charCount = elements[2].split(char).length - 1; // How many times char appears in the password

    if (charCount >= range[0] && charCount <= range[1]) validPass++;
  }

  console.log(validPass)
})