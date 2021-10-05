/*

Question 3: File Module
● Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delet
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current working directory to
build directory path. It is acceptable, to have a remove.js script and separate add.js
script.
*/


const fs = require("fs");

const createLogs = () => {
  const target = "./logs";
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  process.chdir(target);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, `Log for file number ${i}`, (err) =>
      err ? console.error(`Error: 'log${i}.txt' creation unsuccessful`) : console.log(`log${i}.txt`)
    );
  }
};


createLogs();