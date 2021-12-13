// console.log("This is tut")

// setTimeout --> Allows us to run the function once only after a given interval of Time
// clearTimeout --> allows us to run the function repeatedly after a particular interval of time

// function greet(name, byeText){
//     console.log("Hello,Good morning "+ name + byeText );
// }

// setTimeout(greet ,2000, "Hello" , "Prabh")

//setTimeour(greet(), 2000) --> Wrong as it is calling the function in the setTimeout, we only have to write the function name, rather than calling the whole damn funciton
//clearTimeout
//clearInterval
//     setInterval(greet, 1000, "Hello", "fdv");

//console.log(greet());

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time  ;
}

setInterval(displayTime, 1000)
console.log(Date())