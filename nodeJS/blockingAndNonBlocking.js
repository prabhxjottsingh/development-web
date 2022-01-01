// Synchronous Code OR Blocking Code -> Code which is executed line by line
// -line by line execution

//Asynchronous OR Non-Blocking Code -> Line by line execution is not guranteed
//-CallBacks will fire

const fs = require("fs");
let text = fs.readFileSync("Development.txt", "utf-8", (err,data)=>{
    console.log(data);
});
console.log("This is a message");

console.log(text);