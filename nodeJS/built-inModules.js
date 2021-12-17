const fs = require("fs");

let text = fs.readFileSync("Development.txt", "utf-8");
console.log("The content of the file is: ");
console.log(text);
console.log("Creating a new file...");
fs.writeFileSync("Development2.txt", text);

text = fs.readFileSync("Development2.txt", "utf-8");
text = text.replace("SASS", "kya hai ye");
console.log("File after performing some changes: ");
console.log(text);