const fs = require('fs');
const filename = "todo2.txt";
const filepath = "C:\\Users\\noahs\\Documents\\Schule\\SYT-NodeJS\\SYT_Huemer_Uebungen\\8.Uebung\\FileSystemBasics\\unterordnertodo2\\";

let content = "- Java üben\n";
content += "- Node.js üben\n";
content += "- Gemüse einkaufen\n";

fs.writeFile(filepath + filename, content, (err) => {
    if(err){
        console.log(err.message);
    }else {
        console.log(`File ${filepath} ${filename} has been saved!`)
    }
});
