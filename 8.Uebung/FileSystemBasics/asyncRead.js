const fs = require('fs');
const filename = "todo.txt";
console.log(`Entire Content of ${filename} will be read asynchronusly.`);

fs.readFile(filename, {encoding: "utf8"}, (err, data) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log(`Reading ${filename} finished successfully.`)
        console.log();
        console.log(`Content of ${filename}:`);
        console.log(data);
    }
});
console.log(`Meanwhile Node.js app can do something else.
...
`)