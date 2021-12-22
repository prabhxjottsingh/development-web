const colors = ["green", "red", "rgb(133,122,200)", "#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();           //get Random number between 0-3 colors[3]
    document.getElementById("color").innerHTML = colors[randomNumber];
    console.log(colors[randomNumber]);
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}