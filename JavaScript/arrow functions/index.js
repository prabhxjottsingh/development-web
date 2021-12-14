// function greet(){
//     console.log("Good, Morning");
// }

// greet()

//Arrow Function
// greet = () => {
//     console.log("Good, Morning")
// }

// setTimeout(()=>{
//     console.log("We are inside SetTimeout")
// }, 8000)

// setInterval(()=>{
//     console.log("We are inside setInterval")
// }, 1000);

// greet()

// let sum = (a,b) => {return a+b};
// let half = a => a/2;
//console.log(sum);

// let greet = () => console.log("Hr;;")

let obj1 = {
    greeting: "Good Morning", 
    name: ["Prabhjot", "Harry", "She", "Her", "You"], 
    speak(){
        this.name.forEach((student)=>{
            console.log(this.greeting + " Hey " + student)
        });
    }
} 
obj1.speak();