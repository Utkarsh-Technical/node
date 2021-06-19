const fs = require('fs');

const hello = 'Hello World! ';
console.log(hello);
// Blocking & Synchronous 

    //Read From the File
fs.readFile('txt/input.txt', 'utf-8', (err, data1) => {
    console.log(data1);
});


    // Write into the file
//const textIn = `You Have Overall loaded the same Data \n ${textOut} \n Time: ${Date.now()}`;
//fs.writeFile('txt/output.txt', ` ${textIn}`);
console.log("FILE DONE SUCCESSFULLY");

//Non-Blocking & Asynchronous
fs.readFile('txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log("File Read!!!")