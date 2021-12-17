const colors = ["green", "red", "rgb(133,122,200)", "#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    const randomNumber = 2;           //get Random number between 0-3 colors[3]
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = color[randomNumber];
});

function getRandomNumber(){
    return Math.random() * colors.length;
}