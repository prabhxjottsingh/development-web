//Printing the Math Object
let m = Math;
console.log(m);


//Printing the constants from the Math Object
console.log("The value of math.E is: " + Math.E);
console.log("The value of math.PI is: " + Math.PI);
console.log("The value of math.LN2 is: " + Math.LN2);
console.log("The value of math.LN10 is: " + Math.LN10);
console.log("The value of math.LOG2E is: " + Math.LOG2E);
console.log("The value of math.LOG10E is: " + Math.LOG10E);
console.log("The value of math.SQRT2 is: " + Math.SQRT2);
console.log("The value of math.SQRT1_2 is: " + Math.SQRT1_2);
// E: 2.718281828459045
// LN2: 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E: 0.4342944819032518
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951

//Printing hte functions from the MAth Objects
let a = 344.5353454;
let b = 67;

console.log("The value of a and b is " + a  + " and " + b);
console.log("The rounded value of a and b is: " + Math.round(a)  + " and " + Math.round(b));
console.log("3 raise to the power 2 is: " + Math.pow(3,2));
console.log("Square Root of 36 is: " + Math.sqrt(36));

//Ceil and Floor functions
console.log("Ceil of 1.56 is: " + Math.ceil(1.56));    //rounded up to nearest integer
console.log("Floor of 1.56 is: " + Math.floor(1.56));  //rounded down to nearest integer

//Absolutw Function
console.log("Absolute Value of (5.66 - 7.66) is: " + Math.abs(5.66 - 7.66))

//Tirgnometric Functions
console.log(" The value of sin(pi) is: " + Math.sin(Math.PI))

//min and max function, similar as there are in C++

//Random number between (a,b)  maximum value of Random function is 1
console.log("Random number between 4 and 10000 is: " + (20 + (30-20)*Math.random())) //Random number between 20 and 30
 