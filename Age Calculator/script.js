// Simple age calculator

let userAge = prompt("How old are you in years?");

let ageDays = (userAge*365) + (Math.floor(userAge/4));

console.log("Your are " + ageDays + " many days old!");