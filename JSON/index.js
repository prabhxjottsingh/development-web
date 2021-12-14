let jsonObj = {
    name: "Harry", 
    channel: "CwH", 
    friend: "bhindiLover",
    food: "Rajma Chawal"
}

console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj);

console.log(myJsonStr);

myJsonStr = myJsonStr.replace('Harry', 'Prabhjot');
console.log(myJsonStr);

let newJsonObj = JSON.parse(myJsonStr);

console.log(newJsonObj);