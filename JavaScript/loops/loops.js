console.log("This is tutorial #55")
// let i = 0;
// for(i=0; i<3; i++){
//     console.log(i + " ");
// }

let friends = ["Rohan", "Sanjeev", "Pooja", "Dipti"];
// for (let i = 0; i < friends.length; i++) {
//     console.log("Hello friend " + friends[i]);  
// }

// friends.forEach(function f(element){
//     console.log("Hello, friend (using forEach loop in JS) " + element);
// });

// let i = 0;
// while(i<friends.length){
//     console.log(friends[i]);
//     i++;
//     if(i==2)
//     break;
// }

let employee = {
    name: "Harry",
    salary: 2,
    channel: "CodeWithHArry"
}


//use this loop to iterate over objects in javascript
for(let key in employee){
    console.log("the " +  `${key}` + " of employee is " + `${employee[key]}`);
}

//other arw while and do-while loops simmilar as they are in c++, with not any difference