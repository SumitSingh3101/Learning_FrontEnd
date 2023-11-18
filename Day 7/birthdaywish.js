var userDOB = prompt("What is your date of birth? (Format: MM/DD)");

var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();

var dobParts = userDOB.split("/");
var userMonth = parseInt(dobParts[0], 10);
var userDay = parseInt(dobParts[1], 10);

if (userMonth === currentMonth && userDay === currentDay) {
    alert("Happy Birthday! 🎉🎂");
} else {
    alert("Hello there! 🎈");
}
