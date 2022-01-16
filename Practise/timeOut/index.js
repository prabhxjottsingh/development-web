// function greet(){
//     console.log("Good Morning");
// }

// function displayTime(){
//     let time = new Date;
//     console.log(time);
// }

// displayTime()

// setInterval(displayTime, 1000);


// for(let i = 0; i < 30; i++){
//     console.log(i + " ");
// }

// let friends = ["Prabhjot", "Himanshu", "Priyansh"];

// friends.forEach(function f(element){
//     console.log("Hello Friends " + element);
// })

let stats = {
    name: "Prabhjot",
    college: "Chandigarh University"
}

for(let key in stats){
    console.log("My " + `${key}` + " is " + `${stats[key]}`);
}