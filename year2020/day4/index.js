const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;

  // Get the input and change it to an array
  const str = data.toString();
  const arr = str.split("\r\n\r\n"); // Array of passports

  let count = 0;
  let newCount = 0;

  for (let passport of arr) {
    const elements = passport.split(/[\r\n :]+/);

    const check = elements.includes("byr") &&
    elements.includes("eyr") &&
    elements.includes("hgt") &&
    elements.includes("hcl") &&
    elements.includes("ecl") &&
    elements.includes("pid") &&
    elements.includes("iyr");
    
    if (check) count++;


    
    // Challenge #2
    const pair = passport.split(/[\r\n ]+/);
  
    let obj = {};
  
    for (let line of pair) {
      const splitPair = line.split(':');
      obj[splitPair[0]] = splitPair[1];
    }

    if (check) {
      const byr = +obj.byr >= 1920 && +obj.byr <= 2002;
      const iyr = +obj.iyr >= 2010 && +obj.iyr <= 2020;
      const eyr = +obj.eyr >= 2020 && +obj.eyr <= 2030;
      let hgt;
      let hcl = false;
      const ecl = obj.ecl === 'amb' ||
        obj.ecl === 'blu' ||
        obj.ecl === 'brn' ||
        obj.ecl === 'gry' ||
        obj.ecl === 'grn' ||
        obj.ecl === 'hzl' ||
        obj.ecl === 'oth';
      let pid = false;

      // Check hgt
      if (obj.hgt.slice(-2) === "in") {
        hgt = +obj.hgt.slice(0, -2) >= 59 && +obj.hgt.slice(0, -2) <= 76;
      } else if (obj.hgt.slice(-2) === "cm") {
        hgt = +obj.hgt.slice(0, -2) >= 150 && +obj.hgt.slice(0, -2) <= 193;
      }

      // Check hcl
      if (obj.hcl.slice(0,1) === "#" && obj.hcl.slice(1).length === 6) {
        let counter = 0;
        for (let char of obj.hcl.slice(1)) {
          if (
            +char >= 0 || +char >= 9 ||
            char === 'a' ||
            char === 'b' ||
            char === 'c' ||
            char === 'd' ||
            char === 'e' ||
            char === 'f'
          ) counter++;
          if (counter === 6) hcl = true
        }
      }

      // Check pid
      if (+obj.pid.length === 9) {
        let counter = 0;
        for (let num of obj.pid) {
          if (num >= 0 && num <= 9) counter++
        }
        if (counter === 9) pid = true
      }

      // Final check
      if (byr && iyr && eyr && hgt && hcl && ecl && pid) newCount++;      
    }

  }
  
  console.log(`\nValid keys: ${count}`)
  console.log(`New valid keys: ${newCount}\n`)
})