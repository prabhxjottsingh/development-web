console.log("This is date and time tutorial")

let dt = new Date(1000);
console.log(dt)

let dt2 = new Date();
console.log(dt2)

let newDate = new Date("2029-12-4")
console.log(newDate);

//let newDate = new Date(year, month, date, hours, minutes, seconds, millisecond)

let newDate1 = new Date(2012, 12, 5, 5, 5, 5);
console.log(newDate1);

let yr = newDate.getFullYear();
console.log("Year is: " + yr);

// getHours, getMonth, getMinutes, getDate

function updateTime() {
    let time = new Date();
    document.getElementById('time').innerHTML = time;
    console.log(time);
}

setInterval(updateTime, 1000)