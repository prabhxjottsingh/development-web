console.log("This is functions tutorial for java script");

function greet(name, greetText){
    let name1 = "this is local name";
    console.log(name + " is a good hooman " + greetText);
}

function returnFunc(x){
    return x;
}

let name1 = "Prabhjot";
let name2 = "Shubham";
let name3 = "Her";
let name4 = "Me";

greet(name1, "GoodMorning");
greet(name2, "GoodEveneing");
greet(name3, "GoodNight");
greet(name4, "Will meet soon");

let returnVal = returnFunc(3+4);
console.log(returnVal);

