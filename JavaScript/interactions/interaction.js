//Alert in browser JS

alert("This is a pop-up message which is made using alert function")           //it is a non-return type of function in which we write any message and it pops up on the page



let name = prompt("What is your name ? and btw this is a pop-up message made using prompt function", "Guest"); //this is also a function which pop-ups a function the only difference between this and alert function is
//is that prompt have a return type while the alert dont
console.log(name);



let deletePost = confirm("Do you really want to delet this post ?");
console.log(deletePost);     //thids one return treu or false
if(deletePost)
    console.log("Your post has been deleted sucessfully");
else
    console.log("Your post has not been deleted as per the instrcution given by you");


<------------------------------------------------------------HOMEWORK------------------------------------------------------------>
let age = prompt("Enter your age");
if(age>=18)
    alert("You can enter the Club");
else
    alert("You cannot enter the club, sorry");