const fs = require('fs');
const filename = "todo.txt";
let content = fs.readFileSync(filename, {encoding: "utf8"});


console.log(`Entire content of ${filename} will be read synchronously.
Reading ${filename} finished succesfully.
Meanwhile Node.js app couldn't do anything else.
`);
console.log(content);