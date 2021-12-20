// JS 101 Warm Up
 
// 1. Define a variable (name) that is a STRING of your name.
// 2. Console log your name variable and add the string "is cool".
// 3. Create a new variable called daysUntilChristmas. Set this variable equal to 25 minus today's day value (1).
// Console log this variable preceeded by the string: "Days until Christmas". Don't forget the comma!
// const frontTeeth = "my two front teeth";
// 4. Using interpolation, console log the following phrase using the variable frontTeeth:
// "All I want for Christmas is my two front teeth."
// function decemberCountdown(date, today) {
// return date - today;
}
// 5. Using the decemberCountdown function, take the day value of New Year's Eve (31) minus today's day value (1).
// Set this equal to a variable! Console log it to confirm your answer!

// Solution:

const name = "Mohammad Darmussa";
console.log(name, "is cool!");

const daysUntilChristmas = 25 - 12;
console.log(daysUntilChristmas, "Days until Christmas")

const frontTeeth = "my two front teeth";
console.log("All I want for Christmas is", frontTeeth)

function decemberCountdown(date, today) {

     return date - today;
     }
     console.log(decemberCountdown(30, 14));
